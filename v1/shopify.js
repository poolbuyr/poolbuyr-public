/**
 * Poolbuyr cart bridge for Shopify — the Tier-2 half of the handoff.
 *
 * Served from the widget CDN and installed with a second script tag, right
 * after the loader:
 *
 *   <script src="https://cdn.poolbuyr.com:444/v1/widget.js" data-key="pk_live_…" async></script>
 *   <script src="https://cdn.poolbuyr.com:444/v1/shopify.js" async></script>
 *
 * Both go in the theme — via the code editor's before-</body>, or a Custom
 * Liquid block, which needs no theme editing at all. A Shopify app would let a
 * merchant switch this on instead of pasting, but an app needs a Partners
 * account and OAuth hosting; until that exists this is the path that works.
 *
 * The version prefix is the cache key, exactly as for the loader: a published
 * bridge is never edited in place, a change is a new /v2/shopify.js. That rule
 * matters more here than for app code, because the file is already sitting in
 * strangers' storefronts.
 *
 * It does the two things a pasted snippet cannot:
 *
 *   1. hands the Shopify cart to the widget, so a pooled order can be rebuilt
 *      from the real variant ids — that is what Tier 1's `/cart/<variant>:<qty>`
 *      permalink keys on, and Shopify is the only platform with a multi-item
 *      cart permalink at all (`backend/lib/cart-adapter.ts`);
 *   2. defines `window.PoolbuyrWidget.buildCart`, which rebuilds the pooled
 *      basket in this shop's own cart and sends the buyer to checkout.
 *
 * Everything here runs on someone else's storefront: every failure is swallowed
 * and the widget simply ends up with less information than it could have had.
 * Nothing in this file may throw into the page.
 */
(function () {
  'use strict';

  var CART_MAX_LINES = 50; // the widget carries 1–50 lines; more is not its contract

  // --- the shop's cart -> the widget ---------------------------------------

  function pushCart() {
    var api = window.PoolbuyrWidget;
    if (!api || !api.__v1) return;
    fetch('/cart.js', { credentials: 'same-origin' })
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (cart) {
        if (!cart || !Array.isArray(cart.items) || !cart.items.length) return;
        api.setCart(cart.items.slice(0, CART_MAX_LINES).map(function (item) {
          return {
            title: item.title,
            productId: String(item.product_id),
            variantId: String(item.variant_id),
            quantity: item.quantity,
            // /cart.js prices are in cents; the widget's unitPrice is in major
            // units, and the wizard asks for a price on any line we leave blank.
            unitPrice: item.price / 100
          };
        }));
      })
      .catch(function () { /* no readable cart: the widget just gets none */ });
  }

  // Shopify fires no cart event that every theme agrees on. Dawn and its forks
  // emit `cart:updated` on document after any cart mutation; older themes built
  // on the ajax cart API emit `cart.requestComplete`. A theme that mutates the
  // cart without firing either leaves the widget holding the cart from page
  // load, which is still a usable basket — just not a fresh one.
  ['cart:updated', 'cart.requestComplete'].forEach(function (name) {
    document.addEventListener(name, pushCart);
  });
  // Back/forward out of the bfcache restores a page whose cart may have moved on.
  window.addEventListener('pageshow', pushCart);

  // The loader assigns a brand-new `window.PoolbuyrWidget` object when it
  // executes, so a hook defined before it arrives would be overwritten by
  // `buildCart: null`. It loads with `async` and announces itself with no event,
  // so poll for it instead of assigning into a void. The cap stops the timer on
  // a page where the loader never showed up (CDN blocked, key removed mid-edit).
  var waited = 0;
  (function whenReady() {
    var api = window.PoolbuyrWidget;
    if (api && api.__v1) {
      api.buildCart = buildCart;
      pushCart();
      return;
    }
    waited += 100;
    if (waited <= 10000) setTimeout(whenReady, 100);
  })();

  // --- the widget's handoff -> the shop's cart -----------------------------

  /**
   * One widget line -> one `/cart/add.js` line. Null when the line cannot be
   * ordered: Shopify keys a cart add on the variant id, and the pool's own
   * adapter has the same rule (`backend/lib/cart-adapter.ts` — one line without
   * a usable id poisons the whole basket, because a partial cart only shows up
   * as a surprise at checkout).
   */
  function toLine(item) {
    var id = Number(item && item.variantId);
    var quantity = Math.floor(Number(item && item.quantity));
    if (!isFinite(id) || id <= 0 || !isFinite(quantity) || quantity < 1) return null;
    return { id: id, quantity: quantity };
  }

  function addAll(items) {
    var lines = (items || []).map(toLine);
    if (!lines.length) return Promise.reject(new Error('empty basket'));
    if (lines.some(function (line) { return !line; })) return Promise.reject(new Error('unmappable line'));
    return fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      credentials: 'same-origin',
      // The whole basket in one call. Shopify answers a bad line (sold out,
      // quantity cap) by failing the request rather than dropping that line,
      // which is the safe outcome: we fall back to the pool page instead of
      // sending the buyer to a checkout that is quietly missing something.
      body: JSON.stringify({ items: lines })
    }).then(function (res) {
      return res.json().catch(function () { return null; }).then(function (body) {
        // A soft failure arrives as HTTP 200 with a `message`/`description`, so
        // `res.ok` alone is not enough to call this a success.
        if (!res.ok || (body && (body.message || body.description))) {
          throw new Error((body && (body.message || body.description)) || ('HTTP ' + res.status));
        }
        return body;
      });
    });
  }

  function buildCart(items, ctx) {
    // The loader sets `handled = true` the instant this returns and NEVER
    // awaits it — an async rejection here is invisible. The buyer would stay on
    // the shop with an unchanged cart and the loader's own fallback (navigate
    // the top window to ctx.url) would never fire, because the loader believes
    // the shop took the click. So this function owns its failure path and
    // navigates to ctx.url itself. It looks redundant next to the loader's
    // fallback; it is the only fallback that actually runs.
    addAll(items).then(
      function () { window.top.location.href = '/checkout'; },
      function () { if (ctx && ctx.url) window.top.location.href = ctx.url; }
    );
  }
})();

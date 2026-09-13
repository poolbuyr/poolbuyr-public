/**
 * Poolbuyr widget loader — v1.
 *
 * The merchant pastes one script tag:
 *
 *   <script src="https://cdn.poolbuyr.com:444/v1/widget.js"
 *           data-key="pk_live_…" data-app="https://poolbuyr.com" async></script>
 *
 * What it does: renders the pooling UI in a sandboxed iframe pointed at
 * `<data-app>/vendor/embed`, and exposes `window.PoolbuyrWidget` so a shop can
 * hand over its cart and a location.
 *
 * Rules this file must never break:
 *  - It runs on someone else's checkout page. Everything is async and every
 *    failure is silent: no thrown errors, no document.write, no layout shift
 *    that could move the merchant's own buttons.
 *  - `data-app` exists because this file is served from the CDN but the app
 *    lives elsewhere — that indirection is what lets one artifact serve
 *    production and a branch preview without editing the snippet.
 *  - The cart never leaves through us: it is posted into the iframe, and the
 *    iframe is what decides what to do with it.
 */
(function () {
  'use strict';

  if (window.PoolbuyrWidget && window.PoolbuyrWidget.__v1) return;

  var script = document.currentScript;
  if (!script) {
    // Fall back to the tag whose src ends in /v1/widget.js (older browsers and
    // any case where currentScript is null).
    var all = document.getElementsByTagName('script');
    for (var i = all.length - 1; i >= 0; i--) {
      if (all[i].src && all[i].src.indexOf('/v1/widget.js') !== -1) { script = all[i]; break; }
    }
  }
  if (!script) return;

  var key = script.getAttribute('data-key') || '';
  if (!key) return;
  // strip a trailing slash so concatenation stays predictable
  var app = (script.getAttribute('data-app') || 'https://poolbuyr.com').replace(/\/+$/, '');
  var demo = script.getAttribute('data-demo') === '1';
  var height = parseInt(script.getAttribute('data-height') || '', 10);
  if (!height || height < 200 || height > 1200) height = 420;

  var frame = null;
  var ready = false;
  var queue = [];

  function embedUrl() {
    var url = app + '/vendor/embed?key=' + encodeURIComponent(key);
    if (demo) url += '&demo=1';
    // A shop usually knows the shopper's postcode by checkout time; passing it
    // here skips the prompt entirely.
    var postal = (script.getAttribute('data-postal') || '').replace(/\D/g, '').slice(0, 4);
    if (postal.length === 4) url += '&postal=' + postal;
    return url;
  }

  function post(message) {
    if (!frame || !frame.contentWindow) return;
    if (!ready) { queue.push(message); return; }
    try {
      frame.contentWindow.postMessage({ source: 'poolbuyr-widget', type: message.type, items: message.items, postal: message.postal }, app);
    } catch (e) { /* the frame is gone; nothing to do */ }
  }

  function mount() {
    if (frame) return;
    var host = document.createElement('div');
    host.setAttribute('data-poolbuyr-widget', '');
    host.style.cssText = 'width:100%;max-width:520px;margin:12px 0;';

    frame = document.createElement('iframe');
    frame.src = embedUrl();
    frame.title = 'Poolbuyr';
    frame.loading = 'lazy';
    frame.setAttribute('allow', 'clipboard-write');
    frame.style.cssText = 'width:100%;height:' + height + 'px;border:1px solid #e5e7eb;border-radius:12px;background:#fff;';
    host.appendChild(frame);

    var position = script.getAttribute('data-position');
    if (position === 'bottom' && document.body) document.body.appendChild(host);
    else if (script.parentNode) script.parentNode.insertBefore(host, script.nextSibling);
    else if (document.body) document.body.appendChild(host);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }

  window.addEventListener('message', function (event) {
    if (event.origin !== app || !event.data || event.data.source !== 'poolbuyr-embed') return;
    if (event.data.type === 'ready') {
      ready = true;
      for (var i = 0; i < queue.length; i++) post(queue[i]);
      queue = [];
    }
    if (event.data.type === 'resize' && frame && typeof event.data.height === 'number') {
      var h = Math.max(200, Math.min(1200, event.data.height));
      frame.style.height = h + 'px';
    }
    // The shopper is joining a pool. Tier 2: if the shop defined a cart hook we
    // let it take over, and ack so the embed cancels its own navigation. With
    // no hook (or a hook that throws) we do the plain thing and send the top
    // window to the pool, which is what the embed would have done itself.
    if (event.data.type === 'handoff') {
      var handled = false;
      var hook = window.PoolbuyrWidget.buildCart;
      if (typeof hook === 'function') {
        try {
          hook(event.data.items || [], { url: event.data.url, poolId: event.data.poolId });
          handled = true;
        } catch (e) {
          handled = false;
        }
      }
      if (handled) {
        if (frame) frame.contentWindow.postMessage({ source: 'poolbuyr-embed', type: 'handoff-taken' }, app);
      } else if (event.data.url) {
        window.top.location.href = event.data.url;
      }
    }
  });

  window.PoolbuyrWidget = {
    __v1: true,
    /** Hand over the shop's cart so a pooled order can be rebuilt. */
    setCart: function (items) {
      if (!Array.isArray(items)) return;
      post({ type: 'cart', items: items });
    },
    /** Optional: the shop already knows the shopper's postcode. */
    setPostal: function (postal) {
      if (typeof postal !== 'string') return;
      post({ type: 'postal', postal: postal.replace(/\D/g, '').slice(0, 4) });
    },
    /** Show the widget on demand (it is mounted eagerly by default). */
    open: function () { mount(); },
    /** Platform-specific cart builder (tier 2). Define it on your own site. */
    buildCart: null
  };
})();

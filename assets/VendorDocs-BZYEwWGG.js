import{u as l,as as c,r as p,j as e,L as i,at as r,au as h}from"./index-CG4iQdzC.js";import{V as x}from"./VendorShell-B60iXJ7G.js";function s({children:t}){return e.jsx("pre",{className:"bg-earth-900 text-earth-100 text-xs rounded-lg p-3 whitespace-pre-wrap break-words my-2",children:e.jsx("code",{children:t})})}const m=`<script src="${r}/v1/widget.js"
        data-key="pk_live_YOUR_KEY"
        data-app="https://poolbuyr.com"
        async><\/script>`,u=`// Your site: build the pooled basket with your own cart code.
//
// The loader owns window.PoolbuyrWidget and replaces the whole object when it
// executes, so a hook defined before it is silently wiped. Wait for the
// loader's own marker first. (Defining this after the tag only *usually*
// works — the loader is async and may still land after you.)
(function defineCartHook() {
  if (!window.PoolbuyrWidget || !window.PoolbuyrWidget.__v1) {
    return setTimeout(defineCartHook, 50);
  }
  window.PoolbuyrWidget.buildCart = async function (items, ctx) {
    for (const line of items) {
      await addToCart(line.productId, line.quantity);
    }
    goToCheckout();
  };
})();`,g=`POST https://your-shop.example/poolbuyr/orders
Authorization: Bearer <the token you issued on your side>
Idempotency-Key: <poolId>

{
  "poolId": "…",
  "poolTitle": "…",
  "vendorDomain": "your-shop.example",
  "buyer": { "userId": "…", "displayName": "…", "email": "…" },
  "delivery": {},
  "lines": [
    { "title": "…", "quantity": 2, "unitPrice": 24.95,
      "productId": "…", "variantId": "…", "sku": "…" }
  ],
  "shipping": { "shippingCost": 6.95, "freeShippingFrom": 75 },
  "returnUrl": "https://poolbuyr.com/pools/…"
}`,b='{ "orderId": "SHOP-10432", "checkoutUrl": "https://your-shop.example/checkout/…" }',y=`<script src="${r}/v1/widget.js"
        data-key="pk_live_YOUR_KEY"
        data-app="https://poolbuyr.com"
        async><\/script>
<script src="${r}/v1/shopify.js" async><\/script>`,f=`<header class="shop-head">
  <span class="logo">SV</span>
  <strong>Studio Vilt</strong>
  <span class="caption">a pretend shop — the green panel is Poolbuyr</span>
</header>

<h1>My shop</h1>
<p>This is your storefront, standing in for the real one. Add something to the
   cart: the shop hands its cart to the widget below, exactly the way your own
   cart code will.</p>

<ul id="products"></ul>

<section id="cart" class="cart" hidden>
  <h2>Your cart (<span id="count">0</span>)</h2>
  <ul id="lines"></ul>
  <p class="total"><span>Shipping</span><span id="shipping">€6.95</span></p>
</section>

<!-- Where the widget goes. The loader mounts itself next to its own script tag. -->
<h2 class="pool-heading">Split the shipping</h2>
<p class="pool-pitch">One parcel, one delivery charge. Pool with neighbours
   nearby and you share it between you.</p>

<!-- One script tag is the whole installation. -->
<script src="${r}/v1/widget.js"
        data-key="${h}"
        data-app="https://poolbuyr.com"
        data-postal="1012"
        async><\/script>

<!--
  data-key is the only thing to change.

  Left as it is, the widget runs against "Studio Vilt" — a real demo shop on
  Poolbuyr whose publishable key is public on purpose, so this pen works the
  moment it opens: the pools are the shop's real ones and Join and Start go to
  real pages. Paste your own publishable key from your dashboard to point it at
  your store instead. A publishable key is public by design (it is in your page
  source either way); everything else stays on your side.

  data-postal is what your shop already knows. Pass it and the widget never has
  to ask the shopper where they live.
-->`,w=`var PRODUCTS = [
  { productId: '1001', variantId: '1001-0', title: 'Wool throw, botanical — 130 × 170 cm', price: 89.00 },
  { productId: '1004', variantId: '1004-0', title: 'Wool socks, undyed — S',              price: 18.50 },
  { productId: '1003', variantId: '1003-0', title: 'Cushion cover, pair — 50 × 50 cm',    price: 45.00 }
];

var cart = {};

document.getElementById('products').innerHTML = PRODUCTS.map(function (p) {
  return '<li><span class="name">' + p.title + '</span>' +
         '<span class="price">€' + p.price.toFixed(2) + '</span>' +
         '<button data-id="' + p.variantId + '">Add</button></li>';
}).join('');

document.getElementById('products').addEventListener('click', function (e) {
  var id = e.target.getAttribute('data-id');
  if (!id) return;
  cart[id] = (cart[id] || 0) + 1;
  render();
});

// Stands in for your cart code. Everything the widget knows about the basket
// comes from this one call, with the product ids your platform actually uses —
// which is what lets a finished pool be rebuilt as a real order on your side.
function render() {
  var lines = PRODUCTS.filter(function (p) { return cart[p.variantId]; })
    .map(function (p) {
      return { productId: p.productId, variantId: p.variantId, title: p.title,
               unitPrice: p.price, quantity: cart[p.variantId] };
    });

  document.getElementById('cart').hidden = lines.length === 0;
  document.getElementById('count').textContent = lines.reduce(function (n, l) { return n + l.quantity; }, 0);
  document.getElementById('lines').innerHTML = lines.map(function (l) {
    return '<li><span>' + l.title + '</span><span>×' + l.quantity + '</span></li>';
  }).join('');
  document.getElementById('shipping').textContent =
    lines.length === 0 ? '€0.00' : '€6.95 — split between everyone who joins';

  // The loader is async: on the very first render window.PoolbuyrWidget may not
  // exist yet, and the next call — the one after an Add — will be. Cheap to
  // guard, and the alternative is silently dropping the cart that is on screen.
  if (window.PoolbuyrWidget) window.PoolbuyrWidget.setCart(lines);
}

render();`,j=`body { font-family: system-ui, sans-serif; margin: 0 auto; padding: 20px 16px 40px; max-width: 560px; color: #1f2937; }
.shop-head { display: flex; align-items: center; gap: 8px; padding-bottom: 12px; border-bottom: 1px solid #e5e7eb; }
.logo { display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 8px; background: #6366f1; color: #fff; font-size: 11px; font-weight: 700; }
.caption { margin-left: auto; font-size: 11px; color: #6b7280; }
h1 { font-size: 22px; margin: 20px 0 8px; }
p { font-size: 13px; color: #4b5563; margin: 0 0 16px; }
ul { list-style: none; margin: 0; padding: 0; }
#products li { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-top: 1px solid #f3f4f6; }
.name { flex: 1; font-size: 13px; }
.price { font-size: 13px; color: #4b5563; }
button { padding: 6px 12px; border: 0; border-radius: 8px; background: #1f2937; color: #fff; font-size: 12px; font-weight: 600; cursor: pointer; }
.cart { margin-top: 16px; padding: 12px 14px; border: 1px solid #e5e7eb; border-radius: 12px; background: #fff; }
.cart h2 { font-size: 13px; margin: 0 0 8px; }
.cart li, .total { display: flex; justify-content: space-between; gap: 12px; font-size: 12px; color: #4b5563; padding: 2px 0; }
.total { margin: 8px 0 0; padding-top: 8px; border-top: 1px solid #f3f4f6; font-weight: 600; color: #1f2937; }
/* The widget sits in our panel, not the shop's, so it fills the width it is
   given instead of parking at the loader's 520px default. */
.pool-heading { font-size: 15px; margin: 28px 0 4px; }
.pool-pitch { font-size: 12px; color: #6b7280; margin: 0 0 8px; }
[data-poolbuyr-widget] { box-sizing: border-box; max-width: 100% !important; padding: 12px; border: 2px solid #10b981; border-radius: 16px; background: #ecfdf5; }`,v=JSON.stringify({title:"Poolbuyr widget — try it",html:f,css:j,js:w,editors:"111"});function T(){const{t}=l(),{hash:n}=c();p.useEffect(()=>{var o;n&&((o=document.getElementById(n.slice(1)))==null||o.scrollIntoView({behavior:"smooth",block:"start"}))},[n]);const d=[t("vendor.dashboard.handoffTier0"),t("vendor.dashboard.handoffTier1"),t("vendor.dashboard.handoffTier2"),t("vendor.dashboard.handoffTier3")];return e.jsx(x,{wide:!0,nav:!0,children:e.jsxs("article",{className:"bg-white border border-earth-200 rounded-xl p-6",children:[e.jsx("h1",{className:"text-xl font-bold text-gray-900 mb-2",children:t("vendor.docs.title")}),e.jsx("p",{className:"text-sm text-gray-600 mb-6",children:t("vendor.docs.intro")}),e.jsxs("section",{className:"mb-6 rounded-xl border-2 border-brand-500 bg-brand-50/60 p-4",children:[e.jsx("h2",{className:"text-base font-bold text-gray-900 mb-1",children:t("vendor.docs.tryTitle")}),e.jsx("p",{className:"text-sm text-gray-700 mb-4",children:t("vendor.docs.tryBody")}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(i,{to:"/vendor/demo",className:"px-5 py-2.5 bg-brand-600 text-white rounded-lg text-sm font-semibold hover:bg-brand-700 transition-colors",children:t("vendor.dashboard.demo")}),e.jsxs("form",{action:"https://codepen.io/pen/define",method:"post",target:"_blank",rel:"noopener noreferrer",children:[e.jsx("input",{type:"hidden",name:"data",value:v}),e.jsx("button",{type:"submit",className:"px-5 py-2.5 bg-white text-brand-700 border-2 border-brand-300 rounded-lg text-sm font-semibold hover:bg-brand-50 transition-colors",children:t("vendor.docs.codepenCta")})]})]}),e.jsx("p",{className:"mt-3 text-xs text-gray-600",children:t("vendor.docs.codepenBody")})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.step1Title")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.step1Body")}),e.jsx(s,{children:m})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.pluginsTitle")}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:t("vendor.docs.pluginsBody")}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{id:"woocommerce",className:"border border-earth-200 rounded-lg p-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-800",children:"WooCommerce"}),e.jsx("a",{href:"/plugins/poolbuyr-woocommerce.zip",download:!0,className:"px-3 py-1.5 bg-brand-600 text-white rounded-lg text-xs font-medium hover:bg-brand-700 transition-colors",children:t("vendor.docs.pluginDownload")})]}),e.jsx("p",{className:"mt-2 text-xs text-gray-600",children:t("vendor.docs.pluginWoo")})]}),e.jsxs("li",{id:"shopify",className:"border border-earth-200 rounded-lg p-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-800",children:"Shopify"}),e.jsx("span",{className:"text-xs text-gray-500",children:t("vendor.docs.pluginNoDownload")})]}),e.jsx("p",{className:"mt-2 text-xs text-gray-600",children:t("vendor.docs.pluginShopify")}),e.jsx(s,{children:y})]}),e.jsxs("li",{id:"magento",className:"border border-earth-200 rounded-lg p-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-800",children:"Magento 2"}),e.jsx("a",{href:"/plugins/poolbuyr-magento2.zip",download:!0,className:"px-3 py-1.5 bg-brand-600 text-white rounded-lg text-xs font-medium hover:bg-brand-700 transition-colors",children:t("vendor.docs.pluginDownload")})]}),e.jsx("p",{className:"mt-2 text-xs text-gray-600",children:t("vendor.docs.pluginMagento")})]})]}),e.jsx("p",{className:"mt-3 text-xs text-gray-500",children:t("vendor.docs.pluginsNote")})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.step2Title")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.step2Body")}),e.jsx(s,{children:`window.PoolbuyrWidget.setCart([
  { productId: '12345', variantId: '67890', title: 'Wool blanket', unitPrice: 24.95, quantity: 2 },
]);`})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.step3Title")}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:t("vendor.docs.step3Body")}),e.jsx("h3",{className:"text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2",children:t("vendor.docs.tierTitle")}),e.jsx("ol",{className:"space-y-2",children:d.map((o,a)=>e.jsxs("li",{className:"flex gap-3 text-sm text-gray-600",children:[e.jsx("span",{className:"shrink-0 w-5 h-5 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold flex items-center justify-center",children:a}),e.jsx("span",{children:o})]},a))})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.hookTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.hookBody")}),e.jsx(s,{children:u})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.endpointTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.endpointBody")}),e.jsx(s,{children:g}),e.jsx(s,{children:b})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.emailTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.emailBody")})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.keysTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.keysBody")})]}),e.jsx(i,{to:"/vendor/dashboard",className:"text-sm text-brand-600 hover:text-brand-700 font-medium",children:t("vendor.docs.backToDashboard")})]})})}export{T as VendorDocsPage};

import{u as h,as as x,r as p,j as e,at as r,L as d,au as u}from"./index-CNr5gKSj.js";import{V as y}from"./VendorShell-1Bxjgut-.js";function s({children:t}){return e.jsx("pre",{className:"bg-earth-900 text-earth-100 text-xs rounded-lg p-3 whitespace-pre-wrap break-words my-2",children:e.jsx("code",{children:t})})}const b=`<script src="${r}/v1/widget.js"
        data-key="pk_live_YOUR_KEY"
        data-app="https://poolbuyr.com"
        async><\/script>`,g=`// Your site: build the pooled basket with your own cart code.
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
})();`,f=`POST https://your-shop.example/poolbuyr/orders
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
}`,j='{ "orderId": "SHOP-10432", "checkoutUrl": "https://your-shop.example/checkout/…" }',N=`<script src="${r}/v1/widget.js"
        data-key="pk_live_YOUR_KEY"
        data-app="https://poolbuyr.com"
        async><\/script>
<script src="${r}/v1/shopify.js" async><\/script>`,i=`<h1>My shop</h1>
<p>A pretend storefront, wired to a real demo shop. Press the button — the shop
   hands its cart to the widget below.</p>
<button id="add">Add the wool throw, 130 × 170 cm — €89.00</button>

<!-- One script tag is the whole installation. -->
<script src="${r}/v1/widget.js"
        data-key="${u}"
        data-app="https://poolbuyr.com"
        data-postal="1012"
        async><\/script>

<!--
  data-key is the only thing to change.

  Left as it is, the widget runs against "Studio Vilt" — a real demo shop on
  Poolbuyr whose publishable key is public on purpose, so this pen works the
  moment it opens. Paste your own publishable key from your dashboard to point
  it at your store instead. A publishable key is public by design (it is in
  your page source either way); everything else stays on your side.
-->`,l=`// Stands in for your cart code: run this whenever the cart changes, with the
// product ids your platform actually uses.
document.getElementById('add').addEventListener('click', function () {
  window.PoolbuyrWidget.setCart([
    { productId: '1001', variantId: '1001-0', title: 'Wool throw, botanical', unitPrice: 89.00, quantity: 1 },
  ]);
});`,c=`body { font-family: system-ui, sans-serif; padding: 16px; max-width: 480px; }
button { padding: 8px 14px; border: 0; border-radius: 8px; background: #4f46e5; color: #fff; font-weight: 600; cursor: pointer; }`,w=`<style>
${c.split(`
`).map(t=>"  "+t).join(`
`)}
</style>

${i}

<script>
${l.split(`
`).map(t=>"  "+t).join(`
`)}
<\/script>`,v=JSON.stringify({title:"Poolbuyr widget — try it",html:i,css:c,js:l,editors:"111"});function E(){const{t}=h(),{hash:a}=x();p.useEffect(()=>{var o;a&&((o=document.getElementById(a.slice(1)))==null||o.scrollIntoView({behavior:"smooth",block:"start"}))},[a]);const m=[t("vendor.dashboard.handoffTier0"),t("vendor.dashboard.handoffTier1"),t("vendor.dashboard.handoffTier2"),t("vendor.dashboard.handoffTier3")];return e.jsx(y,{wide:!0,nav:!0,children:e.jsxs("article",{className:"bg-white border border-earth-200 rounded-xl p-6",children:[e.jsx("h1",{className:"text-xl font-bold text-gray-900 mb-2",children:t("vendor.docs.title")}),e.jsx("p",{className:"text-sm text-gray-600 mb-6",children:t("vendor.docs.intro")}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.step1Title")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.step1Body")}),e.jsx(s,{children:b})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.pluginsTitle")}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:t("vendor.docs.pluginsBody")}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{id:"woocommerce",className:"border border-earth-200 rounded-lg p-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-800",children:"WooCommerce"}),e.jsx("a",{href:"/plugins/poolbuyr-woocommerce.zip",download:!0,className:"px-3 py-1.5 bg-brand-600 text-white rounded-lg text-xs font-medium hover:bg-brand-700 transition-colors",children:t("vendor.docs.pluginDownload")})]}),e.jsx("p",{className:"mt-2 text-xs text-gray-600",children:t("vendor.docs.pluginWoo")})]}),e.jsxs("li",{id:"shopify",className:"border border-earth-200 rounded-lg p-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-800",children:"Shopify"}),e.jsx("span",{className:"text-xs text-gray-500",children:t("vendor.docs.pluginNoDownload")})]}),e.jsx("p",{className:"mt-2 text-xs text-gray-600",children:t("vendor.docs.pluginShopify")}),e.jsx(s,{children:N})]}),e.jsxs("li",{id:"magento",className:"border border-earth-200 rounded-lg p-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-800",children:"Magento 2"}),e.jsx("a",{href:"/plugins/poolbuyr-magento2.zip",download:!0,className:"px-3 py-1.5 bg-brand-600 text-white rounded-lg text-xs font-medium hover:bg-brand-700 transition-colors",children:t("vendor.docs.pluginDownload")})]}),e.jsx("p",{className:"mt-2 text-xs text-gray-600",children:t("vendor.docs.pluginMagento")})]})]}),e.jsx("p",{className:"mt-3 text-xs text-gray-500",children:t("vendor.docs.pluginsNote")})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.step2Title")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.step2Body")}),e.jsx(s,{children:`window.PoolbuyrWidget.setCart([
  { productId: '12345', variantId: '67890', title: 'Wool blanket', unitPrice: 24.95, quantity: 2 },
]);`})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.step3Title")}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:t("vendor.docs.step3Body")}),e.jsx("h3",{className:"text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2",children:t("vendor.docs.tierTitle")}),e.jsx("ol",{className:"space-y-2",children:m.map((o,n)=>e.jsxs("li",{className:"flex gap-3 text-sm text-gray-600",children:[e.jsx("span",{className:"shrink-0 w-5 h-5 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold flex items-center justify-center",children:n}),e.jsx("span",{children:o})]},n))})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.hookTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.hookBody")}),e.jsx(s,{children:g})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.endpointTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.endpointBody")}),e.jsx(s,{children:f}),e.jsx(s,{children:j})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.emailTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.emailBody")})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.tryTitle")}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:t("vendor.docs.tryBody")}),e.jsx(d,{to:"/vendor/demo",className:"inline-block px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors",children:t("vendor.dashboard.demo")}),e.jsx("p",{className:"mt-4 text-sm text-gray-600 mb-2",children:t("vendor.docs.codepenBody")}),e.jsxs("form",{action:"https://codepen.io/pen/define",method:"post",target:"_blank",rel:"noopener noreferrer",children:[e.jsx("input",{type:"hidden",name:"data",value:v}),e.jsx("button",{type:"submit",className:"px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors",children:t("vendor.docs.codepenCta")})]}),e.jsx("p",{className:"mt-2 text-xs text-gray-500",children:t("vendor.docs.codepenFallback")}),e.jsx(s,{children:w})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.keysTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.keysBody")})]}),e.jsx(d,{to:"/vendor/dashboard",className:"text-sm text-brand-600 hover:text-brand-700 font-medium",children:t("vendor.docs.backToDashboard")})]})})}export{E as VendorDocsPage};

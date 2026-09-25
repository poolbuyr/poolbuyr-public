import{u as l,as as c,r as m,j as e,L as n,at as d}from"./index-CO5DDLVL.js";import{V as x}from"./VendorShell-Bufqxw4Y.js";import{C as h}from"./CodePenButton-C2RSYgBh.js";function t({children:s}){return e.jsx("pre",{className:"bg-earth-900 text-earth-100 text-xs rounded-lg p-3 whitespace-pre-wrap break-words my-2",children:e.jsx("code",{children:s})})}const p=`<script src="${d}/v1/widget.js"
        data-key="pk_live_YOUR_KEY"
        data-app="https://poolbuyr.com"
        async><\/script>`,b=`// Your site: build the pooled basket with your own cart code.
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
})();`,y=`POST https://your-shop.example/poolbuyr/orders
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
}`,u='{ "orderId": "SHOP-10432", "checkoutUrl": "https://your-shop.example/checkout/…" }',g=`<script src="${d}/v1/widget.js"
        data-key="pk_live_YOUR_KEY"
        data-app="https://poolbuyr.com"
        async><\/script>
<script src="${d}/v1/shopify.js" async><\/script>`;function v(){const{t:s}=l(),{hash:r}=c();m.useEffect(()=>{var o;r&&((o=document.getElementById(r.slice(1)))==null||o.scrollIntoView({behavior:"smooth",block:"start"}))},[r]);const i=[s("vendor.dashboard.handoffTier0"),s("vendor.dashboard.handoffTier1"),s("vendor.dashboard.handoffTier2"),s("vendor.dashboard.handoffTier3")];return e.jsx(x,{wide:!0,nav:!0,children:e.jsxs("article",{className:"bg-white border border-earth-200 rounded-xl p-6",children:[e.jsx("h1",{className:"text-xl font-bold text-gray-900 mb-2",children:s("vendor.docs.title")}),e.jsx("p",{className:"text-sm text-gray-600 mb-6",children:s("vendor.docs.intro")}),e.jsxs("section",{className:"mb-6 rounded-xl border-2 border-brand-500 bg-brand-50/60 p-4",children:[e.jsx("h2",{className:"text-base font-bold text-gray-900 mb-1",children:s("vendor.docs.tryTitle")}),e.jsx("p",{className:"text-sm text-gray-700 mb-4",children:s("vendor.docs.tryBody")}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(n,{to:"/vendor/demo",className:"px-5 py-2.5 bg-brand-600 text-white rounded-lg text-sm font-semibold hover:bg-brand-700 transition-colors",children:s("vendor.dashboard.demo")}),e.jsx(h,{className:"px-5 py-2.5 bg-white text-brand-700 border-2 border-brand-300 rounded-lg text-sm font-semibold hover:bg-brand-50 transition-colors"})]}),e.jsx("p",{className:"mt-3 text-xs text-gray-600",children:s("vendor.docs.codepenBody")})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:s("vendor.docs.step1Title")}),e.jsx("p",{className:"text-sm text-gray-600",children:s("vendor.docs.step1Body")}),e.jsx(t,{children:p})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:s("vendor.docs.pluginsTitle")}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:s("vendor.docs.pluginsBody")}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{id:"woocommerce",className:"border border-earth-200 rounded-lg p-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-800",children:"WooCommerce"}),e.jsx("a",{href:"/plugins/poolbuyr-woocommerce.zip",download:!0,className:"px-3 py-1.5 bg-brand-600 text-white rounded-lg text-xs font-medium hover:bg-brand-700 transition-colors",children:s("vendor.docs.pluginDownload")})]}),e.jsx("p",{className:"mt-2 text-xs text-gray-600",children:s("vendor.docs.pluginWoo")})]}),e.jsxs("li",{id:"shopify",className:"border border-earth-200 rounded-lg p-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-800",children:"Shopify"}),e.jsx("span",{className:"text-xs text-gray-500",children:s("vendor.docs.pluginNoDownload")})]}),e.jsx("p",{className:"mt-2 text-xs text-gray-600",children:s("vendor.docs.pluginShopify")}),e.jsx(t,{children:g})]}),e.jsxs("li",{id:"magento",className:"border border-earth-200 rounded-lg p-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-800",children:"Magento 2"}),e.jsx("a",{href:"/plugins/poolbuyr-magento2.zip",download:!0,className:"px-3 py-1.5 bg-brand-600 text-white rounded-lg text-xs font-medium hover:bg-brand-700 transition-colors",children:s("vendor.docs.pluginDownload")})]}),e.jsx("p",{className:"mt-2 text-xs text-gray-600",children:s("vendor.docs.pluginMagento")})]})]}),e.jsx("p",{className:"mt-3 text-xs text-gray-500",children:s("vendor.docs.pluginsNote")})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:s("vendor.docs.step2Title")}),e.jsx("p",{className:"text-sm text-gray-600",children:s("vendor.docs.step2Body")}),e.jsx(t,{children:`window.PoolbuyrWidget.setCart([
  { productId: '12345', variantId: '67890', title: 'Wool blanket', unitPrice: 24.95, quantity: 2 },
]);`})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:s("vendor.docs.step3Title")}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:s("vendor.docs.step3Body")}),e.jsx("h3",{className:"text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2",children:s("vendor.docs.tierTitle")}),e.jsx("ol",{className:"space-y-2",children:i.map((o,a)=>e.jsxs("li",{className:"flex gap-3 text-sm text-gray-600",children:[e.jsx("span",{className:"shrink-0 w-5 h-5 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold flex items-center justify-center",children:a}),e.jsx("span",{children:o})]},a))})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:s("vendor.docs.hookTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:s("vendor.docs.hookBody")}),e.jsx(t,{children:b})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:s("vendor.docs.endpointTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:s("vendor.docs.endpointBody")}),e.jsx(t,{children:y}),e.jsx(t,{children:u})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:s("vendor.docs.emailTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:s("vendor.docs.emailBody")})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:s("vendor.docs.keysTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:s("vendor.docs.keysBody")})]}),e.jsx(n,{to:"/vendor/dashboard",className:"text-sm text-brand-600 hover:text-brand-700 font-medium",children:s("vendor.docs.backToDashboard")})]})})}export{v as VendorDocsPage};

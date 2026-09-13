import{u as a,j as e,as as n,L as i}from"./index-BgxpPEGl.js";import{V as l}from"./VendorShell-DiYB9iz6.js";function t({children:s}){return e.jsx("pre",{className:"bg-earth-900 text-earth-100 text-xs rounded-lg p-3 overflow-x-auto my-2",children:e.jsx("code",{children:s})})}const c=`<script src="${n}/v1/widget.js"
        data-key="pk_live_YOUR_KEY"
        data-app="https://poolbuyr.com"
        async><\/script>`,m=`// Your site: build the pooled basket with your own cart code.
window.PoolbuyrWidget = window.PoolbuyrWidget || {};
window.PoolbuyrWidget.buildCart = async function (items) {
  for (const line of items) {
    await addToCart(line.productId, line.quantity);
  }
  goToCheckout();
};`,x=`POST https://your-shop.example/poolbuyr/orders
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
}`,h='{ "orderId": "SHOP-10432", "checkoutUrl": "https://your-shop.example/checkout/…" }';function y(){const{t:s}=a(),r=[s("vendor.dashboard.handoffTier0"),s("vendor.dashboard.handoffTier1"),s("vendor.dashboard.handoffTier2"),s("vendor.dashboard.handoffTier3")];return e.jsx(l,{wide:!0,children:e.jsxs("article",{className:"bg-white border border-earth-200 rounded-xl p-6",children:[e.jsx("h1",{className:"text-xl font-bold text-gray-900 mb-2",children:s("vendor.docs.title")}),e.jsx("p",{className:"text-sm text-gray-600 mb-6",children:s("vendor.docs.intro")}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:s("vendor.docs.step1Title")}),e.jsx("p",{className:"text-sm text-gray-600",children:s("vendor.docs.step1Body")}),e.jsx(t,{children:c})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:s("vendor.docs.step2Title")}),e.jsx("p",{className:"text-sm text-gray-600",children:s("vendor.docs.step2Body")}),e.jsx(t,{children:`window.PoolbuyrWidget.setCart([
  { productId: '12345', variantId: '67890', title: 'Wool blanket', unitPrice: 24.95, quantity: 2 },
]);`})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:s("vendor.docs.step3Title")}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:s("vendor.docs.step3Body")}),e.jsx("h3",{className:"text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2",children:s("vendor.docs.tierTitle")}),e.jsx("ol",{className:"space-y-2",children:r.map((d,o)=>e.jsxs("li",{className:"flex gap-3 text-sm text-gray-600",children:[e.jsx("span",{className:"shrink-0 w-5 h-5 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold flex items-center justify-center",children:o}),e.jsx("span",{children:d})]},o))})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:s("vendor.docs.hookTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:s("vendor.docs.hookBody")}),e.jsx(t,{children:m})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:s("vendor.docs.endpointTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:s("vendor.docs.endpointBody")}),e.jsx(t,{children:x}),e.jsx(t,{children:h})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:s("vendor.docs.emailTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:s("vendor.docs.emailBody")})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:s("vendor.docs.keysTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:s("vendor.docs.keysBody")})]}),e.jsx(i,{to:"/vendor/dashboard",className:"text-sm text-brand-600 hover:text-brand-700 font-medium",children:s("vendor.docs.backToDashboard")})]})})}export{y as VendorDocsPage};

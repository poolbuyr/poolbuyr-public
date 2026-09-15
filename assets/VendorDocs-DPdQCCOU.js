import{u as i,j as e,as as r,L as c}from"./index-YtYyoIWY.js";import{V as l}from"./VendorShell-CI_AAmE1.js";function s({children:t}){return e.jsx("pre",{className:"bg-earth-900 text-earth-100 text-xs rounded-lg p-3 overflow-x-auto my-2",children:e.jsx("code",{children:t})})}const m=`<script src="${r}/v1/widget.js"
        data-key="pk_live_YOUR_KEY"
        data-app="https://poolbuyr.com"
        async><\/script>`,h=`// Your site: build the pooled basket with your own cart code.
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
}`,p='{ "orderId": "SHOP-10432", "checkoutUrl": "https://your-shop.example/checkout/…" }',d=`<h1>My shop</h1>
<p>A pretend storefront. Press the button — the shop hands its cart to the widget.</p>
<button id="add">Add the wool throw — €24.95</button>

<!-- One script tag is the whole installation. -->
<script src="${r}/v1/widget.js"
        data-key="pk_test_demo_shop"
        data-app="https://poolbuyr.com"
        data-demo="1"
        data-postal="1012"
        async><\/script>`,b=`// Stands in for your cart code: run this whenever the cart changes, with the
// product ids your platform actually uses.
document.getElementById('add').addEventListener('click', function () {
  window.PoolbuyrWidget.setCart([
    { productId: '1001', variantId: '2001', title: 'Wool throw — undyed', unitPrice: 24.95, quantity: 1 },
  ]);
});`,u=`body { font-family: system-ui, sans-serif; padding: 16px; max-width: 480px; }
button { padding: 8px 14px; border: 0; border-radius: 8px; background: #4f46e5; color: #fff; font-weight: 600; cursor: pointer; }`,y=JSON.stringify({title:"Poolbuyr widget — try it",html:d,js:b,css:u,editors:"110"});function j(){const{t}=i(),n=[t("vendor.dashboard.handoffTier0"),t("vendor.dashboard.handoffTier1"),t("vendor.dashboard.handoffTier2"),t("vendor.dashboard.handoffTier3")];return e.jsx(l,{wide:!0,children:e.jsxs("article",{className:"bg-white border border-earth-200 rounded-xl p-6",children:[e.jsx("h1",{className:"text-xl font-bold text-gray-900 mb-2",children:t("vendor.docs.title")}),e.jsx("p",{className:"text-sm text-gray-600 mb-6",children:t("vendor.docs.intro")}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.step1Title")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.step1Body")}),e.jsx(s,{children:m})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.step2Title")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.step2Body")}),e.jsx(s,{children:`window.PoolbuyrWidget.setCart([
  { productId: '12345', variantId: '67890', title: 'Wool blanket', unitPrice: 24.95, quantity: 2 },
]);`})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.step3Title")}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:t("vendor.docs.step3Body")}),e.jsx("h3",{className:"text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2",children:t("vendor.docs.tierTitle")}),e.jsx("ol",{className:"space-y-2",children:n.map((a,o)=>e.jsxs("li",{className:"flex gap-3 text-sm text-gray-600",children:[e.jsx("span",{className:"shrink-0 w-5 h-5 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold flex items-center justify-center",children:o}),e.jsx("span",{children:a})]},o))})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.hookTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.hookBody")}),e.jsx(s,{children:h})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.endpointTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.endpointBody")}),e.jsx(s,{children:x}),e.jsx(s,{children:p})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.emailTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.emailBody")})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.codepenTitle")}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:t("vendor.docs.codepenBody")}),e.jsxs("form",{action:"https://codepen.io/pen/define",method:"post",target:"_blank",rel:"noopener noreferrer",children:[e.jsx("input",{type:"hidden",name:"data",value:y}),e.jsx("button",{type:"submit",className:"px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors",children:t("vendor.docs.codepenCta")})]}),e.jsxs("p",{className:"mt-2 text-xs text-gray-500",children:[t("vendor.docs.codepenFallback")," ",e.jsx("a",{href:"https://codepen.io/pen/",target:"_blank",rel:"noopener noreferrer",className:"text-brand-600 hover:text-brand-700 font-medium",children:t("vendor.docs.codepenFallbackLink")})]}),e.jsx(s,{children:d})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-sm font-semibold text-gray-800 mb-1",children:t("vendor.docs.keysTitle")}),e.jsx("p",{className:"text-sm text-gray-600",children:t("vendor.docs.keysBody")})]}),e.jsx(c,{to:"/vendor/dashboard",className:"text-sm text-brand-600 hover:text-brand-700 font-medium",children:t("vendor.docs.backToDashboard")})]})})}export{j as VendorDocsPage};

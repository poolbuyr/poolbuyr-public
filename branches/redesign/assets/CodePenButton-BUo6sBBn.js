import{u as a,j as t,at as r,au as s}from"./index-BF4vn8MZ.js";const p=`<header class="shop-head">
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
        data-key="${s}"
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
-->`,d=`var PRODUCTS = [
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

render();`,l=`body { font-family: system-ui, sans-serif; margin: 0 auto; padding: 20px 16px 40px; max-width: 560px; color: #1f2937; }
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
[data-poolbuyr-widget] { box-sizing: border-box; max-width: 100% !important; padding: 12px; border: 2px solid #10b981; border-radius: 16px; background: #ecfdf5; }`,c=JSON.stringify({title:"Poolbuyr widget — try it",html:p,css:l,js:d,editors:"111"});function u({className:e,labelKey:o="vendor.docs.codepenCta",onClick:n}){const{t:i}=a();return t.jsxs("form",{action:"https://codepen.io/pen/define",method:"post",target:"_blank",rel:"noopener noreferrer",className:"flex",children:[t.jsx("input",{type:"hidden",name:"data",value:c}),t.jsx("button",{type:"submit",onClick:n,className:`${e} w-full`,children:i(o)})]})}export{u as C};

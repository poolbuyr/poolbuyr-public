import{e as c,u as o,j as e}from"./index-D50aUvGT.js";import{f as n}from"./money-RUbWqbRC.js";import{p as l}from"./savings-D2cpnj3p.js";/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],u=c("chevron-down",p);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],y=c("x",d);function f({pool:a,className:i=""}){const{t:r}=o(),s=l(a);if(!s)return null;const t=a==null?void 0:a.currency;return e.jsxs("div",{className:`flex flex-wrap items-baseline gap-x-2 gap-y-1 ${i}`,children:[e.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-wide text-earth-500",children:r("deal.deliveryLabel")}),e.jsx("span",{className:"price-hero price-was text-base",children:n(s.shippingTotal,t)}),e.jsx("span",{"aria-hidden":"true",className:"text-earth-400",children:"→"}),e.jsx("span",{className:"price-hero text-xl text-gray-900",children:n(s.shippingYours,t)}),e.jsx("span",{className:"badge-save ml-auto text-sm px-2 py-0.5",children:r("deal.youSave",{amount:n(s.youSave,t)})})]})}export{u as C,f as D,y as X};

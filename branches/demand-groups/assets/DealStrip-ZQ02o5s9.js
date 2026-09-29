import{e as c,u as o,j as e}from"./index-qZ_uFNrp.js";import{f as r}from"./money-RUbWqbRC.js";import{p as l}from"./savings-CpnTWsfP.js";/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],u=c("chevron-down",d);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],f=c("x",p);function y({pool:a,className:i=""}){const{t}=o(),s=l(a);if(!s)return null;const n=a==null?void 0:a.currency;return e.jsxs("div",{className:`flex flex-wrap items-baseline gap-x-2 gap-y-1 ${i}`,children:[e.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-wide text-earth-500",children:t("deal.deliveryLabel")}),e.jsx("span",{className:"price-hero price-was text-base",children:r(s.shippingTotal,n)}),e.jsx("span",{"aria-hidden":"true",className:"text-earth-400",children:"→"}),e.jsx("span",{className:"price-hero text-xl text-gray-900",children:r(s.shippingYours,n)}),e.jsx("span",{className:"badge-save",children:t("deal.youSave",{amount:r(s.youSave,n)})})]})}export{u as C,y as D,f as X};

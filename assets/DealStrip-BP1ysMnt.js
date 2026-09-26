import{e as i,u as l,j as e}from"./index-P0bPegYG.js";import{f as n}from"./money-RUbWqbRC.js";import{p as o}from"./savings-BRgGzCyP.js";/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],u=i("chevron-down",p);function h({pool:a,className:c=""}){const{t}=l(),s=o(a);if(!s)return null;const r=a==null?void 0:a.currency;return e.jsxs("div",{className:`flex flex-wrap items-baseline gap-x-2 gap-y-1 ${c}`,children:[e.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-wide text-earth-500",children:t("deal.deliveryLabel")}),e.jsx("span",{className:"price-hero price-was text-base",children:n(s.shippingTotal,r)}),e.jsx("span",{"aria-hidden":"true",className:"text-earth-400",children:"→"}),e.jsx("span",{className:"price-hero text-xl text-gray-900",children:n(s.shippingYours,r)}),e.jsx("span",{className:"badge-save",children:t("deal.youSave",{amount:n(s.youSave,r)})})]})}export{u as C,h as D};

import{e as c,u as o,j as s}from"./index-DvqRJouo.js";import{f as i}from"./money-RUbWqbRC.js";import{p as l}from"./savings-57UPeW8k.js";/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],g=c("chevron-down",p);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],y=c("x",u);function v({pool:e,className:a=""}){const{t}=o(),n=l(e);if(!n)return null;const r=e==null?void 0:e.currency;return s.jsxs("div",{className:`flex flex-wrap items-baseline gap-x-2 gap-y-1 ${a}`,children:[s.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-wide text-earth-500",children:t("deal.deliveryLabel")}),s.jsx("span",{className:"price-hero price-was text-base",children:i(n.shippingTotal,r)}),s.jsx("span",{"aria-hidden":"true",className:"text-earth-400",children:"→"}),s.jsx("span",{className:"price-hero text-xl text-gray-900",children:i(n.shippingYours,r)}),s.jsx("span",{className:"badge-save ml-auto text-sm px-2 py-0.5",children:t("deal.youSave",{amount:i(n.youSave,r)})})]})}const d=/\.(nl|com|de|fr|be|eu|co\.uk|org|net|io|app|shop|dk|no|se|fi|at|ch|it|es|pl|cz|hu|ro|bg|gr|pt|sk|si|hr|lt|lv|ee|is|lu|mt|cy)\s*$/i;function m(e){return e.replace(d,"").toLowerCase().trim()}function b(e){return e?e.status==="open"&&(!e.items||e.items.length===0):!1}function j(e){const a=m(String(e||""));return a?a.split(/[-.\s]+/).filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "):""}export{g as C,v as D,y as X,m as a,b as i,j as v};

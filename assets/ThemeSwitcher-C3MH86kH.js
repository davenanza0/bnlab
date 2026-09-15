import{h as p,j as t}from"./index-DMIAcsd1.js";import{c}from"./utils-Bk382tBs.js";import{c as n}from"./createLucideIcon-KrfHon-6.js";/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]],h=n("laptop",u);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],f=n("moon",x);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],k=n("sun",y),l=[{value:"system",label:"Automático",icon:h},{value:"light",label:"Claro",icon:k},{value:"dark",label:"Escuro",icon:f}];function j({withLabels:d=!1,layout:m="inline"}){const{theme:i,setTheme:s}=p();return m==="stacked"?t.jsx("div",{role:"radiogroup","aria-label":"Tema da interface",className:"flex flex-col gap-1",children:l.map(({value:e,label:a,icon:r})=>{const o=i===e;return t.jsxs("button",{type:"button",role:"radio","aria-checked":o,onClick:()=>s(e),className:c("flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-colors",o?"bg-primary text-primary-foreground shadow-clay":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:[t.jsx(r,{className:"size-4 shrink-0","aria-hidden":!0}),t.jsx("span",{className:"truncate",children:a})]},e)})}):t.jsx("div",{role:"radiogroup","aria-label":"Tema da interface",className:"clay-inset inline-flex max-w-full gap-1 overflow-x-auto p-1",children:l.map(({value:e,label:a,icon:r})=>{const o=i===e;return t.jsxs("button",{type:"button",role:"radio","aria-checked":o,"aria-label":a,title:a,onClick:()=>s(e),className:c("inline-flex shrink-0 items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all",o?"bg-primary text-primary-foreground shadow-clay":"text-muted-foreground hover:text-foreground"),children:[t.jsx(r,{className:"size-4","aria-hidden":!0}),d?a:null]},e)})})}export{j as T};

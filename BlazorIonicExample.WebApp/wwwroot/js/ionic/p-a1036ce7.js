/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{w as o}from"./p-7b30edcc.js";import{r}from"./p-1b3ffb2f.js";import{a as t}from"./p-06fee233.js";const e=(t,e,i)=>{let n,s;if(void 0!==o&&"MutationObserver"in o){const o=Array.isArray(e)?e:[e];n=new MutationObserver((t=>{for(const e of t)for(const t of e.addedNodes)if(t.nodeType===Node.ELEMENT_NODE&&o.includes(t.slot))return i(),void r((()=>f(t)))})),n.observe(t,{childList:!0})}const f=o=>{var r;s&&(s.disconnect(),s=void 0),s=new MutationObserver((o=>{i();for(const r of o)for(const o of r.removedNodes)o.nodeType===Node.ELEMENT_NODE&&o.slot===e&&c()})),s.observe(null!==(r=o.parentElement)&&void 0!==r?r:o,{subtree:!0,childList:!0})},c=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{n&&(n.disconnect(),n=void 0),c()}}},i=(o,r,e)=>{const i=null==o?0:o.toString().length,s=n(i,r);if(void 0===e)return s;try{return e(i,r)}catch(o){return t("Exception in provided `counterFormatter`.",o),s}},n=(o,r)=>`${o} / ${r}`;export{e as c,i as g}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as i,d as t,h as e,H as s,f as o}from"./p-f419feca.js";import{r as n,g as a}from"./p-1b3ffb2f.js";import{a as r,b as d,h as l}from"./p-42f189f4.js";import{a as c,b as p}from"./p-2389b3f9.js";import{c as h}from"./p-47794def.js";import"./p-c61cc894.js";import"./p-7b30edcc.js";const m=class{constructor(e){i(this,e),this.ionChange=t(this,"ionChange",7),this.isScrolling=!1,this.isColumnVisible=!1,this.canExitInputMode=!0,this.centerPickerItemInView=(i,t=!0,e=!0)=>{const{el:s,isColumnVisible:o}=this;if(o){const o=i.offsetTop-3*i.clientHeight+i.clientHeight/2;s.scrollTop!==o&&(this.canExitInputMode=e,s.scroll({top:o,left:0,behavior:t?"smooth":void 0}))}},this.setPickerItemActiveState=(i,t)=>{t?(i.classList.add(b),i.part.add(u)):(i.classList.remove(b),i.part.remove(u))},this.inputModeChange=i=>{if(!this.numericInput)return;const{useInputMode:t,inputModeColumn:e}=i.detail;this.setInputModeActive(!(!t||void 0!==e&&e!==this.el))},this.setInputModeActive=i=>{this.isScrolling?this.scrollEndCallback=()=>{this.isActive=i}:this.isActive=i},this.initializeScrollListener=()=>{const i=c("ios"),{el:t}=this;let e,s=this.activeItem;const o=()=>{n((()=>{e&&(clearTimeout(e),e=void 0),this.isScrolling||(i&&r(),this.isScrolling=!0);const o=t.getBoundingClientRect(),n=t.shadowRoot.elementFromPoint(o.x+o.width/2,o.y+o.height/2);null!==s&&this.setPickerItemActiveState(s,!1),null===n||n.disabled||(n!==s&&(i&&d(),this.canExitInputMode&&this.exitInputMode()),s=n,this.setPickerItemActiveState(n,!0),e=setTimeout((()=>{this.isScrolling=!1,i&&l();const{scrollEndCallback:t}=this;t&&(t(),this.scrollEndCallback=void 0),this.canExitInputMode=!0;const e=n.getAttribute("data-index");if(null===e)return;const s=parseInt(e,10),o=this.items[s];o.value!==this.value&&this.setValue(o.value)}),250))}))};n((()=>{t.addEventListener("scroll",o),this.destroyScrollListener=()=>{t.removeEventListener("scroll",o)}}))},this.exitInputMode=()=>{const{parentEl:i}=this;null!=i&&(i.exitInputMode(),this.el.classList.remove("picker-column-active"))},this.isActive=!1,this.disabled=!1,this.items=[],this.value=void 0,this.color="primary",this.numericInput=!1}valueChange(){this.isColumnVisible&&this.scrollActiveItemIntoView()}componentWillLoad(){new IntersectionObserver((i=>{if(i[i.length-1].isIntersecting){const{activeItem:i,el:t}=this;this.isColumnVisible=!0;const e=a(t).querySelector(`.${b}`);e&&this.setPickerItemActiveState(e,!1),this.scrollActiveItemIntoView(),i&&this.setPickerItemActiveState(i,!0),this.initializeScrollListener()}else this.isColumnVisible=!1,this.destroyScrollListener&&(this.destroyScrollListener(),this.destroyScrollListener=void 0)}),{threshold:.001}).observe(this.el);const i=this.parentEl=this.el.closest("ion-picker-internal");null!==i&&i.addEventListener("ionInputModeChange",(i=>this.inputModeChange(i)))}componentDidRender(){var i;const{activeItem:t,items:e,isColumnVisible:s,value:o}=this;s&&(t?this.scrollActiveItemIntoView():(null===(i=e[0])||void 0===i?void 0:i.value)!==o&&this.setValue(e[0].value))}async scrollActiveItemIntoView(){const i=this.activeItem;i&&this.centerPickerItemInView(i,!1,!1)}async setValue(i){const{items:t}=this;this.value=i;const e=t.find((t=>t.value===i&&!0!==t.disabled));e&&this.ionChange.emit(e)}get activeItem(){const i=`.picker-item[data-value="${this.value}"]${this.disabled?"":":not([disabled])"}`;return a(this.el).querySelector(i)}render(){const{items:i,color:t,disabled:o,isActive:n,numericInput:a}=this,r=p(this);return e(s,{key:"eeb70e31fca7bff943a2fc29a3da0383520fdd84",exportparts:`${f}, ${u}`,disabled:o,tabindex:o?null:0,class:h(t,{[r]:!0,"picker-column-active":n,"picker-column-numeric-input":a})},e("div",{key:"08cffb51ab2ce1a4b83e35b25afd2880d6949d8e",class:"picker-item picker-item-empty","aria-hidden":"true"}," "),e("div",{key:"88389ba5287ee5e251fa36a0e13a888c8dfbf8e8",class:"picker-item picker-item-empty","aria-hidden":"true"}," "),e("div",{key:"2dc958f37a939a0fbbc35d92482e9c64741d8f5a",class:"picker-item picker-item-empty","aria-hidden":"true"}," "),i.map(((i,t)=>e("button",{tabindex:"-1",class:{"picker-item":!0},"data-value":i.value,"data-index":t,onClick:i=>{this.centerPickerItemInView(i.target,!0)},disabled:o||i.disabled||!1,part:f},i.text))),e("div",{key:"d31f134aa67a10ad1b796a4e1ffbea439b2b3723",class:"picker-item picker-item-empty","aria-hidden":"true"}," "),e("div",{key:"3015f7f774b44d349f445e585b73295814c76326",class:"picker-item picker-item-empty","aria-hidden":"true"}," "),e("div",{key:"df165c76253e51bd6968bdcd8071ad69467bda4c",class:"picker-item picker-item-empty","aria-hidden":"true"}," "))}get el(){return o(this)}static get watchers(){return{value:["valueChange"]}}},b="picker-item-active",f="wheel-item",u="active";m.style={ios:":host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}:host::-webkit-scrollbar{display:none}:host .picker-item{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty,:host .picker-item[disabled]{cursor:default}:host .picker-item-empty,:host(:not([disabled])) .picker-item[disabled]{scroll-snap-align:none}:host([disabled]){overflow-y:hidden}:host .picker-item[disabled]{opacity:0.4}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}",md:":host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}:host::-webkit-scrollbar{display:none}:host .picker-item{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty,:host .picker-item[disabled]{cursor:default}:host .picker-item-empty,:host(:not([disabled])) .picker-item[disabled]{scroll-snap-align:none}:host([disabled]){overflow-y:hidden}:host .picker-item[disabled]{opacity:0.4}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}:host .picker-item-active{color:var(--ion-color-base)}"};export{m as ion_picker_column_internal}
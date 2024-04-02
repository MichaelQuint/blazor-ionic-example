/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as o,h as t,H as i,f as n,d as e}from"./p-f419feca.js";import{r as a,t as r,a as s,b as d,g as c}from"./p-1b3ffb2f.js";import{l as h}from"./p-831269de.js";import{c as l,b as p}from"./p-2389b3f9.js";import{p as u}from"./p-06fee233.js";const x=class{constructor(t){o(this,t),this.updateListener=()=>this.updateState(!1),this.setItemDefaults=()=>{const o=this.getSlottedHeaderIonItem();o&&(o.button=!0,o.detail=!1,void 0===o.lines&&(o.lines="full"))},this.getSlottedHeaderIonItem=()=>{const{headerEl:o}=this;if(!o)return;const t=o.querySelector("slot");return t&&void 0!==t.assignedElements?t.assignedElements().find((o=>"ION-ITEM"===o.tagName)):void 0},this.setAria=(o=!1)=>{const t=this.getSlottedHeaderIonItem();if(!t)return;const i=c(t).querySelector("button");i&&i.setAttribute("aria-expanded",`${o}`)},this.slotToggleIcon=()=>{const o=this.getSlottedHeaderIonItem();if(!o)return;const{toggleIconSlot:t,toggleIcon:i}=this;if(o.querySelector(".ion-accordion-toggle-icon"))return;const n=document.createElement("ion-icon");n.slot=t,n.lazy=!1,n.classList.add("ion-accordion-toggle-icon"),n.icon=i,n.setAttribute("aria-hidden","true"),o.appendChild(n)},this.expandAccordion=(o=!1)=>{const{contentEl:t,contentElWrapper:i}=this;o||void 0===t||void 0===i?this.state=4:4!==this.state&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?a((()=>{this.state=8,this.currentRaf=a((async()=>{const o=i.offsetHeight,n=r(t,2e3);t.style.setProperty("max-height",`${o}px`),await n,this.state=4,t.style.removeProperty("max-height")}))})):this.state=4)},this.collapseAccordion=(o=!1)=>{const{contentEl:t}=this;o||void 0===t?this.state=1:1!==this.state&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?this.currentRaf=a((async()=>{t.style.setProperty("max-height",`${t.offsetHeight}px`),a((async()=>{const o=r(t,2e3);this.state=2,await o,this.state=1,t.style.removeProperty("max-height")}))})):this.state=1)},this.shouldAnimate=()=>"undefined"!=typeof window&&(!matchMedia("(prefers-reduced-motion: reduce)").matches&&!(!l.get("animated",!0)||this.accordionGroupEl&&!this.accordionGroupEl.animated)),this.updateState=async(o=!1)=>{const t=this.accordionGroupEl,i=this.value;if(!t)return;const n=t.value;if(Array.isArray(n)?n.includes(i):n===i)this.expandAccordion(o),this.isNext=this.isPrevious=!1;else{this.collapseAccordion(o);const t=this.getNextSibling(),i=null==t?void 0:t.value;void 0!==i&&(this.isPrevious=Array.isArray(n)?n.includes(i):n===i);const e=this.getPreviousSibling(),a=null==e?void 0:e.value;void 0!==a&&(this.isNext=Array.isArray(n)?n.includes(a):n===a)}},this.getNextSibling=()=>{if(!this.el)return;const o=this.el.nextElementSibling;return"ION-ACCORDION"===(null==o?void 0:o.tagName)?o:void 0},this.getPreviousSibling=()=>{if(!this.el)return;const o=this.el.previousElementSibling;return"ION-ACCORDION"===(null==o?void 0:o.tagName)?o:void 0},this.state=1,this.isNext=!1,this.isPrevious=!1,this.value="ion-accordion-"+g++,this.disabled=!1,this.readonly=!1,this.toggleIcon=h,this.toggleIconSlot="end"}valueChanged(){this.updateState()}connectedCallback(){var o;const t=this.accordionGroupEl=null===(o=this.el)||void 0===o?void 0:o.closest("ion-accordion-group");t&&(this.updateState(!0),s(t,"ionValueChange",this.updateListener))}disconnectedCallback(){const o=this.accordionGroupEl;o&&d(o,"ionValueChange",this.updateListener)}componentDidLoad(){this.setItemDefaults(),this.slotToggleIcon(),a((()=>{this.setAria(4===this.state||8===this.state)}))}toggleExpanded(){const{accordionGroupEl:o,disabled:t,readonly:i,value:n,state:e}=this;t||i||!o||o.requestAccordionToggle(n,1===e||2===e)}render(){const{disabled:o,readonly:n}=this,e=p(this),a=4===this.state||8===this.state,r=a?"header expanded":"header",s=a?"content expanded":"content";return this.setAria(a),t(i,{key:"073e1d02c18dcbc20c68648426e87c14750c031d",class:{[e]:!0,"accordion-expanding":8===this.state,"accordion-expanded":4===this.state,"accordion-collapsing":2===this.state,"accordion-collapsed":1===this.state,"accordion-next":this.isNext,"accordion-previous":this.isPrevious,"accordion-disabled":o,"accordion-readonly":n,"accordion-animated":this.shouldAnimate()}},t("div",{key:"9b4cf326de8bb6b4033992903c0c1bfd7eea9bcc",onClick:()=>this.toggleExpanded(),id:"header",part:r,"aria-controls":"content",ref:o=>this.headerEl=o},t("slot",{key:"464c32a37f64655eacf4218284214f5f30b14a1e",name:"header"})),t("div",{key:"8bb52e6a62d7de0106b253201a89a32e79d9a594",id:"content",part:s,role:"region","aria-labelledby":"header",ref:o=>this.contentEl=o},t("div",{key:"1d9dfd952ad493754aaeea7a8f625b33c2dd90a0",id:"content-wrapper",ref:o=>this.contentElWrapper=o},t("slot",{key:"970dfbc55a612d739d0ca3b7b1a08e5c96d0c479",name:"content"}))))}static get delegatesFocus(){return!0}get el(){return n(this)}static get watchers(){return{value:["valueChanged"]}}};let g=0;x.style={ios:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}",md:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}"};const b=class{constructor(t){o(this,t),this.ionChange=e(this,"ionChange",7),this.ionValueChange=e(this,"ionValueChange",7),this.animated=!0,this.multiple=void 0,this.value=void 0,this.disabled=!1,this.readonly=!1,this.expand="compact"}valueChanged(){const{value:o,multiple:t}=this;!t&&Array.isArray(o)&&u(`ion-accordion-group was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".\n\n  Value Passed: [${o.map((o=>`'${o}'`)).join(", ")}]\n`,this.el),this.ionValueChange.emit({value:this.value})}async disabledChanged(){const{disabled:o}=this,t=await this.getAccordions();for(const i of t)i.disabled=o}async readonlyChanged(){const{readonly:o}=this,t=await this.getAccordions();for(const i of t)i.readonly=o}async onKeydown(o){const t=document.activeElement;if(!t)return;if(!t.closest('ion-accordion [slot="header"]'))return;const i="ION-ACCORDION"===t.tagName?t:t.closest("ion-accordion");if(!i)return;if(i.closest("ion-accordion-group")!==this.el)return;const n=await this.getAccordions(),e=n.findIndex((o=>o===i));if(-1===e)return;let a;"ArrowDown"===o.key?a=this.findNextAccordion(n,e):"ArrowUp"===o.key?a=this.findPreviousAccordion(n,e):"Home"===o.key?a=n[0]:"End"===o.key&&(a=n[n.length-1]),void 0!==a&&a!==t&&a.focus()}async componentDidLoad(){this.disabled&&this.disabledChanged(),this.readonly&&this.readonlyChanged(),this.valueChanged()}setValue(o){const t=this.value=o;this.ionChange.emit({value:t})}async requestAccordionToggle(o,t){const{multiple:i,value:n,readonly:e,disabled:a}=this;if(!e&&!a)if(t)if(i){const t=null!=n?n:[],i=Array.isArray(t)?t:[t];void 0===i.find((t=>t===o))&&void 0!==o&&this.setValue([...i,o])}else this.setValue(o);else if(i){const t=null!=n?n:[],i=Array.isArray(t)?t:[t];this.setValue(i.filter((t=>t!==o)))}else this.setValue(void 0)}findNextAccordion(o,t){const i=o[t+1];return void 0===i?o[0]:i}findPreviousAccordion(o,t){const i=o[t-1];return void 0===i?o[o.length-1]:i}async getAccordions(){return Array.from(this.el.querySelectorAll(":scope > ion-accordion"))}render(){const{disabled:o,readonly:n,expand:e}=this,a=p(this);return t(i,{key:"ac2e26ac91c95d08172bd2b51daa7a711c21db9e",class:{[a]:!0,"accordion-group-disabled":o,"accordion-group-readonly":n,[`accordion-group-expand-${e}`]:!0},role:"presentation"},t("slot",{key:"444adc2af5730897eba57095da046d6bdb5af70f"}))}get el(){return n(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}}};b.style={ios:":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",md:":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}@supports selector(:dir(rtl)){:host(.accordion-group-expand-inset:dir(rtl)) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}@supports selector(:dir(rtl)){:host(.accordion-group-expand-inset:dir(rtl)) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"};export{x as ion_accordion,b as ion_accordion_group}
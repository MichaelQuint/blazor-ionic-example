/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as t,d as o,w as a,h as i,H as r,f as e}from"./p-f419feca.js";import{f as s,i as n,d,r as p,a as h,p as l}from"./p-12a8643e.js";import{C as c,a as m,d as b}from"./p-779aede8.js";import{g as f,l as u,r as w,k as v,m as x}from"./p-1b3ffb2f.js";import{c as g}from"./p-ccd02320.js";import{p as k}from"./p-06fee233.js";import{g as y}from"./p-c61cc894.js";import{G as A,O as D,e as B,B as Y,j,k as M,f as E,g as C,h as S}from"./p-47bf8d13.js";import{g as O}from"./p-47794def.js";import{e as P,w as $}from"./p-d5539f7e.js";import{b as T,c as z}from"./p-2389b3f9.js";import{KEYBOARD_DID_OPEN as I}from"./p-2b7827c7.js";import{c as W}from"./p-942a9358.js";import{g as L}from"./p-2408c236.js";import{createGesture as R}from"./p-f5d2dc9b.js";import{w as N}from"./p-7b30edcc.js";import"./p-0d6f7a8d.js";import"./p-27281edd.js";import"./p-bb3615f7.js";var K;!function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"}(K||(K={}));const V={getEngine(){const t=y();if(null==t?void 0:t.isPluginAvailable("StatusBar"))return t.Plugins.StatusBar},supportsDefaultStatusBarStyle(){const t=y();return!!(null==t?void 0:t.PluginHeaders)},setStyle(t){const o=this.getEngine();o&&o.setStyle(t)},getStyle:async function(){const t=this.getEngine();if(!t)return K.Default;const{style:o}=await t.getInfo();return o}},Z=(t,o)=>{if(1===o)return 0;const a=1/(1-o);return t*a+-o*a},F=()=>{!N||N.innerWidth>=768||!V.supportsDefaultStatusBarStyle()||V.setStyle({style:K.Dark})},G=(t=K.Default)=>{!N||N.innerWidth>=768||!V.supportsDefaultStatusBarStyle()||V.setStyle({style:t})},_=async(t,o)=>{"function"==typeof t.canDismiss&&await t.canDismiss(void 0,A)&&(o.isRunning()?o.onFinish((()=>{t.dismiss(void 0,"handler")}),{oneTimeCallback:!0}):t.dismiss(void 0,"handler"))},H=t=>.00255275*2.71828**(-14.9619*t)-1.00255*2.71828**(-.0380968*t)+1,U=.93,q=(t,o)=>u(400,t/Math.abs(1.1*o),500),J=t=>{const{currentBreakpoint:o,backdropBreakpoint:a}=t,i=void 0===a||a<o,r=i?`calc(var(--backdrop-opacity) * ${o})`:"0",e=W("backdropAnimation").fromTo("opacity",0,r);return i&&e.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:W("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*o}%)`}]),backdropAnimation:e}},Q=t=>{const{currentBreakpoint:o,backdropBreakpoint:a}=t,i=`calc(var(--backdrop-opacity) * ${Z(o,a)})`,r=[{offset:0,opacity:i},{offset:1,opacity:0}],e=[{offset:0,opacity:i},{offset:a,opacity:0},{offset:1,opacity:0}],s=W("backdropAnimation").keyframes(0!==a?e:r);return{wrapperAnimation:W("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*o}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:s}},X=(t,o)=>{const{presentingEl:a,currentBreakpoint:i}=o,r=f(t),{wrapperAnimation:e,backdropAnimation:s}=void 0!==i?J(o):{backdropAnimation:W().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:W().fromTo("transform","translateY(100vh)","translateY(0vh)")};s.addElement(r.querySelector("ion-backdrop")),e.addElement(r.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const n=W("entering-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(e);if(a){const t=window.innerWidth<768,o="ION-MODAL"===a.tagName&&void 0!==a.presentingElement,i=f(a),r=W().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),d=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",i=`translateY(${o?"-10px":t}) scale(0.93)`;r.afterStyles({transform:i}).beforeAddWrite((()=>d.style.setProperty("background-color","black"))).addElement(a).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:i,borderRadius:"10px 10px 0 0"}]),n.addAnimation(r)}else if(n.addAnimation(s),o){const t=`translateY(-10px) scale(${o?U:1})`;r.afterStyles({transform:t}).addElement(i.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:t}]);const a=W().afterStyles({transform:t}).addElement(i.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:t}]);n.addAnimation([r,a])}else e.fromTo("opacity","0","1")}else n.addAnimation(s);return n},tt=(t,o,a=500)=>{const{presentingEl:i,currentBreakpoint:r}=o,e=f(t),{wrapperAnimation:s,backdropAnimation:n}=void 0!==r?Q(o):{backdropAnimation:W().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:W().fromTo("transform","translateY(0vh)","translateY(100vh)")};n.addElement(e.querySelector("ion-backdrop")),s.addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const d=W("leaving-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(a).addAnimation(s);if(i){const t=window.innerWidth<768,o="ION-MODAL"===i.tagName&&void 0!==i.presentingElement,a=f(i),r=W().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((t=>{1===t&&(i.style.setProperty("overflow",""),Array.from(e.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter((t=>void 0!==t.presentingElement)).length<=1&&e.style.setProperty("background-color",""))})),e=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",a=`translateY(${o?"-10px":t}) scale(0.93)`;r.addElement(i).keyframes([{offset:0,filter:"contrast(0.85)",transform:a,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),d.addAnimation(r)}else if(d.addAnimation(n),o){const t=`translateY(-10px) scale(${o?U:1})`;r.addElement(a.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:t},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const i=W().addElement(a.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:t},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);d.addAnimation([r,i])}else s.fromTo("opacity","1","0")}else d.addAnimation(n);return d},ot=(t,o)=>{const{currentBreakpoint:a}=o,i=f(t),{wrapperAnimation:r,backdropAnimation:e}=void 0!==a?J(o):{backdropAnimation:W().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:W().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return e.addElement(i.querySelector("ion-backdrop")),r.addElement(i.querySelector(".modal-wrapper")),W().addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([e,r])},at=(t,o)=>{const{currentBreakpoint:a}=o,i=f(t),{wrapperAnimation:r,backdropAnimation:e}=void 0!==a?Q(o):{backdropAnimation:W().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:W().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return e.addElement(i.querySelector("ion-backdrop")),r.addElement(i.querySelector(".modal-wrapper")),W().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([e,r])},it=class{constructor(a){t(this,a),this.didPresent=o(this,"ionModalDidPresent",7),this.willPresent=o(this,"ionModalWillPresent",7),this.willDismiss=o(this,"ionModalWillDismiss",7),this.didDismiss=o(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=o(this,"ionBreakpointDidChange",7),this.didPresentShorthand=o(this,"didPresent",7),this.willPresentShorthand=o(this,"willPresent",7),this.willDismissShorthand=o(this,"willDismiss",7),this.didDismissShorthand=o(this,"didDismiss",7),this.ionMount=o(this,"ionMount",7),this.lockController=g(),this.triggerController=B(),this.coreDelegate=c(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.onHandleClick=()=>{const{sheetTransition:t,handleBehavior:o}=this;"cycle"===o&&void 0===t&&this.moveToNextBreakpoint()},this.onBackdropTap=()=>{const{sheetTransition:t}=this;void 0===t&&this.dismiss(void 0,Y)},this.onLifecycle=t=>{const o=this.usersElement,a=rt[t.type];if(o&&a){const i=new CustomEvent(a,{bubbles:!1,cancelable:!1,detail:t.detail});o.dispatchEvent(i)}},this.presented=!1,this.hasController=!1,this.overlayIndex=void 0,this.delegate=void 0,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.breakpoints=void 0,this.initialBreakpoint=void 0,this.backdropBreakpoint=0,this.handle=void 0,this.handleBehavior="none",this.component=void 0,this.componentProps=void 0,this.cssClass=void 0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.presentingElement=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0,this.keepContentsMounted=!1,this.canDismiss=!0}onIsOpenChange(t,o){!0===t&&!1===o?this.present():!1===t&&!0===o&&this.dismiss()}triggerChanged(){const{trigger:t,el:o,triggerController:a}=this;t&&a.addClickListener(o,t)}breakpointsChanged(t){void 0!==t&&(this.sortedBreakpoints=t.sort(((t,o)=>t-o)))}connectedCallback(){const{el:t}=this;j(t),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){const{breakpoints:t,initialBreakpoint:o,el:a,htmlAttributes:i}=this,r=this.isSheetModal=void 0!==t&&void 0!==o,e=["aria-label","role"];this.inheritedAttributes=v(a,e),void 0!==i&&e.forEach((t=>{i[t]&&(this.inheritedAttributes=Object.assign(Object.assign({},this.inheritedAttributes),{[t]:i[t]}),delete i[t])})),r&&(this.currentBreakpoint=this.initialBreakpoint),void 0===t||void 0===o||t.includes(o)||k("Your breakpoints array must include the initialBreakpoint value."),M(a)}componentDidLoad(){!0===this.isOpen&&w((()=>this.present())),this.breakpointsChanged(this.breakpoints),this.triggerChanged()}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};const o=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:o,delegate:this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate}}async checkCanDismiss(t,o){const{canDismiss:a}=this;return"function"==typeof a?a(t,o):a}async present(){const t=await this.lockController.lock();if(this.presented)return void t();const{presentingElement:o,el:i}=this;this.currentBreakpoint=this.initialBreakpoint;const{inline:r,delegate:e}=this.getDelegate(!0);this.ionMount.emit(),this.usersElement=await m(e,i,this.component,["ion-page"],this.componentProps,r),x(i)?await P(this.usersElement):this.keepContentsMounted||await $(),a((()=>this.el.classList.add("show-modal")));const s=void 0!==o;s&&"ios"===T(this)&&(this.statusBarStyle=await V.getStyle(),F()),await E(this,"modalEnter",X,ot,{presentingEl:o,currentBreakpoint:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint}),"undefined"!=typeof window&&(this.keyboardOpenCallback=()=>{this.gesture&&(this.gesture.enable(!1),w((()=>{this.gesture&&this.gesture.enable(!0)})))},window.addEventListener(I,this.keyboardOpenCallback)),this.isSheetModal?this.initSheetGesture():s&&this.initSwipeToClose(),t()}initSwipeToClose(){var t;if("ios"!==T(this))return;const{el:o}=this,a=this.leaveAnimation||z.get("modalLeave",tt),i=this.animation=a(o,{presentingEl:this.presentingElement});if(!h(o))return void l(o);const r=null!==(t=this.statusBarStyle)&&void 0!==t?t:K.Default;this.gesture=((t,o,a,i)=>{const r=.5,e=t.offsetHeight;let h=!1,l=!1,c=null,m=null,b=!0,w=0;const v=R({el:t,gestureName:"modalSwipeToClose",gesturePriority:D,direction:"y",threshold:10,canStart:t=>{const o=t.event.target;if(null===o||!o.closest)return!0;if(c=s(o),c){if(n(c)){const t=f(c);m=t.querySelector(".inner-scroll")}else m=c;return!c.querySelector("ion-refresher")&&0===m.scrollTop}return null===o.closest("ion-footer")},onStart:a=>{const{deltaY:i}=a;b=!c||!n(c)||c.scrollY,l=void 0!==t.canDismiss&&!0!==t.canDismiss,i>0&&c&&d(c),o.progressStart(!0,h?1:0)},onMove:t=>{const{deltaY:i}=t;i>0&&c&&d(c);const s=t.deltaY/e,n=s>=0&&l,p=n?.2:.9999,h=n?H(s/p):s,m=u(1e-4,h,p);o.progressStep(m),m>=r&&w<r?G(a):m<r&&w>=r&&F(),w=m},onEnd:a=>{const s=a.velocityY,n=a.deltaY/e,d=n>=0&&l,m=d?.2:.9999,f=d?H(n/m):n,w=u(1e-4,f,m),x=!d&&(a.deltaY+1e3*s)/e>=r;let g=x?-.001:.001;x?(o.easing("cubic-bezier(0.32, 0.72, 0, 1)"),g+=L([0,0],[.32,.72],[0,1],[1,1],w)[0]):(o.easing("cubic-bezier(1, 0, 0.68, 0.28)"),g+=L([0,0],[1,0],[.68,.28],[1,1],w)[0]);const k=q(x?n*e:(1-w)*e,s);h=x,v.enable(!1),c&&p(c,b),o.onFinish((()=>{x||v.enable(!0)})).progressEnd(x?1:0,g,k),d&&w>m/4?_(t,o):x&&i()}});return v})(o,i,r,(()=>{this.gestureAnimationDismissing=!0,G(this.statusBarStyle),this.animation.onFinish((async()=>{await this.dismiss(void 0,A),this.gestureAnimationDismissing=!1}))})),this.gesture.enable(!0)}initSheetGesture(){const{wrapperEl:t,initialBreakpoint:o,backdropBreakpoint:a}=this;if(!t||void 0===o)return;const i=this.enterAnimation||z.get("modalEnter",X),r=this.animation=i(this.el,{presentingEl:this.presentingElement,currentBreakpoint:o,backdropBreakpoint:a});r.progressStart(!0,1);const{gesture:e,moveSheetToBreakpoint:s}=((t,o,a,i,r,e,s=[],n,d,p)=>{const h={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==r?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-r,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},l=t.querySelector("ion-content"),c=a.clientHeight;let m=i,b=0,f=!1;const v=e.childAnimations.find((t=>"wrapperAnimation"===t.id)),x=e.childAnimations.find((t=>"backdropAnimation"===t.id)),g=s[s.length-1],k=s[0],y=()=>{t.style.setProperty("pointer-events","auto"),o.style.setProperty("pointer-events","auto"),t.classList.remove("ion-disable-focus-trap")},A=()=>{t.style.setProperty("pointer-events","none"),o.style.setProperty("pointer-events","none"),t.classList.add("ion-disable-focus-trap")};v&&x&&(v.keyframes([...h.WRAPPER_KEYFRAMES]),x.keyframes([...h.BACKDROP_KEYFRAMES]),e.progressStart(!0,1-m),m>r?y():A()),l&&m!==g&&(l.scrollY=!1);const D=o=>{const{breakpoint:a,canDismiss:i,breakpointOffset:n,animated:c}=o,b=i&&0===a,f=b?m:a,u=0!==f;return m=0,v&&x&&(v.keyframes([{offset:0,transform:`translateY(${100*n}%)`},{offset:1,transform:`translateY(${100*(1-f)}%)`}]),x.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${Z(1-n,r)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${Z(f,r)})`}]),e.progressStep(0)),B.enable(!1),b?_(t,e):u||d(),new Promise((t=>{e.onFinish((()=>{u?v&&x?w((()=>{v.keyframes([...h.WRAPPER_KEYFRAMES]),x.keyframes([...h.BACKDROP_KEYFRAMES]),e.progressStart(!0,1-f),m=f,p(m),l&&m===s[s.length-1]&&(l.scrollY=!0),m>r?y():A(),B.enable(!0),t()})):(B.enable(!0),t()):t()}),{oneTimeCallback:!0}).progressEnd(1,0,c?500:0)}))},B=R({el:a,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:t=>{const o=t.event.target.closest("ion-content");return m=n(),1!==m||!o},onStart:()=>{f=void 0!==t.canDismiss&&!0!==t.canDismiss&&0===k,l&&(l.scrollY=!1),w((()=>{t.focus()})),e.progressStart(!0,1-m)},onMove:t=>{const o=s.length>1?1-s[1]:void 0,a=1-m+t.deltaY/c,i=void 0!==o&&a>=o&&f,r=i?.95:.9999,n=i&&void 0!==o?o+H((a-o)/(r-o)):a;b=u(1e-4,n,r),e.progressStep(b)},onEnd:t=>{const o=m-(t.deltaY+350*t.velocityY)/c,a=s.reduce(((t,a)=>Math.abs(a-o)<Math.abs(t-o)?a:t));D({breakpoint:a,breakpointOffset:b,canDismiss:f,animated:!0})}});return{gesture:B,moveSheetToBreakpoint:D}})(this.el,this.backdropEl,t,o,a,r,this.sortedBreakpoints,(()=>{var t;return null!==(t=this.currentBreakpoint)&&void 0!==t?t:0}),(()=>this.sheetOnDismiss()),(t=>{this.currentBreakpoint!==t&&(this.currentBreakpoint=t,this.ionBreakpointDidChange.emit({breakpoint:t}))}));this.gesture=e,this.moveSheetToBreakpoint=s,this.gesture.enable(!0)}sheetOnDismiss(){this.gestureAnimationDismissing=!0,this.animation.onFinish((async()=>{this.currentBreakpoint=0,this.ionBreakpointDidChange.emit({breakpoint:this.currentBreakpoint}),await this.dismiss(void 0,A),this.gestureAnimationDismissing=!1}))}async dismiss(t,o){var i;if(this.gestureAnimationDismissing&&o!==A)return!1;const r=await this.lockController.lock();if("handler"!==o&&!await this.checkCanDismiss(t,o))return r(),!1;const{presentingElement:e}=this;void 0!==e&&"ios"===T(this)&&G(this.statusBarStyle),"undefined"!=typeof window&&this.keyboardOpenCallback&&(window.removeEventListener(I,this.keyboardOpenCallback),this.keyboardOpenCallback=void 0);const s=await C(this,t,o,"modalLeave",tt,at,{presentingEl:e,currentBreakpoint:null!==(i=this.currentBreakpoint)&&void 0!==i?i:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint});if(s){const{delegate:t}=this.getDelegate();await b(t,this.usersElement),a((()=>this.el.classList.remove("show-modal"))),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy()}return this.currentBreakpoint=void 0,this.animation=void 0,r(),s}onDidDismiss(){return S(this.el,"ionModalDidDismiss")}onWillDismiss(){return S(this.el,"ionModalWillDismiss")}async setCurrentBreakpoint(t){if(!this.isSheetModal)return void k("setCurrentBreakpoint is only supported on sheet modals.");if(!this.breakpoints.includes(t))return void k(`Attempted to set invalid breakpoint value ${t}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:o,moveSheetToBreakpoint:a,canDismiss:i,breakpoints:r,animated:e}=this;o!==t&&a&&(this.sheetTransition=a({breakpoint:t,breakpointOffset:1-o,canDismiss:void 0!==i&&!0!==i&&0===r[0],animated:e}),await this.sheetTransition,this.sheetTransition=void 0)}async getCurrentBreakpoint(){return this.currentBreakpoint}async moveToNextBreakpoint(){const{breakpoints:t,currentBreakpoint:o}=this;if(!t||null==o)return!1;const a=t.filter((t=>0!==t)),i=a.indexOf(o),r=a[(i+1)%a.length];return await this.setCurrentBreakpoint(r),!0}render(){const{handle:t,isSheetModal:o,presentingElement:a,htmlAttributes:e,handleBehavior:s,inheritedAttributes:n}=this,d=!1!==t&&o,p=T(this),h=void 0!==a&&"ios"===p,l="cycle"===s;return i(r,Object.assign({key:"67ef0269a5e9b542d0c2acaa03a2f7f46b8cf0b5","no-router":!0,tabindex:"-1"},e,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[p]:!0,"modal-default":!h&&!o,"modal-card":h,"modal-sheet":o,"overlay-hidden":!0},O(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),i("ion-backdrop",{key:"edd98375e98d887dbea232adb81b74f164fa058b",ref:t=>this.backdropEl=t,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===p&&i("div",{class:"modal-shadow"}),i("div",Object.assign({key:"40437670391544b57b8a9943ef3b49de7acbd873",role:"dialog"},n,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:t=>this.wrapperEl=t}),d&&i("button",{class:"modal-handle",tabIndex:l?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:l?this.onHandleClick:void 0,part:"handle"}),i("slot",{key:"dfe2095d9e1adb075dc09d1927ef24ea09ea5435"})))}get el(){return e(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},rt={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};it.style={ios:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-card:dir(rtl)) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-sheet:dir(rtl)) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}',md:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}'};export{it as ion_modal}
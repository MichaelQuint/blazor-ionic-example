var __awaiter=this&&this.__awaiter||function(e,i,t,n){function s(e){return e instanceof t?e:new t((function(i){i(e)}))}return new(t||(t=Promise))((function(t,r){function o(e){try{d(n.next(e))}catch(e){r(e)}}function a(e){try{d(n["throw"](e))}catch(e){r(e)}}function d(e){e.done?t(e.value):s(e.value).then(o,a)}d((n=n.apply(e,i||[])).next())}))};var __generator=this&&this.__generator||function(e,i){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,s,r,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(e){return function(i){return d([e,i])}}function d(a){if(n)throw new TypeError("Generator is already executing.");while(o&&(o=0,a[0]&&(t=0)),t)try{if(n=1,s&&(r=a[0]&2?s["return"]:a[0]?s["throw"]||((r=s["return"])&&r.call(s),0):s.next)&&!(r=r.call(s,a[1])).done)return r;if(s=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:t.label++;return{value:a[1],done:false};case 5:t.label++;s=a[1];a=[0];continue;case 7:a=t.ops.pop();t.trys.pop();continue;default:if(!(r=t.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){t.label=a[1];break}if(a[0]===6&&t.label<r[1]){t.label=r[1];r=a;break}if(r&&t.label<r[2]){t.label=r[2];t.ops.push(a);break}if(r[2])t.ops.pop();t.trys.pop();continue}a=i.call(e,t)}catch(e){a=[6,e];s=0}finally{n=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-332c71da.system.js","./p-ca86ce8b.system.js"],(function(e){"use strict";var i,t,n,s,r,o;return{setters:[function(e){i=e.r;t=e.d;n=e.h;s=e.H;r=e.f},function(e){o=e.b}],execute:function(){var a=":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1;overflow:hidden}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}";var d=a;var l=":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1;overflow:hidden}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}";var p=l;var h="split-pane-main";var f="split-pane-side";var b={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""};var u=e("ion_split_pane",function(){function e(e){i(this,e);this.ionSplitPaneVisible=t(this,"ionSplitPaneVisible",7);this.visible=false;this.contentId=undefined;this.disabled=false;this.when=b["lg"]}e.prototype.visibleChanged=function(e){var i={visible:e,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(i)};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:if(!(typeof customElements!=="undefined"&&customElements!=null))return[3,2];return[4,customElements.whenDefined("ion-split-pane")];case 1:e.sent();e.label=2;case 2:this.styleChildren();this.updateState();return[2]}}))}))};e.prototype.disconnectedCallback=function(){if(this.rmL){this.rmL();this.rmL=undefined}};e.prototype.updateState=function(){var e=this;if(this.rmL){this.rmL();this.rmL=undefined}if(this.disabled){this.visible=false;return}var i=this.when;if(typeof i==="boolean"){this.visible=i;return}var t=b[i]||i;if(t.length===0){this.visible=false;return}var n=function(i){e.visible=i.matches};var s=window.matchMedia(t);s.addListener(n);this.rmL=function(){return s.removeListener(n)};this.visible=s.matches};e.prototype.isPane=function(e){if(!this.visible){return false}return e.parentElement===this.el&&e.classList.contains(f)};e.prototype.styleChildren=function(){var e=this.contentId;var i=this.el.children;var t=this.el.childElementCount;var n=false;for(var s=0;s<t;s++){var r=i[s];var o=e!==undefined&&r.id===e;if(o){if(n){console.warn("split pane cannot have more than one main node");return}n=true}m(r,o)}if(!n){console.warn("split pane does not have a specified main node")}};e.prototype.render=function(){var e;var i=o(this);return n(s,{key:"220208ab603f4f307672a73c4e9e8218aa5196dc",class:(e={},e[i]=true,e["split-pane-".concat(i)]=true,e["split-pane-visible"]=this.visible,e)},n("slot",{key:"bbf9321d4728265a04bb969a74ffa574206b9060"}))};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}},enumerable:false,configurable:true});return e}());var m=function(e,i){var t;var n;if(i){t=h;n=f}else{t=f;n=h}var s=e.classList;s.add(t);s.remove(n)};u.style={ios:d,md:p}}}}));
var __awaiter=this&&this.__awaiter||function(t,o,e,n){function i(t){return t instanceof e?t:new e((function(o){o(t)}))}return new(e||(e=Promise))((function(e,a){function r(t){try{s(n.next(t))}catch(t){a(t)}}function c(t){try{s(n["throw"](t))}catch(t){a(t)}}function s(t){t.done?e(t.value):i(t.value).then(r,c)}s((n=n.apply(t,o||[])).next())}))};var __generator=this&&this.__generator||function(t,o){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,r;return r={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function c(t){return function(o){return s([t,o])}}function s(c){if(n)throw new TypeError("Generator is already executing.");while(r&&(r=0,c[0]&&(e=0)),e)try{if(n=1,i&&(a=c[0]&2?i["return"]:c[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,c[1])).done)return a;if(i=0,a)c=[c[0]&2,a.value];switch(c[0]){case 0:case 1:a=c;break;case 4:e.label++;return{value:c[1],done:false};case 5:e.label++;i=c[1];c=[0];continue;case 7:c=e.ops.pop();e.trys.pop();continue;default:if(!(a=e.trys,a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){e.label=c[1];break}if(c[0]===6&&e.label<a[1]){e.label=a[1];a=c;break}if(a&&e.label<a[2]){e.label=a[2];e.ops.push(c);break}if(a[2])e.ops.pop();e.trys.pop();continue}c=o.call(t,e)}catch(t){c=[6,t];i=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-332c71da.system.js","./p-9377ed64.system.js","./p-5fc8d5ef.system.js","./p-4f255d5a.system.js","./p-6bd4492c.system.js","./p-4609d030.system.js","./p-ca86ce8b.system.js","./p-fe320051.system.js","./p-c995da88.system.js","./p-8985cdb6.system.js","./p-792919fd.system.js","./p-31b2326e.system.js","./p-c7c8429a.system.js","./p-f0d5d883.system.js","./p-6afef6c1.system.js","./p-ff4b7e40.system.js"],(function(t){"use strict";var o,e,n,i,a,r,c,s,d,u,h,l,b,f,p,g,v,m,k,x,y,w;return{setters:[function(t){o=t.r;e=t.d;n=t.e;i=t.h;a=t.H;r=t.f},function(t){c=t.c},function(t){s=t.r},function(t){d=t.c},function(t){u=t.d;h=t.e;l=t.B;b=t.i;f=t.f;p=t.g;g=t.h;v=t.s;m=t.j;k=t.k},function(t){x=t.g},function(t){y=t.b},function(t){w=t.c},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var j=function(t){var o=w();var e=w();var n=w();e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)");return o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([e,n])};var z=function(t){var o=w();var e=w();var n=w();e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)");return o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([e,n])};var _=function(t){var o=w();var e=w();var n=w();e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)");return o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([e,n])};var S=function(t){var o=w();var e=w();var n=w();e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)");return o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([e,n])};var D='.sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:calc(100vh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)));max-height:calc(100dvh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)))}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}@media (any-pointer: coarse){.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-ios:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--backdrop-opacity:var(--ion-backdrop-opacity, 0.4);--button-background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color, #000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-color-step-150, var(--ion-background-color, #fff));--button-background-selected-opacity:1;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-400, #999999);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);padding-bottom:var(--ion-safe-area-bottom, 0);-webkit-box-sizing:content-box;box-sizing:content-box}.action-sheet-container.sc-ion-action-sheet-ios{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent}.action-sheet-title.sc-ion-action-sheet-ios{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, #999999));font-size:max(13px, 0.8125rem);font-weight:400;text-align:center}.action-sheet-title.action-sheet-has-sub-title.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:6px;padding-bottom:0;font-size:max(13px, 0.8125rem);font-weight:400}.action-sheet-button.sc-ion-action-sheet-ios{-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px;padding-top:14px;padding-bottom:14px;min-height:56px;font-size:max(20px, 1.25rem);contain:content}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:max(28px, 1.75rem);pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:bold}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #eb445a)}@media (any-hover: hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger, #eb445a)}}';var O=D;var C='.sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:calc(100vh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)));max-height:calc(100dvh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)))}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}@media (any-pointer: coarse){.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, #262626);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-wrapper.sc-ion-action-sheet-md{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:0}.action-sheet-title.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:20px;padding-bottom:17px;min-height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:1rem;text-align:start}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:0.875rem}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:var(--ion-safe-area-bottom)}.action-sheet-button.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:12px;position:relative;min-height:52px;font-size:1rem;text-align:start;contain:content;overflow:hidden}.action-sheet-icon.sc-ion-action-sheet-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:1.5rem}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}';var Y=C;var A=t("ion_action_sheet",function(){function t(t){var n=this;o(this,t);this.didPresent=e(this,"ionActionSheetDidPresent",7);this.willPresent=e(this,"ionActionSheetWillPresent",7);this.willDismiss=e(this,"ionActionSheetWillDismiss",7);this.didDismiss=e(this,"ionActionSheetDidDismiss",7);this.didPresentShorthand=e(this,"didPresent",7);this.willPresentShorthand=e(this,"willPresent",7);this.willDismissShorthand=e(this,"willDismiss",7);this.didDismissShorthand=e(this,"didDismiss",7);this.delegateController=u(this);this.lockController=d();this.triggerController=h();this.presented=false;this.onBackdropTap=function(){n.dismiss(undefined,l)};this.dispatchCancelHandler=function(t){var o=t.detail.role;if(b(o)){var e=n.getButtons().find((function(t){return t.role==="cancel"}));n.callButtonHandler(e)}};this.overlayIndex=undefined;this.delegate=undefined;this.hasController=false;this.keyboardClose=true;this.enterAnimation=undefined;this.leaveAnimation=undefined;this.buttons=[];this.cssClass=undefined;this.backdropDismiss=true;this.header=undefined;this.subHeader=undefined;this.translucent=false;this.animated=true;this.htmlAttributes=undefined;this.isOpen=false;this.trigger=undefined}t.prototype.onIsOpenChange=function(t,o){if(t===true&&o===false){this.present()}else if(t===false&&o===true){this.dismiss()}};t.prototype.triggerChanged=function(){var t=this,o=t.trigger,e=t.el,n=t.triggerController;if(o){n.addClickListener(e,o)}};t.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(o){switch(o.label){case 0:return[4,this.lockController.lock()];case 1:t=o.sent();return[4,this.delegateController.attachViewToDom()];case 2:o.sent();return[4,f(this,"actionSheetEnter",j,_)];case 3:o.sent();t();return[2]}}))}))};t.prototype.dismiss=function(t,o){return __awaiter(this,void 0,void 0,(function(){var e,n;return __generator(this,(function(i){switch(i.label){case 0:return[4,this.lockController.lock()];case 1:e=i.sent();return[4,p(this,t,o,"actionSheetLeave",z,S)];case 2:n=i.sent();if(n){this.delegateController.removeViewFromDom()}e();return[2,n]}}))}))};t.prototype.onDidDismiss=function(){return g(this.el,"ionActionSheetDidDismiss")};t.prototype.onWillDismiss=function(){return g(this.el,"ionActionSheetWillDismiss")};t.prototype.buttonClick=function(t){return __awaiter(this,void 0,void 0,(function(){var o,e;return __generator(this,(function(n){switch(n.label){case 0:o=t.role;if(b(o)){return[2,this.dismiss(t.data,o)]}return[4,this.callButtonHandler(t)];case 1:e=n.sent();if(e){return[2,this.dismiss(t.data,t.role)]}return[2,Promise.resolve()]}}))}))};t.prototype.callButtonHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var o;return __generator(this,(function(e){switch(e.label){case 0:if(!t)return[3,2];return[4,v(t.handler)];case 1:o=e.sent();if(o===false){return[2,false]}e.label=2;case 2:return[2,true]}}))}))};t.prototype.getButtons=function(){return this.buttons.map((function(t){return typeof t==="string"?{text:t}:t}))};t.prototype.connectedCallback=function(){m(this.el);this.triggerChanged()};t.prototype.disconnectedCallback=function(){if(this.gesture){this.gesture.destroy();this.gesture=undefined}this.triggerController.removeClickListener()};t.prototype.componentWillLoad=function(){k(this.el)};t.prototype.componentDidLoad=function(){var t=this;var o=this,e=o.groupEl,i=o.wrapperEl;if(!this.gesture&&y(this)==="ios"&&i&&e){n((function(){var o=e.scrollHeight>e.clientHeight;if(!o){t.gesture=c(i,(function(t){return t.classList.contains("action-sheet-button")}));t.gesture.enable(true)}}))}if(this.isOpen===true){s((function(){return t.present()}))}this.triggerChanged()};t.prototype.render=function(){var t;var o=this;var e=this,n=e.header,r=e.htmlAttributes,c=e.overlayIndex;var s=y(this);var d=this.getButtons();var u=d.find((function(t){return t.role==="cancel"}));var h=d.filter((function(t){return t.role!=="cancel"}));var l="action-sheet-".concat(c,"-header");return i(a,Object.assign({key:"cd141d12d7d86d3402fd220c4afb61cdbf064c04",role:"dialog","aria-modal":"true","aria-labelledby":n!==undefined?l:null,tabindex:"-1"},r,{style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign(Object.assign((t={},t[s]=true,t),x(this.cssClass)),{"overlay-hidden":true,"action-sheet-translucent":this.translucent}),onIonActionSheetWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap}),i("ion-backdrop",{key:"b6a051e2cf5e101edbf59c8a40a04d8f7107fb3c",tappable:this.backdropDismiss}),i("div",{key:"5bfa2b37a417aaff3776f06d92a8544dfcbf714f",tabindex:"0"}),i("div",{key:"77d5a217803fd7be8f8dbedcd0ef5e59f0fd9800",class:"action-sheet-wrapper ion-overlay-wrapper",ref:function(t){return o.wrapperEl=t}},i("div",{key:"3901d56215f05cdab074e2ec321391281a165097",class:"action-sheet-container"},i("div",{key:"275f5c7981b2ee44fb632b3d137c7209cbfcf45c",class:"action-sheet-group",ref:function(t){return o.groupEl=t}},n!==undefined&&i("div",{id:l,class:{"action-sheet-title":true,"action-sheet-has-sub-title":this.subHeader!==undefined}},n,this.subHeader&&i("div",{class:"action-sheet-sub-title"},this.subHeader)),h.map((function(t){return i("button",Object.assign({},t.htmlAttributes,{type:"button",id:t.id,class:P(t),onClick:function(){return o.buttonClick(t)}}),i("span",{class:"action-sheet-button-inner"},t.icon&&i("ion-icon",{icon:t.icon,"aria-hidden":"true",lazy:false,class:"action-sheet-icon"}),t.text),s==="md"&&i("ion-ripple-effect",null))}))),u&&i("div",{class:"action-sheet-group action-sheet-group-cancel"},i("button",Object.assign({},u.htmlAttributes,{type:"button",class:P(u),onClick:function(){return o.buttonClick(u)}}),i("span",{class:"action-sheet-button-inner"},u.icon&&i("ion-icon",{icon:u.icon,"aria-hidden":"true",lazy:false,class:"action-sheet-icon"}),u.text),s==="md"&&i("ion-ripple-effect",null))))),i("div",{key:"4285893438675be9b40838a93c2ff382a1074cd3",tabindex:"0"}))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}},enumerable:false,configurable:true});return t}());var P=function(t){var o;return Object.assign((o={"action-sheet-button":true,"ion-activatable":true,"ion-focusable":true},o["action-sheet-".concat(t.role)]=t.role!==undefined,o),x(t.cssClass))};A.style={ios:O,md:Y}}}}));
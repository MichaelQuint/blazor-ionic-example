var __awaiter=this&&this.__awaiter||function(r,n,e,t){function i(r){return r instanceof e?r:new e((function(n){n(r)}))}return new(e||(e=Promise))((function(e,u){function a(r){try{f(t.next(r))}catch(r){u(r)}}function o(r){try{f(t["throw"](r))}catch(r){u(r)}}function f(r){r.done?e(r.value):i(r.value).then(a,o)}f((t=t.apply(r,n||[])).next())}))};var __generator=this&&this.__generator||function(r,n){var e={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},t,i,u,a;return a={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(r){return function(n){return f([r,n])}}function f(o){if(t)throw new TypeError("Generator is already executing.");while(a&&(a=0,o[0]&&(e=0)),e)try{if(t=1,i&&(u=o[0]&2?i["return"]:o[0]?i["throw"]||((u=i["return"])&&u.call(i),0):i.next)&&!(u=u.call(i,o[1])).done)return u;if(i=0,u)o=[o[0]&2,u.value];switch(o[0]){case 0:case 1:u=o;break;case 4:e.label++;return{value:o[1],done:false};case 5:e.label++;i=o[1];o=[0];continue;case 7:o=e.ops.pop();e.trys.pop();continue;default:if(!(u=e.trys,u=u.length>0&&u[u.length-1])&&(o[0]===6||o[0]===2)){e=0;continue}if(o[0]===3&&(!u||o[1]>u[0]&&o[1]<u[3])){e.label=o[1];break}if(o[0]===6&&e.label<u[1]){e.label=u[1];u=o;break}if(u&&e.label<u[2]){e.label=u[2];e.ops.push(o);break}if(u[2])e.ops.pop();e.trys.pop();continue}o=n.call(r,e)}catch(r){o=[6,r];i=0}finally{t=u=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(r,n,e){if(e||arguments.length===2)for(var t=0,i=n.length,u;t<i;t++){if(u||!(t in n)){if(!u)u=Array.prototype.slice.call(n,0,t);u[t]=n[t]}}return r.concat(u||Array.prototype.slice.call(n))};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-792919fd.system.js","./p-f0d5d883.system.js","./p-ff4b7e40.system.js","./p-5fc8d5ef.system.js","./p-ca86ce8b.system.js","./p-fe320051.system.js"],(function(r){"use strict";var n,e,t,i,u,a;return{setters:[function(r){n=r.d},function(r){e=r.MENU_BACK_BUTTON_PRIORITY},function(r){t=r.p},function(r){i=r.c},function(r){u=r.b},function(r){a=r.c}],execute:function(){var o=this;var f=function(r){return a().duration(r?400:300)};var s=function(r){var n;var e;var t=r.width+8;var i=a();var o=a();if(r.isEndSide){n=t+"px";e="0px"}else{n=-t+"px";e="0px"}i.addElement(r.menuInnerEl).fromTo("transform","translateX(".concat(n,")"),"translateX(".concat(e,")"));var s=u(r);var c=s==="ios";var v=c?.2:.25;o.addElement(r.backdropEl).fromTo("opacity",.01,v);return f(c).addAnimation([i,o])};var c=function(r){var n;var e;var t=u(r);var i=r.width;if(r.isEndSide){n=-i+"px";e=i+"px"}else{n=i+"px";e=-i+"px"}var o=a().addElement(r.menuInnerEl).fromTo("transform","translateX(".concat(e,")"),"translateX(0px)");var s=a().addElement(r.contentEl).fromTo("transform","translateX(0px)","translateX(".concat(n,")"));var c=a().addElement(r.backdropEl).fromTo("opacity",.01,.32);return f(t==="ios").addAnimation([o,s,c])};var v=function(r){var n=u(r);var e=r.width*(r.isEndSide?-1:1)+"px";var t=a().addElement(r.contentEl).fromTo("transform","translateX(0px)","translateX(".concat(e,")"));return f(n==="ios").addAnimation(t)};var d=function(){var r=new Map;var u=[];var a=function(r){return __awaiter(o,void 0,void 0,(function(){var n;return __generator(this,(function(e){switch(e.label){case 0:return[4,p(r,true)];case 1:n=e.sent();if(n){return[2,n.open()]}return[2,false]}}))}))};var f=function(r){return __awaiter(o,void 0,void 0,(function(){var n;return __generator(this,(function(e){switch(e.label){case 0:return[4,r!==undefined?p(r,true):m()];case 1:n=e.sent();if(n!==undefined){return[2,n.close()]}return[2,false]}}))}))};var d=function(r){return __awaiter(o,void 0,void 0,(function(){var n;return __generator(this,(function(e){switch(e.label){case 0:return[4,p(r,true)];case 1:n=e.sent();if(n){return[2,n.toggle()]}return[2,false]}}))}))};var _=function(r,n){return __awaiter(o,void 0,void 0,(function(){var e;return __generator(this,(function(t){switch(t.label){case 0:return[4,p(n)];case 1:e=t.sent();if(e){e.disabled=!r}return[2,e]}}))}))};var h=function(r,n){return __awaiter(o,void 0,void 0,(function(){var e;return __generator(this,(function(t){switch(t.label){case 0:return[4,p(n)];case 1:e=t.sent();if(e){e.swipeGesture=r}return[2,e]}}))}))};var l=function(r){return __awaiter(o,void 0,void 0,(function(){var n,n;return __generator(this,(function(e){switch(e.label){case 0:if(!(r!=null))return[3,2];return[4,p(r)];case 1:n=e.sent();return[2,n!==undefined&&n.isOpen()];case 2:return[4,m()];case 3:n=e.sent();return[2,n!==undefined]}}))}))};var w=function(r){return __awaiter(o,void 0,void 0,(function(){var n;return __generator(this,(function(e){switch(e.label){case 0:return[4,p(r)];case 1:n=e.sent();if(n){return[2,!n.disabled]}return[2,false]}}))}))};var p=function(r){var n=[];for(var e=1;e<arguments.length;e++){n[e-1]=arguments[e]}return __awaiter(o,__spreadArray([r],n,true),void 0,(function(r,n){var e,i,a;if(n===void 0){n=false}return __generator(this,(function(o){switch(o.label){case 0:return[4,E()];case 1:o.sent();if(r==="start"||r==="end"){e=u.filter((function(n){return n.side===r&&!n.disabled}));if(e.length>=1){if(e.length>1&&n){t('menuController queried for a menu on the "'.concat(r,'" side, but ').concat(e.length," menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side."),e.map((function(r){return r.el})))}return[2,e[0].el]}i=u.filter((function(n){return n.side===r}));if(i.length>=1){if(i.length>1&&n){t('menuController queried for a menu on the "'.concat(r,'" side, but ').concat(i.length," menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side."),i.map((function(r){return r.el})))}return[2,i[0].el]}}else if(r!=null){return[2,S((function(n){return n.menuId===r}))]}a=S((function(r){return!r.disabled}));if(a){return[2,a]}return[2,u.length>0?u[0].el:undefined]}}))}))};var m=function(){return __awaiter(o,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:return[4,E()];case 1:r.sent();return[2,k()]}}))}))};var y=function(){return __awaiter(o,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:return[4,E()];case 1:r.sent();return[2,I()]}}))}))};var g=function(){return __awaiter(o,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:return[4,E()];case 1:r.sent();return[2,O()]}}))}))};var b=function(n,e){r.set(n,e)};var x=function(r){if(u.indexOf(r)<0){u.push(r)}};var A=function(r){var n=u.indexOf(r);if(n>-1){u.splice(n,1)}};var X=function(r,n,e){return __awaiter(o,void 0,void 0,(function(){var t;return __generator(this,(function(i){switch(i.label){case 0:if(O()){return[2,false]}if(!n)return[3,3];return[4,m()];case 1:t=i.sent();if(!(t&&r.el!==t))return[3,3];return[4,t.setOpen(false,false)];case 2:i.sent();i.label=3;case 3:return[2,r._setOpen(n,e)]}}))}))};var j=function(n,e){var t=r.get(n);if(!t){throw new Error("animation not registered")}var i=t(e);return i};var k=function(){return S((function(r){return r._isOpen}))};var I=function(){return u.map((function(r){return r.el}))};var O=function(){return u.some((function(r){return r.isAnimating}))};var S=function(r){var n=u.find(r);if(n!==undefined){return n.el}return undefined};var E=function(){return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((function(r){return new Promise((function(n){return i(r,n)}))})))};b("reveal",v);b("push",c);b("overlay",s);n===null||n===void 0?void 0:n.addEventListener("ionBackButton",(function(r){var n=k();if(n){r.detail.register(e,(function(){return n.close()}))}}));return{registerAnimation:b,get:p,getMenus:y,getOpen:m,isEnabled:w,swipeGesture:h,isAnimating:g,isOpen:l,enable:_,toggle:d,close:f,open:a,_getOpenSync:k,_createAnimation:j,_register:x,_unregister:A,_setOpen:X}};var _=r("m",d())}}}));
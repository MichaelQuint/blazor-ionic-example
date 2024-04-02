var __awaiter=this&&this.__awaiter||function(r,t,n,e){function i(r){return r instanceof n?r:new n((function(t){t(r)}))}return new(n||(n=Promise))((function(n,u){function o(r){try{f(e.next(r))}catch(r){u(r)}}function a(r){try{f(e["throw"](r))}catch(r){u(r)}}function f(r){r.done?n(r.value):i(r.value).then(o,a)}f((e=e.apply(r,t||[])).next())}))};var __generator=this&&this.__generator||function(r,t){var n={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},e,i,u,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(r){return function(t){return f([r,t])}}function f(a){if(e)throw new TypeError("Generator is already executing.");while(o&&(o=0,a[0]&&(n=0)),n)try{if(e=1,i&&(u=a[0]&2?i["return"]:a[0]?i["throw"]||((u=i["return"])&&u.call(i),0):i.next)&&!(u=u.call(i,a[1])).done)return u;if(i=0,u)a=[a[0]&2,u.value];switch(a[0]){case 0:case 1:u=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(u=n.trys,u=u.length>0&&u[u.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!u||a[1]>u[0]&&a[1]<u[3])){n.label=a[1];break}if(a[0]===6&&n.label<u[1]){n.label=u[1];u=a;break}if(u&&n.label<u[2]){n.label=u[2];n.ops.push(a);break}if(u[2])n.ops.pop();n.trys.pop();continue}a=t.call(r,n)}catch(r){a=[6,r];i=0}finally{e=u=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(r,t,n){if(n||arguments.length===2)for(var e=0,i=t.length,u;e<i;e++){if(u||!(e in t)){if(!u)u=Array.prototype.slice.call(t,0,e);u[e]=t[e]}}return r.concat(u||Array.prototype.slice.call(t))};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-332c71da.system.js","./p-5fc8d5ef.system.js","./p-4609d030.system.js","./p-ca86ce8b.system.js"],(function(r){"use strict";var t,n,e,i,u,o,a,f,s,c;return{setters:[function(r){t=r.r;n=r.d;e=r.f;i=r.h;u=r.H},function(r){o=r.c;a=r.q},function(r){f=r.o;s=r.c},function(r){c=r.b}],execute:function(){var h=this;var v=r("ion_route",function(){function r(r){t(this,r);this.ionRouteDataChanged=n(this,"ionRouteDataChanged",7);this.url="";this.component=undefined;this.componentProps=undefined;this.beforeLeave=undefined;this.beforeEnter=undefined}r.prototype.onUpdate=function(r){this.ionRouteDataChanged.emit(r)};r.prototype.onComponentProps=function(r,t){if(r===t){return}var n=r?Object.keys(r):[];var e=t?Object.keys(t):[];if(n.length!==e.length){this.onUpdate(r);return}for(var i=0,u=n;i<u.length;i++){var o=u[i];if(r[o]!==t[o]){this.onUpdate(r);return}}};r.prototype.connectedCallback=function(){this.ionRouteDataChanged.emit()};Object.defineProperty(r,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:false,configurable:true});return r}());var l=r("ion_route_redirect",function(){function r(r){t(this,r);this.ionRouteRedirectChanged=n(this,"ionRouteRedirectChanged",7);this.from=undefined;this.to=undefined}r.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()};r.prototype.connectedCallback=function(){this.ionRouteRedirectChanged.emit()};Object.defineProperty(r,"watchers",{get:function(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:false,configurable:true});return r}());var d="root";var _="forward";var w="back";var b=function(r){var t=r.filter((function(r){return r.length>0})).join("/");return"/"+t};var g=function(r,t,n){var e=b(r);if(t){e="#"+e}if(n!==undefined){e+="?"+n}return e};var m=function(r,t,n,e,i,u,o){var a=g(__spreadArray(__spreadArray([],j(t).segments,true),e,true),n,o);if(i===_){r.pushState(u,"",a)}else{r.replaceState(u,"",a)}};var p=function(r){var t=[];for(var n=0,e=r;n<e.length;n++){var i=e[n];for(var u=0,o=i.segments;u<o.length;u++){var a=o[u];if(a[0]===":"){var f=i.params&&i.params[a.slice(1)];if(!f){return null}t.push(f)}else if(a!==""){t.push(a)}}}return t};var y=function(r,t){if(r.length>t.length){return null}if(r.length<=1&&r[0]===""){return t}for(var n=0;n<r.length;n++){if(r[n]!==t[n]){return null}}if(t.length===r.length){return[""]}return t.slice(r.length)};var R=function(r,t,n){var e=j(t).segments;var i=n?r.hash.slice(1):r.pathname;var u=j(i).segments;return y(e,u)};var j=function(r){var t=[""];var n;if(r!=null){var e=r.indexOf("?");if(e>-1){n=r.substring(e+1);r=r.substring(0,e)}t=r.split("/").map((function(r){return r.trim()})).filter((function(r){return r.length>0}));if(t.length===0){t=[""]}}return{segments:t,queryString:n}};var O=function(r){console.group("[ion-core] ROUTES[".concat(r.length,"]"));var t=function(r){var t=[];r.forEach((function(r){return t.push.apply(t,r.segments)}));var n=r.map((function(r){return r.id}));console.debug("%c ".concat(b(t)),"font-weight: bold; padding-left: 20px","=>\t","(".concat(n.join(", "),")"))};for(var n=0,e=r;n<e.length;n++){var i=e[n];t(i)}console.groupEnd()};var k=function(r){console.group("[ion-core] REDIRECTS[".concat(r.length,"]"));for(var t=0,n=r;t<n.length;t++){var e=n[t];if(e.to){console.debug("FROM: ","$c ".concat(b(e.from)),"font-weight: bold"," TO: ","$c ".concat(b(e.to.segments)),"font-weight: bold")}}console.groupEnd()};var C=function(r,t,n,e){var i=[];for(var u=4;u<arguments.length;u++){i[u-4]=arguments[u]}return __awaiter(h,__spreadArray([r,t,n,e],i,true),void 0,(function(r,t,n,e,i,u){var a,f,s,c;if(i===void 0){i=false}return __generator(this,(function(h){switch(h.label){case 0:h.trys.push([0,6,,7]);a=P(r);if(e>=t.length||!a){return[2,i]}return[4,new Promise((function(r){return o(a,r)}))];case 1:h.sent();f=t[e];return[4,a.setRouteId(f.id,f.params,n,u)];case 2:s=h.sent();if(s.changed){n=d;i=true}return[4,C(s.element,t,n,e+1,i,u)];case 3:i=h.sent();if(!s.markVisible)return[3,5];return[4,s.markVisible()];case 4:h.sent();h.label=5;case 5:return[2,i];case 6:c=h.sent();console.error(c);return[2,false];case 7:return[2]}}))}))};var E=function(r){return __awaiter(h,void 0,void 0,(function(){var t,n,e,i;return __generator(this,(function(u){switch(u.label){case 0:t=[];e=r;u.label=1;case 1:if(!(n=P(e)))return[3,3];return[4,n.getRouteId()];case 2:i=u.sent();if(i){e=i.element;i.element=undefined;t.push(i)}else{return[3,3]}return[3,1];case 3:return[2,{ids:t,outlet:n}]}}))}))};var A=function(){if(P(document.body)){return Promise.resolve()}return new Promise((function(r){window.addEventListener("ionNavWillLoad",(function(){return r()}),{once:true})}))};var x=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";var P=function(r){if(!r){return undefined}if(r.matches(x)){return r}var t=r.querySelector(x);return t!==null&&t!==void 0?t:undefined};var U=function(r,t){var n=t.from,e=t.to;if(e===undefined){return false}if(n.length>r.length){return false}for(var i=0;i<n.length;i++){var u=n[i];if(u==="*"){return true}if(u!==r[i]){return false}}return n.length===r.length};var D=function(r,t){return t.find((function(t){return U(r,t)}))};var L=function(r,t){var n=Math.min(r.length,t.length);var e=0;for(var i=0;i<n;i++){var u=r[i];var o=t[i];if(u.id.toLowerCase()!==o.id){break}if(u.params){var a=Object.keys(u.params);if(a.length===o.segments.length){var f=a.map((function(r){return":".concat(r)}));for(var s=0;s<f.length;s++){if(f[s].toLowerCase()!==o.segments[s]){break}e++}}}e++}return e};var T=function(r,t){var n=new q(r);var e=false;var i;for(var u=0;u<t.length;u++){var o=t[u].segments;if(o[0]===""){e=true}else{for(var a=0,f=o;a<f.length;a++){var s=f[a];var c=n.next();if(s[0]===":"){if(c===""){return null}i=i||[];var h=i[u]||(i[u]={});h[s.slice(1)]=c}else if(c!==s){return null}}e=false}}var v=e?e===(n.next()===""):true;if(!v){return null}if(i){return t.map((function(r,t){return{id:r.id,segments:r.segments,params:S(r.params,i[t]),beforeEnter:r.beforeEnter,beforeLeave:r.beforeLeave}}))}return t};var S=function(r,t){return r||t?Object.assign(Object.assign({},r),t):undefined};var I=function(r,t){var n=null;var e=0;for(var i=0,u=t;i<u.length;i++){var o=u[i];var a=L(r,o);if(a>e){n=o;e=a}}if(n){return n.map((function(t,n){var e;return{id:t.id,segments:t.segments,params:S(t.params,(e=r[n])===null||e===void 0?void 0:e.params)}}))}return null};var M=function(r,t){var n=null;var e=0;for(var i=0,u=t;i<u.length;i++){var o=u[i];var a=T(r,o);if(a!==null){var f=N(a);if(f>e){e=f;n=a}}}return n};var N=function(r){var t=1;var n=1;for(var e=0,i=r;e<i.length;e++){var u=i[e];for(var o=0,a=u.segments;o<a.length;o++){var f=a[o];if(f[0]===":"){t+=Math.pow(1,n)}else if(f!==""){t+=Math.pow(2,n)}n++}}return t};var q=function(){function r(r){this.segments=r.slice()}r.prototype.next=function(){if(this.segments.length>0){return this.segments.shift()}return""};return r}();var F=function(r,t){if(t in r){return r[t]}if(r.hasAttribute(t)){return r.getAttribute(t)}return null};var W=function(r){return Array.from(r.children).filter((function(r){return r.tagName==="ION-ROUTE-REDIRECT"})).map((function(r){var t=F(r,"to");return{from:j(F(r,"from")).segments,to:t==null?undefined:j(t)}}))};var $=function(r){return G(z(r))};var z=function(r){return Array.from(r.children).filter((function(r){return r.tagName==="ION-ROUTE"&&r.component})).map((function(r){var t=F(r,"component");return{segments:j(F(r,"url")).segments,id:t.toLowerCase(),params:r.componentProps,beforeLeave:r.beforeLeave,beforeEnter:r.beforeEnter,children:z(r)}}))};var G=function(r){var t=[];for(var n=0,e=r;n<e.length;n++){var i=e[n];B([],t,i)}return t};var B=function(r,t,n){r=__spreadArray(__spreadArray([],r,true),[{id:n.id,segments:n.segments,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}],false);if(n.children.length===0){t.push(r);return}for(var e=0,i=n.children;e<i.length;e++){var u=i[e];B(r,t,u)}};var H=r("ion_router",function(){function r(r){t(this,r);this.ionRouteWillChange=n(this,"ionRouteWillChange",7);this.ionRouteDidChange=n(this,"ionRouteDidChange",7);this.previousPath=null;this.busy=false;this.state=0;this.lastState=0;this.root="/";this.useHash=true}r.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var r,t,n;return __generator(this,(function(e){switch(e.label){case 0:return[4,A()];case 1:e.sent();return[4,this.runGuards(this.getSegments())];case 2:r=e.sent();if(!(r!==true))return[3,5];if(!(typeof r==="object"))return[3,4];t=r.redirect;n=j(t);this.setSegments(n.segments,d,n.queryString);return[4,this.writeNavStateRoot(n.segments,d)];case 3:e.sent();e.label=4;case 4:return[3,7];case 5:return[4,this.onRoutesChanged()];case 6:e.sent();e.label=7;case 7:return[2]}}))}))};r.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",a(this.onRedirectChanged.bind(this),10));window.addEventListener("ionRouteDataChanged",a(this.onRoutesChanged.bind(this),100))};r.prototype.onPopState=function(){return __awaiter(this,void 0,void 0,(function(){var r,t,n;return __generator(this,(function(e){switch(e.label){case 0:r=this.historyDirection();t=this.getSegments();return[4,this.runGuards(t)];case 1:n=e.sent();if(n!==true){if(typeof n==="object"){t=j(n.redirect).segments}else{return[2,false]}}return[2,this.writeNavStateRoot(t,r)]}}))}))};r.prototype.onBackButton=function(r){var t=this;r.detail.register(0,(function(r){t.back();r()}))};r.prototype.canTransition=function(){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:return[4,this.runGuards()];case 1:r=t.sent();if(r!==true){if(typeof r==="object"){return[2,r.redirect]}else{return[2,false]}}return[2,true]}}))}))};r.prototype.push=function(r){return __awaiter(this,arguments,void 0,(function(r,t,n){var e,i,u,o,a;if(t===void 0){t="forward"}return __generator(this,(function(f){switch(f.label){case 0:if(r.startsWith(".")){i=(e=this.previousPath)!==null&&e!==void 0?e:"/";u=new URL(r,"https://host/".concat(i));r=u.pathname+u.search}o=j(r);return[4,this.runGuards(o.segments)];case 1:a=f.sent();if(a!==true){if(typeof a==="object"){o=j(a.redirect)}else{return[2,false]}}this.setSegments(o.segments,t,o.queryString);return[2,this.writeNavStateRoot(o.segments,t,n)]}}))}))};r.prototype.back=function(){window.history.back();return Promise.resolve(this.waitPromise)};r.prototype.printDebug=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){O($(this.el));k(W(this.el));return[2]}))}))};r.prototype.navChanged=function(r){return __awaiter(this,void 0,void 0,(function(){var t,n,e,i,u,o;return __generator(this,(function(a){switch(a.label){case 0:if(this.busy){console.warn("[ion-router] router is busy, navChanged was cancelled");return[2,false]}return[4,E(window.document.body)];case 1:t=a.sent(),n=t.ids,e=t.outlet;i=$(this.el);u=I(n,i);if(!u){console.warn("[ion-router] no matching URL for ",n.map((function(r){return r.id})));return[2,false]}o=p(u);if(!o){console.warn("[ion-router] router could not match path because some required param is missing");return[2,false]}this.setSegments(o,r);return[4,this.safeWriteNavState(e,u,d,o,null,n.length)];case 2:a.sent();return[2,true]}}))}))};r.prototype.onRedirectChanged=function(){var r=this.getSegments();if(r&&D(r,W(this.el))){this.writeNavStateRoot(r,d)}};r.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getSegments(),d)};r.prototype.historyDirection=function(){var r;var t=window;if(t.history.state===null){this.state++;t.history.replaceState(this.state,t.document.title,(r=t.document.location)===null||r===void 0?void 0:r.href)}var n=t.history.state;var e=this.lastState;this.lastState=n;if(n>e||n>=e&&e>0){return _}if(n<e){return w}return d};r.prototype.writeNavStateRoot=function(r,t,n){return __awaiter(this,void 0,void 0,(function(){var e,i,u,o,a,f,s,c;return __generator(this,(function(h){if(!r){console.error("[ion-router] URL is not part of the routing set");return[2,false]}e=W(this.el);i=D(r,e);u=null;if(i){o=i.to,a=o.segments,f=o.queryString;this.setSegments(a,t,f);u=i.from;r=a}s=$(this.el);c=M(r,s);if(!c){console.error("[ion-router] the path does not match any route");return[2,false]}return[2,this.safeWriteNavState(document.body,c,t,r,u,0,n)]}))}))};r.prototype.safeWriteNavState=function(r,t,n,e,i){return __awaiter(this,arguments,void 0,(function(r,t,n,e,i,u,o){var a,f,s;if(u===void 0){u=0}return __generator(this,(function(c){switch(c.label){case 0:return[4,this.lock()];case 1:a=c.sent();f=false;c.label=2;case 2:c.trys.push([2,4,,5]);return[4,this.writeNavState(r,t,n,e,i,u,o)];case 3:f=c.sent();return[3,5];case 4:s=c.sent();console.error(s);return[3,5];case 5:a();return[2,f]}}))}))};r.prototype.lock=function(){return __awaiter(this,void 0,void 0,(function(){var r,t;return __generator(this,(function(n){switch(n.label){case 0:r=this.waitPromise;this.waitPromise=new Promise((function(r){return t=r}));if(!(r!==undefined))return[3,2];return[4,r];case 1:n.sent();n.label=2;case 2:return[2,t]}}))}))};r.prototype.runGuards=function(){return __awaiter(this,arguments,void 0,(function(r,t){var n,e,i,u,o,a,f;if(r===void 0){r=this.getSegments()}return __generator(this,(function(s){switch(s.label){case 0:if(t===undefined){t=j(this.previousPath).segments}if(!r||!t){return[2,true]}n=$(this.el);e=M(t,n);i=e&&e[e.length-1].beforeLeave;if(!i)return[3,2];return[4,i()];case 1:o=s.sent();return[3,3];case 2:o=true;s.label=3;case 3:u=o;if(u===false||typeof u==="object"){return[2,u]}a=M(r,n);f=a&&a[a.length-1].beforeEnter;return[2,f?f():true]}}))}))};r.prototype.writeNavState=function(r,t,n,e,i){return __awaiter(this,arguments,void 0,(function(r,t,n,e,i,u,o){var a,f;if(u===void 0){u=0}return __generator(this,(function(s){switch(s.label){case 0:if(this.busy){console.warn("[ion-router] router is busy, transition was cancelled");return[2,false]}this.busy=true;a=this.routeChangeEvent(e,i);if(a){this.ionRouteWillChange.emit(a)}return[4,C(r,t,n,u,false,o)];case 1:f=s.sent();this.busy=false;if(a){this.ionRouteDidChange.emit(a)}return[2,f]}}))}))};r.prototype.setSegments=function(r,t,n){this.state++;m(window.history,this.root,this.useHash,r,t,this.state,n)};r.prototype.getSegments=function(){return R(window.location,this.root,this.useHash)};r.prototype.routeChangeEvent=function(r,t){var n=this.previousPath;var e=b(r);this.previousPath=e;if(e===n){return null}var i=t?b(t):null;return{from:n,redirectedFrom:i,to:e}};Object.defineProperty(r.prototype,"el",{get:function(){return e(this)},enumerable:false,configurable:true});return r}());var J=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";var K=J;var Q=r("ion_router_link",function(){function r(r){var n=this;t(this,r);this.onClick=function(r){f(n.href,r,n.routerDirection,n.routerAnimation)};this.color=undefined;this.href=undefined;this.rel=undefined;this.routerDirection="forward";this.routerAnimation=undefined;this.target=undefined}r.prototype.render=function(){var r;var t=c(this);var n={href:this.href,rel:this.rel,target:this.target};return i(u,{key:"ca8b357234ae511a20f6a47487bb86cbaaa5f5ef",onClick:this.onClick,class:s(this.color,(r={},r[t]=true,r["ion-activatable"]=true,r))},i("a",Object.assign({key:"f590738389776d480014f18f599d753c68840e49"},n),i("slot",{key:"525ff073d71ede310e9f790b49f7414bf5a0919b"})))};return r}());Q.style=K}}}));
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
System.register(["./p-332c71da.system.js","./p-c995da88.system.js","./p-31b2326e.system.js"],(function(n){"use strict";var t,e,r,u,i;return{setters:[function(n){t=n.w},function(n){e=n.h;r=n.a;u=n.b},function(n){i=n.createGesture}],execute:function(){var f=n("c",(function(n,f){var o;var c;var a=function(n,t,e){if(typeof document==="undefined"){return}var r=document.elementFromPoint(n,t);if(!r||!f(r)){d();return}if(r!==o){d();s(r,e)}};var s=function(n,e){o=n;if(!c){c=o}var r=o;t((function(){return r.classList.add("ion-activated")}));e()};var d=function(n){if(n===void 0){n=false}if(!o){return}var e=o;t((function(){return e.classList.remove("ion-activated")}));if(n&&c!==o){o.click()}o=undefined};return i({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:function(n){return a(n.currentX,n.currentY,r)},onMove:function(n){return a(n.currentX,n.currentY,u)},onEnd:function(){d(true);e();c=undefined}})}))}}}));
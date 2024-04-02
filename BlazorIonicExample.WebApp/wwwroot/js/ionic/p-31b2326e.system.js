/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
System.register(["./p-c7c8429a.system.js"],(function(r){"use strict";var e;return{setters:[function(n){e=n.G;r("GESTURE_CONTROLLER",n.G)}],execute:function(){var n=function(r,e,n,a){var i=t(r)?{capture:!!a.capture,passive:!!a.passive}:!!a.capture;var f;var u;if(r["__zone_symbol__addEventListener"]){f="__zone_symbol__addEventListener";u="__zone_symbol__removeEventListener"}else{f="addEventListener";u="removeEventListener"}r[f](e,n,i);return function(){r[u](e,n,i)}};var t=function(r){if(a===undefined){try{var e=Object.defineProperty({},"passive",{get:function(){a=true}});r.addEventListener("optsTest",(function(){return}),e)}catch(r){a=false}}return!!a};var a;var i=2e3;var f=function(r,e,t,a,f){var v;var o;var s;var c;var l;var d;var m;var p=0;var y=function(a){p=Date.now()+i;if(!e(a)){return}if(!o&&t){o=n(r,"touchmove",t,f)}if(!s){s=n(a.target,"touchend",h,f)}if(!c){c=n(a.target,"touchcancel",h,f)}};var _=function(a){if(p>Date.now()){return}if(!e(a)){return}if(!d&&t){d=n(u(r),"mousemove",t,f)}if(!m){m=n(u(r),"mouseup",b,f)}};var h=function(r){E();if(a){a(r)}};var b=function(r){L();if(a){a(r)}};var E=function(){if(o){o()}if(s){s()}if(c){c()}o=s=c=undefined};var L=function(){if(d){d()}if(m){m()}d=m=undefined};var D=function(){E();L()};var T=function(e){if(e===void 0){e=true}if(!e){if(v){v()}if(l){l()}v=l=undefined;D()}else{if(!v){v=n(r,"touchstart",y,f)}if(!l){l=n(r,"mousedown",_,f)}}};var g=function(){T(false);a=t=e=undefined};return{enable:T,stop:D,destroy:g}};var u=function(r){return r instanceof Document?r:r.ownerDocument};var v=function(r,e,n){var t=n*(Math.PI/180);var a=r==="x";var i=Math.cos(t);var f=e*e;var u=0;var v=0;var o=false;var s=0;return{start:function(r,e){u=r;v=e;s=0;o=true},detect:function(r,e){if(!o){return false}var n=r-u;var t=e-v;var c=n*n+t*t;if(c<f){return false}var l=Math.sqrt(c);var d=(a?n:t)/l;if(d>i){s=1}else if(d<-i){s=-1}else{s=0}o=false;return true},isGesture:function(){return s!==0},getDirection:function(){return s}}};var o=r("createGesture",(function(r){var n=false;var t=false;var a=true;var i=false;var u=Object.assign({disableScroll:false,direction:"x",gesturePriority:0,passive:true,maxAngle:40,threshold:10},r);var o=u.canStart;var d=u.onWillStart;var m=u.onStart;var p=u.onEnd;var y=u.notCaptured;var _=u.onMove;var h=u.threshold;var b=u.passive;var E=u.blurOnStart;var L={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:undefined,data:undefined};var D=v(u.direction,u.threshold,u.maxAngle);var T=e.createGesture({name:r.gestureName,priority:r.gesturePriority,disableScroll:r.disableScroll});var g=function(r){var e=l(r);if(t||!a){return false}c(r,L);L.startX=L.currentX;L.startY=L.currentY;L.startTime=L.currentTime=e;L.velocityX=L.velocityY=L.deltaX=L.deltaY=0;L.event=r;if(o&&o(L)===false){return false}T.release();if(!T.start()){return false}t=true;if(h===0){return S()}D.start(L.startX,L.startY);return true};var x=function(r){if(n){if(!i&&a){i=true;s(L,r);requestAnimationFrame(O)}return}s(L,r);if(D.detect(L.currentX,L.currentY)){if(!D.isGesture()||!S()){R()}}};var O=function(){if(!n){return}i=false;if(_){_(L)}};var S=function(){if(!T.capture()){return false}n=true;a=false;L.startX=L.currentX;L.startY=L.currentY;L.startTime=L.currentTime;if(d){d(L).then(Y)}else{Y()}return true};var X=function(){if(typeof document!=="undefined"){var r=document.activeElement;if(r===null||r===void 0?void 0:r.blur){r.blur()}}};var Y=function(){if(E){X()}if(m){m(L)}a=true};var j=function(){n=false;t=false;i=false;a=true;T.release()};var G=function(r){var e=n;var t=a;j();if(!t){return}s(L,r);if(e){if(p){p(L)}return}if(y){y(L)}};var M=f(u.el,g,x,G,{capture:false,passive:b});var R=function(){j();M.stop();if(y){y(L)}};return{enable:function(r){if(r===void 0){r=true}if(!r){if(n){G(undefined)}j()}M.enable(r)},destroy:function(){T.destroy();M.destroy()}}}));var s=function(r,e){if(!e){return}var n=r.currentX;var t=r.currentY;var a=r.currentTime;c(e,r);var i=r.currentX;var f=r.currentY;var u=r.currentTime=l(e);var v=u-a;if(v>0&&v<100){var o=(i-n)/v;var s=(f-t)/v;r.velocityX=o*.7+r.velocityX*.3;r.velocityY=s*.7+r.velocityY*.3}r.deltaX=i-r.startX;r.deltaY=f-r.startY;r.event=e};var c=function(r,e){var n=0;var t=0;if(r){var a=r.changedTouches;if(a&&a.length>0){var i=a[0];n=i.clientX;t=i.clientY}else if(r.pageX!==undefined){n=r.pageX;t=r.pageY}}e.currentX=n;e.currentY=t};var l=function(r){return r.timeStamp||Date.now()}}}}));
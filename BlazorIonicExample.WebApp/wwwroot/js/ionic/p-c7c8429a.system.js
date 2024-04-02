/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
System.register([],(function(t){"use strict";return{execute:function(){var i=function(){function t(){this.gestureId=0;this.requestedStart=new Map;this.disabledGestures=new Map;this.disabledScroll=new Set}t.prototype.createGesture=function(t){var i;return new n(this,this.newID(),t.name,(i=t.priority)!==null&&i!==void 0?i:0,!!t.disableScroll)};t.prototype.createBlocker=function(t){if(t===void 0){t={}}return new s(this,this.newID(),t.disable,!!t.disableScroll)};t.prototype.start=function(t,i,n){if(!this.canStart(t)){this.requestedStart.delete(i);return false}this.requestedStart.set(i,n);return true};t.prototype.capture=function(t,i,n){if(!this.start(t,i,n)){return false}var s=this.requestedStart;var h=-1e4;s.forEach((function(t){h=Math.max(h,t)}));if(h===n){this.capturedId=i;s.clear();var r=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});document.dispatchEvent(r);return true}s.delete(i);return false};t.prototype.release=function(t){this.requestedStart.delete(t);if(this.capturedId===t){this.capturedId=undefined}};t.prototype.disableGesture=function(t,i){var n=this.disabledGestures.get(t);if(n===undefined){n=new Set;this.disabledGestures.set(t,n)}n.add(i)};t.prototype.enableGesture=function(t,i){var n=this.disabledGestures.get(t);if(n!==undefined){n.delete(i)}};t.prototype.disableScroll=function(t){this.disabledScroll.add(t);if(this.disabledScroll.size===1){document.body.classList.add(h)}};t.prototype.enableScroll=function(t){this.disabledScroll.delete(t);if(this.disabledScroll.size===0){document.body.classList.remove(h)}};t.prototype.canStart=function(t){if(this.capturedId!==undefined){return false}if(this.isDisabled(t)){return false}return true};t.prototype.isCaptured=function(){return this.capturedId!==undefined};t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0};t.prototype.isDisabled=function(t){var i=this.disabledGestures.get(t);if(i&&i.size>0){return true}return false};t.prototype.newID=function(){this.gestureId++;return this.gestureId};return t}();var n=function(){function t(t,i,n,s,h){this.id=i;this.name=n;this.disableScroll=h;this.priority=s*1e6+i;this.ctrl=t}t.prototype.canStart=function(){if(!this.ctrl){return false}return this.ctrl.canStart(this.name)};t.prototype.start=function(){if(!this.ctrl){return false}return this.ctrl.start(this.name,this.id,this.priority)};t.prototype.capture=function(){if(!this.ctrl){return false}var t=this.ctrl.capture(this.name,this.id,this.priority);if(t&&this.disableScroll){this.ctrl.disableScroll(this.id)}return t};t.prototype.release=function(){if(this.ctrl){this.ctrl.release(this.id);if(this.disableScroll){this.ctrl.enableScroll(this.id)}}};t.prototype.destroy=function(){this.release();this.ctrl=undefined};return t}();var s=function(){function t(t,i,n,s){this.id=i;this.disable=n;this.disableScroll=s;this.ctrl=t}t.prototype.block=function(){if(!this.ctrl){return}if(this.disable){for(var t=0,i=this.disable;t<i.length;t++){var n=i[t];this.ctrl.disableGesture(n,this.id)}}if(this.disableScroll){this.ctrl.disableScroll(this.id)}};t.prototype.unblock=function(){if(!this.ctrl){return}if(this.disable){for(var t=0,i=this.disable;t<i.length;t++){var n=i[t];this.ctrl.enableGesture(n,this.id)}}if(this.disableScroll){this.ctrl.enableScroll(this.id)}};t.prototype.destroy=function(){this.unblock();this.ctrl=undefined};return t}();var h="backdrop-no-scroll";var r=t("G",new i)}}}));
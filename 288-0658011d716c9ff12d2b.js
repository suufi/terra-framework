(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{1048:function(e,t,n){e.exports={"content-wrapper":"DateInput-test-module__content-wrapper___1RCj1"}},2482:function(e,t,n){"use strict";var r=n(15),o=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(93)),i=r(n(0)),a=o(n(1028)),c=o(n(4)),l=o(n(1048)),s=c.default.bind(l.default),f=function(){var e=(0,i.useState)(""),t=(0,u.default)(e,2),n=t[0],r=t[1];return i.default.createElement("div",{className:s("content-wrapper")},i.default.createElement(a.default,{name:"date-input",value:n,onChange:function(e,t){return r(t)},displayFormat:"month-day-year"}),i.default.createElement("p",null,"DateInput Value: ".concat(n)))};t.default=f},355:function(e,t){var n,r,o=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===u||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:u}catch(e){n=u}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,l=[],s=!1,f=-1;function p(){s&&c&&(s=!1,c.length?l=c.concat(l):f=-1,l.length&&d())}function d(){if(!s){var e=a(p);s=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||s||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);
//# sourceMappingURL=288-0658011d716c9ff12d2b.js.map
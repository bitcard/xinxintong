!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=160)}({0:function(e,t,n){"use strict";function r(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},1:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(d(r.parts[i],t))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(d(r.parts[i],t));h[r.id]={id:r.id,refs:1,parts:s}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a=i[1],c=i[2],l=i[3],u={css:a,media:c,sourceMap:l};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}function i(e,t){var n=b(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=w[w.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),w.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=b(e.insertAt.before,n);n.insertBefore(t,o)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=w.indexOf(e);t>=0&&w.splice(t,1)}function a(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=u();n&&(e.attrs.nonce=n)}return l(t,e.attrs),i(e,t),t}function c(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",l(t,e.attrs),i(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(){return n.nc}function d(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var l=y++;n=x||(x=a(t)),r=f.bind(null,n,l,!1),o=f.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=g.bind(null,n,t),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=p.bind(null,n),o=function(){s(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function g(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=S(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var h={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e,t){return t?t.querySelector(e):document.querySelector(e)},b=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=v.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),x=null,y=0,w=[],S=n(4);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],s=0;s<n.length;s++){var a=n[s],c=h[a.id];c.refs--,i.push(c)}if(e){r(o(e,t),t)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete h[c.id]}}}};var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},160:function(e,t,n){e.exports=n(86)},2:function(e,t,n){"use strict";var r=angular.module("http.ui.xxt",["ng"]);r.provider("tmsLocation",function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){var e=t.search();if(arguments.length){for(var n=[],r=0,o=arguments.length;r<o;r++)n.push(arguments[r]+"="+(e[arguments[r]]||""));return n.join("&")}return e},j:function(n){var r=e,o=[];n&&n.length&&(r+="/"+n);for(var i=1,s=arguments.length;i<s;i++)o.push(arguments[i]+"="+(t.search()[arguments[i]]||""));return o.length&&(r+="?"+o.join("&")),r},path:function(){return arguments.length?t.path(arguments[0]):t.path()}}}]}),r.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,r,o,i){function s(t,n,r){var s;return o.trustAsHtml(t),s=angular.element("<div></div>"),s.attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),r||s[0].addEventListener("click",function(){document.body.removeChild(s[0])},!0),i(s)(e),document.body.appendChild(s[0]),s[0]}function a(e){e&&document.body.removeChild(e)}function c(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}function l(e,t,n){if(t){if(e){if(angular.isArray(e)){e.length>t.length&&e.splice(t.length-1,e.length-t.length);for(var r=0,o=t.length;r<o;r++)r<e.length?l(e[r],t[r],n):e.push(t[r])}else if(angular.isObject(e)){for(var i in e)n&&-1!==n.indexOf(i)||(void 0===t[i]?delete e[i]:angular.isObject(t[i])&&angular.isObject(e[i])?l(e[i],t[i],n):e[i]=t[i]);for(var i in t)n&&-1!==n.indexOf(i)||void 0===e[i]&&(e[i]=t[i])}}else e=t;return!0}}this.get=function(e,o){var i,l,u=r.defer();return o=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},o),!0===o.showProgress&&(l=n(function(){l=null,i=s(o.showProgressText,"info")},o.showProgressDelay)),c(o)&&(e+=(-1===e.indexOf("?")?"?":"&")+o.page.j()),t.get(e,o).success(function(e){if(o.page&&void 0!==e.data.total&&(o.page.total=e.data.total),!0===o.showProgress&&(l&&n.cancel(l),i&&(a(i),i=null)),o.parseResponse)if(angular.isString(e)){if(o.autoNotice&&s(e,"warning"),o.autoBreak)return;u.reject(e)}else if(e.err_code&&0!=e.err_code){if(o.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),s(t,"warning")}if(o.autoBreak)return;u.reject(e)}else u.resolve(e);else u.resolve(e)}).error(function(e,t){!0===o.showProgress&&(l&&n.cancel(l),i&&(a(i),i=null)),s(null===e?"网络不可用":e,"danger")}),u.promise},this.post=function(e,o,i){var l,u,d=r.defer();return i=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},i),!0===i.showProgress&&(u=n(function(){u=null,l=s(i.showProgressText,"info")},i.showProgressDelay)),c(i)&&(e+=(-1===e.indexOf("?")?"?":"&")+i.page.j()),t.post(e,o,i).success(function(e){if(i.page&&void 0!==e.data.total&&(i.page.total=e.data.total),!0===i.showProgress&&(u&&n.cancel(u),l&&(a(l),l=null)),i.parseResponse)if(angular.isString(e)){if(i.autoNotice&&(s(e,"warning"),l=null),i.autoBreak)return;d.reject(e)}else if(0!=e.err_code){if(i.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),s(t,"warning")}if(i.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)}).error(function(e,t){!0===i.showProgress&&(u&&n.cancel(u),l&&(a(l),l=null)),s(null===e?"网络不可用":e,"danger")}),d.promise},this.merge=function(e,t,n){return!angular.equals(e,t)&&l(e,t,n)}}])},21:function(e,t,n){"use strict";angular.module("modal.ui.xxt",[]).service("tmsModal",["$rootScope","$compile","$q","$controller",function(e,t,n,r){this.open=function(o){var i,s=n.defer(),a=n.defer(),c={result:s.promise,closed:a.promise,close:function(e){document.body.removeChild(f[0]),s.resolve(e)},dismiss:function(e){document.body.removeChild(f[0]),a.resolve(e)}};i=e.$new(!0),o.controller&&r(o.controller,{$scope:i,$tmsModalInstance:c});var l,u,d,f;return l=angular.element("<div></div>"),l.attr({class:"modal-content","ng-style":"{'z-index':1060}"}).append(o.template),u=angular.element("<div></div>"),u.attr({class:"modal-dialog"}).append(l),d=angular.element("<div></div>"),d.attr({class:"modal-backdrop","ng-style":"{'z-index':1040}"}),f=angular.element("<div></div>"),f.attr({class:"modal","ng-style":"{'z-index':1050}",tabindex:-1}).append(u).append(d),t(f)(i),document.body.appendChild(f[0]),c}}])},22:function(e,t,n){var r=n(30);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0;n(1)(r,o);r.locals&&(e.exports=r.locals)},27:function(e,t,n){"use strict";n(22),n(3),n(21),angular.module("favor.ui.xxt",["page.ui.xxt","modal.ui.xxt"]).service("tmsFavor",["$rootScope","$http","$q","tmsDynaPage","tmsModal",function(e,t,n,r,o){function i(e){var r,o;return o=n.defer(),r="/rest/site/fe/user/favor/byUser",r+="?site="+e.siteid,r+="&id="+e.id,r+="&type="+e.type,t.get(r).success(function(e){o.resolve(e.data)}),o.promise}function s(e){var r,o;return o=n.defer(),r="/rest/site/fe/user/favor/add",r+="?site="+e.siteid,r+="&id="+e.id,r+="&type="+e.type,t.get(r).success(function(e){o.resolve(e.data)}),o.promise}function a(e){var r,o;return o=n.defer(),r="/rest/site/fe/user/favor/remove",r+="?site="+e.siteid,r+="&id="+e.id,r+="&type="+e.type,t.get(r).success(function(e){o.resolve(e.data)}),o.promise}function c(e){var r,o;return o=n.defer(),r="/rest/pl/fe/site/favor/sitesByUser?site="+e.siteid+"&id="+e.id+"&type="+e.type+"&_="+1*new Date,t.get(r).success(function(e){0==e.err_code&&o.resolve(e.data)}),o.promise}function l(e,r){var o,i;return i=n.defer(),o="/rest/pl/fe/site/favor/add?id="+e.id+"&type="+e.type,t.post(o,r).success(function(e){i.resolve(e.data)}),i.promise}function u(e,r){var o,i;return i=n.defer(),o="/rest/pl/fe/site/favor/remove?id="+e.id+"&type="+e.type,t.post(o,r).success(function(e){i.resolve(e.data)}),i.promise}this.open=function(e){var n;n='<div class="modal-header"><span class="modal-title">指定收藏位置</span></div>',n+='<div class="modal-body">',n+='<div class="checkbox">',n+="<label>",n+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='person._selected'>",n+="<span>个人账户</span>",n+="<span ng-if=\"person._favored==='Y'\">（已收藏）</span>",n+="</label>",n+="</div>",n+='<div class="checkbox" ng-repeat="site in mySites">',n+="<label>",n+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='site._selected'>",n+="<span>{{site.name}}</span>",n+="<span ng-if=\"site._favored==='Y'\">（已收藏）</span>",n+="</label>",n+="</div>",n+='<div ng-if="mySites.length===0"><a href="" ng-click="createSite()">创建</a>团队进行收藏，方便团队内共享信息</div>',n+="</div>",n+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',o.open({template:n,controller:["$scope","$tmsModalInstance",function(n,r){i(e).then(function(e){n.person={_favored:e?"Y":"N"},n.person._selected=n.person._favored}),c(e).then(function(e){var t=e;t.forEach(function(e){e._selected=e._favored}),n.mySites=t}),n.createSite=function(){t.get("/rest/pl/fe/site/create").success(function(e){var t=e.data;t._favored=t._selected="N",n.mySites=[t]})},n.ok=function(){var e;e={person:n.person,mySites:n.mySites},r.close(e)},n.cancel=function(){r.dismiss()}}]}).result.then(function(t){var n,r;if(n=t.person,n&&n._selected!==n._favored&&("Y"===n._selected?s(e):a(e)),r=t.mySites){var o=[],i=[];r.forEach(function(e){e._selected!==e._favored&&("Y"===e._selected?o.push(e.id):i.push(e.id))}),o.length&&l(e,o),i.length&&u(e,i)}})},this.showSwitch=function(t,n){var o,i=this;o=document.createElement("div"),o.classList.add("tms-switch","tms-switch-favor"),o.addEventListener("click",function(o){o.preventDefault(),o.stopPropagation(),e.$apply(function(){t.loginExpire?i.open(n):r.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(e){t.loginExpire=e.loginExpire,i.open(n)})})},!0),document.body.appendChild(o)}}])},3:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,r){t.$watch(r.dynamicHtml,function(r){r&&r.length&&(n.html(r),e(n.contents())(t))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t,n;t=document.createElement("style"),t.innerHTML=e,n=document.querySelector("head"),n.appendChild(t)},this.loadExtCss=function(e){var t,n;t=document.createElement("link"),t.href=e,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,r=$q.defer();return n=function(){var o;o=document.createElement("script"),o.src=e[t],o.onload=function(){t++,t<e.length?n():r.resolve()},document.body.appendChild(o)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),r.promise},this.loadExtJs=function(e,t){var n,r=this,o=$q.defer(),i=t.ext_js.length;return n=function(n){var s;s=document.createElement("script"),s.src=n.url,s.onload=function(){0===--i&&(t.js&&t.js.length&&r.loadJs(e,t.js),o.resolve())},document.body.appendChild(s)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),o.promise},this.loadCode=function(e,t){var n=this,r=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach(function(e){n.loadExtCss(e.url)}),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then(function(){r.resolve()}):(t.js&&t.js.length&&n.loadJs(e,t.js),r.resolve()),r.promise},this.openPlugin=function(e){var t,n,r,o,i,s;return s=$q.defer(),e||(console.log("参数为空"),s.reject()),document.documentElement.clientWidth>768?document.documentElement.scrollTop=0:document.body.scrollTop=0,i=document.getElementsByTagName("body")[0],o=document.getElementsByTagName("html")[0],o.style.cssText="height:100%;",i.style.cssText="height:100%;overflow-y:hidden",t=document.createDocumentFragment(),n=document.createElement("div"),n.setAttribute("id","frmPlugin"),r=document.createElement("iframe"),n.appendChild(r),n.onclick=function(){n.parentNode.removeChild(n),i.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),i.style.cssText="overflow-y:auto",s.resolve(e)},r.setAttribute("src",e)):r.contentDocument&&r.contentDocument.body&&(r.contentDocument.body.innerHTML=e),s.promise}}])},30:function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".modal {\r\n    display: block;\r\n    overflow: hidden;\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    outline: 0;\r\n    opacity: 1;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    opacity: 1;\r\n}\r\n\r\n.modal-backdrop {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: #000;\r\n    opacity: .5;\r\n}\r\n\r\n.modal-dialog {\r\n    position: relative;\r\n    z-index: 1055;\r\n    margin: 0;\r\n    position: relative;\r\n    width: auto;\r\n    margin: 10px;\r\n}\r\n\r\n.modal-content {\r\n    position: relative;\r\n    background-color: #fff;\r\n    -webkit-background-clip: padding-box;\r\n    background-clip: padding-box;\r\n    border: 1px solid #999;\r\n    border: 1px solid rgba(0, 0, 0, .2);\r\n    border-radius: 6px;\r\n    outline: 0;\r\n    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\r\n    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\r\n}\r\n\r\n.modal-header {\r\n    padding: 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n}\r\n\r\n.modal-header .close {\r\n    margin-top: -2px;\r\n}\r\n\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 1.42857143;\r\n}\r\n\r\n.modal-body {\r\n    position: relative;\r\n    padding: 15px;\r\n}\r\n\r\n.modal-footer {\r\n    padding: 15px;\r\n    text-align: right;\r\n    border-top: 1px solid #e5e5e5;\r\n}\r\n\r\nbutton.close {\r\n    -webkit-appearance: none;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    background: 0 0;\r\n    border: 0;\r\n}\r\n\r\n.close {\r\n    float: right;\r\n    font-size: 21px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: #000;\r\n    text-shadow: 0 1px 0 #fff;\r\n    filter: alpha(opacity=20);\r\n    opacity: .2;\r\n}\r\n\r\n@media (min-width:768px) {\r\n    .modal-dialog {\r\n        width: 600px;\r\n        margin: 30px auto;\r\n    }\r\n    .modal-content {\r\n        -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\r\n        box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\r\n    }\r\n}\r\n",""])},4:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},40:function(e,t,n){"use strict";n(22),n(3),n(21),angular.module("forward.ui.xxt",["page.ui.xxt","modal.ui.xxt"]).service("tmsForward",["$rootScope","$http","$q","tmsDynaPage","tmsModal",function(e,t,n,r,o){function i(e){var r,o;return o=n.defer(),r="/rest/pl/fe/site/forward/sitesByUser?site="+e.siteid+"&id="+e.id+"&type="+e.type+"&_="+1*new Date,t.get(r).success(function(e){0==e.err_code&&o.resolve(e.data)}),o.promise}this.open=function(e){var t;t='<div class="modal-header"><span class="modal-title">转发到哪个团队和频道</span></div>',t+='<div class="modal-body">',t+='<div ng-repeat="site in mySites">',t+="<span>{{site.name}}</span>",t+='<div class="checkbox" ng-repeat="chn in site.homeChannels">',t+="<label>",t+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='chn._selected' ng-change=\"choose(site,chn)\">",t+="<span>{{chn.title}}</span>",t+="</label>",t+="</div>",t+='<div ng-if="site.homeChannels.length===0"><a href="" ng-click="createChannel(site)">创建</a>团队主页频道，转发内容到团队主页</div>',t+="</div>",t+='<div ng-if="mySites.length===0"><a href="" ng-click="createSite()">创建</a>团队，转发内容到团队主页</div>',t+="</div>",t+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',o.open({template:t,controller:["$http","$scope","$tmsModalInstance",function(t,n,r){var o=[];i(e).then(function(e){var t=e;t.forEach(function(e){e._selected=e._recommended}),n.mySites=t}),n.createChannel=function(e){t.post("/rest/pl/fe/matter/channel/create?site="+e.id,{}).success(function(n){var r=n.data;t.post("/rest/pl/fe/site/setting/page/addHomeChannel?site="+e.id,r).success(function(t){e.homeChannels.push(t.data)})})},n.createSite=function(){t.get("/rest/pl/fe/site/create").success(function(e){var t=e.data;t._selected="N",t.homeChannels=[],n.mySites=[t]})},n.choose=function(e,t){"Y"===t._selected?(t.siteid=e.id,o.push(t)):o.splice(o.indexOf(t),1)},n.ok=function(){var n=[];o.length&&(o.forEach(function(e){n.push({siteid:e.siteid,channelId:e.channel_id})}),t.post("/rest/pl/fe/site/forward/push?id="+e.id+"&type="+e.type,n).success(function(){r.close()}))},n.cancel=function(){r.dismiss()}}]})},this.showSwitch=function(t,n){var o,i=this;o=document.createElement("div"),o.classList.add("tms-switch","tms-switch-forward"),o.addEventListener("click",function(o){o.preventDefault(),o.stopPropagation(),e.$apply(function(){t.loginExpire?i.open(n):r.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(e){t.loginExpire=e.loginExpire,i.open(n)})})},!0),document.body.appendChild(o)}}])},41:function(e,t,n){"use strict";n(22),n(21),angular.module("subscribe.ui.xxt",["modal.ui.xxt"]).service("tmsSubscribe",["$http","tmsModal",function(e,t){this.open=function(n,r){var o;o='<div class="modal-header"><span class="modal-title">关注团队，接收该团队发布的内容</span></div>',o+='<div class="modal-body">',o+='<div class="checkbox">',o+="<label>",o+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='atSite._selected'>",o+="<span>个人账户</span>",o+="<span ng-if=\"atSite._subscribed==='Y'\">（已关注）</span>",o+="</label>",o+="</div>",o+='<div class="checkbox" ng-repeat="site in mySites">',o+="<label>",o+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='site._selected'>",o+="<span>{{site.name}}</span>",o+="<span ng-if=\"site._subscribed==='Y'\">（已关注）</span>",o+="</label>",o+="</div>",o+='<div ng-if="mySites.length===0"><a href="" ng-click="createSite()">创建</a>团队进行关注，方便团队内共享信息</div>',o+="</div>",o+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',t.open({template:o,controller:["$scope","$tmsModalInstance",function(t,n){e.get("/rest/site/home/get?site="+r.id+"&_="+1*new Date).success(function(e){var n=e.data;n._selected=n._subscribed,t.atSite=n}),e.get("/rest/pl/fe/site/subscribe/sitesByUser?site="+r.id+"&_="+1*new Date).success(function(e){if(0==e.err_code){var n=e.data;n.forEach(function(e){e._selected=e._subscribed}),t.mySites=n}}),t.createSite=function(){e.get("/rest/pl/fe/site/create").success(function(e){var n=e.data;n._subscribed=n._selected="N",t.mySites=[n]})},t.ok=function(){var e;e={atSite:t.atSite,mySites:t.mySites},n.close(e)},t.cancel=function(){n.dismiss()}}]}).result.then(function(t){var n,o,i;if(o=t.atSite,o&&o._selected!==o._subscribed&&(n="Y"===o._selected?"/rest/site/fe/user/site/subscribe?site="+r.id+"&target="+o.id:"/rest/site/fe/user/site/unsubscribe?site="+r.id+"&target="+o.id,e.get(n)),i=t.mySites){var s=[],a=[];if(i.forEach(function(e){e._selected!==e._subscribed&&("Y"===e._selected?s.push(e.id):a.push(e.id))}),s.length){var n="/rest/pl/fe/site/subscribe/do?site="+r.id;n+="&subscriber="+s.join(","),e.get(n)}}})}}])},86:function(e,t,n){"use strict";n(2),n(3),n(41),n(87),n(27),n(40);var r=angular.module("app",["ui.bootstrap","ui.tms","http.ui.xxt","page.ui.xxt","subscribe.ui.xxt","contribute.ui.xxt","favor.ui.xxt","forward.ui.xxt"]);r.provider("srvUser",function(){var e;this.$get=["$q","http2",function(t,n){return{getSiteUser:function(r){return e?e.promise:(e=t.defer(),n.get("/rest/site/fe/user/get?site="+r).then(function(t){e.resolve(t.data)}),e.promise)}}}]}),r.config(["$controllerProvider","$uibTooltipProvider",function(e,t){r.provider={controller:e.register},t.setTriggers({show:"hide"})}]),r.directive("autoHeight",["$window",function(e){return{restrict:"A",scope:{},link:function(t,n,r){var o=e.innerHeight;n.css("min-height",o-52-50+"px")}}}]),r.directive("imageonload",function(){return{restrict:"A",link:function(e,t,n){t.bind("load",function(){e.$apply(n.imageonload)})}}}),r.controller("ctrlMain",["$scope","http2","srvUser","tmsDynaPage","tmsSubscribe","tmsContribute",function(e,t,n,o,i,s){var a,c=location.search,l=c.match(/site=([^&]*)/)[1];e.contributeSite=function(){if(e.user.loginExpire)s.open(a,e.site);else{if(window.sessionStorage){var t=JSON.stringify({name:"contributeSite"});window.sessionStorage.setItem("xxt.site.home.auth.pending",t)}location.href="/rest/site/fe/user/access?site=platform#login"}},e.subscribeSite=function(){if(e.user.loginExpire)i.open(a,e.site);else{if(window.sessionStorage){var t=JSON.stringify({name:"subscribeSite"});window.sessionStorage.setItem("xxt.site.home.auth.pending",t)}location.href="/rest/site/fe/user/access?site=platform#login"}},t.get("/rest/site/home/get?site="+l).then(function(t){n.getSiteUser(l).then(function(t){if(e.user=a=t,window.sessionStorage){var n;(n=window.sessionStorage.getItem("xxt.site.home.auth.pending"))&&(window.sessionStorage.removeItem("xxt.site.home.auth.pending"),a.loginExpire&&(n=JSON.parse(n),e[n.name].apply(e,n.args||[])))}}),o.loadCode(r,t.data.home_page).then(function(){t.data.heading_pic||(t.data.heading_pic="/static/img/avatar.png"),e.site=t.data,e.page=t.data.home_page})})}]),e.exports=r},87:function(e,t,n){"use strict";n(22),n(21),angular.module("contribute.ui.xxt",["modal.ui.xxt"]).service("tmsContribute",["$http","tmsModal",function(e,t){this.open=function(n,r){var o;o='<div class="modal-header"><span class="modal-title">投稿，将自己团队中的内容发给当前团队</span></div>',o+='<div class="modal-body">',o+="<dl>",o+='<dd ng-repeat="m in selectedMatters" ng-click="unchooseMatter(m)"><span>{{m.title}}</span></dd>',o+="</dl>",o+='<select ng-options="site.id as site.name for site in mySites" ng-model="data.chooseSite" ng-change="chooseSite()"></select>',o+="<dl>",o+='<dd ng-repeat="m in matters" ng-click="chooseMatter(m)"><span>{{m.title}}</span></dd>',o+="</dl>",o+="</div>",o+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',t.open({template:o,controller:["$scope","$tmsModalInstance",function(t,n){e.get("/rest/pl/fe/site/list?site="+r.id+"&_="+1*new Date).success(function(e){if(0==e.err_code){var n=e.data;n.forEach(function(e){e._selected=e._subscribed}),t.mySites=n}});var o,i;t.data=o={},t.selectedMatters=i=[],t.chooseSite=function(){e.get("/rest/pl/fe/matter/article/list?site="+o.chooseSite).success(function(e){t.matters=e.data.docs})},t.chooseMatter=function(e){-1===i.indexOf(e)&&i.push(e)},t.unchooseMatter=function(e){i.splice(i.indexOf(e),1)},t.ok=function(){i.length?e.post("/rest/pl/fe/site/contribute/do?site="+r.id,i).success(function(e){n.close()}):n.close()},t.cancel=function(){n.dismiss()}}]})}}])}});
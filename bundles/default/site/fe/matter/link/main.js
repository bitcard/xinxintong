!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=123)}({0:function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=i(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([r]).join("\n")}return[n].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},1:function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=h[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(d(i.parts[r],t))}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(d(i.parts[r],t));h[i.id]={id:i.id,refs:1,parts:s}}}}function o(e,t){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],s=t.base?r[0]+t.base:r[0],a=r[1],l=r[2],c=r[3],d={css:a,media:l,sourceMap:c};i[s]?i[s].parts.push(d):n.push(i[s]={id:s,parts:[d]})}return n}function r(e,t){var n=g(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=x[x.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),r(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),r(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function d(e,t){var n,i,o,r;if(t.transform&&e.css){if(!(r=t.transform(e.css)))return function(){};e.css=r}if(t.singleton){var c=y++;n=v||(v=a(t)),i=u.bind(null,n,c,!1),o=u.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),i=p.bind(null,n,t),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),i=f.bind(null,n),o=function(){s(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function u(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=k(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function f(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var i=n.css,o=n.sourceMap,r=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||r)&&(i=b(i)),o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([i],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var h={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),g=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),v=null,y=0,x=[],b=n(3);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return i(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var a=n[s],l=h[a.id];l.refs--,r.push(l)}if(e){i(o(e,t),t)}for(var s=0;s<r.length;s++){var l=r[s];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete h[l.id]}}}};var k=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},123:function(e,t,n){e.exports=n(69)},17:function(e,t,n){"use strict";angular.module("modal.ui.xxt",[]).service("tmsModal",["$rootScope","$compile","$q","$controller",function(e,t,n,i){this.open=function(o){var r,s=n.defer(),a=n.defer(),l={result:s.promise,closed:a.promise,close:function(e){document.body.removeChild(f[0]),s.resolve(e)},dismiss:function(e){document.body.removeChild(f[0]),a.resolve(e)}};r=e.$new(!0),o.controller&&i(o.controller,{$scope:r,$tmsModalInstance:l});var c,d,u,f;return c=angular.element("<div></div>"),c.attr({class:"modal-content","ng-style":"{'z-index':1060}"}).append(o.template),d=angular.element("<div></div>"),d.attr({class:"modal-dialog"}).append(c),u=angular.element("<div></div>"),u.attr({class:"modal-backdrop","ng-style":"{'z-index':1040}"}),f=angular.element("<div></div>"),f.attr({class:"modal","ng-style":"{'z-index':1050}",tabindex:-1}).append(d).append(u),t(f)(r),document.body.appendChild(f[0]),l}}])},18:function(e,t,n){var i=n(22);"string"==typeof i&&(i=[[e.i,i,""]]);var o={};o.transform=void 0;n(1)(i,o);i.locals&&(e.exports=i.locals)},2:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,i){t.$watch(i.dynamicHtml,function(i){i&&i.length&&(n.html(i),e(n.contents())(t))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t,n;t=document.createElement("style"),t.innerHTML=e,n=document.querySelector("head"),n.appendChild(t)},this.loadExtCss=function(e){var t,n;t=document.createElement("link"),t.href=e,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,i=$q.defer();return n=function(){var o;o=document.createElement("script"),o.src=e[t],o.onload=function(){t++,t<e.length?n():i.resolve()},document.body.appendChild(o)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),i.promise},this.loadExtJs=function(e,t){var n,i=this,o=$q.defer(),r=t.ext_js.length;return n=function(n){var s;s=document.createElement("script"),s.src=n.url,s.onload=function(){0===--r&&(t.js&&t.js.length&&i.loadJs(e,t.js),o.resolve())},document.body.appendChild(s)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),o.promise},this.loadCode=function(e,t){var n=this,i=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach(function(e){n.loadExtCss(e.url)}),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then(function(){i.resolve()}):(t.js&&t.js.length&&n.loadJs(e,t.js),i.resolve()),i.promise},this.openPlugin=function(e){var t,n,i,o,r,s=$q.defer();return document.documentElement.clientWidth>768?document.documentElement.scrollTop=0:document.body.scrollTop=0,r=document.getElementsByTagName("body")[0],o=document.getElementsByTagName("html")[0],o.style.cssText="height:100%;",r.style.cssText="height:100%;overflow-y:hidden",t=document.createDocumentFragment(),n=document.createElement("div"),n.setAttribute("id","frmPlugin"),i=document.createElement("iframe"),n.appendChild(i),n.onclick=function(){n.parentNode.removeChild(n),r.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),r.style.cssText="overflow-y:auto",s.resolve(e)},i.setAttribute("src",e)):i.contentDocument&&i.contentDocument.body&&(i.contentDocument.body.innerHTML=e),s.promise}}])},21:function(e,t,n){"use strict";n(18),n(2),n(17),angular.module("favor.ui.xxt",["page.ui.xxt","modal.ui.xxt"]).service("tmsFavor",["$rootScope","$http","$q","tmsDynaPage","tmsModal",function(e,t,n,i,o){function r(e){var i,o;return o=n.defer(),i="/rest/site/fe/user/favor/byUser",i+="?site="+e.siteid,i+="&id="+e.id,i+="&type="+e.type,t.get(i).success(function(e){o.resolve(e.data)}),o.promise}function s(e){var i,o;return o=n.defer(),i="/rest/site/fe/user/favor/add",i+="?site="+e.siteid,i+="&id="+e.id,i+="&type="+e.type,t.get(i).success(function(e){o.resolve(e.data)}),o.promise}function a(e){var i,o;return o=n.defer(),i="/rest/site/fe/user/favor/remove",i+="?site="+e.siteid,i+="&id="+e.id,i+="&type="+e.type,t.get(i).success(function(e){o.resolve(e.data)}),o.promise}function l(e){var i,o;return o=n.defer(),i="/rest/pl/fe/site/favor/sitesByUser?site="+e.siteid+"&id="+e.id+"&type="+e.type+"&_="+1*new Date,t.get(i).success(function(e){0==e.err_code&&o.resolve(e.data)}),o.promise}function c(e,i){var o,r;return r=n.defer(),o="/rest/pl/fe/site/favor/add?id="+e.id+"&type="+e.type,t.post(o,i).success(function(e){r.resolve(e.data)}),r.promise}function d(e,i){var o,r;return r=n.defer(),o="/rest/pl/fe/site/favor/remove?id="+e.id+"&type="+e.type,t.post(o,i).success(function(e){r.resolve(e.data)}),r.promise}this.open=function(e){var n;n='<div class="modal-header"><span class="modal-title">指定收藏位置</span></div>',n+='<div class="modal-body">',n+='<div class="checkbox">',n+="<label>",n+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='person._selected'>",n+="<span>个人账户</span>",n+="<span ng-if=\"person._favored==='Y'\">（已收藏）</span>",n+="</label>",n+="</div>",n+='<div class="checkbox" ng-repeat="site in mySites">',n+="<label>",n+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='site._selected'>",n+="<span>{{site.name}}</span>",n+="<span ng-if=\"site._favored==='Y'\">（已收藏）</span>",n+="</label>",n+="</div>",n+='<div ng-if="mySites.length===0"><a href="" ng-click="createSite()">创建</a>团队进行收藏，方便团队内共享信息</div>',n+="</div>",n+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',o.open({template:n,controller:["$scope","$tmsModalInstance",function(n,i){r(e).then(function(e){n.person={_favored:e?"Y":"N"},n.person._selected=n.person._favored}),l(e).then(function(e){var t=e;t.forEach(function(e){e._selected=e._favored}),n.mySites=t}),n.createSite=function(){t.get("/rest/pl/fe/site/create").success(function(e){var t=e.data;t._favored=t._selected="N",n.mySites=[t]})},n.ok=function(){var e;e={person:n.person,mySites:n.mySites},i.close(e)},n.cancel=function(){i.dismiss()}}]}).result.then(function(t){var n,i;if(n=t.person,n&&n._selected!==n._favored&&("Y"===n._selected?s(e):a(e)),i=t.mySites){var o=[],r=[];i.forEach(function(e){e._selected!==e._favored&&("Y"===e._selected?o.push(e.id):r.push(e.id))}),o.length&&c(e,o),r.length&&d(e,r)}})},this.showSwitch=function(t,n){var o,r=this;o=document.createElement("div"),o.classList.add("tms-switch","tms-switch-favor"),o.addEventListener("click",function(o){o.preventDefault(),o.stopPropagation(),e.$apply(function(){t.loginExpire?r.open(n):i.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(e){t.loginExpire=e.loginExpire,r.open(n)})})},!0),document.body.appendChild(o)}}])},22:function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,".modal{display:block;overflow:hidden;outline:0;overflow-x:hidden;overflow-y:auto;opacity:1}.modal,.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0}.modal-backdrop{background-color:#000;opacity:.5}.modal-dialog{z-index:1055;margin:0;position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5)}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}button.close{-webkit-appearance:none;padding:0;cursor:pointer;background:0 0;border:0}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}}",""])},3:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var r;return r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}},5:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,i,o){window.wx.onMenuShareTimeline({title:o.descAsTitle?n:e,link:t,imgUrl:i,success:function(){try{o.logger&&o.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:i,success:function(){try{o.logger&&o.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}function setYxShare(e,t,n,i,o){var r={img_url:i,link:t,title:e,desc:n};window.YixinJSBridge.on("menu:share:appmessage",function(e){try{o.logger&&o.logger("F")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("sendAppMessage",r,function(e){})}),window.YixinJSBridge.on("menu:share:timeline",function(e){try{o.logger&&o.logger("T")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("shareTimeline",r,function(e){})})}var _isReady=!1;this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this;if(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),_isReady)/MicroMessenger/i.test(navigator.userAgent)?setWxShare(title,link,desc,img,_this.options):/Yixin/i.test(navigator.userAgent)?setYxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img);else if(/MicroMessenger/i.test(navigator.userAgent)){var script;script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400){var signPackage;try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready(function(){setWxShare(title,link,desc,img,_this.options),_isReady=!0}),wx.error(function(e){alert(JSON.stringify(e))}))}catch(e){alert("local error:"+e.toString())}}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)}else/Yixin/i.test(navigator.userAgent)?void 0===window.YixinJSBridge?document.addEventListener("YixinJSBridgeReady",function(){setYxShare(title,link,desc,img,_this.options),_isReady=!0},!1):(setYxShare(title,link,desc,img,_this.options),_isReady=!0):fnOther&&"function"==typeof fnOther&&(fnOther(title,link,desc,img),_isReady=!0)}}])},69:function(e,t,n){"use strict";n(21),n(5),angular.module("app",["ui.bootstrap","page.ui.xxt","favor.ui.xxt","snsshare.ui.xxt"]).config(["$locationProvider",function(e){e.html5Mode(!0)}]).controller("ctrl",["$scope","$location","$http","tmsFavor","tmsDynaPage","tmsSnsShare",function(e,t,n,i,o,r){var s,a,l,c;s=t.search().site,a=t.search().id,l=t.search().inviteToken,c=t.search().shareby?t.search().shareby:"",e.isSmallLayout=!1,e.isFull=!1,e.elSiteCard=angular.element(document.querySelector("#site-card")),window.screen&&window.screen.width<992&&(e.isSmallLayout=!0);var d=function(){var t,i;t=e.user.uid+"_"+1*new Date,r.config({siteId:s,logger:function(i){var o="/rest/site/fe/matter/logShare";o+="?shareid="+t,o+="&site="+s,o+="&id="+a,o+="&type=link",o+="&title="+e.link.title,o+="&shareto="+i,o+="&shareby="+c,n.get(o)},jsApiList:["hideOptionMenu","onMenuShareTimeline","onMenuShareAppMessage"]}),e.link.invite?i=location.protocol+"//"+location.host+"/i/"+e.link.invite.code:(i=location.href,/shareby=/.test(i)?i=i.replace(/shareby=[^&]*/,"shareby="+t):i+="&shareby="+t),r.set(e.link.title,i,e.link.summary,e.link.pic)};e.siteCardToggled=function(e){var t;e&&(t=document.querySelector("#site-card>.dropdown-menu"))&&(t.style.left="auto",t.style.right=0)},e.favor=function(e,t){e.loginExpire?i.open(t):o.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(n){e.loginExpire=n.loginExpire,i.open(t)})},e.invite=function(e,t){e.loginExpire?location.href="/rest/site/fe/invite?matter=link,"+t.id+"&inviteToken="+l:o.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(n){e.loginExpire=n.loginExpire,location.href="/rest/site/fe/invite?matter=link,"+t.id+"&inviteToken="+l})},e.siteUser=function(e){var t=location.protocol+"//"+location.host;t+="/rest/site/fe/user",t+="?site="+e,location.href=t},e.gotoNavApp=function(t){switch(t.type){case"enroll":location.href="/rest/site/fe/matter/enroll?site="+e.link.siteid+"&app="+t.id;break;case"article":case"channel":location.href="/rest/site/fe/matter?site="+e.link.siteid+"&id="+t.id+"&type="+t.type;break;case"link":location.href="/rest/site/fe/matter/link?site="+e.link.siteid+"&id="+t.id+"&type="+t.type;break;default:alert("不支持此类型")}},n.get("/rest/site/home/get?site="+s).success(function(t){e.siteInfo=t.data,n.get("/rest/site/fe/matter/link/get?site="+s+"&id="+a).success(function(t){if(t.data){if(e.link=t.data.link,e.user=t.data.user,e.qrcode="/rest/site/fe/matter/link/qrcode?site="+s+"&url="+encodeURIComponent(location.href),-1!==Object.keys(e.link).indexOf("invite")){var i=e.link.fullUrl.length;"?"!==e.link.fullUrl.charAt(i-1)?e.link.fullUrl=e.link.fullUrl+"&inviteToken="+l:e.link.fullUrl=e.link.fullUrl+"inviteToken="+l}/MicroMessenge|Yixin/i.test(navigator.userAgent)&&d(),document.querySelector("#link>iframe").setAttribute("src",e.link.fullUrl),n.post("/rest/site/fe/matter/logAccess?site="+s,{search:location.search.replace("?",""),referer:document.referrer,id:a,type:"link",title:e.link.title}),"number"==typeof window.screenX&&document.querySelector("#btnFS").addEventListener("click",function(t){e.isFull?(document.querySelector(".col-md-3").style.display="block",document.querySelector(".invite").style.display="block",document.querySelector("#matters").classList="visible-xs visibile-sm",this.innerText="全屏",e.isFull=!1):(document.querySelector(".col-md-3").style.display="none",document.querySelector(".invite").style.display="none",document.querySelector("#matters").classList="hidden",this.innerText="退出",e.isFull=!0)})}}).error(function(e,t){})})}])}});
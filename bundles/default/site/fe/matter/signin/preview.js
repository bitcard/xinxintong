!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=144)}({0:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},1:function(e,t,n){"use strict";var o,r={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function s(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function l(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(h(o.parts[a],t))}else{for(var s=[];a<o.parts.length;a++)s.push(h(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var o=n.nc;o&&(e.attributes.nonce=o)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r&&e.setAttribute("media",r),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var g=null,m=0;function h(e,t){var n,o,r;if(t.singleton){var i=m++;n=g||(g=c(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=c(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e,t);return l(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i],c=r[a.id];c&&(c.refs--,o.push(c))}e&&l(s(e,t),t);for(var d=0;d<o.length;d++){var u=o[d];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete r[u.id]}}}}},144:function(e,t,n){e.exports=n(145)},145:function(e,t,n){"use strict";n(146);var o=n(47);o.factory("Record",["$http","$q",function(e,t){var n;return(n=function(){}).prototype.get=function(e){var n;return(n=t.defer()).resolve({data:{}}),n.promise},{ins:function(){return new n}}}]),o.controller("ctrlRecord",["$scope","Record","tmsLocation",function(e,t,n){var o=t.ins(),r=e.app.dataSchemas;e.value2Label=function(e){var t,n,i,a,s,l=[];if(r&&o.current&&o.current.data){if(void 0===(t=o.current.data[e]))return"";for(n=0,i=r.length;n<i;n++)if(a=r[n],r[n].id===e){a=r[n];break}if(a&&a.ops&&a.ops.length){for(s=t.split(","),n=0,i=a.ops.length;n<i;n++)-1!==s.indexOf(a.ops[n].v)&&l.push(a.ops[n].l);if(l.length)return l.join(",")}return t}return""},e.editRecord=function(e,t){},e.gotoEnroll=function(e,t){},o.get(n.s().ek),e.Record=o}]),o.directive("tmsImageInput",["$compile","$q",function(e,t){return{restrict:"A",controller:["$scope","$timeout",function(e,t){}]}}]),o.directive("tmsFileInput",["$q",function(e){return{restrict:"A",controller:["$scope","$timeout",function(e,t){}]}}])},146:function(e,t,n){var o=n(147);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};n(1)(o,r);o.locals&&(e.exports=o.locals)},147:function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".ng-cloak{display:none;}\nhtml,body{height:auto;width:100%;background:#f8f8f8;font-family:Microsoft Yahei,Arial;}\nbody{position:relative;padding:15px;padding-bottom:60px;font-size:16px;}\nimg{max-width:100%}\nul{margin:0;padding:0;list-style:none}\nli{margin:0;padding:0}\n\n/* img tiles */\nul.img-tiles li{position:relative;display:inline-block;overflow:hidden;width:80px;height:80px;margin:0px;padding:0px;float:left}\nul.img-tiles li.img-thumbnail img{display:inline-block;position:absolute;max-width:none;}\nul.img-tiles li.img-thumbnail button{position:absolute;top:0;right:0}\nul.img-tiles li.img-picker button{position:auto;width:100%;height:100%}\nul.img-tiles li.img-picker button span{font-size:36px}\n\n/* default form style*/\ndiv[wrap].wrap-splitline{padding-bottom:0.5em;border-bottom:1px solid #fff;}\ndiv[wrap].wrap-inline>*{display:inline-block;vertical-align:middle;margin:0 1em 0 0;}\ndiv[wrap].wrap-inline>label{width:6em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}\ndiv[wrap=matter]>span{cursor:pointer;text-decoration:underline;}\n\n/* auth */\n#frmPopup{position:absolute;top:0;left:0;right:0;bottom:0;border:none;width:100%;z-index:999;box-sizing:border-box;}",""])},2:function(e,t,n){"use strict";var o=angular.module("http.ui.xxt",["ng"]);o.provider("tmsLocation",(function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){var e=t.search();if(arguments.length){for(var n=[],o=0,r=arguments.length;o<r;o++)n.push(arguments[o]+"="+(e[arguments[o]]||""));return n.join("&")}return e},j:function(n){var o=e,r=[];n&&n.length&&(o+="/"+n);for(var i=1,a=arguments.length;i<a;i++)r.push(arguments[i]+"="+(t.search()[arguments[i]]||""));return r.length&&(o+="?"+r.join("&")),o},path:function(){return arguments.length?t.path(arguments[0]):t.path()}}}]})),o.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,o,r,i){function a(t,n,o){var a;return r.trustAsHtml(t),(a=angular.element("<div></div>")).attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),o||a[0].addEventListener("click",(function(){document.body.removeChild(a[0])}),!0),i(a)(e),document.body.appendChild(a[0]),a[0]}function s(e){e&&document.body.removeChild(e)}function l(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}this.get=function(e,r){var i,c,d=o.defer();return!0===(r=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},r)).showProgress&&(c=n((function(){c=null,i=a(r.showProgressText,"info")}),r.showProgressDelay)),l(r)&&(e+=(-1===e.indexOf("?")?"?":"&")+r.page.j()),t.get(e,r).success((function(e){if(r.page&&void 0!==e.data.total&&(r.page.total=e.data.total),!0===r.showProgress&&(c&&n.cancel(c),i&&(s(i),i=null)),r.parseResponse)if(angular.isString(e)){if(r.autoNotice&&a(e,"warning"),r.autoBreak)return;d.reject(e)}else if(e.err_code&&0!=e.err_code){if(r.autoNotice)a(angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),"warning");if(r.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)})).error((function(e,t){!0===r.showProgress&&(c&&n.cancel(c),i&&(s(i),i=null)),a(null===e?"网络不可用":e,"danger")})),d.promise},this.post=function(e,r,i){var c,d,u=o.defer();return!0===(i=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},i)).showProgress&&(d=n((function(){d=null,c=a(i.showProgressText,"info")}),i.showProgressDelay)),l(i)&&(e+=(-1===e.indexOf("?")?"?":"&")+i.page.j()),t.post(e,r,i).success((function(e){if(i.page&&void 0!==e.data.total&&(i.page.total=e.data.total),!0===i.showProgress&&(d&&n.cancel(d),c&&(s(c),c=null)),i.parseResponse)if(angular.isString(e)){if(i.autoNotice&&(a(e,"warning"),c=null),i.autoBreak)return;u.reject(e)}else if(0!=e.err_code){if(i.autoNotice)a(angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),"warning");if(i.autoBreak)return;u.reject(e)}else u.resolve(e);else u.resolve(e)})).error((function(e,t){!0===i.showProgress&&(d&&n.cancel(d),c&&(s(c),c=null)),a(null===e?"网络不可用":e,"danger")})),u.promise},this.merge=function(e,t,n){return!angular.equals(e,t)&&function e(t,n,o){if(n){if(t){if(angular.isArray(t)){t.length>n.length&&t.splice(n.length-1,t.length-n.length);for(var r=0,i=n.length;r<i;r++)r<t.length?e(t[r],n[r],o):t.push(n[r])}else if(angular.isObject(t)){for(var a in t)o&&-1!==o.indexOf(a)||(void 0===n[a]?delete t[a]:angular.isObject(n[a])&&angular.isObject(t[a])?e(t[a],n[a],o):t[a]=n[a]);for(var a in n)o&&-1!==o.indexOf(a)||void 0===t[a]&&(t[a]=n[a])}}else t=n;return!0}}(e,t,n)}}])},22:function(e,t,n){"use strict";function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}void 0===window.xxt&&(window.xxt={}),window.xxt.image={options:{},choose:function(e,t){var n,r=[];if(n=e.promise,void 0!==window.wx)window.wx.chooseImage({success:function(t){var n,o;for(n in t.localIds)o={imgSrc:t.localIds[n]},r.push(o);e.resolve(r)}});else{var i=document.createElement("input");i.setAttribute("type","file"),i.addEventListener("change",(function(t){var n,a,s;for(a=t.target.files.length,n=0;n<a;n++){s=t.target.files[n];var l=new FileReader;l.onload=function(t){var n=t.target.result.match(/^data:image\/(.+);base64/);if(n){var a=o(n,2)[1];if(a&&-1!==["png","jpg","jpeg","gif"].indexOf(a)){var s={};s.imgSrc=t.target.result,r.push(s),document.body.removeChild(i),e.resolve(r)}else e.resolve("只能上传【png,jpg,jpeg,gif】格式的文件")}else e.resolve("只能上传【png,jpg,jpeg,gif】格式的文件")},l.readAsDataURL(s)}}),!1),i.style.opacity=0,document.body.appendChild(i),i.click()}return n},paste:function(e,t,n){var o,r=[];return o=t.promise,e.focus(),e.addEventListener("paste",(function(e){var n,o,i=e.clipboardData;if(i&&(n=i.items)&&n.length){for(var a=0;a<i.types.length;a++)if("Files"===i.types[a]){o=n[a];break}o&&"file"===o.kind&&o.type.match(/^image\//i)&&function(e){var n=e.getAsFile(),o=new FileReader;o.onload=function(e){var n={};n.imgSrc=e.target.result,r.push(n),t.resolve(r)},o.readAsDataURL(n)}(o)}})),o},wxUpload:function(e,t){var n;return n=e.promise,0===t.imgSrc.indexOf("weixin://")||0===t.imgSrc.indexOf("wxLocalResource://")?window.wx.uploadImage({localId:t.imgSrc,isShowProgressTips:1,success:function(n){t.serverId=n.serverId,e.resolve(t)}}):e.resolve(t),n}}},3:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,o){t.$watch(o.dynamicHtml,(function(o){o&&o.length&&(n.html(o),e(n.contents())(t))}))}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t;(t=document.createElement("style")).innerHTML=e,document.querySelector("head").appendChild(t)},this.loadExtCss=function(e){var t;(t=document.createElement("link")).href=e,t.rel="stylesheet",document.querySelector("head").appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,o=$q.defer();return n=function(){var r;(r=document.createElement("script")).src=e[t],r.onload=function(){++t<e.length?n():o.resolve()},document.body.appendChild(r)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),o.promise},this.loadExtJs=function(e,t){var n,o=this,r=$q.defer(),i=t.ext_js.length;return n=function(n){var a;(a=document.createElement("script")).src=n.url,a.onload=function(){0===--i&&(t.js&&t.js.length&&o.loadJs(e,t.js),r.resolve())},document.body.appendChild(a)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),r.promise},this.loadCode=function(e,t){var n=this,o=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach((function(e){n.loadExtCss(e.url)})),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then((function(){o.resolve()})):(t.js&&t.js.length&&n.loadJs(e,t.js),o.resolve()),o.promise},this.openPlugin=function(e){var t,n,o,r,i;return i=$q.defer(),e||(console.log("参数为空"),i.reject()),document.documentElement.clientWidth>768?document.documentElement.scrollTop=0:document.body.scrollTop=0,r=document.getElementsByTagName("body")[0],document.getElementsByTagName("html")[0].style.cssText="height:100%;",r.style.cssText="height:100%;overflow-y:hidden",t=document.createDocumentFragment(),(n=document.createElement("div")).setAttribute("id","frmPlugin"),o=document.createElement("iframe"),n.appendChild(o),n.onclick=function(){n.parentNode.removeChild(n),r.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),r.style.cssText="overflow-y:auto",i.resolve(e)},o.setAttribute("src",e)):o.contentDocument&&o.contentDocument.body&&(o.contentDocument.body.innerHTML=e),i.promise}}])},30:function(e,t,n){"use strict";void 0===window.xxt&&(window.xxt={}),window.xxt.geo={options:{},getAddress:function(e,t,n){var o;if(o=t.promise,window.wx)window.wx.getLocation({success:function(o){var r="/rest/site/fe/matter/enroll/locationGet";r+="?site="+n,r+="&lat="+o.latitude,r+="&lng="+o.longitude,e.get(r).then((function(e){t.resolve({errmsg:"ok",lat:o.latitude,lng:o.longitude,address:e.data.address})}))}});else try{var r=window.navigator;if(null!==r){var i=r.geolocation;null!==i?i.getCurrentPosition((function(o){var r="/rest/site/fe/matter/enroll/locationGet";r+="?site="+n,r+="&lat="+o.coords.latitude,r+="&lng="+o.coords.longitude,e.get(r).then((function(e){t.resolve({errmsg:"ok",lat:o.coords.latitude,lng:o.coords.longitude,address:e.data.address})}))}),(function(){t.resolve({errmsg:"获取地理位置失败"})})):t.resolve({errmsg:"无法获取地理位置"})}else t.resolve({errmsg:"无法获取地理位置"})}catch(e){alert("exception:"+e.message)}return o}}},4:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,o,r){window.wx.onMenuShareTimeline({title:r.descAsTitle?n:e,link:t,imgUrl:o,success:function(){try{r.logger&&r.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:o,success:function(){try{r.logger&&r.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}var _isReady=!1;this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this,script;(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),_isReady)?/MicroMessenger/i.test(navigator.userAgent)?setWxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img):/MicroMessenger/i.test(navigator.userAgent)?(script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){var signPackage;if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400)try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready((function(){setWxShare(title,link,desc,img,_this.options),_isReady=!0})),wx.error((function(e){alert(JSON.stringify(e))})))}catch(e){alert("local error:"+e.toString())}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)):fnOther&&"function"==typeof fnOther&&(fnOther(title,link,desc,img),_isReady=!0)}}])},47:function(e,t,n){"use strict";n(4),/MicroMessenger/i.test(navigator.userAgent)&&window.signPackage&&window.wx&&window.wx.ready((function(){window.wx.showOptionMenu()})),n(48),n(5),n(2),n(3),n(22),n(30),n(50);var o=function(e,t){if(!window.xxt||!window.xxt.share)return!1;var n,o;n=location.protocol+"//"+location.host+LS.j("","site","app"),t.page.share_page&&"Y"===t.page.share_page&&(n+="&page="+t.page.name,n+="&ek="+t.enrollKey),o=t.app.summary,t.page.share_summary&&t.page.share_summary.length&&t.record&&(o=t.record.data[t.page.share_summary]),e.shareData={title:t.app.title,link:n,desc:o,pic:t.app.pic},window.xxt.share.set(t.app.title,n,o,t.app.pic),window.shareCounter=0,window.xxt.share.options.logger=function(e){}},r=["ngSanitize","notice.ui.xxt","http.ui.xxt","page.ui.xxt","directive.signin","snsshare.ui.xxt"];window.moduleAngularModules&&window.moduleAngularModules.forEach((function(e){r.push(e)}));var i=angular.module("app",r);i.config(["$controllerProvider","$locationProvider",function(e,t){i.provider={controller:e.register},t.html5Mode(!0)}]),i.factory("$exceptionHandler",(function(){return function(e,t){throw e.message+=' (caused by "'+t+'")',e}})),i.controller("ctrlMain",["$scope","$timeout","http2","tmsLocation","tmsDynaPage",function(e,t,n,r,a){var s=[];e.closeWindow=function(){/MicroMessenger/i.test(navigator.userAgent)&&window.wx.closeWindow()},e.addRecord=function(t,n){n?e.gotoPage(t,n,null,null,!1,"Y"):alert("没有指定登记编辑页")},e.gotoPage=function(t,o,i,a,s,l){if(t.preventDefault(),t.stopPropagation(),!s||e.User.fan){var c=r.j("","site","app");null!=i&&i.length&&(c+="&ek="+i),null!=a&&a.length&&(c+="&rid="+a),null!=o&&o.length&&(c+="&page="+o),void 0!==l&&"Y"===l&&(c+="&newRecord=Y"),location.replace(c)}else n.get(r.j("askFollow","site")).then((function(){}),(function(e){var t,n;t=document.body,(n=document.createElement("iframe")).setAttribute("id","frmPopup"),n.height=t.clientHeight,t.scrollTop=0,t.appendChild(n),window.closeAskFollow=function(){n.style.display="none"},n.setAttribute("src",r.j("askFollow","site")),n.style.display="block"}))},e.openMatter=function(e,t,n,o){var i="/rest/site/fe/matter?site="+r.s().site+"&id="+e+"&type="+t;n?location.replace(i):!1===o?location.href=i:window.open(i)},e.followMp=function(t,n){void 0!==n&&n.length?e.gotoPage(t,n):alert("请在易信中打开页面")},e.onReady=function(t){e.params?function(t){var n,o,r,i;i=!0,n=e,r=t.match(/\((.*?)\)/)[1].replace(/'|"/g,"").split(","),angular.forEach(t.replace(/\(.*?\)/,"").split("."),(function(e){o&&(n=o),n[e]?o=n[e]:i=!1})),i&&o.apply(n,r)}(t):s.push(t)},n.get(r.j("get","site","app","rid","page","ek","newRecord")).then((function(n){var r,l=n.data,c=l.site,d=l.app,u=l.mission,p={};d.dataSchemas.forEach((function(e){p[e.id]=e})),d._schemasById=p,e.params=l,e.site=c,e.mission=u,e.app=d,e.user=l.user,e.activeRound=l.activeRound,o(e,l),"Y"===d.use_site_header&&c&&c.header_page&&a.loadCode(i,c.header_page),"Y"===d.use_mission_header&&u&&u.header_page&&a.loadCode(i,u.header_page),"Y"===d.use_mission_footer&&u&&u.footer_page&&a.loadCode(i,u.footer_page),"Y"===d.use_site_footer&&c&&c.footer_page&&a.loadCode(i,c.footer_page),l.page&&a.loadCode(i,l.page).then((function(){e.page=l.page})),s.length&&angular.forEach(s,PG.exec),t((function(){var t;(t=document.querySelectorAll("[wrap=button]"))&&angular.forEach(t,(function(e){e.style.display="none"})),e.$broadcast("xxt.app.signin.ready",l)})),(r=document.querySelector(".loading"))&&r.parentNode.removeChild(r)}))}]),e.exports=i},48:function(e,t,n){var o=n(49);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};n(1)(o,r);o.locals&&(e.exports=o.locals)},49:function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"/*dialog*/\n.dialog.mask{position:fixed;background:rgba(0,0,0,0.3);top:0;left:0;bottom:0;right:0;overflow:auto;z-index:998}\n.dialog.dlg{position:absolute;background:#fff;left:0;right:0;bottom:0;margin:15px}\n.dialog .dlg-header{padding:15px 15px 0 15px}\n.dialog .dlg-body{padding:15px 15px 0 15px}\n.dialog .dlg-footer{text-align:right;padding:15px}\n.dialog .dlg-footer button{border-radius:0}\n\n/*filter*/\ndiv[wrap=filter] .detail{background:#ccc}\ndiv[wrap=filter] .detail .options .label{display:inline-block;margin:.5em;padding-top:.3em;font-size:100%}\ndiv[wrap=filter] .detail .actions .btn{border-radius:0}",""])},5:function(e,t,n){"use strict";angular.module("notice.ui.xxt",["ng","ngSanitize"]).service("noticebox",["$timeout","$interval","$q",function(e,t,n){var o="tmsbox"+1*new Date,r={type:"",timer:null},i=function(e,t){var n;return null===(n=document.querySelector("#"+o))?((n=document.createElement("div")).setAttribute("id",o),n.classList.add("tms-notice-box","alert","alert-"+e),n.innerHTML="<div>"+t+"</div>",document.body.appendChild(n),r.type=e):(r.type!==e&&(n.classList.remove("alert-"+e),r.type=e),n.childNodes[0].innerHTML=t),n};this.close=function(){var e;(e=document.querySelector("#"+o))&&document.body.removeChild(e)},this.error=function(t){var n,o;r.timer&&(e.cancel(r.timer),r.timer=null),n=i("danger",t),(o=document.createElement("button")).classList.add("close"),o.innerHTML="<span>&times;</span>",n.insertBefore(o,n.childNodes[0]),o.addEventListener("click",(function(){document.body.removeChild(n)}))},this.warn=function(t){var n,o;r.timer&&(e.cancel(r.timer),r.timer=null),n=i("warning",t),(o=document.createElement("button")).classList.add("close"),o.innerHTML="<span>&times;</span>",n.insertBefore(o,n.childNodes[0]),o.addEventListener("click",(function(){document.body.removeChild(n)}))},this.success=function(t){var n;r.timer&&e.cancel(r.timer),n=i("success",t),r.timer=e((function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),r.timer=null}),2e3)},this.info=function(t){var n;r.timer&&e.cancel(r.timer),n=i("info",t),r.timer=e((function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),r.timer=null}),2e3)},this.progress=function(e){i("progress",e)},this.confirm=function(o,a){var s,l,c,d;return s=n.defer(),r.timer&&(e.cancel(r.timer),r.timer=null),l=i("warning",o),a&&a.length?a.forEach((function(n){if((c=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),c.innerHTML=n.label,l.appendChild(c,l.childNodes[0]),c.addEventListener("click",(function(){document.body.removeChild(l),s.resolve(n.value)})),n.execWait){var o=Math.ceil(n.execWait/500),i=document.createElement("span");i.classList.add("countdown"),i.innerHTML=o,c.appendChild(i),d=t((function(){o<=0?(t.cancel(d),d=null):i.innerHTML=--o}),500),r.timer=e((function(){l.parentNode&&l.parentNode===document.body&&document.body.removeChild(l),r.timer=null,s.resolve(n.value)}),n.execWait)}})):((c=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),c.innerHTML="是",l.appendChild(c,l.childNodes[0]),c.addEventListener("click",(function(){document.body.removeChild(l),s.resolve()})),(c=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),c.innerHTML="否",l.appendChild(c,l.childNodes[0]),c.addEventListener("click",(function(){document.body.removeChild(l),s.reject()}))),s.promise}}])},50:function(e,t){var n={makeDialog:function(e,t){var n,o;return(o=document.createElement("div")).setAttribute("id",e),o.classList.add("dialog","mask"),n="<div class='dialog dlg'>",t.header&&t.header.length&&(n+="<div class='dlg-header'>"+t.header+"</div>"),n+="<div class='dlg-body'>"+t.body+"</div>",t.footer&&t.footer.length&&(n+="<div class='dlg-footer'>"+t.footer+"</div>"),n+="</div>",o.innerHTML=n,document.body.appendChild(o),o.children}},o=angular.module("directive.signin",[]);o.directive("tmsDate",["$compile",function(e){return{restrict:"A",scope:{value:"=tmsDateValue"},controller:["$scope",function(e){e.close=function(){var t;t=document.querySelector("#"+e.dialogID),document.body.removeChild(t),e.opened=!1},e.ok=function(){var t;(t=new Date).setTime(0),t.setFullYear(e.data.year),t.setMonth(e.data.month-1),t.setDate(e.data.date),t.setHours(e.data.hour),t.setMinutes(e.data.minute),e.value=parseInt(t.getTime()/1e3),e.close()}}],link:function(t,o,r){var i,a,s;void 0===t.value&&(t.value=1*new Date/1e3),(a=new Date).setTime(1e3*t.value),t.options={years:[2014,2015,2016,2017,2018,2019,2020],months:[1,2,3,4,5,6,7,8,9,10,11,12],dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],hours:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],minutes:[0,5,10,15,20,25,30,35,40,45,50,55]},s=5*Math.round(a.getMinutes()/5),t.data={year:a.getFullYear(),month:a.getMonth()+1,date:a.getDate(),hour:a.getHours(),minute:s},-1===t.options.minutes.indexOf(s)&&t.options.minutes.push(s),i=function(o){var r,i;(o.preventDefault(),o.stopPropagation(),t.opened)||(i="_dlg-"+1*new Date,r={header:"",body:'<div class="form-group"><select class="form-control" ng-model="data.year" ng-options="y for y in options.years"></select></div><div class="form-group"><select class="form-control" ng-model="data.month" ng-options="m for m in options.months"></select></div><div class="form-group"><select class="form-control" ng-model="data.date" ng-options="d for d in options.dates"></select></div><div class="form-group"><select class="form-control" ng-model="data.hour" ng-options="h for h in options.hours"></select></div><div class="form-group"><select class="form-control" ng-model="data.minute" ng-options="mi for mi in options.minutes"></select></div>',footer:'<button class="btn btn-default" ng-click="close()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button>'},r=n.makeDialog(i,r),t.opened=!0,t.dialogID=i,e(r)(t))},o[0].querySelector("[ng-bind]").addEventListener("click",i)}}}]),o.directive("flexImg",(function(){return{restrict:"A",replace:!0,template:"<img ng-src='{{img.imgSrc}}'>",link:function(e,t,n){angular.element(t).on("load",(function(){var e,t,n=this.clientWidth,o=this.clientHeight;n>o?(e=n/o*80,angular.element(this).css({height:"100%",width:e+"px",top:"0",left:"50%","margin-left":-1*e/2+"px"})):(t=o/n*80,angular.element(this).css({width:"100%",height:t+"px",left:"0",top:"50%","margin-top":-1*t/2+"px"}))}))}}})),o.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,o){t.$watch(o.dynamicHtml,(function(o){o&&o.length&&(n.html(o),e(n.contents())(t))}))}}}])}});
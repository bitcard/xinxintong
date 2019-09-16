!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=86)}({0:function(e,t,n){"use strict";var r=angular.module("http.ui.xxt",["ng"]);r.provider("tmsLocation",function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){var e=t.search();if(arguments.length){for(var n=[],r=0,o=arguments.length;r<o;r++)n.push(arguments[r]+"="+(e[arguments[r]]||""));return n.join("&")}return e},j:function(n){var r=e,o=[];n&&n.length&&(r+="/"+n);for(var i=1,s=arguments.length;i<s;i++)o.push(arguments[i]+"="+(t.search()[arguments[i]]||""));return o.length&&(r+="?"+o.join("&")),r},path:function(){return arguments.length?t.path(arguments[0]):t.path()}}}]}),r.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,r,o,i){function s(t,n,r){var s;return o.trustAsHtml(t),s=angular.element("<div></div>"),s.attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),r||s[0].addEventListener("click",function(){document.body.removeChild(s[0])},!0),i(s)(e),document.body.appendChild(s[0]),s[0]}function a(e){e&&document.body.removeChild(e)}function c(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}function u(e,t,n){if(t){if(e){if(angular.isArray(e)){e.length>t.length&&e.splice(t.length-1,e.length-t.length);for(var r=0,o=t.length;r<o;r++)r<e.length?u(e[r],t[r],n):e.push(t[r])}else if(angular.isObject(e)){for(var i in e)n&&-1!==n.indexOf(i)||(void 0===t[i]?delete e[i]:angular.isObject(t[i])&&angular.isObject(e[i])?u(e[i],t[i],n):e[i]=t[i]);for(var i in t)n&&-1!==n.indexOf(i)||void 0===e[i]&&(e[i]=t[i])}}else e=t;return!0}}this.get=function(e,o){var i,u,l=r.defer();return o=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},o),!0===o.showProgress&&(u=n(function(){u=null,i=s(o.showProgressText,"info")},o.showProgressDelay)),c(o)&&(e+=(-1===e.indexOf("?")?"?":"&")+o.page.j()),t.get(e,o).success(function(e){if(o.page&&void 0!==e.data.total&&(o.page.total=e.data.total),!0===o.showProgress&&(u&&n.cancel(u),i&&(a(i),i=null)),o.parseResponse)if(angular.isString(e)){if(o.autoNotice&&s(e,"warning"),o.autoBreak)return;l.reject(e)}else if(e.err_code&&0!=e.err_code){if(o.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),s(t,"warning")}if(o.autoBreak)return;l.reject(e)}else l.resolve(e);else l.resolve(e)}).error(function(e,t){!0===o.showProgress&&(u&&n.cancel(u),i&&(a(i),i=null)),s(null===e?"网络不可用":e,"danger")}),l.promise},this.post=function(e,o,i){var u,l,d=r.defer();return i=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},i),!0===i.showProgress&&(l=n(function(){l=null,u=s(i.showProgressText,"info")},i.showProgressDelay)),c(i)&&(e+=(-1===e.indexOf("?")?"?":"&")+i.page.j()),t.post(e,o,i).success(function(e){if(i.page&&void 0!==e.data.total&&(i.page.total=e.data.total),!0===i.showProgress&&(l&&n.cancel(l),u&&(a(u),u=null)),i.parseResponse)if(angular.isString(e)){if(i.autoNotice&&(s(e,"warning"),u=null),i.autoBreak)return;d.reject(e)}else if(0!=e.err_code){if(i.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),s(t,"warning")}if(i.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)}).error(function(e,t){!0===i.showProgress&&(l&&n.cancel(l),u&&(a(u),u=null)),s(null===e?"网络不可用":e,"danger")}),d.promise},this.merge=function(e,t,n){return!angular.equals(e,t)&&u(e,t,n)}}])},2:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,r,o){window.wx.onMenuShareTimeline({title:o.descAsTitle?n:e,link:t,imgUrl:r,success:function(){try{o.logger&&o.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:r,success:function(){try{o.logger&&o.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}var _isReady=!1;this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this;if(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),_isReady)/MicroMessenger/i.test(navigator.userAgent)?setWxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img);else if(/MicroMessenger/i.test(navigator.userAgent)){var script;script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400){var signPackage;try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready(function(){setWxShare(title,link,desc,img,_this.options),_isReady=!0}),wx.error(function(e){alert(JSON.stringify(e))}))}catch(e){alert("local error:"+e.toString())}}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)}else fnOther&&"function"==typeof fnOther&&(fnOther(title,link,desc,img),_isReady=!0)}}])},27:function(e,t,n){"use strict";n(!function(){var e=new Error('Cannot find module "./base.css"');throw e.code="MODULE_NOT_FOUND",e}()),n(2),/MicroMessenger/i.test(navigator.userAgent)&&window.signPackage&&window.wx&&window.wx.ready(function(){window.wx.showOptionMenu()}),n(5),n(3),n(0),n(4);var r=["ngSanitize","ui.bootstrap","notice.ui.xxt","http.ui.xxt","trace.ui.xxt","snsshare.ui.xxt","siteuser.ui.xxt"];window.moduleAngularModules&&window.moduleAngularModules.forEach(function(e){r.push(e)});var o=angular.module("app",r);o.config(["$locationProvider","$uibTooltipProvider",function(e,t){e.html5Mode(!0),t.setTriggers({show:"hide"})}]),o.factory("facGroupApp",["$q","http2","tmsLocation",function(e,t,n){var r={};return r.get=function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/get?"+n.s("site","app")).then(function(e){r.resolve(e.data)}),r.promise},r}]),o.factory("facGroupTeam",["$q","http2","tmsLocation",function(e,t,n){var r={};return r.get=function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/team/get?"+n.s("site","app","team")).then(function(e){r.resolve(e.data)}),r.promise},r.list=function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/team/list?"+n.s("site","app")).then(function(e){r.resolve(e.data)}),r.promise},r.create=function(r,o){var i;return i=e.defer(),t.post("/rest/site/fe/matter/group/team/add?"+n.s("site","app"),{team:r,member:o}).then(function(e){i.resolve(e.data)}),i.promise},r.update=function(r){var o;return o=e.defer(),t.post("/rest/site/fe/matter/group/team/update?"+n.s("site","app","team"),r).then(function(e){o.resolve(e.data)}),o.promise},r.join=function(r){var o;return o=e.defer(),t.post("/rest/site/fe/matter/group/invite/join?"+n.s("site","app","team"),r).then(function(e){o.resolve(e.data)}),o.promise},r.quit=function(r){var o;return o=e.defer(),t.get("/rest/site/fe/matter/group/team/quit?"+n.s("site","app","team")+"&ek="+r.enroll_key).then(function(e){o.resolve(e.data)}),o.promise},r}]),o.factory("facGroupRecord",["$q","http2","tmsLocation",function(e,t,n){var r={};return r.list=function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/record/list?"+n.s("site","app","team")).then(function(e){r.resolve(e.data)}),r.promise},r}]),o.factory("facGroupUser",["$q","http2","tmsLocation",function(e,t,n){var r={};return r.get=function(){var r;return r=e.defer(),t.get("/rest/site/fe/matter/group/user/get?"+n.s("site","app")).then(function(e){var t,n=e.data;n&&(t={teams:[]},n.records&&n.records.length&&n.records.forEach(function(e){t[e.team_id]=e,t.teams.push(e.team_id)}),n.records=t),r.resolve(n)}),r.promise},r}]),o.controller("ctrlBase",["$scope","$q","$parse","http2","$timeout","tmsLocation","tmsSnsShare","tmsSiteUser",function(e,t,n,r,o,i,s,a){e.isSmallLayout=!1,window.screen&&window.screen.width<992&&(e.isSmallLayout=!0);var c;(c=document.querySelector(".loading"))&&c.parentNode.removeChild(c)}]),e.exports=o},3:function(e,t,n){"use strict";angular.module("notice.ui.xxt",["ng","ngSanitize"]).service("noticebox",["$timeout","$interval","$q",function(e,t,n){var r="tmsbox"+1*new Date,o={type:"",timer:null},i=function(e,t){var n;return n=document.querySelector("#"+r),null===n?(n=document.createElement("div"),n.setAttribute("id",r),n.classList.add("tms-notice-box","alert","alert-"+e),n.innerHTML="<div>"+t+"</div>",document.body.appendChild(n),o.type=e):(o.type!==e&&(n.classList.remove("alert-"+e),o.type=e),n.childNodes[0].innerHTML=t),n};this.close=function(){var e;(e=document.querySelector("#"+r))&&document.body.removeChild(e)},this.error=function(t){var n,r;o.timer&&(e.cancel(o.timer),o.timer=null),n=i("danger",t),r=document.createElement("button"),r.classList.add("close"),r.innerHTML="<span>&times;</span>",n.insertBefore(r,n.childNodes[0]),r.addEventListener("click",function(){document.body.removeChild(n)})},this.warn=function(t){var n,r;o.timer&&(e.cancel(o.timer),o.timer=null),n=i("warning",t),r=document.createElement("button"),r.classList.add("close"),r.innerHTML="<span>&times;</span>",n.insertBefore(r,n.childNodes[0]),r.addEventListener("click",function(){document.body.removeChild(n)})},this.success=function(t){var n;o.timer&&e.cancel(o.timer),n=i("success",t),o.timer=e(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),o.timer=null},2e3)},this.info=function(t){var n;o.timer&&e.cancel(o.timer),n=i("info",t),o.timer=e(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),o.timer=null},2e3)},this.progress=function(e){i("progress",e)},this.confirm=function(r,s){var a,c,u;return a=n.defer(),o.timer&&(e.cancel(o.timer),o.timer=null),c=i("warning",r),s&&s.length?s.forEach(function(n){if(u=document.createElement("button"),u.classList.add("btn","btn-default","btn-sm"),u.innerHTML=n.label,c.appendChild(u,c.childNodes[0]),u.addEventListener("click",function(){document.body.removeChild(c),a.resolve(n.value)}),n.execWait){var r=Math.ceil(n.execWait/500),i=document.createElement("span");i.classList.add("countdown"),i.innerHTML=r,u.appendChild(i),t(function(){i.innerHTML=--r},500),o.timer=e(function(){c.parentNode&&c.parentNode===document.body&&document.body.removeChild(c),o.timer=null,a.resolve(n.value)},n.execWait)}}):(u=document.createElement("button"),u.classList.add("btn","btn-default","btn-sm"),u.innerHTML="是",c.appendChild(u,c.childNodes[0]),u.addEventListener("click",function(){document.body.removeChild(c),a.resolve()}),u=document.createElement("button"),u.classList.add("btn","btn-default","btn-sm"),u.innerHTML="否",c.appendChild(u,c.childNodes[0]),u.addEventListener("click",function(){document.body.removeChild(c),a.reject()})),a.promise}}])},4:function(e,t,n){"use strict";function r(e,t){var n,r,o;n=document.createDocumentFragment(),r=document.createElement("div"),r.setAttribute("id","frmPlugin"),o=document.createElement("iframe"),r.appendChild(o),r.onclick=function(){r.parentNode.removeChild(r)},n.appendChild(r),document.body.appendChild(n),0===e.indexOf("http")?(window.onClosePlugin=function(){r.parentNode.removeChild(r),t&&t()},o.setAttribute("src",e)):o.contentDocument&&o.contentDocument.body&&(o.contentDocument.body.innerHTML=e)}angular.module("siteuser.ui.xxt",[]).service("tmsSiteUser",function(){this.showSwitch=function(e,t){var n;n=document.createElement("div"),n.classList.add("tms-switch","tms-switch-siteuser"),n.addEventListener("click",function(n){n.preventDefault(),n.stopPropagation();var o=location.protocol+"//"+location.host;o+="/rest/site/fe/user",o+="?site="+e,t?location.href=o:r(o)},!0),document.body.appendChild(n)}})},5:function(e,t,n){"use strict";angular.module("trace.ui.xxt",["http.ui.xxt"]).directive("tmsTrace",["$q","$timeout","http2",function(e,t,n){var r,o,i,s="/xxt/site/matter/enroll/trace",a=function(e,t,n,r,o){this.type=t,this.elapse=n||1*new Date-e,this.biz=r,o&&(this.text=o)},c=function(){function e(e){var t,n;e.sendUrl&&(t=window.localStorage)&&(n=t.getItem(s),n=n?JSON.parse(n):{},n[e.sendUrl]=e,t.setItem(s,JSON.stringify(n)))}this.start=0,this.events=[],this.setSendUrl=function(t){this.sendUrl=t,e(this)},this.pushEvent=function(t,n,r){var o,i;0===this.events.length?(this.start=1*new Date,o=new a(this.start,t,0,n,r),this.events.push(o),e(this)):(o=new a(this.start,t,null,n,r),i=this.events[this.events.length-1],(i.type!==o.type||o.elapse-i.elapse>1e3)&&(this.events.push(o),e(this)))},this.stop=function(){this.closing="Y",e(this),this.start=0,this.events=[]}},u=function(e){var r;this.begin=function(){this.cancel(r),r=t(function(){var t,r,o;e.stop(),e.sendUrl&&(t=window.localStorage)&&(r=t.getItem(s),r=JSON.parse(r),o=r[e.sendUrl],delete r[e.sendUrl],r=t.setItem(s,JSON.stringify(r)),n.post(e.sendUrl,{start:o.start,events:o.events},{showProgress:!1}))},5e3)},this.cancel=function(){r&&(t.cancel(r),r=null)}};if((r=window.localStorage)&&(o=r.getItem(s),o=o?JSON.parse(o):{}))for(var l in o)o&&o[l]&&(i=o[l],i.closing&&"Y"===i.closing&&(delete o[l],o=r.setItem(s,JSON.stringify(o)),n.post(i.sendUrl,{start:i.start,events:i.events}).then(function(){})));return{restrict:"A",link:function(e,n,r){var o=new c,i=new u(o);!r.readySign&&r.sendUrl&&(o.sendUrl=r.sendUrl),o.pushEvent("load"),n.on("click",function(e){var t,n,r;t=e.target,t.hasAttribute("trace-biz")&&(n=t.getAttribute("trace-biz"),!n&&t.hasAttribute("ng-click")&&(n=t.getAttribute("ng-click")),n&&(n=n.replace(/'|"/g,"")),r=t.innerText),o.pushEvent("click",n,r),i.begin()}),n.on("touchend",function(e){o.pushEvent("touchend"),i.begin()}),window.addEventListener("scroll",function(e){o.pushEvent("scroll"),i.begin()}),window.addEventListener("beforeunload",function(e){o.pushEvent("beforeunload"),o.stop(),i.cancel()}),r.readySign&&e.$watch(r.readySign,function(e){e&&t(function(){o.setSendUrl(r.sendUrl)})}),i.begin()}}}])},53:function(e,t,n){"use strict";window.moduleAngularModules=["ngRoute"];var r=n(27);r.config(["$routeProvider",function(e){e.when("/rest/site/fe/matter/group/team/create",{template:n(!function(){var e=new Error('Cannot find module "./team/create.html"');throw e.code="MODULE_NOT_FOUND",e}()),controller:"ctrlTeamCreate"}).when("/rest/site/fe/matter/group/team/config",{template:n(!function(){var e=new Error('Cannot find module "./team/config.html"');throw e.code="MODULE_NOT_FOUND",e}()),controller:"ctrlTeamConfig"}).otherwise({template:n(!function(){var e=new Error('Cannot find module "./team/home.html"');throw e.code="MODULE_NOT_FOUND",e}()),controller:"ctrlTeamHome"})}]),r.controller("ctrlTeam",["$scope","tmsLocation","facGroupApp","facGroupUser",function(e,t,n,r){e.gotoHome=function(){location.href="/rest/site/fe/matter/group?"+t.s("site","app")},e.gotoTeamHome=function(){t.path("/rest/site/fe/matter/group/team/home")},n.get().then(function(t){e.app=t,e.schemas=t.dataSchemas,r.get().then(function(t){e.user=t})})}]),r.controller("ctrlTeamHome",["$scope","$uibModal","tmsLocation","facGroupTeam","facGroupRecord",function(e,t,r,o,i){e.config=function(){r.path("/rest/site/fe/matter/group/team/config")},e.invite=function(){t.open({template:n(!function(){var e=new Error('Cannot find module "./team/invite.html"');throw e.code="MODULE_NOT_FOUND",e}()),controller:["$scope","$uibModalInstance","tmsLocation",function(e,t,n){e.close=function(){t.dismiss()},e.inviteUrl=location.protocol+"//"+location.host+"/rest/site/fe/matter/group/invite?"+n.s("site","app","team")}]})},e.quit=function(t){o.quit(t).then(function(){e.members.splice(e.members.indexOf(t),1)})},o.get().then(function(t){e.team=t,i.list().then(function(t){e.members=t})})}]),r.controller("ctrlTeamCreate",["$scope","$location","facGroupTeam",function(e,t,n){e.submit=function(){n.create(e.team,e.member).then(function(n){t.search().team=n.team_id,e.gotoTeamHome()})},e.team={},e.member={}}]),r.controller("ctrlTeamConfig",["$scope","$location","facGroupTeam",function(e,t,n){var r,o;o={},e.update=function(t){o[t]=e.team[t],e.modified=!0},e.submit=function(){Object.keys(o).length&&n.update(o).then(function(){e.modified=!1,o={}})},e.modified=!1,n.get().then(function(t){r=t,e.team=angular.copy(r)})}])},86:function(e,t,n){e.exports=n(53)}});
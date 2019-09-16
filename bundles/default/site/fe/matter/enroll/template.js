!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=81)}({0:function(e,t,n){"use strict";var o=angular.module("http.ui.xxt",["ng"]);o.provider("tmsLocation",function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){var e=t.search();if(arguments.length){for(var n=[],o=0,r=arguments.length;o<r;o++)n.push(arguments[o]+"="+(e[arguments[o]]||""));return n.join("&")}return e},j:function(n){var o=e,r=[];n&&n.length&&(o+="/"+n);for(var i=1,a=arguments.length;i<a;i++)r.push(arguments[i]+"="+(t.search()[arguments[i]]||""));return r.length&&(o+="?"+r.join("&")),o},path:function(){return arguments.length?t.path(arguments[0]):t.path()}}}]}),o.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,o,r,i){function a(t,n,o){var a;return r.trustAsHtml(t),a=angular.element("<div></div>"),a.attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),o||a[0].addEventListener("click",function(){document.body.removeChild(a[0])},!0),i(a)(e),document.body.appendChild(a[0]),a[0]}function s(e){e&&document.body.removeChild(e)}function c(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}function l(e,t,n){if(t){if(e){if(angular.isArray(e)){e.length>t.length&&e.splice(t.length-1,e.length-t.length);for(var o=0,r=t.length;o<r;o++)o<e.length?l(e[o],t[o],n):e.push(t[o])}else if(angular.isObject(e)){for(var i in e)n&&-1!==n.indexOf(i)||(void 0===t[i]?delete e[i]:angular.isObject(t[i])&&angular.isObject(e[i])?l(e[i],t[i],n):e[i]=t[i]);for(var i in t)n&&-1!==n.indexOf(i)||void 0===e[i]&&(e[i]=t[i])}}else e=t;return!0}}this.get=function(e,r){var i,l,u=o.defer();return r=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},r),!0===r.showProgress&&(l=n(function(){l=null,i=a(r.showProgressText,"info")},r.showProgressDelay)),c(r)&&(e+=(-1===e.indexOf("?")?"?":"&")+r.page.j()),t.get(e,r).success(function(e){if(r.page&&void 0!==e.data.total&&(r.page.total=e.data.total),!0===r.showProgress&&(l&&n.cancel(l),i&&(s(i),i=null)),r.parseResponse)if(angular.isString(e)){if(r.autoNotice&&a(e,"warning"),r.autoBreak)return;u.reject(e)}else if(e.err_code&&0!=e.err_code){if(r.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),a(t,"warning")}if(r.autoBreak)return;u.reject(e)}else u.resolve(e);else u.resolve(e)}).error(function(e,t){!0===r.showProgress&&(l&&n.cancel(l),i&&(s(i),i=null)),a(null===e?"网络不可用":e,"danger")}),u.promise},this.post=function(e,r,i){var l,u,d=o.defer();return i=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},i),!0===i.showProgress&&(u=n(function(){u=null,l=a(i.showProgressText,"info")},i.showProgressDelay)),c(i)&&(e+=(-1===e.indexOf("?")?"?":"&")+i.page.j()),t.post(e,r,i).success(function(e){if(i.page&&void 0!==e.data.total&&(i.page.total=e.data.total),!0===i.showProgress&&(u&&n.cancel(u),l&&(s(l),l=null)),i.parseResponse)if(angular.isString(e)){if(i.autoNotice&&(a(e,"warning"),l=null),i.autoBreak)return;d.reject(e)}else if(0!=e.err_code){if(i.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),a(t,"warning")}if(i.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)}).error(function(e,t){!0===i.showProgress&&(u&&n.cancel(u),l&&(s(l),l=null)),a(null===e?"网络不可用":e,"danger")}),d.promise},this.merge=function(e,t,n){return!angular.equals(e,t)&&l(e,t,n)}}])},1:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,o){t.$watch(o.dynamicHtml,function(o){o&&o.length&&(n.html(o),e(n.contents())(t))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t,n;t=document.createElement("style"),t.innerHTML=e,n=document.querySelector("head"),n.appendChild(t)},this.loadExtCss=function(e){var t,n;t=document.createElement("link"),t.href=e,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,o=$q.defer();return n=function(){var r;r=document.createElement("script"),r.src=e[t],r.onload=function(){t++,t<e.length?n():o.resolve()},document.body.appendChild(r)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),o.promise},this.loadExtJs=function(e,t){var n,o=this,r=$q.defer(),i=t.ext_js.length;return n=function(n){var a;a=document.createElement("script"),a.src=n.url,a.onload=function(){0===--i&&(t.js&&t.js.length&&o.loadJs(e,t.js),r.resolve())},document.body.appendChild(a)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),r.promise},this.loadCode=function(e,t){var n=this,o=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach(function(e){n.loadExtCss(e.url)}),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then(function(){o.resolve()}):(t.js&&t.js.length&&n.loadJs(e,t.js),o.resolve()),o.promise},this.openPlugin=function(e){var t,n,o,r,i,a;return a=$q.defer(),e||(console.log("参数为空"),a.reject()),document.documentElement.clientWidth>768?document.documentElement.scrollTop=0:document.body.scrollTop=0,i=document.getElementsByTagName("body")[0],r=document.getElementsByTagName("html")[0],r.style.cssText="height:100%;",i.style.cssText="height:100%;overflow-y:hidden",t=document.createDocumentFragment(),n=document.createElement("div"),n.setAttribute("id","frmPlugin"),o=document.createElement("iframe"),n.appendChild(o),n.onclick=function(){n.parentNode.removeChild(n),i.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),i.style.cssText="overflow-y:auto",a.resolve(e)},o.setAttribute("src",e)):o.contentDocument&&o.contentDocument.body&&(o.contentDocument.body.innerHTML=e),a.promise}}])},48:function(module,exports,__webpack_require__){"use strict";__webpack_require__(!function(){var e=new Error('Cannot find module "./main.css"');throw e.code="MODULE_NOT_FOUND",e}()),__webpack_require__(!function(){var e=new Error('Cannot find module "./directive.css"');throw e.code="MODULE_NOT_FOUND",e}()),__webpack_require__(!function(){var e=new Error('Cannot find module "./template.css"');throw e.code="MODULE_NOT_FOUND",e}()),__webpack_require__(0),__webpack_require__(1),__webpack_require__(6);var ngApp=angular.module("app",["ngSanitize","ui.bootstrap","http.ui.xxt","page.ui.xxt","directive.enroll"]);ngApp.config(["$controllerProvider","$locationProvider",function(e,t){ngApp.provider={controller:e.register},t.html5Mode(!0)}]),ngApp.factory("Round",["tmsLocation","http2",function(e,t){var n=function(){};return n.prototype.list=function(){return t.get(e.s("round/list","scenario","template"))},n}]),ngApp.controller("ctrlRounds",["$scope","Round",function(e,t){var n,o;n=new t,n.list().then(function(t){e.rounds=t,angular.forEach(o,function(e){e(t)})}),o=[],e.onDataReady=function(e){o.push(e)},e.match=function(t){var n,o;for(n=0,o=e.rounds.length;n<o;n++)if(e.rounds[n],t.rid===e.rounds[n].rid)return e.rounds[n];return!1}}]),ngApp.factory("Record",["tmsLocation","http2","$q",function(e,t,n){var o,r,i;return i=function(){this.current={data:{},enroll_at:0}},r=!1,i.prototype.get=function(o){if(r)return!1;r=!0;var i,a,s;return i=this,s=n.defer(),a=e.j("record/get","scenario","template"),t.post(a,o).then(function(e){var t;t=e.data,i.current=t,s.resolve(t),r=!1}),s.promise},i.prototype.list=function(o,r){var i,a;return this,a=n.defer(),i=e.j("record/list","scenario","template"),void 0!==r&&r.length&&(i+="&rid="+r),void 0!==o&&o.length&&(i+="&owner="+o),t.get(i).then(function(e){var t,n;if((t=e.data.records)&&t.length)for(var o=0;o<t.length;o++)n=t[o],n.data.member&&(n.data.member=JSON.parse(n.data.member));a.resolve(t)}),a.promise},{ins:function(){return o||(o=new i)}}}]),ngApp.controller("ctrlRecord",["$scope","Record",function(e,t){var n=t.ins(),o=[];n.get(e.CustomConfig),e.Record=n,e.page.dataSchemas&&e.page.dataSchemas.forEach(function(e){o.push(e.schema)}),e.value2Label=function(e){var t,r,i,a,s,c=[];if(o&&n.current.data){if(void 0===(t=n.current.data[e]))return"";for(r=0,i=o.length;r<i;r++)if(a=o[r],o[r].id===e){a=o[r];break}if(a&&a.ops&&a.ops.length){for(s=t.split(","),r=0,i=a.ops.length;r<i;r++)-1!==s.indexOf(a.ops[r].v)&&c.push(a.ops[r].l);if(c.length)return c.join(",")}return t}return""}}]),ngApp.controller("ctrlRecords",["$scope","tmsLocation","Record",function(e,t,n){var o,r,i,a;a=t.s().rid,o=n.ins(t.s().scenario,t.s().template),r={owner:"A",rid:a},i=function(){o.list(r.owner,r.rid).then(function(t){e.records=t})},e.$on("xxt.app.enroll.filter.rounds",function(e,t){r.rid=t[0].rid,i()}),e.$on("xxt.app.enroll.filter.owner",function(e,t){r.owner=t[0].id,i()}),e.fetch=i,e.options=r}]),ngApp.controller("ctrlOwnerOptions",["$scope",function(e){e.owners={A:{id:"A",label:"全部"},U:{id:"U",label:"我的"}},e.match=function(t){return e.owners[t.id]}}]),ngApp.controller("ctrlOrderbyOptions",["$scope",function(e){e.orderbys={time:{id:"time",label:"最新"},score:{id:"score",label:"点赞"},remark:{id:"remark",label:"留言"}}}]),ngApp.controller("ctrlMain",["$scope","tmsLocation","http2","$timeout","$q",function($scope,LS,http2,$timeout,$q){function renew(page,config){$scope.CustomConfig=config,http2.post(LS.j("pageGet","scenario","template")+"&page="+page,config).then(function(rsp){var params;params=rsp.data,$scope.params=params,$scope.page=params.page,$scope.User=params.user,function setPage(page){page.ext_css&&page.ext_css.length&&angular.forEach(page.ext_css,function(e){var t,n;t=document.createElement("link"),t.href=e.url,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)}),page.ext_js&&page.ext_js.length&&angular.forEach(page.ext_js,function(e){$.getScript(e.url)}),page.js&&page.js.length&&function dynamicjs(){eval(page.js)}()}(params.page)})}window.renew=function(e,t){var n;n=$scope.$root.$$phase,"$digest"===n||"$apply"===n?renew(e,t):$scope.$apply(function(){renew(e,t)})},$scope.data={member:{}},$scope.CustomConfig={},$scope.gotoPage=function(e,t,n,o,r){},$scope.addRecord=function(e){},$scope.editRecord=function(e,t){},$scope.likeRecord=function(e){},$scope.remarkRecord=function(e){},$scope.openMatter=function(e,t){},$scope.$on("xxt.app.enroll.filter.rounds",function(e,t){e.targetScope!==$scope&&$scope.$broadcast("xxt.app.enroll.filter.rounds",t)}),$scope.$on("xxt.app.enroll.filter.owner",function(e,t){e.targetScope!==$scope&&$scope.$broadcast("xxt.app.enroll.filter.owner",t)}),window.renew(LS.s().page,{})}])},6:function(e,t,n){"use strict";window.__util={},window.__util.makeDialog=function(e,t){var n,o;return o=document.createElement("div"),o.setAttribute("id",e),o.classList.add("dialog","mask"),n="<div class='dialog dlg'>",t.header&&t.header.length&&(n+="<div class='dlg-header'>"+t.header+"</div>"),n+="<div class='dlg-body'>"+t.body+"</div>",t.footer&&t.footer.length&&(n+="<div class='dlg-footer'>"+t.footer+"</div>"),n+="</div>",o.innerHTML=n,document.body.appendChild(o),o.children};var o=angular.module("directive.enroll",[]);o.directive("tmsDate",["$compile",function(e){return{restrict:"A",scope:{value:"=tmsDateValue"},controller:["$scope",function(e){e.close=function(){var t;t=document.querySelector("#"+e.dialogID),document.body.removeChild(t),e.opened=!1},e.ok=function(){var t;t=new Date,t.setTime(0),t.setFullYear(e.data.year),t.setMonth(e.data.month-1),t.setDate(e.data.date),t.setHours(e.data.hour),t.setMinutes(e.data.minute),e.value=parseInt(t.getTime()/1e3),e.close()}}],link:function(t,n,o){var r,i,a,s;void 0===t.value&&(t.value=1*new Date/1e3),i=new Date,i.setTime(1e3*t.value),t.options={years:[2014,2015,2016,2017,2018,2019,2020],months:[1,2,3,4,5,6,7,8,9,10,11,12],dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],hours:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],minutes:[0,5,10,15,20,25,30,35,40,45,50,55]},a=5*Math.round(i.getMinutes()/5),t.data={year:i.getFullYear(),month:i.getMonth()+1,date:i.getDate(),hour:i.getHours(),minute:a},-1===t.options.minutes.indexOf(a)&&t.options.minutes.push(a),s='<div class="form-group"><select class="form-control" ng-model="data.year" ng-options="y for y in options.years"></select></div>',s+='<div class="form-group"><select class="form-control" ng-model="data.month" ng-options="m for m in options.months"></select></div>',s+='<div class="form-group"><select class="form-control" ng-model="data.date" ng-options="d for d in options.dates"></select></div>',s+='<div class="form-group"><select class="form-control" ng-model="data.hour" ng-options="h for h in options.hours"></select></div>',s+='<div class="form-group"><select class="form-control" ng-model="data.minute" ng-options="mi for mi in options.minutes"></select></div>',r=function(n){if(n.preventDefault(),n.stopPropagation(),!t.opened){var o,r;r="_dlg-"+1*new Date,o={header:"",body:s,footer:'<button class="btn btn-default" ng-click="close()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button>'},o=__util.makeDialog(r,o),t.opened=!0,t.dialogID=r,e(o)(t)}},n[0].querySelector("[ng-bind]").addEventListener("click",r)}}}]),o.directive("flexImg",function(){return{restrict:"A",replace:!0,template:"<img ng-src='{{img.imgSrc}}'>",link:function(e,t,n){angular.element(t).on("load",function(){var e,t,n=this.clientWidth,o=this.clientHeight;n>o?(e=n/o*80,angular.element(this).css({height:"100%",width:e+"px",top:"0",left:"50%","margin-left":-1*e/2+"px"})):(t=o/n*80,angular.element(this).css({width:"100%",height:t+"px",left:"0",top:"50%","margin-top":-1*t/2+"px"}))})}}}),o.directive("tmsHideParentHeight",function(){return{restrict:"A",link:function(e,t,n){var o,r;if(n.tmsHideParentHeight){o=n.tmsHideParentHeight;for(var i=0,a=t.length;i<a;i++)r=t[i],r.parentElement&&window.addEventListener("resize",function(){r.classList.toggle("hidden",r.parentElement.clientHeight<o)})}}}}),o.directive("tmsScrollSpy",function(){return{restrict:"A",scope:{selector:"@selector",offset:"@",onbottom:"&",toggleSpy:"="},link:function(e,t,n){var o="window"===e.selector?window:document.querySelector(e.selector);o.addEventListener("scroll",function(t){var n=o===window?t.target.documentElement:t.target;e.toggleSpy&&e.onbottom&&angular.isFunction(e.onbottom)&&n.clientHeight+n.scrollTop+parseInt(e.offset)>=n.scrollHeight&&e.$apply(function(){e.toggleSpy=!1,e.onbottom()})})}}})},81:function(e,t,n){e.exports=n(48)}});
!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=95)}({12:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,i,r){window.wx.onMenuShareTimeline({title:r.descAsTitle?n:e,link:t,imgUrl:i,success:function(){try{r.logger&&r.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:i,success:function(){try{r.logger&&r.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}function setYxShare(e,t,n,i,r){var o={img_url:i,link:t,title:e,desc:n};window.YixinJSBridge.on("menu:share:appmessage",function(e){try{r.logger&&r.logger("F")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("sendAppMessage",o,function(e){})}),window.YixinJSBridge.on("menu:share:timeline",function(e){try{r.logger&&r.logger("T")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("shareTimeline",o,function(e){})})}this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this;if(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),/MicroMessenger/i.test(navigator.userAgent)){var script;script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400){var signPackage;try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready(function(){setWxShare(title,link,desc,img,_this.options)}),wx.error(function(e){alert(JSON.stringify(e))}))}catch(e){alert("local error:"+e.toString())}}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)}else/Yixin/i.test(navigator.userAgent)?void 0===window.YixinJSBridge?document.addEventListener("YixinJSBridgeReady",function(){setYxShare(title,link,desc,img,_this.options)},!1):setYxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img)}}])},2:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,i){t.$watch(i.dynamicHtml,function(i){i&&i.length&&(n.html(i),e(n.contents())(t))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t,n;t=document.createElement("style"),t.innerHTML=e,n=document.querySelector("head"),n.appendChild(t)},this.loadExtCss=function(e){var t,n;t=document.createElement("link"),t.href=e,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,i=$q.defer();return n=function(){var r;r=document.createElement("script"),r.src=e[t],r.onload=function(){t++,t<e.length?n():i.resolve()},document.body.appendChild(r)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),i.promise},this.loadExtJs=function(e,t){var n,i=this,r=$q.defer(),o=t.ext_js.length;return n=function(n){var s;s=document.createElement("script"),s.src=n.url,s.onload=function(){0===--o&&(t.js&&t.js.length&&i.loadJs(e,t.js),r.resolve())},document.body.appendChild(s)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),r.promise},this.loadCode=function(e,t){var n=this,i=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach(function(e){n.loadExtCss(e.url)}),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then(function(){i.resolve()}):(t.js&&t.js.length&&n.loadJs(e,t.js),i.resolve()),i.promise},this.openPlugin=function(e){var t,n,i,r,o=$q.defer();return document.documentElement.clientWidth>768?document.documentElement.scrollTop=0:document.body.scrollTop=0,r=document.getElementsByTagName("body")[0],r.style.cssText="overflow-y:hidden",t=document.createDocumentFragment(),n=document.createElement("div"),n.setAttribute("id","frmPlugin"),i=document.createElement("iframe"),n.appendChild(i),n.onclick=function(){n.parentNode.removeChild(n),r.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),r.style.cssText="overflow-y:auto",o.resolve(e)},i.setAttribute("src",e)):i.contentDocument&&i.contentDocument.body&&(i.contentDocument.body.innerHTML=e),o.promise}}])},40:function(e,t,n){"use strict";n(2),n(12),angular.module("app",["ui.bootstrap","infinite-scroll","page.ui.xxt","snsshare.ui.xxt"]).config(["$locationProvider",function(e){e.html5Mode(!0)}]).controller("ctrl",["$scope","$location","$http","$q","tmsDynaPage","tmsSnsShare",function(e,t,n,i,r,o){function s(e){return-1!==Object.keys(e).indexOf("pic")&&null==e.pic?e.src=e.pic="":-1!==Object.keys(e).indexOf("thumbnail")&&null==e.thumbnail?e.src=e.thumnail="":e.src=e.pic?e.pic:e.thumbnail,e}var c,a,l,u;c=t.search().site,a=t.search().id,l=t.search().inviteToken,u=t.search().shareby?t.search().shareby:"";var d=function(){var t,i;t=e.user.uid+"_"+1*new Date,o.config({siteId:c,logger:function(i){var r="/rest/site/fe/matter/logShare";r+="?shareid="+t,r+="&site="+c,r+="&id="+a,r+="&type=channel",r+="&title="+e.channel.title,r+="&shareto="+i,r+="&shareby="+u,n.get(r)},jsApiList:["hideOptionMenu","onMenuShareTimeline","onMenuShareAppMessage"]}),i=location.href,/shareby=/.test(i)?i=i.replace(/shareby=[^&]*/,"shareby="+t):i+="&shareby="+t,o.set(e.channel.title,i,e.channel.summary,e.channel.pic)};e.Matter={matters:[],busy:!1,page:1,orderby:"time",changeOrderby:function(){this.reset()},reset:function(){this.matters=[],this.busy=!1,this.end=!1,this.page=1,this.nextPage()},nextPage:function(){var e,t=this;this.end||(this.busy=!0,e="/rest/site/fe/matter/channel/mattersGet",e+="?site="+c,e+="&id="+a,e+="&orderby="+this.orderby,e+="&page="+this.page,e+="&size=10",n.get(e).success(function(e){if(e.data.matters.length){for(var n=e.data.matters,i=0,r=n.length;i<r;i++)s(n[i]),t.matters.push(n[i]);t.page++}else t.end=!0;t.busy=!1}))}},e.elSiteCard=angular.element(document.querySelector("#site-card")),e.siteCardToggled=function(e){var t;e&&(t=document.querySelector("#site-card>.dropdown-menu"))&&(t.style.left="auto",t.style.right=0)},e.open=function(t){e.channel.invite?location.href=t.url+"&inviteToken="+l:location.href=t.url},e.siteUser=function(e){var t=location.protocol+"//"+location.host;t+="/rest/site/fe/user",t+="?site="+c,location.href=t},e.invite=function(e,t){e.loginExpire?location.href="/rest/site/fe/invite?matter=channel,"+t.id+"&inviteToken="+l:r.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(n){e.loginExpire=n.loginExpire,location.href="/rest/site/fe/invite?matter=channel,"+t.id+"&inviteToken="+l})};var h=function(){var t=i.defer();return n.get("/rest/site/home/get?site="+c).success(function(t){e.siteInfo=t.data}),n.get("/rest/site/fe/matter/channel/get?site="+c+"&id="+a).success(function(i){e.user=i.data.user,e.channel=i.data.channel,e.qrcode="/rest/site/fe/matter/channel/qrcode?site="+c+"&url="+encodeURIComponent(location.href),/MicroMessenge|Yixin/i.test(navigator.userAgent)&&d(),t.resolve(),n.post("/rest/site/fe/matter/logAccess?site="+c+"&id="+a+"&type=channel&title="+e.channel.title+"&shareby="+u,{search:location.search.replace("?",""),referer:document.referrer})}).error(function(e,t){if(401===t){var n=document.createElement("iframe");n.setAttribute("id","frmAuth"),n.onload=function(){this.height=document.documentElement.clientHeight},document.body.appendChild(n),0===e.indexOf("http")?(window.onAuthSuccess=function(){n.style.display="none",h()},n.setAttribute("src",e),n.style.display="block"):n.contentDocument&&n.contentDocument.body&&(n.contentDocument.body.innerHTML=e,n.style.display="block")}else alert(e)}),t.promise};h()}])},95:function(e,t,n){e.exports=n(40)}});
﻿(function(g,h,O){function u(a,b,c){return function(){try{return a.apply(this,arguments)}catch(d){c||xa(d,b)}}}function xa(a,b){var c;if(.01>Math.random())try{var d=a&&a.message||"";(c=-1<d.indexOf("network error occurred")||-1<d.indexOf("send beacon")&&-1<d.indexOf("Content Security Policy"))||(new ga).log("jserrs",X,a.message,b,D.href,"","string"===typeof a.stack&&a.stack.replace(/\n/g,"\\n"))}catch(e){}}function mb(a,b,c,d,e){function l(a){var b=(new Date).getTime();a&&b<a&&(Na+=a-b+20);f.setTimeout(function(){l(b)},
20,"timeCorrector")}function n(){var a=(new Date).getTime()+Na;a<S&&(a=S+10);return S=a}function r(){return Math.round((n()-X)/50)}function H(a,b){b=Math.max(0,Math.min(b,65535));f.mergeArrays(a,[b>>8,b&255])}function t(a,b){f.mergeArrays(a,[b&255])}function p(a,b){for(b=Math.max(0,b|0);127<b;)f.mergeArrays(a,[b&127|128]),b>>=7;f.mergeArrays(a,[b])}function q(a,b){255<b.length&&(b=b.substr(0,255));f.mergeArrays(a,[b.length]);for(var c=0;c<b.length;c++)H(a,b.charCodeAt(c))}function w(a,b){p(a,b.length);
for(var c=0;c<b.length;c++)p(a,b.charCodeAt(c))}function Oa(a,b,c,d,e,f){for(var y;c&&(y=m.getElementSize(c))&&(!y[0]||!y[1]);)c=m.getElementParent(c);if(!c)return null;y=c[E];if(!y||0>y)return null;var l={mousemove:2,click:32,dblclick:33,mousedown:4,mouseup:30,touch:12}[b];if(!l)return null;var Ma=m.getElementXY(c);c=[];t(c,l);p(c,a);p(c,y);p(c,Math.max(0,d[0]-Ma[0]));p(c,Math.max(0,d[1]-Ma[1]));/^mouse(up|down)|click$/.test(b)&&(a=e||f,t(c,2>a?1:a==(e?2:4)?4:2));return c}function Pa(a,b,c,d){b=
b[E];if(!b||0>b)return null;varELECT|TEXTAREA$/.test(a.nodeName)||!a.form||Y(a.form))return null;var c=m.getFormNumber(a.form);if(0>c)return null;var d="INPUT"==a.nodeName?{text:0,color:0,date:0,datetime:0,"datetime-local":0,email:0,number:0,range:0,search:0,tel:0,time:0,url:0,month:0,week:0,password:2,radio:3,checkbox:4,file:6,image:7}[a.type]:{SELECT:1,TEXTAREA:5}[a.nodeName];if("number"!=typeof d)return null;for(var e=-1,f=a.form.elements,y=f.length,l=0,n=0;l<y;l++)if(f[l].name==
a.name){if(f[l]==a){e=n;break}n++}if(0>e)return null;f=[];t(f,7);p(f,b);p(f,c);p(f,d);w(f,a.name||"");p(f,e);return f}function M(a,b){var c=m.getFormNumber(b);if(0>c)return null;for(var d=b.elements,e=d.length,y=[],l=0;l<e;l++)if(!m.isEmptyField(d[l])){var n=d[l][E];n&&0<n&&f.mergeArrays(y,[n])}d=[];t(d,11);p(d,a);p(d,c);p(d,y.length);for(c=0;c<y.length;c++)p(d,y[c]);return d}function R(){var a=[];t(a,13);return a}function I(a,b,c){a=a.apply(g,b);na.append(a,c)}function B(a){if(a[E])a:{var b=r(),
c=a[E];if(0<c){var d=[];a=m.getElementRegion(a);var e=za[c],f=a[0]+"x"+a[1],l=a[2]+"x"+a[3];f!=e.pos&&(e.pos=f,t(d,9),p(d,b),p(d,c),p(d,a[0]),p(d,a[1]));l!=e.size&&(e.size=l,t(d,10),p(d,b),p(d,c),p(d,a[2]),p(d,a[3]));if(d.length){a=d;break a}}a=null}else{(c=m.getElementParent(a))&&B(c);a[E]=T;za[T]={};T++;if(a.nodeName)if(c=+a[E],!isFinite(c)||0>=c)b=null;else{var d=64,e=0,y=m.getElementParent(a),f=y&&y[E]?y[E]:0;0>f&&(f=0);var l=a.nodeName.toUpperCase(),n=sb[l];n||(d|=2);var g=m.getElementNeighborPosition(a);
g||(d|=4);var h=m.getElementRegion(a);(y=y?m.getElementRegion(y):na);else k.on(h,"wheel",Dthis.meta,this._packetNumber);this._packetNumber++;this.clear()},_saveToStorage:function(){this.storage&&this._data.length&&this.storage.set(this.storageKey,{data:this._data,meta:this.meta,pnum:this._packetNumber,time:+new Date})}}),w={storage:{},init:function(){var a=this;u(function(){g.Ya=g.Ya||{};g.Ya._metrika=g.Ya._metrika||{};a.storage=g.Ya._metrika},"",!0)();return this},setSafe:function(a,b){var c=
this;u(function(){c.storage[a]||(c.storage[a]=b)},"",!0)();return this},set:function(a,b){u(function(){g.Ya._metrika[a]=b},"",!0)();return this},get:function(a,b){return u(function(){var c=g.Ya._metrika[a];return c===O?b:c},"",!0)()}};f.forEachKey=function(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d],a)};f.isEqual=function(a,b){var c=!0;f.forEachKey(a,function(a,e){b.hasOwnProperty(a)&&b[a]===e||(c=!1)});if(!c)return c;f.forEachKey(b,function(b,e){a.hasOwnProperty(b)&&a[b]===e||(c=!1)});
return c};var k=A.inherit({_initComponent:function(){k.(e){e.data===c&&(e.stopPropagation&&e.stopPropagation(),a.call(b),k.un(g,"message",d,null,{passive:!1}))};k.on(g,"message",d,null,{passive:!1});g.postMessage(c,"*")}else f.setTimeout(function(){a.call(b)},0)};var oa=A.inherit({transports:[],globalConfig:w,postParams:[],isDisabled:function(){return this.globalConfig.get("oo")},send:function(a,b,c,d){var e=[a],l=this,n=c||function(){};l.isDisabled()?n.call(d):function H(a){if(a<this.transports.length)try{var c=
new this.transports[a]({postParams:this.postParams,quern(a,b,c,d){var e=this._doc;if(!e)return c.call(d,!1);b=this._splitParams(b);var l="ifr"+f.random();var g=e.createElement("div");g.style.position="absolute";g.style.left="-99999px";g.style.top="-99999px";var h=['\x3ciframe name\x3d"',l,'"\x3e\x3c/iframe\x3e','\x3cform action\x3d"',this._buildUrl(a,b.get),'" method\x3d"post" target\x3d"',l,'" enctype\x3d"',this.enctype,'"\x3e'];f.forEachKey(b.post,function(a){f.mergeArrays(h,['\x3cinput type\x3d"hidden" autocomplete\x3d"off" autocorrect\x3d"off"',
' autocapitalize\x3d"off" spellcheck\x3d"false" name\x3d"',a,'"/\x3e'])ls&&"object"==typeof g.JSON},getStorageId:function(){var a=this.get("lsid");a||(a=Math.round(Math.random()*new Date),this.set("lsid",a));return a},clearStorageId:function(){this.remove("lsid")},_getLsKey:function(a){return"_ym"+this.counterId+"_"+a}}),F=A.inherit({counterId:"",onlyCurrentDomain:!1,skipPrefix:!1,_initComponent:function(){var a;F.superclass._initComponent.apply(this,arguments);this._domain=null;if(!this.onlyCurrentDomain){var b=
D.host.split(".");for(a=2;;)if(a<=b.length){if(this._domain="."+b.slice(-a).join("."),a++,this.isEnabled())break}else{this._domain=null;break}}},create:function(a,b,c){a=[this._prepareName(a)+"\x3d"+encodeURIComponent(b)];c&&(b=new Date,b.setTime(b.getTime()+6E4*c),a.push("expires\x3d"+b.toGMTString()));this._domain&&a.push("domain\x3d"+this._domain);a.push("path\x3d/");try{h.cookie=a.join(";")}catch(d){}},read:function(a){try{var b=h.cookie}catch(c){}return b&&b.match(new RegExp("(?:^|;\\s*)"+this._prepareName(a)+
"\x3d([^;]*)"))?decodeURIComponent(RegExp.$1):null},erase:function(a){this.create(a,"",-1)},isEnabled:function(){this.create("metrika_enabled","1",60);var a=!!this.read("metrika_enabled");this.erase("metrika_enabled");return a},_prepareName:function(a){return(this.skipPrefix?"":"_ym_")+a+(this.counterId?"_"+this.counterId:"")}});F.get=function(a){return(new F({onlyCurrentDomain:!0})).read(a)};F.set=function(a,b,c){return(new F({onlyCurrentDomain:!0})).create(a,b,c)};F.isEnabled=function(){return(new F({onlyCurrentDomain:!0})).isEnabled()};
var G={getSeconds:function(){return Math.round(+new Date/1E3)}};q.isSafari=function(){try{return navigator.vendor&&-1<navigator.vendor.indexOf("Apple")&&navigator.userAgent&&!navigator.userAgent.match("CriOS")}catch(a){}return!1};var N=oa.inherit({protocol:"",host:J.host,queryStringParams:{firstOrdering:["wmode","callback","cnt-class"],lastOrdering:["browser-info"]},resource:"",counterId:"",counterType:0,retry:!1,transports:[Cb,W,Z,Db],_initComponent:function(){N.superclass._initComponent.apply(this,
arguments);this.retry&&(this._storage=new Q)},send:function(a,b,c,d){var e=this._registerRequest(a,b);this._sendSavedRequest(e,a,b,c,d)},_sendSavedRequest:function(a,b,c,d,e){var l=this.globalConfig.get("firstReqStatus");if("process"==l)this.globalConfig.set("firstReqCallbacks",f.mergeArrays(this.globalConfig.get("firstReqCallbacks")||[],[[this,arguments]]));else{l||this.globalConfig.set("firstReqStatus","process");this.counterType&&(b["cnt-class"]=this.counterType);c.st=G.getSeconds();c.u=N._userID;
l=[this.protocol,"//",this.host,"/",this.resource,"/",this.counterId].join("");var g=[];c&&(f.forEachKey(c,function(a,b){"t"!=a&&f.mergeArrays(g,[a,b])}),c.t&&f.mergeArrays(g,["t",c.t]));g.length&&(b["browser-info"]=g.join(":"));return N.superclass.send.call(this,l,b,function(){var b;this.globalConfig.set("firstReqStatus","complete");this._unregisterRequest(a);var c=this.globalConfig.get("firstReqCallbacks");this.globalConfig.set("firstReqCallbacks",null);if(c)for(b=0;b<c.length;b++)c[b][0]._sendSavedRequest.apply(c[b][0],
c[b][1]);d&&d.apply(e,arguments)},this)}},_isRetryEnabled:function(){return this.retry&&this._storage&&this._storage.isEnabled()},_registerRequest:function(a,b){var c;if(this._isRetryEnabled()){b.rqnl=b.rqnl||0;b.rqnl++;var d=this._storage.get("retryReqs")||{};for(c=1;d[c];)c++;d[c]={protocol:this.protocol,host:this.host,resource:this.resource,counterId:this.counterId,counterType:this.counterType,postParams:this.postParams,params:a,browserInfo:b,ghid:this.globalConfig.get("_globalMetrikaHitId"),time:+new Date};
this._storage.set("retryReqs",d);return c}},_unregisterRequest:function(a){if(a&&this._isRetryEnable.warn&&console.warn.apply(console,arguments)};f.isObject=function(a){try{return a&&null!==a&&"[object Object]"==Object.prototype.toString.call(a)}catch(b){return!1}};f._playerRegexp=/^.+\.mtproxy\.yandex\.net$/;f.isMetrikaPlayer=function(){return"MetrikaPlayer"==g.name||this._playerRegexp.test(g.location.hostname)};var m={getDocumentCharset:function(){return(""+(h.characterSet||h.charset||
"")).toLowerCase()},getRootElement:function(){var a=h.documentElement;return"CSS1Compat"==h.compatMode?a:h.body||a},getViewportSize:function(){var a=m.getRootElement();return[a.clientWidth||g.innerWidth,a.clientHeight||g.innerHeight]},getDocumentTitle:function(){var a=h.title;"string"!=typeof a&&(a=(a=h.getElementsByTagName("title"))&&a.length?a[0].innerHTML:"");return a}};q._silverlightVersion="";q.getSilverlightVersion=function(){if(!q._silverlightVersion)if(g.ActiveXObject)try{var a=new ActiveXObject("AgControl.AgControl");
var b=function(a,b,d,f){for(;c(a,b);)b[d]+=f;b[d]-=f};var c=function(a,b){return a.isVersionSupported(b[0]+"."+b[1]+"."+b[2]+"."+b[3])};var d=[1,0,0,0];b(a,d,0,1);b(a,d,1,1);b(a,d,2,1E4);b(a,d,2,1E3);b(a,d,2,100);b(a,d,2,10);b(a,d,2,1);b(a,d,3,1);q._silverlightVersion=d.join(".")}catch(e){}else if(b=g.navigator,b=b.plugins&&b.plugins["Silverlight Plug-In"])q._silverlightVersion=b.description;return q._silverlightVersion||""};q._flashVersion=0;q.getFlashVersion=function(){if(!q._flashVersion){var a=
g.navigator;if("undefined"!=typeof a.plugins&&"object"==typeof a.pluginsmg");b.onload=function(){a._saveReq(!1);m.removeNode(this)};b.onerror=function(){a._saveReq(!0);m.removeNode(this)};b.src=a.url+String.fromCharCode(97,100,118,101,114,116,46,103,105,102);q.isSafari()&&(b.style.position="absolute",b.style.visibility="hidden",b.style.width="0px",b.style.height="0px",m.getRootElement().appendChild(b))})},_saveReq:function(a){this._value=a=a?"1":"2";this._setReqStatus("complete");this._getLs().create("isad",
a,1200)},_setReqStatus:function(a){try{this.globalConfig.set("adStatus",a)}catch(b){}},_getReqStatus:function(){try{return this.globalConfig.get("adStatus")}catch(a){return"complete"}},_getLs:function(){this._ls||(this._ls=new F);return this._ls}},ca={encode:function(a){var b=[],c;var d=0;for(c=a.length;d<c;d++){var e=a.charCodeAt(d);128>e?b.push(e):(127<e&&2048>e?b.push(e>>6|192):(b.push(e>>12|224),b.push(e>>6&63|128)),b.push(e&63|128))}return b},decode:function(a){for(var b="",c=0,d,e,f;c<a.length;)d=


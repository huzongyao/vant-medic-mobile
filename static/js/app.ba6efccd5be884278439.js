webpackJsonp([3],{"3rgq":function(t,e,n){"use strict";function a(t){n("shU5")}var i=n("Sh+Y"),r=n("HHp/"),o=n("XyMi"),s=a,c=Object(o.a)(i.a,r.a,r.b,!1,s,"data-v-a6cfbf8e",null);e.a=c.exports},"4t4X":function(t,e,n){"use strict";e.a={HTTP_BIN_GET:"https://www.httpbin.org/get",HTTP_BIN_POST:"https://www.httpbin.org/post"}},"7pem":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top-half",style:{"background-image":"url(static/img/mine/bg-baseinfo.png)"}},[n("div",{staticClass:"top-bar"},[n("van-icon",{attrs:{name:"setting-o",size:"24px"}})],1),t._v(" "),n("div",{staticClass:"info-line"},[n("van-image",{staticClass:"user-icon",attrs:{src:"static/img/mine/icon-user-def.png",round:""}}),t._v(" "),n("div",{staticClass:"flex1 user-text"},[n("div",{staticClass:"name-line"},[n("div",[t._v("小麦姐")]),t._v(" "),n("van-image",{staticClass:"user-type",attrs:{src:"static/img/mine/user_type_normal.png"}})],1),t._v(" "),n("div",[t._v("6年用户")]),t._v(" "),n("div",[t._v("关注2")])]),t._v(" "),n("div",{staticClass:"self-page"},[t._v("\n        个人主页\n        "),n("van-icon",{attrs:{name:"arrow"}})],1)],1),t._v(" "),n("div",{staticClass:"wallet-line"},t._l(t.walletData,function(e,a){return n("div",{key:a,staticClass:"flex1"},[n("div",{staticClass:"wallet-txt"},[t._v(t._s(e.txt))]),t._v(" "),n("div",{staticClass:"wallet-name"},[t._v(t._s(e.name))])])}),0),t._v(" "),n("div",{staticClass:"member-line"},[n("div",{staticClass:"member-back",style:{"background-image":"url(static/img/mine/bg-no-member.png)"}},[n("van-button",{staticClass:"open-btn",attrs:{round:"",size:"mini"}},[t._v("立刻开通\n          "),n("van-icon",{attrs:{name:"arrow"}})],1)],1)])]),t._v(" "),t._m(0)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"space-con"},[n("div",{staticClass:"mine-card"},[n("div",[t._v("我的订单")]),t._v(" "),n("div")])])}]},"9n+d":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},i=[]},B42O:function(t,e,n){"use strict";function a(t){n("JH+t")}var i=n("dTmP"),r=n("9n+d"),o=n("XyMi"),s=a,c=Object(o.a)(i.a,r.a,r.b,!1,s,"data-v-e1498240",null);e.a=c.exports},D8x8:function(t,e){},"HHp/":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("keep-alive",[t.$route.meta.keepAlive?n("router-view",{directives:[{name:"keep-scroll-position",rawName:"v-keep-scroll-position"}],staticClass:"main-router-view"}):t._e()],1),t._v(" "),t.$route.meta.keepAlive?t._e():n("router-view",{staticClass:"main-router-view"}),t._v(" "),n("van-tabbar",{model:{value:t.tabBarSelect,callback:function(e){t.tabBarSelect=e},expression:"tabBarSelect"}},t._l(t.tabItemList,function(e,a){return n("van-tabbar-item",{key:a,attrs:{to:e.to,replace:""},scopedSlots:t._u([{key:"icon",fn:function(i){return n("van-icon",{staticClass:"icon-img",attrs:{name:t.getTabIconSrc(e,i.active),badge:t.getBadgeTxt(e,a)}})}}],null,!0)},[n("div",{staticClass:"tab-txt"},[t._v(t._s(t.$t(e.name)))])])}),1)],1)},i=[]},"JH+t":function(t,e){},M93x:function(t,e,n){"use strict";function a(t){n("ei3C")}var i=n("xJD8"),r=n("zeHc"),o=n("XyMi"),s=a,c=Object(o.a)(i.a,r.a,r.b,!1,s,"data-v-50bcd494",null);e.a=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("Fd2+"),r=n("1f+G"),o=n("MVBf"),s=n.n(o),c=n("t4mt"),u=(n.n(c),n("Qslh")),m=(n.n(u),n("s0L2")),l=(n.n(m),n("M93x")),f=n("lOXw"),d=n("qoVm"),v=n("YaEn"),p=n("l+I4"),_=n("gfkZ"),h=n("4t4X");a.a.use(i.e),a.a.use(i.b),a.a.use(r.a),a.a.use(s.a),a.a.mixin(f.a),a.a.prototype.$http=_.a,a.a.prototype.$urls=h.a,new a.a({i18n:d.a,router:v.a,store:p.a,el:"#app",render:function(t){return t(l.a)}})},NRa8:function(t,e,n){"use strict";function a(t){n("lsuS")}var i=n("jiD8"),r=n("7pem"),o=n("XyMi"),s=a,c=Object(o.a)(i.a,r.a,r.b,!1,s,"data-v-254c226e",null);e.a=c.exports},OHoN:function(t,e,n){"use strict";e.a={name:"splash-page",data:function(){return{}},mounted:function(){this._routeReplace("GuidePage")},methods:{}}},"Q/Yn":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},i=[]},Qslh:function(t,e){},"Rk8+":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},i=[]},"Sh+Y":function(t,e,n){"use strict";e.a={name:"main-page",watch:{$route:function(){this.checkTabSelection()}},computed:{getBadgeTxt:function(){return function(t,e){if(2==e)return 21}},getTabIconSrc:function(){return function(t,e){return"static/img/tabs/"+(e?t.active:t.normal)}}},data:function(){return{tabBarSelect:0,tabItemList:[{active:"ic_tab_register_press.png",normal:"ic_tab_register_normal.png",name:"tab_home",to:"home"},{active:"ic_tab_consult_press.png",normal:"ic_tab_consult_normal.png",name:"tab_doctor",to:"doctor"},{active:"ic_tab_message_press.png",normal:"ic_tab_message_normal.png",name:"tab_message",to:"message"},{active:"ic_tab_mine_press.png",normal:"ic_tab_mine_normal.png",name:"tab_mine",to:"mine"}]}},methods:{checkTabSelection:function(){for(var t=0;t<this.tabItemList.length;t++){var e=this.tabItemList[t];this.$route.path.endsWith(e.to)&&(this.tabBarSelect=t)}}},mounted:function(){this.checkTabSelection()}}},V9bA:function(t,e){},XHBC:function(t,e,n){"use strict";var a={app_name:["160","160"],tab_home:["首页","HOME"],tab_doctor:["问医生","DOCTOR"],tab_message:["消息","MAIL"],tab_mine:["我的","MINE"],settings:["设置","Settings"],version:["版本","Version"],language:["语言","Language"],english:["英文","English"],chinese:["中文","Chinese"],"":["",""]};e.a=a},YaEn:function(t,e,n){"use strict";var a=n("7+uW"),i=n("/ocq"),r=n("17/p"),o=n("uQCP"),s=n("3rgq"),c=n("qLGx"),u=n("B42O"),m=n("jvcR"),l=n("NRa8");a.a.use(i.a);var f=function(){return r.a.loading("",3e4,!0),!0},d=function(){return r.a.hide(),!0},v=function(t){return f()&&n.e(1).then(function(){return d()&&t(n("FnJ8"))}.bind(null,n)).catch(n.oe)},p=function(t){return f()&&n.e(0).then(function(){return d()&&t(n("y7EK"))}.bind(null,n)).catch(n.oe)},_=[{path:"*",redirect:"SplashPage"},{name:"SplashPage",component:o.a},{name:"main",redirect:"/main/home",component:s.a,children:[{name:"home",path:"home",component:c.a,meta:{keepAlive:!0}},{name:"doctor",path:"doctor",component:u.a,meta:{keepAlive:!0}},{name:"message",path:"message",component:m.a,meta:{keepAlive:!0}},{name:"mine",path:"mine",component:l.a,meta:{keepAlive:!0}}],meta:{keepAlive:!0}},{name:"GuidePage",component:p},{name:"FactoryMain",component:v}];_.forEach(function(t){t.path=t.path||"/"+(t.name||"")});var h=new i.a({routes:_});h.beforeEach(function(t,e,n){localStorage.setItem("fromPage",e.name),n()}),h.afterEach(function(t,e){window.scrollTo(0,0)}),e.a=h},dTmP:function(t,e,n){"use strict";e.a={name:"tab-doctor",data:function(){return{}},mounted:function(){},methods:{}}},ei3C:function(t,e){},gfkZ:function(t,e,n){"use strict";var a=n("//Fk"),i=n.n(a),r=n("Dd8w"),o=n.n(r),s=n("mtWM"),c=n.n(s),u=c.a.create();u.defaults.baseURL="https://prod-api.com",u.defaults.timeout=16e3,u.getParams=function(){return{}},u.isLogin=function(){var t=u.getParams();return!!t&&(t.customer_id&&t.token)},u.interceptors.request.use(function(t){t.baseURL,t.url;if("post"===t.method){var e=o()({},t.data,u.getParams()),n=new FormData;for(var a in e)n.append(a,e[a]);t.data=n}else"get"===t.method&&(t.params=o()({},t.params,u.getParams()));return t},function(t){return i.a.reject(t)}),u.interceptors.response.use(function(t){return t.data&&t.data.status&&1!==t.data.status?(5===t.data.status&&window.localStorage.clear(),console.log(t),i.a.reject(t.data)):t},function(t){return i.a.reject(o()({},t,{msg:t.message}))}),e.a=u},jiD8:function(t,e,n){"use strict";e.a={name:"tab-mine",data:function(){return{walletData:[{name:"余额(元)",txt:"0"},{name:"卡券(张)",txt:"0"},{name:"积分",txt:"674"}]}},mounted:function(){},methods:{}}},jvcR:function(t,e,n){"use strict";function a(t){n("rpcj")}var i=n("yRE9"),r=n("Rk8+"),o=n("XyMi"),s=a,c=Object(o.a)(i.a,r.a,r.b,!1,s,"data-v-81413c74",null);e.a=c.exports},koSC:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},i=[]},"l+I4":function(t,e,n){"use strict";var a=n("7+uW"),i=n("NYxO");a.a.use(i.a);var r={userInfo:null},o={},s={setUserInfo:function(t,e){t.userInfo=e}},c={},u=new i.a.Store({state:r,getters:o,mutations:s,actions:c});e.a=u},lOXw:function(t,e,n){"use strict";var a=n("Dd8w"),i=n.n(a),r=n("Fd2+"),o=n("NYxO");e.a={computed:i()({},Object(o.b)(["userInfo"])),methods:{_showAlert:function(t,e){r.a.alert({message:t}).then(e)},_showConfirm:function(t,e,n){r.a.confirm({message:t}).then(e).catch(n)},_routeReplace:function(t,e){this.$router.replace({name:t,params:e})},_routeReplaceQ:function(t,e){this.$router.replace({name:t,query:e})},_routePush:function(t,e){this.$router.push({name:t,params:e})},_routePushQ:function(t,e){this.$router.push({name:t,query:e})},_showToast:function(t){Object(r.d)(t)},_routerBack:function(){this.$router?this.$router.back():window.history.back()},_showLoading:function(){r.d.loading({mask:!0,duration:0,loadingType:"spinner",message:"Loading..."})},_dismissLoading:function(){r.d.clear()},_dataURLtoBlob:function(t){for(var e=t.split(","),n=e[0].match(/:(.*?);/)[1],a=atob(e[1]),i=a.length,r=new Uint8Array(i);i--;)r[i]=a.charCodeAt(i);return new Blob([r],{type:n})}}}},lsuS:function(t,e){},pZXv:function(t,e,n){"use strict";e.a={name:"tab-home",data:function(){return{}},mounted:function(){},methods:{}}},qLGx:function(t,e,n){"use strict";function a(t){n("D8x8")}var i=n("pZXv"),r=n("Q/Yn"),o=n("XyMi"),s=a,c=Object(o.a)(i.a,r.a,r.b,!1,s,"data-v-a28bf1c0",null);e.a=c.exports},qoVm:function(t,e,n){"use strict";var a=n("fZjL"),i=n.n(a),r=n("7+uW"),o=n("TXmL"),s=n("XHBC"),c=n("Fd2+"),u=n("RYit"),m=n.n(u),l=n("KzJ3"),f=n.n(l);r.a.use(o.a);var d=new o.a({messages:function(){var t={zh:{},en:{}};return i()(s.a).forEach(function(e){t.zh[e]=s.a[e][0],t.en[e]=s.a[e][1]}),t}(),locale:"en"});d.reload=function(){var t="zh";"en"===window.localStorage.getItem("language")?(t="en",c.c.use("en-US",m.a)):c.c.use("zh-CN",f.a),d.locale=t},d.reload(),e.a=d},rpcj:function(t,e){},s0L2:function(t,e){},shU5:function(t,e){},t4mt:function(t,e){},uQCP:function(t,e,n){"use strict";function a(t){n("V9bA")}var i=n("OHoN"),r=n("koSC"),o=n("XyMi"),s=a,c=Object(o.a)(i.a,r.a,r.b,!1,s,"data-v-0ac903cd",null);e.a=c.exports},xJD8:function(t,e,n){"use strict";e.a={name:"app",mounted:function(){},methods:{}}},yRE9:function(t,e,n){"use strict";e.a={name:"tab-message",data:function(){return{}},mounted:function(){},methods:{}}},zeHc:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t._v(" "),t.$route.meta.keepAlive?t._e():n("router-view")],1)},i=[]}},["NHnr"]);
webpackJsonp([5],{"2Cj6":function(t,e){},"3rgq":function(t,e,n){"use strict";function a(t){n("2Cj6")}var i=n("Sh+Y"),s=n("HHp/"),o=n("XyMi"),r=a,c=Object(o.a)(i.a,s.a,s.b,!1,r,"data-v-a6cfbf8e",null);e.a=c.exports},"49qF":function(t,e){},"4t4X":function(t,e,n){"use strict";e.a={HTTP_BIN_GET:"https://www.httpbin.org/get",HTTP_BIN_POST:"https://www.httpbin.org/post"}},"9n+d":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},i=[]},"9pzj":function(t,e){},B42O:function(t,e,n){"use strict";function a(t){n("ni2V")}var i=n("dTmP"),s=n("9n+d"),o=n("XyMi"),r=a,c=Object(o.a)(i.a,s.a,s.b,!1,r,"data-v-e1498240",null);e.a=c.exports},"DC/g":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[t.$route.meta.keepAlive?n("transition",{attrs:{name:"van-fade"}},[n("router-view")],1):t._e()],1),t._v(" "),t.$route.meta.keepAlive?t._e():n("transition",{attrs:{name:"van-fade"}},[n("router-view")],1)],1)},i=[]},FOcx:function(t,e){},"HHp/":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("keep-alive",[t.$route.meta.keepAlive?n("router-view",{directives:[{name:"keep-scroll-position",rawName:"v-keep-scroll-position"}],staticClass:"main-router-view"}):t._e()],1),t._v(" "),t.$route.meta.keepAlive?t._e():n("router-view",{staticClass:"main-router-view"}),t._v(" "),n("van-tabbar",{model:{value:t.tabBarSelect,callback:function(e){t.tabBarSelect=e},expression:"tabBarSelect"}},t._l(t.tabItemList,function(e,a){return n("van-tabbar-item",{key:a,attrs:{to:e.to,replace:""},scopedSlots:t._u([{key:"icon",fn:function(i){return n("van-icon",{staticClass:"icon-img",attrs:{name:t.getTabIconSrc(e,i.active),badge:t.getBadgeTxt(e,a)}})}}],null,!0)},[n("div",{staticClass:"tab-txt"},[t._v(t._s(t.$t(e.name)))])])}),1)],1)},i=[]},JND3:function(t,e){},M93x:function(t,e,n){"use strict";function a(t){n("JND3")}var i=n("xJD8"),s=n("DC/g"),o=n("XyMi"),r=a,c=Object(o.a)(i.a,s.a,s.b,!1,r,"data-v-64837abc",null);e.a=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("Fd2+"),s=n("1f+G"),o=n("MVBf"),r=n.n(o),c=n("t4mt"),u=(n.n(c),n("Qslh")),m=(n.n(u),n("s0L2")),g=(n.n(m),n("M93x")),l=n("lOXw"),_=n("qoVm"),p=n("YaEn"),d=n("l+I4"),v=n("gfkZ"),f=n("4t4X"),h=n("qs/E");a.a.use(i.e),a.a.use(i.b),a.a.use(s.a),a.a.use(r.a),a.a.mixin(l.a),a.a.prototype.$http=v.a,a.a.prototype.$urls=f.a,a.a.prototype.$mock=h.a,new a.a({i18n:_.a,router:p.a,store:d.a,el:"#app",render:function(t){return t(g.a)}})},NRa8:function(t,e,n){"use strict";function a(t){n("49qF")}var i=n("jiD8"),s=n("XPmj"),o=n("XyMi"),r=a,c=Object(o.a)(i.a,s.a,s.b,!1,r,"data-v-41ecaf36",null);e.a=c.exports},OHoN:function(t,e,n){"use strict";e.a={name:"splash-page",data:function(){return{}},mounted:function(){var t=this;setTimeout(function(){localStorage.getItem("guideShown")?t._routePush("main"):t._routeReplace("GuidePage")},1500)},methods:{}}},Qslh:function(t,e){},RKRg:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top-bar"},[n("div",{staticClass:"search-div"},[n("div",[n("div",{staticClass:"city-txt"},[t._v("成都\n          "),n("van-icon",{attrs:{name:"arrow-down"}})],1),t._v(" "),n("div",{staticClass:"weather-txt"},[t._v("22°C 晴")])]),t._v(" "),n("div",{staticClass:"flex1 search-input"},[n("van-icon",{attrs:{name:"search",size:"18px"}}),t._v(" "),n("van-swipe",{staticClass:"search-swipe",attrs:{vertical:"",autoplay:3e3,"show-indicators":!1}},t._l(t.searchList,function(e,a){return n("van-swipe-item",{key:a},[n("div",{staticClass:"search-item"},[t._v(t._s(e))])])}),1)],1),t._v(" "),n("div",[n("van-icon",{attrs:{name:"static/img/home/signin-gif-04.gif",size:"44px"}})],1)]),t._v(" "),n("div",{staticClass:"card-div"},[n("div",{staticClass:"entry-card"},[n("van-grid",{attrs:{border:!1,"column-num":5}},t._l(t.entryOne,function(e,a){return n("van-grid-item",{key:a},[n("div",{staticClass:"one-item"},[n("van-image",{attrs:{src:"static/img/home/entry/"+e.ic}}),t._v(" "),n("div",{staticClass:"one-text"},[t._v(t._s(e.txt))])],1)])}),1),t._v(" "),n("van-swipe",{attrs:{loop:!1}},t._l(t.entryTwo,function(e,a){return n("van-swipe-item",{key:a},[n("div",{staticClass:"two-swipe-it"},[n("van-grid",{attrs:{border:!1,"column-num":5}},t._l(e,function(t,e){return n("van-grid-item",{key:e},[n("div",{staticClass:"two-item"},[n("van-image",{attrs:{src:"static/img/home/entry/"+t.ic}})],1)])}),1)],1)])}),1)],1)])]),t._v(" "),n("van-popup",{staticStyle:{background:"transparent"},model:{value:t.showPopupAd,callback:function(e){t.showPopupAd=e},expression:"showPopupAd"}},[n("div",{staticClass:"popad-con"},[n("van-icon",{staticClass:"ad-close",attrs:{name:"clear",size:"28px",color:"white"},on:{click:function(e){t.showPopupAd=!1}}}),t._v(" "),n("div",{staticClass:"swipe-con"},[n("van-swipe",{staticClass:"swipe-shell",attrs:{autoplay:5e3,"indicator-color":"white"}},t._l(t.swipeAds,function(t,e){return n("van-swipe-item",{key:e},[n("van-image",{staticClass:"popad-img",attrs:{src:"static/img/advtise/"+t.img,fit:"cover"}})],1)}),1)],1)],1)])],1)},i=[]},"Sh+Y":function(t,e,n){"use strict";e.a={name:"main-page",watch:{$route:function(){this.checkTabSelection()}},computed:{getBadgeTxt:function(){return function(t,e){if(2==e)return 21}},getTabIconSrc:function(){return function(t,e){return"static/img/tabs/"+(e?t.active:t.normal)}}},data:function(){return{tabBarSelect:0,tabItemList:[{active:"ic_tab_register_press.png",normal:"ic_tab_register_normal.png",name:"tab_home",to:"home"},{active:"ic_tab_consult_press.png",normal:"ic_tab_consult_normal.png",name:"tab_doctor",to:"doctor"},{active:"ic_tab_message_press.png",normal:"ic_tab_message_normal.png",name:"tab_message",to:"message"},{active:"ic_tab_mine_press.png",normal:"ic_tab_mine_normal.png",name:"tab_mine",to:"mine"}]}},methods:{checkTabSelection:function(){for(var t=0;t<this.tabItemList.length;t++){var e=this.tabItemList[t];this.$route.path.endsWith(e.to)&&(this.tabBarSelect=t)}}},mounted:function(){this.checkTabSelection()}}},W47Q:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:t.$t("tab_message"),fixed:"","z-index":10}}),t._v(" "),n("div",{staticClass:"nav-con"},[t._l(t.msgData,function(e){return[n("div",{staticClass:"msg-item click-box",on:{click:function(n){return t.onMsgItemClick(e)}}},[n("van-icon",{staticClass:"msg-icon",attrs:{name:"static/img/message/"+e.ic,size:"50px",badge:e.num}}),t._v(" "),n("div",{staticClass:"flex1 msg-right"},[n("div",{staticClass:"msg-top"},[n("div",{staticClass:"flex1 msg-name"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"time-txt"},[t._v(t._s(e.time))])]),t._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"msg-detail flex1"},[t._v(t._s(e.txt))])])])],1),t._v(" "),n("div",{staticClass:"div-line"})]})],2)],1)},i=[]},XHBC:function(t,e,n){"use strict";var a={app_name:["160","160"],tab_home:["首页","HOME"],tab_doctor:["问医生","DOCTOR"],tab_message:["消息","MAIL"],tab_mine:["我的","MINE"],settings:["设置","Settings"],version:["版本","Version"],language:["语言","Language"],english:["英文","English"],chinese:["中文","Chinese"],"":["",""]};e.a=a},XPmj:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top-half",style:{"background-image":"url(static/img/mine/bg-baseinfo.png)"}},[n("div",{staticClass:"top-bar"},[n("van-icon",{attrs:{name:"setting-o",size:"24px"}})],1),t._v(" "),n("div",{staticClass:"info-line"},[n("van-image",{staticClass:"user-icon",attrs:{src:"static/img/mine/icon-user-def.png",round:""}}),t._v(" "),n("div",{staticClass:"flex1 user-text"},[n("div",{staticClass:"name-line"},[n("div",{staticClass:"user-name"},[t._v(t._s(this.userInfo.name))]),t._v(" "),n("van-image",{staticClass:"user-type",attrs:{src:"static/img/mine/user_type_normal.png"}})],1),t._v(" "),n("div",{staticClass:"user-time"},[t._v("6年用户 广东 深圳")]),t._v(" "),n("div",{staticClass:"user-fans"},[t._v("关注2 粉丝6")])]),t._v(" "),n("div",{staticClass:"self-page"},[t._v("\n        个人主页\n        "),n("van-icon",{attrs:{name:"arrow"}})],1)],1),t._v(" "),n("div",{staticClass:"wallet-line"},t._l(t.walletData,function(e,a){return n("div",{key:a,staticClass:"flex1"},[n("div",{staticClass:"wallet-txt"},[t._v(t._s(e.txt))]),t._v(" "),n("div",{staticClass:"wallet-name"},[t._v(t._s(e.name))])])}),0),t._v(" "),n("div",{staticClass:"member-line"},[n("div",{staticClass:"member-back",style:{"background-image":"url(static/img/mine/bg-no-member.png)"}},[n("van-button",{staticClass:"open-btn",attrs:{round:"",size:"mini"}},[t._v("立刻开通\n          "),n("van-icon",{attrs:{name:"arrow"}})],1)],1)])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"align-center sugg-all"},[n("div",{staticClass:"suggest-tit"},[t._v("为您推荐")]),t._v(" "),n("van-row",t._l(t.suggestData,function(e,a){return n("van-col",{key:a,staticClass:"sugg-box",attrs:{span:"12"}},[n("div",{staticClass:"sugg-card click-box"},[n("van-image",{attrs:{src:"static/img/mine/suggest/"+e.img,radius:"4px 4px 0 0"}}),t._v(" "),n("div",{staticClass:"sugg-foot"},[n("div",{staticClass:"sugg-text"},[t._v(t._s(e.txt))]),t._v(" "),n("div",{staticClass:"sugg-price"},[t._v("¥"+t._s(e.price)),n("span",{staticClass:"sugg-old"},[t._v("¥"+t._s(e.old))])])])],1)])}),1)],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"space-con"},[n("div",{staticClass:"mine-card"},[n("div",[t._v("我的订单")])])])}]},Y7Hh:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-image",{staticClass:"splash-img",attrs:{src:"static/img/guide/ad_page.jpg",fit:"cover"}})],1)},i=[]},YaEn:function(t,e,n){"use strict";var a=n("7+uW"),i=n("/ocq"),s=n("17/p"),o=n("uRzA"),r=(n.n(o),n("uQCP")),c=n("3rgq"),u=n("qLGx"),m=n("B42O"),g=n("jvcR"),l=n("NRa8");a.a.use(i.a);var _=function(){return s.a.loading("",3e4,!0),!0},p=function(){return s.a.hide(),!0},d=function(t){return _()&&n.e(3).then(function(){return p()&&t(n("FnJ8"))}.bind(null,n)).catch(n.oe)},v=function(t){return _()&&n.e(0).then(function(){return p()&&t(n("y7EK"))}.bind(null,n)).catch(n.oe)},f=function(t){return _()&&n.e(1).then(function(){return p()&&t(n("/R6n"))}.bind(null,n)).catch(n.oe)},h=function(t){return _()&&n.e(2).then(function(){return p()&&t(n("MFOa"))}.bind(null,n)).catch(n.oe)},b=[{path:"*",redirect:"SplashPage"},{name:"SplashPage",component:r.a},{name:"main",redirect:"/main/home",component:c.a,children:[{name:"home",path:"home",component:u.a,meta:{keepAlive:!0}},{name:"doctor",path:"doctor",component:m.a,meta:{keepAlive:!0}},{name:"message",path:"message",component:g.a,meta:{keepAlive:!0}},{name:"mine",path:"mine",component:l.a,meta:{keepAlive:!0}}],meta:{keepAlive:!0}},{name:"PhoneLogin",component:h},{name:"MessageDetail",component:f},{name:"GuidePage",component:v},{name:"FactoryMain",component:d}];b.forEach(function(t){t.path=t.path||"/"+(t.name||"")});var w=new i.a({routes:b});w.beforeEach(function(t,e,n){localStorage.setItem("fromPage",e.name),n()}),w.afterEach(function(t,e){window.scrollTo(0,0)}),e.a=w},dTmP:function(t,e,n){"use strict";e.a={name:"tab-doctor",data:function(){return{}},mounted:function(){},methods:{}}},gfkZ:function(t,e,n){"use strict";var a=n("//Fk"),i=n.n(a),s=n("Dd8w"),o=n.n(s),r=n("mtWM"),c=n.n(r),u=c.a.create();u.defaults.baseURL="https://prod-api.com",u.defaults.timeout=16e3,u.getParams=function(){return{}},u.isLogin=function(){var t=u.getParams();return!!t&&(t.customer_id&&t.token)},u.interceptors.request.use(function(t){t.baseURL,t.url;if("post"===t.method){var e=o()({},t.data,u.getParams()),n=new FormData;for(var a in e)n.append(a,e[a]);t.data=n}else"get"===t.method&&(t.params=o()({},t.params,u.getParams()));return t},function(t){return i.a.reject(t)}),u.interceptors.response.use(function(t){return t.data&&t.data.status&&1!==t.data.status?(5===t.data.status&&window.localStorage.clear(),console.log(t),i.a.reject(t.data)):t},function(t){return i.a.reject(o()({},t,{msg:t.message}))}),e.a=u},jiD8:function(t,e,n){"use strict";e.a={name:"tab-mine",data:function(){return{suggestData:[{img:"suggest_img_1.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"0.0"},{img:"suggest_img_2.jpg",txt:"【青少年福利】眼部健康检查（视力检查）",old:"300.0",price:"288.0"},{img:"suggest_img_3.jpg",txt:"【深圳和美妇儿科医院线下免费义诊】",old:"300.0",price:"99.0"},{img:"suggest_img_4.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"79999.0"},{img:"suggest_img_5.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"30.0"},{img:"suggest_img_6.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"40.0"},{img:"suggest_img_7.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"50.0"},{img:"suggest_img_8.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"60.0"},{img:"suggest_img_9.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"40.0"},{img:"suggest_img_10.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"30.0"},{img:"suggest_img_11.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"20.0"},{img:"suggest_img_12.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"8880.0"}],walletData:[{name:"余额(元)",txt:"0"},{name:"卡券(张)",txt:"0"},{name:"积分",txt:"674"}]}},activated:function(){this._isLogin()||this._routeReplace("PhoneLogin")},mounted:function(){},methods:{}}},jvcR:function(t,e,n){"use strict";function a(t){n("tEdm")}var i=n("yRE9"),s=n("W47Q"),o=n("XyMi"),r=a,c=Object(o.a)(i.a,s.a,s.b,!1,r,"data-v-71adfe22",null);e.a=c.exports},"l+I4":function(t,e,n){"use strict";var a=n("7+uW"),i=n("NYxO");a.a.use(i.a);var s={userInfo:{}},o={},r={setUserInfo:function(t,e){t.userInfo=e}},c={},u=new i.a.Store({state:s,getters:o,mutations:r,actions:c});e.a=u},lOXw:function(t,e,n){"use strict";var a=n("mvHQ"),i=n.n(a),s=n("Dd8w"),o=n.n(s),r=n("Fd2+"),c=n("NYxO");e.a={computed:o()({},Object(c.b)(["userInfo"])),methods:{_saveUserInfo:function(){this._saveLSObject("userInfo",this.userInfo)},_loadUserInfo:function(){var t=this._loadLSObject("userInfo")||{};this.$store.commit("setUserInfo",t)},_isLogin:function(){return!(!this.userInfo||!this.userInfo.name)||(this._loadUserInfo(),!(!this.userInfo||!this.userInfo.name))},_showAlert:function(t,e){r.a.alert({message:t}).then(e)},_showConfirm:function(t,e,n){r.a.confirm({message:t}).then(e).catch(n)},_routeReplace:function(t,e){this.$router.replace({name:t,params:e})},_routeReplaceQ:function(t,e){this.$router.replace({name:t,query:e})},_routePush:function(t,e){this.$router.push({name:t,params:e})},_routePushQ:function(t,e){this.$router.push({name:t,query:e})},_showToast:function(t){Object(r.d)(t)},_routerBack:function(){this.$router?this.$router.back():window.history.back()},_showLoading:function(){r.d.loading({mask:!0,duration:0,loadingType:"spinner",message:"Loading..."})},_dismissLoading:function(){r.d.clear()},_saveLSObject:function(t,e){if(t&&e)try{var n=i()(e);localStorage.setItem(t,n)}catch(t){}},_loadLSObject:function(t){if(t)try{var e=localStorage.getItem(t);return JSON.parse(e)}catch(t){}return null}}}},ni2V:function(t,e){},pZXv:function(t,e,n){"use strict";e.a={name:"tab-home",data:function(){return{showPopupAd:!1,searchList:["光子嫩肤29.9","核酸检测预约","健康小镇-积分换豪礼","就医经历","隔夜菜会致癌吗？"],entryTwo:[[{ic:"entry_two_1.png",to:""},{ic:"entry_two_2.png",to:""},{ic:"entry_two_3.png",to:""},{ic:"entry_two_4.png",to:""},{ic:"entry_two_5.png",to:""},{ic:"entry_two_6.png",to:""},{ic:"entry_two_7.png",to:""},{ic:"entry_two_8.png",to:""},{ic:"entry_two_9.png",to:""},{ic:"entry_two_10.png",to:""}],[{ic:"entry_two_11.png",to:""},{ic:"entry_two_12.png",to:""},{ic:"entry_two_13.png",to:""},{ic:"entry_two_14.png",to:""},{ic:"entry_two_15.png",to:""},{ic:"entry_two_16.png",to:""},{ic:"entry_two_17.png",to:""},{ic:"entry_two_18.png",to:""},{ic:"entry_two_19.png",to:""},{ic:"entry_two_20.png",to:""}],[{ic:"entry_two_21.gif",to:""},{ic:"entry_two_22.png",to:""},{ic:"entry_two_23.png",to:""},{ic:"entry_two_24.png",to:""},{ic:"entry_two_25.png",to:""}]],entryOne:[{ic:"entry_one_4.png",txt:"找名医",to:""},{ic:"entry_one_5.png",txt:"挂号",to:""},{ic:"entry_one_3.png",txt:"抗疫专区",to:""},{ic:"entry_one_2.gif",txt:"体检",to:""},{ic:"entry_one_1.png",txt:"买药",to:""}],swipeAds:[{img:"swipe_ad_1.gif",to:""},{img:"swipe_ad_2.jpg",to:""},{img:"swipe_ad_8.png",to:""},{img:"swipe_ad_9.png",to:""}]}},mounted:function(){sessionStorage.getItem("swipeAdShown")||(sessionStorage.setItem("swipeAdShown","1"),this.showPopupAd=!0)}}},qLGx:function(t,e,n){"use strict";function a(t){n("FOcx")}var i=n("pZXv"),s=n("RKRg"),o=n("XyMi"),r=a,c=Object(o.a)(i.a,s.a,s.b,!1,r,"data-v-240ee585",null);e.a=c.exports},qoVm:function(t,e,n){"use strict";var a=n("fZjL"),i=n.n(a),s=n("7+uW"),o=n("TXmL"),r=n("XHBC"),c=n("Fd2+"),u=n("RYit"),m=n.n(u),g=n("KzJ3"),l=n.n(g);s.a.use(o.a);var _=new o.a({messages:function(){var t={zh:{},en:{}};return i()(r.a).forEach(function(e){t.zh[e]=r.a[e][0],t.en[e]=r.a[e][1]}),t}(),locale:"en"});_.reload=function(){var t="zh";"en"===window.localStorage.getItem("language")?(t="en",c.c.use("en-US",m.a)):c.c.use("zh-CN",l.a),_.locale=t},_.reload(),e.a=_},"qs/E":function(t,e,n){"use strict";e.a={randomPng:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e=document.createElement("canvas");e.width=t,e.height=t;for(var n=e.getContext("2d"),a=0;a<t;a++)for(var i=0;i<t;i++){var s=Math.floor(16777215*Math.random());n.fillStyle="#"+s.toString(16),n.fillRect(i,a,1,1)}return e.toDataURL("image/png")}}},s0L2:function(t,e){},t4mt:function(t,e){},tEdm:function(t,e){},uQCP:function(t,e,n){"use strict";function a(t){n("9pzj")}var i=n("OHoN"),s=n("Y7Hh"),o=n("XyMi"),r=a,c=Object(o.a)(i.a,s.a,s.b,!1,r,"data-v-016b28ff",null);e.a=c.exports},uRzA:function(t,e){},xJD8:function(t,e,n){"use strict";e.a={name:"app",mounted:function(){this._loadUserInfo()},methods:{}}},yRE9:function(t,e,n){"use strict";e.a={name:"tab-message",data:function(){return{msgData:[{ic:"msg_icon_1.png",name:"深圳市卫生健康委员会",txt:"12月7日深圳无新增病例！上海新增1例本土，曾坐动车到外地参加聚集性活动 ",time:"30分钟前",num:"1"},{ic:"msg_icon_2.png",name:"健康早报",txt:"怎么判断自己会不会猝死？经常熬夜的人，一定要看看！ ",time:"08:05",num:"1"},{ic:"msg_icon_3.png",name:"积分变更通知",txt:"积分变更通知",time:"14：14",num:""},{ic:"msg_icon_4.png",name:"积分变更通知",txt:"积分变更通知",time:"14：14",num:"11"},{ic:"msg_icon_5.png",name:"积分变更通知",txt:"积分变更通知",time:"14：14",num:"10"},{ic:"msg_icon_6.png",name:"积分变更通知",txt:"积分变更通知",time:"14：14",num:""},{ic:"msg_icon_7.png",name:"积分变更通知",txt:"积分变更通知",time:"14：14",num:"3"},{ic:"msg_icon_8.png",name:"积分变更通知",txt:"积分变更通知",time:"14：14",num:""}]}},activated:function(){this._isLogin()||this._routeReplace("PhoneLogin")},mounted:function(){},methods:{onMsgItemClick:function(t){this._routePush("MessageDetail")}}}}},["NHnr"]);
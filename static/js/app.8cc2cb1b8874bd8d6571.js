webpackJsonp([8],{"3rgq":function(t,e,n){"use strict";function a(t){n("jHUj")}var i=n("Sh+Y"),s=n("9gjJ"),o=n("XyMi"),r=a,c=Object(o.a)(i.a,s.a,s.b,!1,r,"data-v-6c7bc2a8",null);e.a=c.exports},"4t4X":function(t,e,n){"use strict";e.a={HTTP_BIN_GET:"https://www.httpbin.org/get",HTTP_BIN_POST:"https://www.httpbin.org/post"}},"9gjJ":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("keep-alive",[t.$route.meta.keepAlive?n("router-view",{directives:[{name:"keep-scroll-position",rawName:"v-keep-scroll-position"}],staticClass:"main-router-view"}):t._e()],1),t._v(" "),t.$route.meta.keepAlive?t._e():n("router-view",{staticClass:"main-router-view"}),t._v(" "),n("van-tabbar",{attrs:{"safe-area-inset-bottom":""},model:{value:t.tabBarSelect,callback:function(e){t.tabBarSelect=e},expression:"tabBarSelect"}},t._l(t.tabItemList,function(e,a){return n("van-tabbar-item",{key:a,attrs:{to:e.to,replace:""},scopedSlots:t._u([{key:"icon",fn:function(i){return n("van-icon",{staticClass:"icon-img",attrs:{name:t.getTabIconSrc(e,i.active),badge:t.getBadgeTxt(e,a)}})}}],null,!0)},[n("div",{staticClass:"tab-txt"},[t._v(t._s(t.$t(e.name)))])])}),1)],1)},i=[]},"9pzj":function(t,e){},B42O:function(t,e,n){"use strict";function a(t){n("GZE2")}var i=n("dTmP"),s=n("SEDa"),o=n("XyMi"),r=a,c=Object(o.a)(i.a,s.a,s.b,!1,r,"data-v-63267344",null);e.a=c.exports},GZE2:function(t,e){},M93x:function(t,e,n){"use strict";function a(t){n("MUrz")}var i=n("xJD8"),s=n("Rd9l"),o=n("XyMi"),r=a,c=Object(o.a)(i.a,s.a,s.b,!1,r,"data-v-66d46922",null);e.a=c.exports},MUrz:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("Fd2+"),s=n("1f+G"),o=n("MVBf"),r=n.n(o),c=n("t4mt"),u=(n.n(c),n("Qslh")),l=(n.n(u),n("s0L2")),m=(n.n(l),n("M93x")),g=n("lOXw"),_=n("qoVm"),d=n("YaEn"),v=n("l+I4"),p=n("gfkZ"),f=n("4t4X"),h=n("qs/E");a.a.use(i.e),a.a.use(i.b),a.a.use(s.a),a.a.use(r.a),a.a.mixin(g.a),a.a.prototype.$http=p.a,a.a.prototype.$urls=f.a,a.a.prototype.$mock=h.a,new a.a({i18n:_.a,router:d.a,store:v.a,el:"#app",render:function(t){return t(m.a)}})},NRa8:function(t,e,n){"use strict";function a(t){n("ijog")}var i=n("jiD8"),s=n("Tyzm"),o=n("XyMi"),r=a,c=Object(o.a)(i.a,s.a,s.b,!1,r,"data-v-03ca425c",null);e.a=c.exports},OHoN:function(t,e,n){"use strict";e.a={name:"splash-page",data:function(){return{}},mounted:function(){var t=this;setTimeout(function(){localStorage.getItem("guideShown")?t._routePush("main"):t._routeReplace("GuidePage")},1500)},methods:{}}},PyEU:function(t,e){},Qslh:function(t,e){},Rd9l:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[t.$route.meta.keepAlive?n("transition",{attrs:{name:"van-fade"}},[n("router-view")],1):t._e()],1),t._v(" "),t.$route.meta.keepAlive?t._e():n("transition",{attrs:{name:"van-fade"}},[n("router-view")],1)],1)},i=[]},SEDa:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top-con",style:{"background-image":"url(static/img/ask/ask_top.png)"}},[n("div",{staticClass:"flex top-text"},[n("div",{on:{click:t.onLocationClick}},[t._v(t._s(t.userInfo.city||"成都"))]),t._v(" "),n("div",{staticClass:"down-arr",on:{click:t.onLocationClick}},[n("van-icon",{attrs:{name:"arrow-down"}})],1),t._v(" "),n("div",[t._v("门诊大厅")])])]),t._v(" "),n("div",{staticClass:"search-con"},[n("div",{staticClass:"search-bar",on:{click:function(e){return t._routePush("SearchPage")}}},[n("van-icon",{attrs:{name:"search",size:"20px"}}),t._v(" "),n("div",{staticClass:"search-txt"},[t._v("1分钟快速问医生")])],1)]),t._v(" "),n("div",{staticClass:"card-entry"},t._l(t.cardEntries,function(e,a){return n("div",{key:a,staticClass:"card-box flex1"},[n("div",{staticClass:"card-item"},[n("van-image",{attrs:{src:"static/img/ask/"+e.img}}),t._v(" "),n("div",{staticClass:"card-txt"},[t._v(t._s(e.txt))]),t._v(" "),n("div",{staticClass:"card-ins"},[t._v(t._s(e.ins))])],1)])}),0),t._v(" "),n("div",{staticClass:"small-entry"},[n("van-swipe",{attrs:{"indicator-color":"#999999",loop:!1}},t._l(t.askEntries,function(e,a){return n("van-swipe-item",{key:a},[n("div",{staticClass:"entry-row"},t._l(e,function(e,a){return n("div",{key:a,staticClass:"flex1 align-center"},[n("van-image",{staticClass:"swipe-img",attrs:{src:"static/img/ask/"+e.img,fit:"cover"}}),t._v(" "),n("div",[t._v(t._s(e.txt))])],1)}),0)])}),1)],1),t._v(" "),n("div",{staticClass:"banner-con"},[n("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.bannerAds,function(t,e){return n("van-swipe-item",{key:e},[n("van-image",{staticClass:"swipe-img",attrs:{src:"static/img/ask/"+t.img,radius:"4px",fit:"cover"}})],1)}),1)],1)])},i=[]},"Sh+Y":function(t,e,n){"use strict";e.a={name:"main-page",watch:{$route:function(){this.checkTabSelection()}},computed:{getBadgeTxt:function(){return function(t,e){if(2==e)return 21}},getTabIconSrc:function(){return function(t,e){return"static/img/tabs/"+(e?t.active:t.normal)}}},data:function(){return{tabBarSelect:0,tabItemList:[{active:"ic_tab_register_press.png",normal:"ic_tab_register_normal.png",name:"tab_home",to:"home"},{active:"ic_tab_consult_press.png",normal:"ic_tab_consult_normal.png",name:"tab_doctor",to:"doctor"},{active:"ic_tab_message_press.png",normal:"ic_tab_message_normal.png",name:"tab_message",to:"message"},{active:"ic_tab_mine_press.png",normal:"ic_tab_mine_normal.png",name:"tab_mine",to:"mine"}]}},methods:{checkTabSelection:function(){for(var t=0;t<this.tabItemList.length;t++){var e=this.tabItemList[t];this.$route.path.endsWith(e.to)&&(this.tabBarSelect=t)}}},mounted:function(){this.checkTabSelection()}}},Tyzm:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top-half",style:{"background-image":"url(static/img/mine/bg-baseinfo.png)"}},[n("div",{staticClass:"top-bar"},[n("van-icon",{attrs:{name:"setting-o",size:"24px"}})],1),t._v(" "),n("div",{staticClass:"info-line"},[n("van-image",{staticClass:"user-icon",attrs:{src:"static/img/mine/icon-user-def.png",round:""}}),t._v(" "),n("div",{staticClass:"flex1 user-text"},[n("div",{staticClass:"name-line"},[n("div",{staticClass:"user-name"},[t._v(t._s(this.userInfo.name))]),t._v(" "),n("van-image",{staticClass:"user-type",attrs:{src:"static/img/mine/user_type_normal.png"}})],1),t._v(" "),n("div",{staticClass:"user-time"},[n("van-icon",{attrs:{name:"static/img/mine/user_male.png",size:"15px"}}),t._v(" "),n("div",{staticClass:"time-txt"},[t._v("6年用户 广东 深圳")])],1),t._v(" "),n("div",{staticClass:"user-fans"},[t._v("关注2 粉丝6")])]),t._v(" "),n("div",{staticClass:"self-page"},[t._v("\n        个人主页\n        "),n("van-icon",{attrs:{name:"arrow"}})],1)],1),t._v(" "),n("div",{staticClass:"wallet-line"},t._l(t.walletData,function(e,a){return n("div",{key:a,staticClass:"flex1"},[n("van-badge",{attrs:{dot:e.dot}},[n("div",{staticClass:"wallet-txt"},[t._v(t._s(e.txt))])]),t._v(" "),n("div",{staticClass:"wallet-name"},[t._v(t._s(e.name))])],1)}),0),t._v(" "),n("div",{staticClass:"member-line"},[n("div",{staticClass:"member-back",style:{"background-image":"url(static/img/mine/bg-no-member.png)"}},[n("van-button",{staticClass:"open-btn",attrs:{round:"",size:"mini"}},[t._v("立刻开通\n          "),n("van-icon",{attrs:{name:"arrow"}})],1)],1)])]),t._v(" "),n("div",{staticClass:"space-con"},[n("div",{staticClass:"mine-card"},[n("div",{staticClass:"card-title"},[t._v("我的订单")]),t._v(" "),n("van-grid",{attrs:{border:!1,"column-num":5}},t._l(t.orderEntries,function(e,a){return n("van-grid-item",{key:a,staticClass:"order-item"},[n("van-icon",{attrs:{name:"static/img/mine/"+e.ic,size:"46px"}}),t._v(" "),n("div",{staticClass:"order-txt"},[t._v(t._s(e.txt))])],1)}),1)],1)]),t._v(" "),n("div",{staticClass:"align-center sugg-all"},[n("div",{staticClass:"suggest-tit"},[t._v("为您推荐")]),t._v(" "),n("van-row",t._l(t.suggestData,function(e,a){return n("van-col",{key:a,staticClass:"sugg-box",attrs:{span:"12"}},[n("div",{staticClass:"sugg-card click-box"},[n("van-image",{attrs:{src:"static/img/mine/suggest/"+e.img,radius:"4px 4px 0 0"}}),t._v(" "),n("div",{staticClass:"sugg-foot"},[n("div",{staticClass:"sugg-text"},[t._v(t._s(e.txt))]),t._v(" "),n("div",{staticClass:"sugg-price"},[t._v("¥"+t._s(e.price)),n("span",{staticClass:"sugg-old"},[t._v("¥"+t._s(e.old))])])])],1)])}),1)],1)])},i=[]},XHBC:function(t,e,n){"use strict";var a={app_name:["160","160"],tab_home:["首页","HOME"],tab_doctor:["问医生","DOCTOR"],tab_message:["消息","MAIL"],tab_mine:["我的","MINE"],settings:["设置","Settings"],version:["版本","Version"],language:["语言","Language"],english:["英文","English"],chinese:["中文","Chinese"],"":["",""]};e.a=a},Y7Hh:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-image",{staticClass:"splash-img",attrs:{src:"static/img/guide/ad_page.jpg",fit:"cover"}})],1)},i=[]},YaEn:function(t,e,n){"use strict";var a=n("7+uW"),i=n("/ocq"),s=n("17/p"),o=n("uRzA"),r=(n.n(o),n("uQCP")),c=n("3rgq"),u=n("qLGx"),l=n("B42O"),m=n("jvcR"),g=n("NRa8");a.a.use(i.a);var _=function(){return s.a.loading("",3e4,!0),!0},d=function(){return s.a.hide(),!0},v=function(t){return _()&&n.e(6).then(function(){return d()&&t(n("FnJ8"))}.bind(null,n)).catch(n.oe)},p=function(t){return _()&&n.e(1).then(function(){return d()&&t(n("y7EK"))}.bind(null,n)).catch(n.oe)},f=function(t){return _()&&n.e(3).then(function(){return d()&&t(n("/R6n"))}.bind(null,n)).catch(n.oe)},h=function(t){return _()&&n.e(4).then(function(){return d()&&t(n("MFOa"))}.bind(null,n)).catch(n.oe)},b=function(t){return _()&&n.e(0).then(function(){return d()&&t(n("fDXy"))}.bind(null,n)).catch(n.oe)},x=function(t){return _()&&n.e(2).then(function(){return d()&&t(n("Rrok"))}.bind(null,n)).catch(n.oe)},w=function(t){return _()&&n.e(5).then(function(){return d()&&t(n("AENo"))}.bind(null,n)).catch(n.oe)},y=[{path:"*",redirect:"SplashPage"},{name:"SplashPage",component:r.a},{name:"main",redirect:"/main/home",component:c.a,children:[{name:"home",path:"home",component:u.a,meta:{keepAlive:!0,title:"首页"}},{name:"doctor",path:"doctor",component:l.a,meta:{keepAlive:!0,title:"问医生"}},{name:"message",path:"message",component:m.a,meta:{keepAlive:!0,title:"消息"}},{name:"mine",path:"mine",component:g.a,meta:{keepAlive:!0,title:"我的"}}],meta:{keepAlive:!0}},{name:"SearchPage",component:x,meta:{title:"健康搜索"}},{name:"HealthTown",component:w,meta:{title:"健康小镇"}},{name:"CitySelectPage",component:b,meta:{title:"选择地址"}},{name:"PhoneLogin",component:h,meta:{title:"手机号登录"}},{name:"MessageDetail",component:f},{name:"GuidePage",component:p},{name:"FactoryMain",component:v}];y.forEach(function(t){t.path=t.path||"/"+(t.name||"")});var C=new i.a({routes:y});C.beforeEach(function(t,e,n){localStorage.setItem("fromPage",e.name),n()}),C.afterEach(function(t,e){t.meta.title?document.title=t.meta.title:document.title="就医挂号(让健康更简单)",window.scrollTo(0,0)}),e.a=C},dTmP:function(t,e,n){"use strict";e.a={name:"tab-doctor",data:function(){return{cardEntries:[{img:"card_entry_1.png",txt:"图文咨询",ins:"名医1对1沟通",to:""},{img:"card_entry_2.png",txt:"私人医生",ins:"贴心VIP服务",to:""},{img:"card_entry_3.png",txt:"免费咨询",ins:"义诊0元问",to:""}],askEntries:[[{img:"ask_entry_1.png",txt:"极速咨询",to:""},{img:"ask_entry_2.png",txt:"我要开药",to:""},{img:"ask_entry_3.png",txt:"名医电话",to:""},{img:"ask_entry_4.png",txt:"同行点赞",to:""},{img:"ask_entry_5.png",txt:"视频咨询",to:""}],[{img:"ask_entry_6.png",txt:"报告解读",to:""},{img:"ask_entry_7.png",txt:"名医直播",to:""},{img:"ask_entry_8.png",txt:"科普/视频",to:""},{img:"ask_entry_9.png",txt:"肺结节专区",to:""},{img:"ask_entry_10.png",txt:"医疗热力榜",to:""}]],bannerAds:[{img:"banner_ad_1.jpg",to:""},{img:"banner_ad_2.jpg",to:""},{img:"banner_ad_3.jpg",to:""},{img:"banner_ad_4.jpg",to:""},{img:"banner_ad_5.jpg",to:""},{img:"banner_ad_6.jpg",to:""},{img:"banner_ad_7.png",to:""},{img:"banner_ad_8.jpg",to:""}]}},mounted:function(){},methods:{onLocationClick:function(){this._routePush("CitySelectPage")}}}},gfkZ:function(t,e,n){"use strict";var a=n("//Fk"),i=n.n(a),s=n("Dd8w"),o=n.n(s),r=n("mtWM"),c=n.n(r),u=c.a.create();u.defaults.baseURL="https://prod-api.com",u.defaults.timeout=16e3,u.getParams=function(){return{}},u.isLogin=function(){var t=u.getParams();return!!t&&(t.customer_id&&t.token)},u.interceptors.request.use(function(t){t.baseURL,t.url;if("post"===t.method){var e=o()({},t.data,u.getParams()),n=new FormData;for(var a in e)n.append(a,e[a]);t.data=n}else"get"===t.method&&(t.params=o()({},t.params,u.getParams()));return t},function(t){return i.a.reject(t)}),u.interceptors.response.use(function(t){return t.data&&t.data.status&&1!==t.data.status?(5===t.data.status&&window.localStorage.clear(),console.log(t),i.a.reject(t.data)):t},function(t){return i.a.reject(o()({},t,{msg:t.message}))}),e.a=u},ijog:function(t,e){},jHUj:function(t,e){},jiD8:function(t,e,n){"use strict";e.a={name:"tab-mine",data:function(){return{orderEntries:[{ic:"order_entry_1.png",txt:"挂号",to:""},{ic:"order_entry_2.png",txt:"加号",to:""},{ic:"order_entry_3.png",txt:"咨询",to:""},{ic:"order_entry_4.png",txt:"私人医生",to:""},{ic:"order_entry_5.png",txt:"送心意",to:""},{ic:"order_entry_6.png",txt:"处方",to:""},{ic:"order_entry_7.png",txt:"服务订单",to:""},{ic:"order_entry_8.png",txt:"160健康课",to:""},{ic:"order_entry_9.png",txt:"询价单",to:""}],suggestData:[{img:"suggest_img_1.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"0.0"},{img:"suggest_img_2.jpg",txt:"【青少年福利】眼部健康检查（视力检查）",old:"300.0",price:"288.0"},{img:"suggest_img_3.jpg",txt:"【深圳和美妇儿科医院线下免费义诊】",old:"300.0",price:"99.0"},{img:"suggest_img_4.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"79999.0"},{img:"suggest_img_5.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"30.0"},{img:"suggest_img_6.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"40.0"},{img:"suggest_img_7.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"50.0"},{img:"suggest_img_8.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"60.0"},{img:"suggest_img_9.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"40.0"},{img:"suggest_img_10.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"30.0"},{img:"suggest_img_11.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"20.0"},{img:"suggest_img_12.jpg",txt:"【三甲名医义诊】长期失眠...",old:"300.0",price:"8880.0"}],walletData:[{name:"余额(元)",txt:"0"},{name:"卡券(张)",txt:"0"},{name:"积分",txt:"674",dot:!0}]}},activated:function(){this._isLogin()||this._routeReplace("PhoneLogin")},mounted:function(){},methods:{}}},jvcR:function(t,e,n){"use strict";function a(t){n("PyEU")}var i=n("yRE9"),s=n("pzut"),o=n("XyMi"),r=a,c=Object(o.a)(i.a,s.a,s.b,!1,r,"data-v-4351970e",null);e.a=c.exports},"l+I4":function(t,e,n){"use strict";var a=n("7+uW"),i=n("NYxO");a.a.use(i.a);var s={userInfo:{}},o={},r={setUserInfo:function(t,e){t.userInfo=e}},c={},u=new i.a.Store({state:s,getters:o,mutations:r,actions:c});e.a=u},lOXw:function(t,e,n){"use strict";var a=n("mvHQ"),i=n.n(a),s=n("Dd8w"),o=n.n(s),r=n("Fd2+"),c=n("NYxO");e.a={computed:o()({},Object(c.b)(["userInfo"])),methods:{_saveUserInfo:function(){this._saveLSObject("userInfo",this.userInfo)},_loadUserInfo:function(){var t=this._loadLSObject("userInfo")||{};this.$store.commit("setUserInfo",t)},_isLogin:function(){return!(!this.userInfo||!this.userInfo.name)||(this._loadUserInfo(),!(!this.userInfo||!this.userInfo.name))},_showAlert:function(t,e){r.a.alert({message:t}).then(e)},_showConfirm:function(t,e,n){r.a.confirm({message:t}).then(e).catch(n)},_routeReplace:function(t,e){this.$router.replace({name:t,params:e})},_routeReplaceQ:function(t,e){this.$router.replace({name:t,query:e})},_routePush:function(t,e){this.$router.push({name:t,params:e})},_routePushQ:function(t,e){this.$router.push({name:t,query:e})},_showToast:function(t){Object(r.d)(t)},_routerBack:function(){this.$router?this.$router.back():window.history.back()},_showLoading:function(){r.d.loading({mask:!0,duration:0,loadingType:"spinner",message:"Loading..."})},_dismissLoading:function(){r.d.clear()},_saveLSObject:function(t,e){if(t&&e)try{var n=i()(e);localStorage.setItem(t,n)}catch(t){}},_loadLSObject:function(t){if(t)try{var e=localStorage.getItem(t);return JSON.parse(e)}catch(t){}return null}}}},ncpb:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top-bar"},[n("div",{staticClass:"search-div"},[n("div",{on:{click:function(e){return t._routePush("CitySelectPage")}}},[n("div",{staticClass:"city-txt"},[t._v(t._s(t.userInfo.city||"成都")+"\n          "),n("van-icon",{attrs:{name:"arrow-down"}})],1),t._v(" "),n("div",{staticClass:"weather-txt"},[t._v("22°C 晴")])]),t._v(" "),n("div",{staticClass:"flex1 search-input",on:{click:function(e){return t._routePush("SearchPage")}}},[n("van-icon",{attrs:{name:"search",size:"18px"}}),t._v(" "),n("van-swipe",{staticClass:"search-swipe",attrs:{vertical:"",autoplay:3e3,"show-indicators":!1}},t._l(t.searchList,function(e,a){return n("van-swipe-item",{key:a},[n("div",{staticClass:"search-item"},[t._v(t._s(e))])])}),1)],1),t._v(" "),n("div",{on:{click:function(e){return t._routePush("HealthTown")}}},[n("van-icon",{attrs:{name:"static/img/home/signin-gif-04.gif",size:"44px"}})],1)]),t._v(" "),n("div",{staticClass:"card-div"},[n("div",{staticClass:"entry-card"},[n("van-grid",{attrs:{border:!1,"column-num":5}},t._l(t.entryOne,function(e,a){return n("van-grid-item",{key:a},[n("div",{staticClass:"one-item"},[n("van-image",{attrs:{src:"static/img/home/entry/"+e.ic}}),t._v(" "),n("div",{staticClass:"one-text"},[t._v(t._s(e.txt))])],1)])}),1),t._v(" "),n("van-swipe",{attrs:{loop:!1}},t._l(t.entryTwo,function(e,a){return n("van-swipe-item",{key:a},[n("div",{staticClass:"two-swipe-it"},[n("van-grid",{attrs:{border:!1,"column-num":5}},t._l(e,function(t,e){return n("van-grid-item",{key:e},[n("div",{staticClass:"two-item"},[n("van-image",{attrs:{src:"static/img/home/entry/"+t.ic}})],1)])}),1)],1)])}),1)],1)])]),t._v(" "),n("van-sticky",[n("div",{staticClass:"sub-tabs"},t._l(t.tabTitles,function(e,a){return n("div",{key:a,staticClass:"sub-tab",on:{click:function(e){return t.onSubTabChange(a)}}},[n("div",{class:{"title-big":a==t.subTabIndex}},[t._v(t._s(e))]),t._v(" "),t.subTabIndex!=a?n("div",{staticClass:"line-indicator"}):t._e(),t._v(" "),t.subTabIndex==a?n("div",{staticClass:"line-indicator sub-indicator"}):t._e()])}),0)]),t._v(" "),n("van-list",{on:{load:t.loadWaterfall},model:{value:t.waterLoading,callback:function(e){t.waterLoading=e},expression:"waterLoading"}},[n("div",{staticClass:"fall-con"},t._l(2,function(e){return n("div",{key:e,staticClass:"one-fall"},t._l(t.waterfallList,function(a,i){return i%2==e-1?n("div",{key:i,staticClass:"fall-card"},[n("van-image",{staticClass:"fall-img",attrs:{src:a.img,fit:"cover",radius:"5px 5px 0 0"}}),t._v(" "),n("div",{staticClass:"fall-txt-div"},[n("div",{staticClass:"fall-txt"},[t._v(t._s(a.txt))])]),t._v(" "),n("div",{staticClass:"fall-user"},[n("van-image",{staticClass:"card-ava",attrs:{src:a.ava,round:""}}),t._v(" "),n("div",{staticClass:"fall-name flex1"},[t._v(t._s(a.name))]),t._v(" "),n("van-icon",{attrs:{name:a.liked?"like":"like-o",color:a.liked?"red":""},on:{click:function(e){return t.onLikeClick(a)}}}),t._v(" "),n("div",{staticClass:"like-num"},[t._v(t._s(a.like+a.liked))])],1)],1):t._e()}),0)}),0)]),t._v(" "),n("van-popup",{staticStyle:{background:"transparent"},model:{value:t.showPopupAd,callback:function(e){t.showPopupAd=e},expression:"showPopupAd"}},[n("div",{staticClass:"popad-con"},[n("van-icon",{staticClass:"ad-close",attrs:{name:"clear",size:"28px",color:"white"},on:{click:function(e){t.showPopupAd=!1}}}),t._v(" "),n("div",{staticClass:"swipe-con"},[n("van-swipe",{staticClass:"swipe-shell",attrs:{autoplay:5e3,"indicator-color":"white"}},t._l(t.swipeAds,function(t,e){return n("van-swipe-item",{key:e},[n("van-image",{staticClass:"popad-img",attrs:{src:"static/img/advtise/"+t.img,fit:"cover"}})],1)}),1)],1)],1)])],1)},i=[]},pXqj:function(t,e){},pZXv:function(t,e,n){"use strict";e.a={name:"tab-home",data:function(){return{waterLoading:!1,showPopupAd:!1,searchList:["光子嫩肤29.9","核酸检测预约","健康小镇-积分换豪礼","就医经历","隔夜菜会致癌吗？"],entryTwo:[[{ic:"entry_two_1.png",to:""},{ic:"entry_two_2.png",to:""},{ic:"entry_two_3.png",to:""},{ic:"entry_two_4.png",to:""},{ic:"entry_two_5.png",to:""},{ic:"entry_two_6.png",to:""},{ic:"entry_two_7.png",to:""},{ic:"entry_two_8.png",to:""},{ic:"entry_two_9.png",to:""},{ic:"entry_two_10.png",to:""}],[{ic:"entry_two_11.png",to:""},{ic:"entry_two_12.png",to:""},{ic:"entry_two_13.png",to:""},{ic:"entry_two_14.png",to:""},{ic:"entry_two_15.png",to:""},{ic:"entry_two_16.png",to:""},{ic:"entry_two_17.png",to:""},{ic:"entry_two_18.png",to:""},{ic:"entry_two_19.png",to:""},{ic:"entry_two_20.png",to:""}],[{ic:"entry_two_21.gif",to:""},{ic:"entry_two_22.png",to:""},{ic:"entry_two_23.png",to:""},{ic:"entry_two_24.png",to:""},{ic:"entry_two_25.png",to:""}]],entryOne:[{ic:"entry_one_4.png",txt:"找名医",to:""},{ic:"entry_one_5.png",txt:"挂号",to:""},{ic:"entry_one_3.png",txt:"抗疫专区",to:""},{ic:"entry_one_2.gif",txt:"体检",to:""},{ic:"entry_one_1.png",txt:"买药",to:""}],swipeAds:[{img:"swipe_ad_1.gif",to:""},{img:"swipe_ad_2.jpg",to:""},{img:"swipe_ad_3.jpg",to:""},{img:"swipe_ad_4.png",to:""},{img:"swipe_ad_5.jpg",to:""},{img:"swipe_ad_6.png",to:""},{img:"swipe_ad_7.png",to:""},{img:"swipe_ad_8.png",to:""},{img:"swipe_ad_9.png",to:""}],tabTitles:["推荐","视频","名医","笔记","科普"],subTabIndex:0,waterfallList:[],waterfallTxt:["激光碎石&体外碎石？！傻傻分不清楚","小孩容易出汗要不要紧？","宝宝指甲长#白斑是怎么回事？#科普","【润月雅水光补水】面膜+润月雅2ml补水、深层补水美白嫩肤、细致毛孔亮肤","车教授告诉你:不要轻视脂肪肝","抑郁症能不能好？多久才能好？","穴位埋线的治疗的疗效反应","抗癫痫药物的不良反应有哪些？"]}},mounted:function(){sessionStorage.getItem("swipeAdShown")||(sessionStorage.setItem("swipeAdShown","1"),this.showPopupAd=!0)},methods:{onLikeClick:function(t){t.liked=1-t.liked},loadWaterfall:function(){var t=this;setTimeout(function(){for(var e=0;e<20;e++){var n=Math.floor(30*Math.random()+1);t.waterfallList.push({img:"static/img/home/sns/sns_pic_"+n+".jpg",txt:t.waterfallTxt[Math.floor(Math.random()*t.waterfallTxt.length)],ava:"static/img/mine/icon-user-def.png",name:"阿东姑娘",like:Math.floor(10*Math.random()),liked:0})}t.waterLoading=!1},1e3)},onSubTabChange:function(t){this.subTabIndex=t,this.waterfallList=[],this.waterLoading=!0,this.loadWaterfall()}}}},pzut:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:t.$t("tab_message"),fixed:"","z-index":10}}),t._v(" "),n("div",{staticClass:"nav-con"},[t._l(t.msgData,function(e){return[n("div",{staticClass:"msg-item click-box",on:{click:function(n){return t.onMsgItemClick(e)}}},[n("van-badge",{attrs:{content:e.num}},[n("van-image",{staticClass:"msg-icon",attrs:{src:"static/img/message/"+e.ic,radius:"5px"}})],1),t._v(" "),n("div",{staticClass:"flex1 msg-right"},[n("div",{staticClass:"msg-top"},[n("div",{staticClass:"flex1 msg-name"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"time-txt"},[t._v(t._s(e.time))])]),t._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"msg-detail flex1"},[t._v(t._s(e.txt))])])])],1),t._v(" "),n("div",{staticClass:"div-line"})]})],2)],1)},i=[]},qLGx:function(t,e,n){"use strict";function a(t){n("pXqj")}var i=n("pZXv"),s=n("ncpb"),o=n("XyMi"),r=a,c=Object(o.a)(i.a,s.a,s.b,!1,r,"data-v-47e45660",null);e.a=c.exports},qoVm:function(t,e,n){"use strict";var a=n("fZjL"),i=n.n(a),s=n("7+uW"),o=n("TXmL"),r=n("XHBC"),c=n("Fd2+"),u=n("RYit"),l=n.n(u),m=n("KzJ3"),g=n.n(m);s.a.use(o.a);var _=new o.a({messages:function(){var t={zh:{},en:{}};return i()(r.a).forEach(function(e){t.zh[e]=r.a[e][0],t.en[e]=r.a[e][1]}),t}(),locale:"en"});_.reload=function(){var t="zh";"en"===window.localStorage.getItem("language")?(t="en",c.c.use("en-US",l.a)):c.c.use("zh-CN",g.a),_.locale=t},_.reload(),e.a=_},"qs/E":function(t,e,n){"use strict";e.a={randomPng:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e=document.createElement("canvas");e.width=t,e.height=t;for(var n=e.getContext("2d"),a=0;a<t;a++)for(var i=0;i<t;i++){var s=Math.floor(16777215*Math.random());n.fillStyle="#"+s.toString(16),n.fillRect(i,a,1,1)}return e.toDataURL("image/png")}}},s0L2:function(t,e){},t4mt:function(t,e){},uQCP:function(t,e,n){"use strict";function a(t){n("9pzj")}var i=n("OHoN"),s=n("Y7Hh"),o=n("XyMi"),r=a,c=Object(o.a)(i.a,s.a,s.b,!1,r,"data-v-016b28ff",null);e.a=c.exports},uRzA:function(t,e){},xJD8:function(t,e,n){"use strict";e.a={name:"app",mounted:function(){this._loadUserInfo()},methods:{}}},yRE9:function(t,e,n){"use strict";e.a={name:"tab-message",data:function(){return{msgData:[{name:"医生科普",txt:"都是打工人,为何TA肩颈不痛、腰腿好、皮肤白嫩、头发还多?原来是私藏了这份秘籍...",ic:"msg_icon_1.png",time:"5分钟前",num:""},{name:"积分变更通知",txt:"积分变更通知",ic:"msg_icon_2.jpg",time:"11:51",num:"1"},{name:"深圳市卫生健康委员会",txt:"12月14日深圳无新增病例！东莞15日开展全市全员核酸检测！",ic:"msg_icon_3.png",time:"11:40",num:"2"},{name:"健康早报",txt:"这里的毛毛千万别乱拔！小心会有生命危险",ic:"msg_icon_4.jpg",time:"08:05",num:"55"},{name:"晚安心语",txt:"把仅剩的几十个幸存者耗死，大屠杀就成了历史？",ic:"msg_icon_5.png",time:"昨天",num:""},{name:"健康郑州",txt:"84年，从未忘记！",ic:"msg_icon_6.png",time:"星期一",num:"6"},{name:"160名医精选",txt:"宫颈癌[HPV]在家也能筛查了！定期检测方便快捷，无需预约到院！",ic:"msg_icon_7.png",time:"12月11日",num:"3"},{name:"超级活动通知",txt:"签到提醒",ic:"msg_icon_8.png",time:"12月09日",num:""},{name:"疫情防控专区",txt:"最新！全国中高风险地区汇总",ic:"msg_icon_9.png",time:"11月11日",num:"1"},{name:"深广电第一现场（健康生活）",txt:"34岁博主得肠癌一年后变“老人”，出现这5种情况要小心→",ic:"msg_icon_10.jpg",time:"09月19日",num:"9"},{name:"深圳疾控",txt:"9月开学季，这4种病要重点防范！",ic:"msg_icon_11.png",time:"09月05日",num:"9"},{name:"优惠券信息",txt:"优惠券即将过期",ic:"msg_icon_12.jpg",time:"02月24日",num:"9"},{name:"深圳市宝安区中心医院（原深圳市宝安区西乡人民医院）",txt:"就诊提醒:您已预约2月21日(明天) 深圳市宝安区中心医院（原深圳市宝安区西乡人民医院）",ic:"msg_icon_13.png",time:"02月20日",num:"9"},{name:"系统消息",txt:"本次实名认证审核已通过!",ic:"msg_icon_14.jpg",time:"02月11日",num:"9"}]}},activated:function(){this._isLogin()||this._routeReplace("PhoneLogin")},mounted:function(){},methods:{onMsgItemClick:function(t){this._routePush("MessageDetail")}}}}},["NHnr"]);
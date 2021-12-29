import Vue from 'vue'
import VueRouter from 'vue-router';
import {Toast} from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

import SplashPage from '../view/splash/SplashPage';
import MainPage from '../view/main/MainPage';
import TabHome from '../view/main/tab/TabHome';
import TabDoctor from '../view/main/tab/TabDoctor';
import TabMessage from '../view/main/tab/TabMessage';
import TabMine from '../view/main/tab/TabMine';

Vue.use(VueRouter);


//显示Loading
const _s = () => {
  Toast.loading('', 30000, true);
  return true;
};

//关闭Loading
const _d = () => {
  Toast.hide();
  return true;
};

const FactoryMain = r => _s() && require.ensure([], () => _d() && r(require('../view/factory/FactoryMain')), 'FactoryMain');
const GuidePage = r => _s() && require.ensure([], () => _d() && r(require('../view/splash/GuidePage')), 'GuidePage');
const MessageDetail = r => _s() && require.ensure([], () => _d() && r(require('../view/message/MessageDetail')), 'MessageDetail');
const PhoneLogin = r => _s() && require.ensure([], () => _d() && r(require('../view/login/PhoneLogin')), 'PhoneLogin');
const CitySelectPage = r => _s() && require.ensure([], () => _d() && r(require('../view/cities/CitySelectPage')), 'CitySelectPage');

const routes = [
  {path: '*', redirect: 'SplashPage'},
  {name: 'SplashPage', component: SplashPage},
  {
    name: 'main', redirect: '/main/home', component: MainPage,
    children: [
      {name: 'home', path: 'home', component: TabHome, meta: {keepAlive: true}},
      {name: 'doctor', path: 'doctor', component: TabDoctor, meta: {keepAlive: true}},
      {name: 'message', path: 'message', component: TabMessage, meta: {keepAlive: true}},
      {name: 'mine', path: 'mine', component: TabMine, meta: {keepAlive: true}},
    ], meta: {keepAlive: true}
  },
  {name: 'CitySelectPage', component: CitySelectPage},
  {name: 'PhoneLogin', component: PhoneLogin},
  {name: 'MessageDetail', component: MessageDetail},
  {name: 'GuidePage', component: GuidePage},
  {name: 'FactoryMain', component: FactoryMain},
];

// 懒得写path，给他们自动生成一个，和name同名
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new VueRouter({routes});

// 生命周期之前
router.beforeEach((to, from, next) => {
  // 保存个路由来路，以备不时之需
  localStorage.setItem('fromPage', from.name);
  next();
});

//生命周期之后
router.afterEach((to, from) => {
  // 滑动到顶吧
  window.scrollTo(0, 0);
});

export default router;

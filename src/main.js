import Vue from 'vue';
import Vant, {Lazyload} from 'vant';
import VueClipboards from 'vue-clipboards';
import ScrollPosition from 'vue-keep-scroll-position'

import 'vant/lib/index.less'
//使用本地的icon字体
import 'vant/lib/icon/local.less';
import './assets/style/common.less';

import App from './App.vue';
import VueMixin from './mixins/VueMixin';
import i18n from './locales';
import router from './router';
import store from './vuex';
import stream from './http';
import urls from './http/urls';
import mock from './mock';

Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(VueClipboards);
Vue.use(ScrollPosition);
Vue.mixin(VueMixin);

Vue.prototype.$http = stream;
Vue.prototype.$urls = urls;
Vue.prototype.$mock = mock;

new Vue({
  i18n,
  router,
  store,
  el: '#app',
  render: h => h(App)
});

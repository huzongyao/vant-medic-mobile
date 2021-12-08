import Vue from 'vue';
import VueI18n from 'vue-i18n';
import AppString from './strings';
import {Locale} from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';
import zhCN from 'vant/lib/locale/lang/zh-CN';

Vue.use(VueI18n);

// 解析语言数组
function getZhEnMessage() {
  let message = {zh: {}, en: {}};
  Object.keys(AppString).forEach(function (key) {
    message.zh[key] = AppString[key][0];
    message.en[key] = AppString[key][1];
  });
  return message;
}

const i18n = new VueI18n({
  messages: getZhEnMessage(),
  locale: 'en'
});

i18n.reload = () => {
  let local = 'zh';
  if (window.localStorage.getItem('language') === 'en') {
    local = 'en';
    Locale.use('en-US', enUS);
  } else {
    Locale.use('zh-CN', zhCN);
  }
  i18n.locale = local;
};

i18n.reload();

export default i18n;

import {Dialog, Toast} from 'vant';
import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState(['userInfo']),
  },

  methods: {
    _saveUserInfo() {
      this._saveLSObject('userInfo', this.userInfo);
    },

    _loadUserInfo() {
      let ui = this._loadLSObject('userInfo') || {};
      this.$store.commit('setUserInfo', ui);
    },

    _isLogin() {
      if (!(this.userInfo && this.userInfo.name)) {
        this._loadUserInfo();
        return !!(this.userInfo && this.userInfo.name);
      }
      return true;
    },

    _showAlert(msg, confirm) {
      Dialog.alert({
        message: msg,
      }).then(confirm)
    },

    _showConfirm(msg, confirm, cancel) {
      Dialog.confirm({
        message: msg
      }).then(confirm)
        .catch(cancel);
    },

    _routeReplace(toName, params) {
      this.$router.replace({
        name: toName,
        params: params,
      });
    },

    _routeReplaceQ(toName, params) {
      this.$router.replace({
        name: toName,
        query: params,
      });
    },

    _routePush(toName, params) {
      this.$router.push({
        name: toName,
        params: params,
      });
    },

    /**
     * 路由跳转带有query参数
     */
    _routePushQ(toName, params) {
      this.$router.push({
        name: toName,
        query: params,
      });
    },

    /**
     * 显示Toast
     */
    _showToast(msg) {
      Toast(msg);
    },

    /**
     * 路由回退或者历史回退
     */
    _routerBack() {
      this.$router ? this.$router.back() : window.history.back();
    },

    /**
     * 显示Loading
     */
    _showLoading() {
      Toast.loading({
        mask: true,
        duration: 0,
        loadingType: 'spinner',
        message: 'Loading...'
      });
    },

    /**
     * 不显示Loading
     */
    _dismissLoading() {
      Toast.clear();
    },

    _saveLSObject(key, object) {
      if (key && object) {
        try {
          let jsonStr = JSON.stringify(object);
          localStorage.setItem(key, jsonStr);
        } catch (e) {
        }
      }
    },

    // 从localstorage 加载object
    _loadLSObject(key) {
      if (key) {
        try {
          let jsonStr = localStorage.getItem(key);
          return JSON.parse(jsonStr);
        } catch (e) {
        }
      }
      return null;
    },
  }
}

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  userInfo: null,
};

const getters = {};

const mutations = {
  setUserInfo(state, data) {
    state.userInfo = data;
  },
};

const actions = {};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;

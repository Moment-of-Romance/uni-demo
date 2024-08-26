// store/index.js

import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import auth from './modules/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    auth
  }
});

export default store;
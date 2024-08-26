// store/modules/auth.js

const state = {
  token: '00000000'
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  }
};

const actions = {
  login({ commit }, token) {
    commit('setToken', token);
  },
  logout({ commit }) {
    commit('setToken', null);
  }
};

const getters = {
  isAuthenticated(state) {
    return !!state.token;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
const state = {
  userInfo: null
}

const mutations = {
  setUserInfo(state, payload) {
    state.userInfo = payload
  }
}

const actions = {
  updateUserInfo({commit}, userInfo) {
    commit('setUserInfo', userInfo)
  }
}


const getters = {
  getUserInfo(state) {
    return state.userInfo
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
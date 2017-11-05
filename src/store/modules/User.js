const state = {
  email: '',
  token: '',
  saved: false,
  loggedIn: false
}

const getters = {
  getEmail (state) {
    return state.email
  },
  getToken (state) {
    return state.token
  },
  isSaved (state) {
    return state.saved
  },
  isLoggedIn (state) {
    return state.loggedIn
  }
}

const mutations = {
  SET_EMAIL (state, payload) {
    state.email = payload.email
  },
  SET_TOKEN (state, payload) {
    state.token = payload.token
  },
  SAVE (state) {
    state.saved = true
  },
  unsave (state) {
    state.saved = false
  },
  SET_LOGGED_IN (state, loggedIn) {
    state.loggedIn = loggedIn
  }
}

const actions = {
  login ({ state, commit }, { email, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!state.saved) {
          commit('SET_EMAIL', { email })
          // @todo call API LOGIN
          commit('SAVE')
        }
        commit('SET_LOGGED_IN', true)
        resolve()
      }, 1500)
    })
  },
  logout ({ commit }) {
    commit('SET_LOGGED_IN', false)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

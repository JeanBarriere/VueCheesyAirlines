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
  SET_EMAIL (state, email) {
    state.email = email
  },
  SET_TOKEN (state, token) {
    state.token = token
  },
  SAVE (state) {
    state.saved = true
  },
  UNSAVE (state) {
    state.saved = false
  },
  SET_LOGGED_IN (state, loggedIn) {
    state.loggedIn = loggedIn
  }
}

const actions = {
  login ({ commit }, { email, password }) {
    commit('SET_EMAIL', email)
    // @todo call API LOGIN
    commit('SET_LOGGED_IN', true)
    commit('SAVE')
  },
  logout ({ commit }) {
    commit('SET_LOGGED_IN', false)
  },
  unsave ({ commit }) {
    commit('UNSAVE')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

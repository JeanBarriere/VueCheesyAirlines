import { ApiService } from '@/services/ApiService'
const API = new ApiService()

const state = {
  email: '',
  name: '',
  token: '',
  links: {},
  saved: false,
  loggedIn: false
}

const getters = {
  getUserEmail (state) {
    return state.email
  },
  getUserName (state) {
    return state.name
  },
  getUserToken (state) {
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
  SET_USER (state, payload) {
    state.email = payload.email !== null ? payload.email : state.email
    state.token = payload.token !== null ? payload.token : state.token
    state.name = payload.name !== null ? payload.name : state.name
    state.links = payload.links !== null ? payload.links : state.links
    state.loggedIn = true
    state.saved = true
  },
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
  login ({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      API.post('signin', payload, {
        success: function (res) {
          commit('SET_USER', { email: res.data.user.Email, token: res.data.token, name: res.data.user.Name, links: res.data.user.HypermediaLinks })
          resolve()
        },
        error: function (err) {
          reject(err)
        }
      })
    })
  },
  register ({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      API.post('signup', payload, {
        success: function (res) {
          commit('SET_USER', { email: res.data.user.Email, token: res.data.token, name: res.data.user.Name, links: res.data.user.HypermediaLinks })
          resolve()
        },
        error: function (err) {
          reject(err)
        }
      })
    })
  },
  edit ({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      API.put(state.links.Update.Path, payload, {
        success: function (res) {
          commit('SET_USER', { email: res.data.user.Email, token: res.data.token, name: res.data.user.Name, links: res.data.user.HypermediaLinks })
          resolve()
        },
        error: function (err) {
          reject(err)
        }
      })
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

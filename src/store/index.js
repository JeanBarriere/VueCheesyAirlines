import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import modules from './modules'

const vuexPersist = new VuexPersistence({
  strictMode: process.env.NODE_ENV !== 'production',
  storage: localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production',
  plugins: [vuexPersist.plugin],
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION
  }
})

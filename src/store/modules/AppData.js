const state = {
  displayFooter: true,
  header: {
    icon: true,
    menu: true,
    fixed: false,
    inversed: false,
    glass: true
  }
}

const getters = {
  isDisplayingFooter (state) {
    return state.displayFooter
  },
  isHeaderIconShowed (state) {
    return state.header.icon
  },
  isHeaderMenuShowed (state) {
    return state.header.menu
  },
  isHeaderFixedShowed (state) {
    return state.header.fixed
  },
  isHeaderInversedShowed (state) {
    return state.header.inversed
  },
  isHeaderGlassShowed (state) {
    return state.header.glass
  }
}

const mutations = {
  SHOW_FOOTER (state) {
    state.displayFooter = true
  },
  HIDE_FOOTER (state) {
    state.displayFooter = false
  },
  TOGGLE_FOOTER (state) {
    state.displayFooter = !state.displayFooter
  },
  SHOW_HEADER_ICON (state) {
    state.header.icon = true
  },
  HIDE_HEADER_ICON (state) {
    state.header.icon = false
  },
  SHOW_HEADER_MENU (state) {
    state.header.menu = true
  },
  HIDE_HEADER_MENU (state) {
    state.header.menu = false
  },
  SHOW_HEADER_FIXED (state) {
    state.header.fixed = true
  },
  HIDE_HEADER_FIXED (state) {
    state.header.fixed = false
  },
  SHOW_HEADER_INVERSED (state) {
    state.header.inversed = true
  },
  HIDE_HEADER_INVERSED (state) {
    state.header.inversed = false
  },
  SHOW_HEADER_GLASS (state) {
    state.header.glass = true
  },
  HIDE_HEADER_GLASS (state) {
    state.header.glass = false
  }
}

const actions = {
  setDisplayFooter ({ commit }, show) {
    commit(show ? 'SHOW_FOOTER' : 'HIDE_FOOTER')
  },
  showFooter ({ commit }) {
    commit('SHOW_FOOTER')
  },
  hideFooter ({ commit }) {
    commit('HIDE_FOOTER')
  },
  toggleFooter ({ commit }) {
    commit('TOGGLE_FOOTER')
  },
  toggleMenuItem ({ commit }) {
    commit('TOGGLE_MENU_ITEM')
  },
  setHeaderIcon ({ commit }, show) {
    commit(show ? 'SHOW_HEADER_ICON' : 'HIDE_HEADER_ICON')
  },
  setHeaderMenu ({ commit }, show) {
    commit(show ? 'SHOW_HEADER_MENU' : 'HIDE_HEADER_MENU')
  },
  setHeaderInversed ({ commit }, show) {
    commit(show ? 'SHOW_HEADER_INVERSED' : 'HIDE_HEADER_INVERSED')
  },
  setHeaderFixed ({ commit }, show) {
    commit(show ? 'SHOW_HEADER_FIXED' : 'HIDE_HEADER_FIXED')
  },
  setHeaderGlass ({ commit }, show) {
    commit(show ? 'SHOW_HEADER_GLASS' : 'HIDE_HEADER_GLASS')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

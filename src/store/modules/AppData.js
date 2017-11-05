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
  setDisplayFooter (state, show) {
    state.displayFooter = show
  },
  setHeader (state, payload) {
    state.header.icon = payload.icon
    state.header.menu = payload.menu
    state.header.fixed = payload.fixed
    state.header.inversed = payload.inversed
    state.header.glass = payload.glass
  }
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}

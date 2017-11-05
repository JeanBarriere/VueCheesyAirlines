/* global Codebase */
const codebase = function () {}

codebase.install = function (Vue) {
  Vue.Codebase = Codebase
  Object.defineProperty(Vue.prototype, '$Codebase', {
    get: function get () {
      return Codebase
    }
  })
}

export default codebase

'use strict'
import axios from 'axios'

export class ApiService {
  constructor () {
    this.token = ''
    this.instance = axios.create({
      baseURL: `${process.env.API_HOST}`,
      timeout: 10000,
      headers: {'Authorization': `bearer ${this.token}`}
    })
  }

  set = function (token = '') {
    this.token = token
  }

  get = function (method, params = {}, callback) {
    this.instance.get(method, params).then((res) => {
      callback.success(res)
    }).catch((err) => {
      callback.error(err)
    })
  }

  post = function (method, params = {}, callback) {
    this.instance.post(method, params).then((res) => {
      callback.success(res)
    }).catch((err) => {
      callback.error(err)
    })
  }
}

const api = function () {}

api.install = function (Vue) {
  var apiService = new ApiService()
  Vue.api = apiService
  Object.defineProperty(Vue.prototype, '$api', {
    get: function get () {
      return apiService
    }
  })
}

export default api

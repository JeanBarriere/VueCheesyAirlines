'use strict'
import store from '@/store'
import axios from 'axios'

export class ApiService {
  constructor (baseURL = process.env.API_HOST, authorize = true) {
    this.token = ''
    this.baseURL = baseURL
    this.source = axios.CancelToken.source()
    if (authorize) {
      this.instance = axios.create({
        baseURL: `${baseURL}`,
        timeout: 10000,
        headers: {'Authorization': `bearer ${this.token}`}
      })
    } else {
      this.instance = axios.create({
        baseURL: `${baseURL}`,
        timeout: 10000
      })
    }
  }

  set = function (token = '') {
    this.instance = axios.create({
      baseURL: `${this.baseURL}`,
      timeout: 10000,
      headers: {'x-access-token': token}
    })
  }

  get = function (method, params = {}, callback) {
    this.source = axios.CancelToken.source()
    this.instance.get(method, { params, cancelToken: this.source.token }).then((res) => {
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

  postEncoded = function (method, params = {}, callback) {
    let p = ''
    Object.keys(params).forEach(function (key) {
      p += `${key}=${params[key]}&`
    })
    p = p.substr(0, p.length - 1)
    this.instance({
      method: 'post',
      url: this.baseURL + method,
      data: p,
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    }).then((res) => {
      callback.success(res)
    }).catch((err) => {
      callback.error(err)
    })
  }

  put = function (method, params = {}, callback) {
    this.instance.put(method, params).then((res) => {
      callback.success(res)
    }).catch((err) => {
      callback.error(err)
    })
  }

  cancel = function (msg = '') {
    this.source.cancel(msg)
  }
}

const api = function () {}

api.install = function (Vue) {
  var apiService = new ApiService()
  apiService.set(store.getters.getUserToken)
  Vue.api = apiService
  Object.defineProperty(Vue.prototype, '$api', {
    get: function get () {
      return apiService
    }
  })
}

export default api

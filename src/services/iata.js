'use strict'
import Vue from 'vue'
// import _ from 'lodash'

class IC {
  constructor (apiKey = 'YOUR-API-KEY', version = 6) {
    this.api_key = apiKey
    this.url = `https://iatacodes.org/api/v${version}/`
    Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
    Vue.http.headers.common['Access-Control-Allow-Credentials'] = 'true'
    Vue.http.options.xhr = { withCredentials: true }
    Vue.http.options.emulateJSON = true
    Vue.http.options.emulateHTTP = true
  }
  api (method = 'ping', params = {}, callback) {
    Vue.http.post(`${this.url}${method}.json`, {api_key: this.api_key}).then((res) => {
      console.log(res)
    }, (err) => {
      console.log(err)
    })
  }
}

export default IC

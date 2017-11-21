'use strict'
import axios from 'axios'

class IC {
  constructor (apiKey = 'YOUR-API-KEY', version = 6) {
    this.api_key = apiKey
    this.instance = axios.create({
      baseURL: `https://iatacodes.org/api/v${version}/`,
      timeout: 10000
    })
  }
  api (method = 'ping', params = {}, callback) {
    this.instance.post(`${method}.json`, {api_key: this.api_key}).then((res) => {
      console.log(res)
    }, (err) => {
      console.log(err)
    })
  }
}

export default IC

'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_HOST: '"//212.47.242.70:9000/v1/"'
  API_HOST: '"//163.172.174.12:9000/v1/"'
})

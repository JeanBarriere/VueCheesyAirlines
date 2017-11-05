// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueResource from 'vue-resource'
import VueMoment from 'vue-moment'
import VueSweetalert2 from 'vue-sweetalert2'
import VueStripeCheckout from 'vue-stripe-checkout'
import Codebase from '@/properties/Codebase'

import App from '@/App'
import router from '@/router'
import store from '@/store'
import IC from '@/services/iata'

Vue.use(VueResource)
Vue.use(VueMoment)
Vue.use(VueSweetalert2)
Vue.use(Codebase)

const options = {
  key: 'pk_test_J5MWjjJtZs2DovrBFNN1oGzn'
  // image: 'https://cdn.meme.am/images/100x100/15882140.jpg',
  // locale: 'auto',
  // currency: '$',
  // billingAddress: false,
  // panelLabel: 'Pay {{amount}}'
}
Vue.use(VueStripeCheckout, options)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data: function () {
    return {
      iata: new IC('1b4d5cd1-a782-4e76-8cdb-cb0874976ebc')
    }
  },
  template: '<App/>',
  components: { App }
})

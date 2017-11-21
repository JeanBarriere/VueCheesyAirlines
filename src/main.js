import Vue from 'vue'
import VueMoment from 'vue-moment'
import VueSweetalert2 from 'vue-sweetalert2'
import VueStripeCheckout from 'vue-stripe-checkout'
import Vue2Leaflet from 'vue2-leaflet'
import Notifications from 'vue-notification'

import App from '@/App'
import router from '@/router'
import store from '@/store'
import Codebase from '@/services/Codebase'
import ApiService from '@/services/ApiService'
import IC from '@/services/iata'

import L from 'leaflet'
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

Vue.use(VueMoment)
Vue.use(VueSweetalert2)
Vue.use(Notifications)
Vue.use(Codebase)
Vue.use(ApiService)
Vue.component('v-map', Vue2Leaflet.Map)
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer)
Vue.component('v-marker', Vue2Leaflet.Marker)

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

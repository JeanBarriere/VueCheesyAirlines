<template>
  <div id="search">

    <div class="bg-image" style="background-image: url('static/assets/img/photos/photo26@2x.jpg');">
        <div class="bg-black-op-75">
            <div class="content content-top content-full text-left">
                <div class="py-20">
                    <h1 class="h2 font-w700 text-white mb-10"><i class="material-icons mr-20">flight</i>Bangkok</h1>
                    <h1 class="h2 font-w700 text-white mb-10"><i class="material-icons mr-20">directions</i>Surat Thani</h1>
                    <h2 class="h4 font-w400 text-white-op mb-0">Thu, 9 Nov</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- END Hero -->

    <!-- Breadcrumb -->
    <div class="bg-body-light border-b">
        <div class="content py-5 text-right">
            <nav class="breadcrumb bg-body-light mb-0">
                <router-link :to="{ name: 'welcome' }" class="breadcrumb-item">Home</router-link>
                <router-link :to="{ name: 'search' }" class="breadcrumb-item">Search</router-link>
                <span class="breadcrumb-item active">Thai AirAsia 3331</span>
            </nav>
        </div>
        <div class="progress rounded-0">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style="width: 60%; height: 7px;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
    <!-- END Breadcrumb -->

    <!-- Page Content -->
    <div class="content">

        <div class="clearfix">
            <!-- Customer's Past Orders -->
            <div class="col-lg-8 float-left">
                <div class="row">
                  <div class="col-md-12 block block-rounded">
                      <div class="block-content block-content-full clearfix">
                        <div class="d-flex flex-row align-items-start">
                          <div class="align-self-stretch text-center mr-20">
                            <img src="static/assets/img/avatars/avatar0.jpg" class="img-avatar img-avatar-thumb" alt="company">
                            <div class="font-size-sm font-w600 text-uppercase text-muted">AIR ASIA</div>
                          </div>
                          <div class="align-self-stretch mr-20">
                            <div class="p2 font-w400">15:40 - 17:00 (1h20m)</div>
                            <div class="p2 font-w700">DMK - URT</div>
                          </div>
                          <div class="align-self-stretch">
                            <div class="p2 font-w700 text-muted">Direct</div>
                          </div>
                          <div class="align-self-stretch ml-auto text-right">
                            <div class="font-size-h3 font-w600">780$</div>
                            <div class="font-size-sm font-w600 text-lowercase text-muted">one way</div>
                          </div>
                        </div>

                          <div class="d-flex flex-row align-items-start">
                            <div class="align-self-stretch mr-20">
                              <div class="h3 font-w700">15:00</div>
                            </div>
                            <div class="align-self-stretch mr-20">
                              <div class="h3 font-w700 text-muted"><i class="material-icons">arrow_forward</i></div>
                            </div>
                            <div class="align-self-stretch mr-20">
                              <div class="h3 font-w700">17:00</div>
                              <div class="p2 font-w400 text-muted">Bangkok to Surat Thani</div>
                              <div class="p2 font-w400 text-muted">Don Mueang Intl. (DMK) to Surat Thani Intl. (URT)</div>
                              <div class="p2 font-w400 text-muted">Thai AirAsia 3331</div>
                              <div class="p2 font-w400 text-muted">Economy (Y)</div>
                            </div>
                            <div class="align-self-stretch mr-20">
                              <div class="h3 font-w700 text-muted">1h20m</div>
                            </div>
                          </div>

                      </div>
                  </div>

                  <div class="col-md-12 block block-rounded block-map">
                      <div id="map" class="map"></div>
                  </div>
                </div>
            </div>
            <!-- END Customer's Past Orders -->


            <!-- Customer's Basic Info -->
            <div class="col-lg-4 float-left">
                <div class="block block-rounded text-center" href="#">
                    <div class="block-content">
                        <div class="row items-push text-center">
                            <div class="col-12 d-flex">
                              <div class="font-size-h4 text-left">Trip Summary</div>
                            </div>
                            <div class="col-12 d-flex">
                              <span>Travelers</span>
                              <span class="ml-auto text-right">3</span>
                            </div>
                            <div class="col-12 d-flex">
                              <span class="ml-20">Flight</span>
                              <span class="ml-auto text-right">$780</span>
                            </div>
                            <div class="col-12 d-flex">
                              <span class="ml-20">Tax and Fees</span>
                              <span class="ml-auto text-right">$50</span>
                            </div>
                            <div class="col-12 d-flex">
                              <div class="font-size-h4 text-left">Sub Total</div>
                              <div class="font-size-h4 text-right ml-auto">$2490</div>
                            </div>
                            <div class="col-12 d-flex">
                              <div class="font-size-h4 text-left">VAT</div>
                              <div class="font-size-h4 text-right ml-auto">7.0%</div>
                            </div>
                            <div class="col-12 d-flex">
                              <div class="font-size-h4 text-left">Total</div>
                              <div class="font-size-h4 text-right ml-auto">$2 664,3</div>
                            </div>

                            <div class="col-12 d-flex">
                              <button type="button" @click="buy()" class="btn btn-lg btn-block btn-alt-success d-flex justify-content-center"><i class="material-icons mr-5">credit_card</i>Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Customer's Basic Info -->
        </div>
        <!-- END Customer -->

    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import countTo from 'vue-count-to'
import 'leaflet-arc'
import L from 'leaflet'

export default {
  name: 'search',
  components: { countTo },
  data: () => ({
    numbers: 10,
    map: null,
    airports: [],
    markers: [],
    arcs: []
  }),
  computed: mapGetters(['isLoggedIn']),
  methods: {
    buy: function () {
      if (this.isLoggedIn) {
        this.$checkout.open({
          name: 'Flight DMK - URT',
          currency: 'USD',
          amount: 10000,
          token (token) {
            console.log(token)
          }
        })
      } else {
        this.$notify({
          title: 'You need to login to buy a ticket',
          type: 'warn'
        })
        $('#modal-signin').modal('show')
      }
    },
    mouseOverArc: function (e) {
      e.target.setStyle({ weight: 8, opacity: 1 })
      e.target.redraw()
    },
    mouseOutArc: function (e) {
      e.target.setStyle({ weight: 4, opacity: 0.8 })
      e.target.redraw()
    },
    clickArc: function (e) {
      this.map.fitBounds(e.target.getBounds())
      L.popup().setContent('<p><b>Trip duration:</b> ' + this.airports[this.arcs.indexOf(e.target)].duration +
                '<br><b>Departure time:</b> ' + this.airports[this.arcs.indexOf(e.target)].departureTime +
                '<br>Some other infos: ' + '</p>')
        .setLatLng(e.target.getCenter())
        .openOn(this.map)
    },
    setAirportsInfos: function () {
      this.airports.push({'name': 'LHR', 'coord': L.latLng(51.50, 0.09), 'duration': '1h05', 'departureTime': '10/25/17 07:00am'})
      this.airports.push({'name': 'CDG', 'coord': L.latLng(49.00, 2.33), 'duration': '10h35', 'departureTime': '10/25/17 10:40am'})
      this.airports.push({'name': 'BKK', 'coord': L.latLng(14.06, 100.60), 'duration': '5h40', 'departureTime': '10/29/17 06:40am'})
      this.airports.push({'name': 'ICN', 'coord': L.latLng(37.28, 126.26), 'duration': '', 'departureTime': ''})
    },
    displayWaipointsMarkers: function () {
      for (let i in this.airports) {
        this.markers[i] = L.popup({
          closeButton: false
        }).setLatLng(this.airports[i].coord)
          .setContent('<p><center>' + this.airports[i].name.fontsize(2).bold() + '</center></p>')
        this.map.addLayer(this.markers[i])
      }
      this.map.fitBounds([this.airports[0].coord, this.airports[this.airports.length - 1].coord])
    },
    displayArcs: function () {
      for (let i = 0; i < (this.airports.length - 1); i++) {
        this.arcs[i] = L.Polyline.Arc(this.airports[i].coord, this.airports[i + 1].coord, {
          color: '#868e96',
          vertices: 500,
          weight: 4,
          opacity: 0.8
        }).addTo(this.map)
          .on('mouseover', this.mouseOverArc)
          .on('mouseout', this.mouseOutArc)
          .on('click', this.clickArc)
      }
    },
    displayPath: function () {
      this.setAirportsInfos()
      this.displayWaipointsMarkers()
      this.displayArcs()
    },
    initmap: function () {
      this.map = L.map('map', {
        closePopupOnClick: false,
        worldCopyJump: true,
        maxBounds: [[-90, -Infinity], [90, Infinity]],
        minZoom: 3
      })
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
      }).addTo(this.map)
    }
  },
  mounted () {
    console.log(this.$router.currentRoute.params)
    this.initmap()
    this.displayPath()
  }
}
</script>

<style lang="sass">
  @import "~leaflet/dist/leaflet.css"

  .block-map
    padding: 4px
    .map
      height: 350px
      border-radius: 6px
</style>

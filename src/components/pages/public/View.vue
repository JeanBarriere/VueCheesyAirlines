<template>
  <div id="search">

    <div class="bg-image" style="background-image: url('static/assets/img/photos/photo26@2x.jpg');">
        <div class="bg-black-op-75">
            <div class="content content-top content-full text-left">
                <div class="py-20">
                  <h1 class="h2 font-w700 text-white mb-10"><i class="material-icons mr-20">flight</i>{{ $route.query.from_name }}</h1>
                  <h1 class="h2 font-w700 text-white mb-10"><i class="material-icons mr-20">directions</i>{{ $route.query.to_name }}</h1>
                  <h2 class="h4 font-w400 text-white-op mb-0 float-left">{{ $route.query.date | moment('ll') }}</h2>
                  <h2 class="h4 font-w400 text-white-op mb-0 float-right">
                    {{ ($route.query.seatsAdult > 0 ? $route.query.seatsAdult + ' adult' + ($route.query.seatsAdult > 1 ? 's' : '') : '') + ($route.query.seatsAdult > 0 && $route.query.seatsChild > 0 ? ' and ' : '') + ($route.query.seatsChild > 0 ? $route.query.seatsChild + ' child' + ($route.query.seatsChild > 1 ? 'ren' : '') : '') }}
                  </h2>
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
                <router-link :to="{ name: 'search', query: $route.query }" class="breadcrumb-item">Search</router-link>
                <span class="breadcrumb-item active">{{ flightNumber }}</span>
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

            <div class="col-lg-8 float-left" v-if="record !== null">
                <div class="row">
                  <div class="col-md-12 block block-rounded animated flipInX">
                    <airport-result-details :data="record" />
                  </div>

                  <div class="col-md-12 block block-rounded block-map animated flipInX">
                      <airport-result-map :data="record" />
                  </div>
                </div>
            </div>
            <!-- END Customer's Past Orders -->


            <!-- Customer's Basic Info -->
            <div class="col-lg-4 float-left" v-if="record !== null">
                <div class="block block-rounded text-center" href="#">
                    <div class="block-content">
                        <div class="row items-push text-center">
                            <div class="col-12 d-flex">
                              <div class="font-size-h4 text-left">Trip Summary</div>
                            </div>
                            <div class="col-12 d-flex">
                              <span>Travelers</span>
                              <span class="ml-auto text-right">{{ totalSeats }}</span>
                            </div>
                            <div class="col-12 d-flex">
                              <span class="ml-20">Flight</span>
                              <span class="ml-auto text-right">${{ price }}</span>
                            </div>
                            <div class="col-12 d-flex">
                              <span class="ml-20">Tax and Fees</span>
                              <span class="ml-auto text-right">$50</span>
                            </div>
                            <div class="col-12 d-flex">
                              <div class="font-size-h4 text-left">Sub Total</div>
                              <div class="font-size-h4 text-right ml-auto">${{ (price * totalSeats) + 50 }}</div>
                            </div>
                            <div class="col-12 d-flex">
                              <div class="font-size-h4 text-left">VAT</div>
                              <div class="font-size-h4 text-right ml-auto">10 %</div>
                            </div>
                            <div class="col-12 d-flex">
                              <div class="font-size-h4 text-left">Total</div>
                              <div class="font-size-h4 text-right ml-auto">${{ Math.round((((price * totalSeats) + 50) + (((price * totalSeats) + 50) / 10)) * 100) / 100 }}</div>
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
import AirportResultDetails from '@/components/utils/AirportResultDetails'
import AirportResultMap from '@/components/utils/AirportResultMap'
import neoInteger from '@/components/utils/neo4jInteger'
import { mapGetters } from 'vuex'

export default {
  name: 'search',
  components: { AirportResultDetails, AirportResultMap },
  data: () => ({
    record: null,
    flightNumber: '',
    totalSeats: 0,
    price: 0,
    infos: {}
  }),
  computed: mapGetters(['isLoggedIn', 'getUserEmail']),
  methods: {
    completePayment: function (token) {
      var self = this
      this.$swal({
        title: 'Confirm payment',
        type: 'warning',
        text: 'Please confirm to process your order',
        showCancelButton: true,
        confirmButtonText: 'Book now !',
        showLoaderOnConfirm: true,
        preConfirm: function () {
          return new Promise((resolve) => {
            self.$api.postEncoded('booking', {
              from: self.$route.query.from,
              to: self.$route.query.to,
              date: self.$route.query.date,
              nb_passengers: self.totalSeats,
              price: Math.round((((self.price * self.totalSeats) + 50) + (((self.price * self.totalSeats) + 50) / 10)) * 100).toString(),
              company: self.record._fields[0].segments[0].relationship.properties.company_name,
              stripe_token: token.id,
              json: JSON.stringify(self.infos)
            }, {
              success: function (res) {
                resolve(res)
              },
              error: function () {
                self.$swal.showValidationError(
                  'An error occured while booking your flight. Please try again.'
                )
              }
            })
          })
        },
        allowOutsideClick: false
      }).then(function (result) {
        if (result) {
          self.$swal(
            'Booked !',
            'Thank you for booking your flight with Cheesy Airlines.',
            'success'
          ).then(() => {
            self.$router.push({ name: 'account-orders-order', params: { id: result.data.mirror.ID } })
          })
        }
      })
    },
    buy: function () {
      var self = this
      if (this.isLoggedIn) {
        this.$checkout.open({
          name: `Flight ${this.$route.query.from} - ${this.$route.query.to}`,
          email: this.getUserEmail,
          currency: 'USD',
          amount: Math.round((((this.price * this.totalSeats) + 50) + (((this.price * this.totalSeats) + 50) / 10)) * 100),
          token (token) {
            self.completePayment(token)
          }
        })
      } else {
        self.$swal(
          'Login required',
          'You need to login to purchase your order',
          'warning'
        ).then(() => {
          $('#modal-signin').modal('show')
        })
      }
    }
  },
  mounted () {
    if (!this.$route.params.record || !this.$route.query.from || !this.$route.query.to || !this.$route.query.date || !this.$route.query.from_name || !this.$route.query.to_name || !this.$route.query.seatsAdult) {
      this.$router.push({ name: 'search', query: this.$route.query })
    } else {
      let record = this.$route.params.record
      this.flightNumber = record._fields[0].segments[0].relationship.properties.flight_number
      let price = 0
      for (let i = 0; i < record._fields[0].segments.length; i++) {
        price += neoInteger.fromValue(record._fields[0].segments[i].relationship.properties.price).toNumber()
      }
      this.price = price
      this.totalSeats = parseInt(this.$route.query.seatsAdult) + parseInt(this.$route.query.seatsChild)
      this.infos = {
        flight_number: record._fields[0].segments[0].relationship.properties.flight_number,
        from_name: this.$route.query.from_name,
        from_city: record._fields[0].start.properties.city,
        to_name: this.$route.query.to_name,
        to_city: record._fields[0].end.properties.city,
        departure_date: new Date(neoInteger.fromValue(record._fields[0].segments[0].relationship.properties.departureDate).toNumber() * 1000),
        arrival_date: new Date(neoInteger.fromValue(record._fields[0].segments[record._fields[0].segments.length - 1].relationship.properties.arrivalDate).toNumber() * 1000),
        total_hours: Math.floor(neoInteger.fromValue(record._fields[2]).toNumber() / 3600),
        total_minutes: Math.floor(neoInteger.fromValue(record._fields[2]).toNumber() % 60),
        stops: record._fields[0].segments.length - 1
      }
      this.record = record
    }
  }
}
</script>

<style lang="sass">
  .block-map
    padding: 4px
    .map
      height: 350px
      border-radius: 6px
</style>

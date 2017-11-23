<template>
  <div id="ticket">
    <!-- Breadcrumb -->
    <div class="bg-body-dark border-b">
        <div class="content py-5 text-right">
            <nav class="breadcrumb bg-body-dark mb-0">
                <router-link :to="{ name: 'welcome' }" class="breadcrumb-item">Home</router-link>
                <router-link :to="{ name: 'account' }" class="breadcrumb-item">Account</router-link>
                <router-link :to="{ name: 'account-orders' }" class="breadcrumb-item">Orders</router-link>
                <span class="breadcrumb-item active">Order #{{ booking !== null ? booking.flightNumber : '' }}</span>
            </nav>
        </div>
    </div>
    <!-- END Breadcrumb -->

    <!-- Page Content -->
    <div class="content">

        <div class="clearfix">

                <div class="col-12" v-if="booking !== null">
                    <div class="row">
                      <div class="col-12 block block-rounded">
                          <div class="block-content block-content-full clearfix">
                            <div class="d-flex flex-row align-items-stretch mb-20">
                              <div class="text-center mr-20">
                                <img src="static/assets/img/avatars/avatar0.jpg" class="img-avatar img-avatar-thumb" alt="company">
                                <div class="font-size-sm font-w600 text-uppercase text-muted">{{ booking.company }}</div>
                              </div>
                              <div class="align-self-center mr-20">
                                <div class="h4 font-w400">{{ booking.from }} - {{ booking.to }}</div>
                              </div>
                              <div class="align-self-center">
                                <div class="h4 font-w700 text-muted">{{ booking.stops === 0 ? 'Direct' : booking.stops + ' stop' + (booking.stops > 1 ? 's' : '') }}</div>
                              </div>
                              <div class="ml-auto text-right">
                                <div class="font-size-h3 font-w600">{{ booking.cost / 100 }}$</div>
                                <div class="font-size-sm font-w600 text-lowercase text-muted">one way</div>
                                <div class="font-size-sm font-w600 text-lowercase text-muted">{{ booking.nb_passengers + ' ticket' + (booking.nb_passengers > 1 ? 's' : '') }}</div>
                              </div>
                            </div>

                              <div class="d-flex flex-column">
                                <div class="d-flex justify-content-start">
                                  <div class="mr-20">
                                    <div class="h3 font-w700">{{ booking.departureDate | moment('HH:mm') }}</div>
                                  </div>
                                  <div class="mr-20">
                                    <div class="h3 font-w700 text-muted"><i class="material-icons">arrow_forward</i></div>
                                  </div>
                                  <div class="mr-20">
                                    <div class="h3 font-w700">{{ booking.arrivalDate | moment('HH:mm') }}</div>
                                  </div>
                                  <div class="ml-auto">
                                    <div class="h3 font-w700 text-muted ml-auto">{{ booking.totalHours + 'h' + (booking.totalMinutes > 0 ? booking.totalMinutes : '') }} {{ booking.totalDays > 0 ? `+${booking.totalDays}day` + (booking.totalDays > 1 ? 's' : '') : '' }}</div>
                                  </div>
                                </div>
                                <div class="align-self-stretch">
                                  <div class="p2 font-w400 text-muted">{{ booking.fromCity }} to {{ booking.toCity }}</div>
                                  <div class="p2 font-w400 text-muted">{{ booking.fromName }} ({{ booking.from }}) to {{ booking.toName }} ({{ booking.to }})</div>
                                  <div class="p2 font-w400 text-muted">{{ booking.company }} {{ booking.flightNumber }}</div>
                                </div>
                              </div>

                                <div class="col-12 d-flex mt-20" v-if="booking.status !== 'Canceled'">
                                  <button type="button" @click="cancelTrip()" class="btn btn-lg btn-block btn-alt-danger d-flex justify-content-center"><i class="material-icons mr-5">money_off</i>Cancel the trip</button>
                                </div>
                                <div class="col-12 d-flex mt-20" v-else>
                                  <div class="h3 font-w400 text-muted mx-auto text-center">
                                    <i class="si si-close mr-20"></i>Trip canceled
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            <!-- Customer's Basic Info -->
            <div id="print-ticket-area" class="col-12" v-if="booking !== null && booking.status !== 'Canceled'">
              <div id="block-ticket-container" class="col-lg-6 float-left" v-for="(i, index) in parseInt(booking.nb_passengers)">
                  <div id="breaker" v-if="index !== 0"></div>
                  <div class="block block-ticket block-rounded block-themed text-left" href="#">
                      <div class="block-header bg-gd-lake">
                        <div class="block-title d-flex">
                          <div class="h2 font-w300 mb-0">{{ getUserName }}</div>
                          <div class="p2 font-w700 ml-auto d-flex align-self-center justify-content-center">Ticket #{{ booking.flightNumber + '_' + i }}</div>
                        </div>
                      </div>
                      <div class="">
                          <div class="block-ticket-head">
                            <div class="d-flex flex-row">
                              <div class="col-5 align-self-stretch text-left">
                                <div class="h2 font-w400 mb-0">{{ booking.from }}</div>
                                <div class="p2 font-w700 text-muted">{{ booking.fromName }}</div>
                                <div class="h4 font-w700">{{ booking.departureDate | moment('LT') }}</div>
                              </div>
                              <div class="col-2 d-flex ml-auto flex-row align-self-center justify-content-center">
                                <i class="material-icons fa-fw fa-rotate-90">flight</i>
                              </div>
                              <div class="col-5 ml-auto align-self-stretch text-right">
                                <div class="h2 font-w400 mb-0">{{ booking.to }}</div>
                                <div class="p2 font-w700 text-muted">{{ booking.toName }}</div>
                                <div class="h4 font-w700">{{ booking.arrivalDate | moment('LT') }}</div>
                              </div>
                            </div>
                            <div class="d-flex flex-row">
                              <div class="col-12 text-center mb-10">
                                <div class="p2 font-w700 text-muted">
                                  {{ booking.departureDate | moment('LL') }}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="block-ticket-content">
                            <div class="d-flex flex-row mb-50 p-20">
                              <div class="col-6 align-self-stretch text-center">
                                <i class="si si-plane fa-2x text-primary"></i>
                                <div class="h3 font-w700 text-primary">{{ booking.flightNumber }}</div>
                                <i class="si si-lock fa-2x text-success"></i>
                                <div class="h3 font-w700 mb-0 text-success">{{ booking.departureDate | moment('YYMMDD') }}{{ booking.arrivalDate | moment('MMDD') }}{{ i }}</div>
                              </div>
                              <div class="col-6 align-self-stretch text-center d-flex align-self-center justify-content-center">
                                <qr-code class="d-flex align-self-center justify-content-center" :val="'https://www.cheesy.xyz/#/account/order/' + $route.params.id + '?ticket=' + i" :bg-color="'#fff'" :fg-color="'#000'" />
                              </div>
                            </div>
                            <div class="d-flex flex-row">
                              <div class="col-4 align-self-stretch text-center">
                                <div class="h3 font-w700 mb-5 border-b pb-10">-</div>
                                <div class="p2 font-w700 text-muted">SEAT</div>
                              </div>
                              <div class="col-4 align-self-stretch text-center">
                                <div class="h3 font-w700 mb-5 border-b pb-10">-</div>
                                <div class="p2 font-w700 text-muted">GATE</div>
                              </div>
                              <div class="col-4 align-self-stretch text-center">
                                <div class="h3 font-w700 mb-5 border-b pb-10">{{ booking.departureDate | moment('LT') }}</div>
                                <div class="p2 font-w700 text-muted">TIME</div>
                              </div>
                            </div>
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
import QrCode from '@/components/utils/QrCode'
import { mapGetters } from 'vuex'

export default {
  name: 'ticket',
  data: () => ({
    tickets: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    booking: null
  }),
  components: { QrCode },
  computed: mapGetters(['getUserName']),
  methods: {
    cancelTrip: function () {
      var self = this

      self.$swal({
        title: 'Are you sure to cancel this trip ?',
        text: '10% of the amount is charged and will not be refund',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, refund me!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-lg btn-alt-success mr-5',
        cancelButtonClass: 'btn btn-lg btn-alt-danger',
        buttonsStyling: false
      }).then(function () {
        self.$api.post(`booking/${self.$route.params.id}/cancel`, {}, {
          success: function () {
            self.booking.status = 'Canceled'
            self.$swal(
              'Refunded!',
              'You have been refunded and your options have been released.',
              'success'
            )
          },
          error: function () {
            self.$swal(
              'Error',
              'Error while canceling the trip. Your trip remains unchanged',
              'error'
            )
          }
        })
      }, function (dismiss) {
        if (dismiss === 'cancel') {
          self.$swal(
            'Cancelled',
            'Your trip remains unchanged',
            'error'
          )
        }
      })
    }
  },
  mounted: function () {
    var self = this
    this.$api.get(`booking/${this.$route.params.id}`, {}, {
      success: function (res) {
        let booking = res.data.mirror
        try {
          let obj = JSON.parse(booking.json)
          booking.fromName = obj.from_name ? obj.from_name : 'Heaven'
          booking.fromCity = obj.from_city ? obj.from_city : 'Heaven'
          booking.toName = obj.to_name ? obj.to_name : 'Hell'
          booking.toCity = obj.to_city ? obj.to_city : 'Hell'
          booking.departureDate = obj.departure_date ? new Date(obj.departure_date) : new Date()
          booking.arrivalDate = obj.arrival_date ? new Date(obj.arrival_date) : new Date()
          booking.flightNumber = obj.flight_number ? obj.flight_number : 'CHS0001'
          booking.totalDays = obj.total_hours ? Math.floor(obj.total_hours / 24) : 0
          booking.totalHours = obj.total_hours ? obj.total_hours : 0
          booking.totalMinutes = obj.total_minutes ? obj.total_minutes : 0
          booking.stops = obj.stops ? obj.stops : 0
        } catch (e) {}
        self.booking = booking
      },
      error: function () {
        self.$notify({
          type: 'error',
          title: 'Error while loading the book.'
        })
        self.loadingBooks = false
        self.$router.push({ name: 'account-orders' })
      }
    })
  }
}
</script>

<style lang="sass">
  .block-ticket
    background-color: transparent
  .block-ticket > .block-header
    border-radius: 20px 20px 0 0
  .block-ticket > .block-header > .block-title > *
    color: #fff
  .block-ticket-head
    border-radius: 0 0 20px 20px
    background-color: #fff
    padding-top: 20px
  .block-ticket-content
    background-color: #fff
    border-radius: 20px
  .block-ticket-content
    padding: 0 20px 20px 20px
    margin-top: 4px
  .block-ticket-content::before
    content: ''
    display: block
    width: 100%
    border-top: 4px dashed #fff
    position: relative
    height: 20px
    top: -4px
  @media print
    body *
      visibility: hidden
    #page-loader
      opacity: 0
      max-height: 0
      height: 0
      overflow: hidden
    #print-ticket-area, #print-ticket-area *
      visibility: visible
    #print-ticket-area
      background-color: #fff
      position: absolute
      left: 0
      top: 0
    @page
      visibility: hidden
      margin: 40px
      height: auto
    #breaker
      page-break-before: always
    #block-ticket-container
      float: inherit!important
    .block-ticket
      page-break-inside: avoid
    .block-ticket-head,
    .block-ticket-content
      background-color: #f5f6f7
    .block-ticket-content::before
      border-top: 4px dashed #f5f6f7
</style>

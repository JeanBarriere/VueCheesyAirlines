<template>
  <div id="ticket">
    <!-- Breadcrumb -->
    <div class="bg-body-dark border-b">
        <div class="content py-5 text-right">
            <nav class="breadcrumb bg-body-dark mb-0">
                <router-link :to="{ name: 'welcome' }" class="breadcrumb-item">Home</router-link>
                <router-link :to="{ name: 'account' }" class="breadcrumb-item">Account</router-link>
                <router-link :to="{ name: 'account-orders' }" class="breadcrumb-item">Orders</router-link>
                <span class="breadcrumb-item active">Order #2342112</span>
            </nav>
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
                                  <button type="button" @click="cancelTrip()" class="btn btn-lg btn-block btn-alt-danger d-flex justify-content-center"><i class="material-icons mr-5">money_off</i>Cancel the trip</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            <!-- Customer's Basic Info -->
            <div id="print-ticket-area" class="col-12">
              <div id="block-ticket-container" class="col-lg-6 float-left" v-for="(i, index) in tickets">
                  <div id="breaker" v-if="index !== 0"></div>
                  <div class="block block-ticket block-rounded block-themed text-left" href="#">
                      <div class="block-header bg-gd-lake">
                        <div class="block-title d-flex">
                          <div class="h2 font-w300 mb-0">John Smith</div>
                          <div class="p2 font-w700 ml-auto d-flex align-self-center justify-content-center">Ticket #2342112</div>
                        </div>
                      </div>
                      <div class="">
                          <div class="block-ticket-head">
                            <div class="d-flex flex-row">
                              <div class="col-5 align-self-stretch text-left">
                                <div class="h2 font-w400 mb-0">DMK{{index}}</div>
                                <div class="p2 font-w700 text-muted">Don Mueang</div>
                                <div class="h4 font-w700">01:45 PM</div>
                              </div>
                              <div class="col-2 d-flex ml-auto flex-row align-self-center justify-content-center">
                                <i class="material-icons fa-fw fa-rotate-90">flight</i>
                              </div>
                              <div class="col-5 ml-auto align-self-stretch text-right">
                                <div class="h2 font-w400 mb-0">URT</div>
                                <div class="p2 font-w700 text-muted">Surat Thani</div>
                                <div class="h4 font-w700">02:45 PM</div>
                              </div>
                            </div>
                            <div class="d-flex flex-row">
                              <div class="col-12 text-center mb-10">
                                <div class="p2 font-w700 text-muted">
                                  17 NOV 2017
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="block-ticket-content">
                            <div class="d-flex flex-row mb-50 p-20">
                              <div class="col-6 align-self-stretch text-center">
                                <i class="si si-plane fa-2x text-primary"></i>
                                <div class="h3 font-w700 text-primary">AF1032</div>
                                <i class="si si-lock fa-2x text-success"></i>
                                <div class="h3 font-w700 mb-0 text-success">3282921</div>
                              </div>
                              <div class="col-6 align-self-stretch text-center d-flex align-self-center justify-content-center">
                                <qr-code class="d-flex align-self-center justify-content-center" :val="'http://google.com/'" :bg-color="'#fff'" :fg-color="'#000'" />
                              </div>
                            </div>
                            <div class="d-flex flex-row">
                              <div class="col-4 align-self-stretch text-center">
                                <div class="h3 font-w700 mb-5 border-b pb-10">32A</div>
                                <div class="p2 font-w700 text-muted">SEAT</div>
                              </div>
                              <div class="col-4 align-self-stretch text-center">
                                <div class="h3 font-w700 mb-5 border-b pb-10">3</div>
                                <div class="p2 font-w700 text-muted">GATE</div>
                              </div>
                              <div class="col-4 align-self-stretch text-center">
                                <div class="h3 font-w700 mb-5 border-b pb-10">1:05PM</div>
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

export default {
  name: 'ticket',
  data: () => ({
    tickets: [0, 0, 0, 0, 0, 0, 0, 0, 0]
  }),
  components: { QrCode },
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
        self.$swal(
          'Refunded!',
          'You have been refunded and your options have been released.',
          'success'
        )
      }, function (dismiss) {
        // dismiss can be 'cancel', 'overlay',
        // 'close', and 'timer'
        if (dismiss === 'cancel') {
          self.$swal(
            'Cancelled',
            'Your trip remains unchanged',
            'error'
          )
        }
      })
    }
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

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
import countTo from 'vue-count-to'

export default {
  name: 'search',
  components: { countTo },
  data: () => ({
    numbers: 10
  }),
  methods: {
    buy: function () {
      this.$checkout.open({
        name: 'Flight DMK - URT',
        currency: 'USD',
        amount: 10000,
        token (token) {
          console.log(token)
        }
      })
    }
  },
  mounted () {
    console.log(this.$router.currentRoute.params)
  }
}
</script>

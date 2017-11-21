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
    <div class="bg-body-light border-b sticky-top">
        <div class="content py-5 text-right">
            <nav class="breadcrumb bg-body-light mb-0">
                <router-link :to="{ name: 'welcome' }" class="breadcrumb-item">Home</router-link>
                <span class="breadcrumb-item active">Search</span>
                <span class="ml-auto mb-0"><countTo :startVal='0' :endVal='250'></countTo> flights found</span>
            </nav>
        </div>
        <div class="progress rounded-0">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style="width: 30%; height: 7px;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
    <!-- END Breadcrumb -->

    <!-- Page Content -->
    <div class="content">

        <div class="clearfix">
            <!-- Customer's Basic Info -->
            <div class="t-80 col-lg-4 sticky-top float-left">
                <div class="block block-rounded text-center" href="#">
                    <div class="block-content">
                        <div class="row items-push text-center">
                            <div class="col-12 d-flex">
                              <div class="font-size-h4 text-left">Stops</div>
                              <div class="font-size-h4 text-right ml-auto">From:</div>
                            </div>
                            <div class="col-12 d-flex">
                              <label class="css-control css-control-info css-checkbox css-checkbox-rounded text-left">
                                <input type="checkbox" class="css-control-input" checked>
                                <span class="css-control-indicator"></span> Direct (10)
                              </label>
                              <span class="ml-auto text-right">$200</span>
                            </div>
                            <div class="col-12 d-flex">
                              <div class="font-size-h4 text-left">Airlines included</div>
                              <div class="font-size-h4 text-right ml-auto">From:</div>
                            </div>
                            <div class="col-12 d-flex">
                              <label class="css-control css-control-info css-checkbox css-checkbox-rounded text-left">
                                <input type="checkbox" class="css-control-input" checked>
                                <span class="css-control-indicator"></span> AirAsia (2)
                              </label>
                              <span class="ml-auto text-right">$200</span>
                            </div>
                            <div class="col-12 d-flex">
                              <label class="css-control css-control-info css-checkbox css-checkbox-rounded text-left">
                                <input type="checkbox" class="css-control-input">
                                <span class="css-control-indicator"></span> Thai AirAsia (2)
                              </label>
                              <span class="ml-auto text-right">$250</span>
                            </div>
                            <div class="col-12 d-flex">
                              <label class="css-control css-control-info css-checkbox css-checkbox-rounded text-left">
                                <input type="checkbox" class="css-control-input">
                                <span class="css-control-indicator"></span> Thai Lion Mantari (6)
                              </label>
                              <span class="ml-auto text-right">$230</span>
                            </div>
                            <div class="col-12 d-flex">
                              <div class="font-size-h4 text-left">Departure time</div>
                            </div>
                            <div class="col-12 d-flex">
                              <label class="css-control css-control-info css-checkbox css-checkbox-rounded text-left">
                                <input type="checkbox" class="css-control-input">
                                <span class="css-control-indicator"></span> Morning (5:00a - 11:59a)
                              </label>
                            </div>
                            <div class="col-12 d-flex">
                              <label class="css-control css-control-info css-checkbox css-checkbox-rounded text-left">
                                <input type="checkbox" class="css-control-input">
                                <span class="css-control-indicator"></span> Afternoon (12:00p - 5:59p)
                              </label>
                            </div>
                            <div class="col-12 d-flex">
                              <label class="css-control css-control-info css-checkbox css-checkbox-rounded text-left">
                                <input type="checkbox" class="css-control-input">
                                <span class="css-control-indicator"></span> Evening (6:00p - 11:59p)
                              </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Customer's Basic Info -->

            <!-- Customer's Past Orders -->
            <div class="col-lg-8 float-left">
                <div class="row">
                  <loader-item />
                  <a v-for="i in numbers" class="col-md-12 block block-rounded block-link-shadow cursor-pointer" data-toggle="collapse" :data-target="'#reservation_' + i + '_block'" aria-expanded="false" :aria-controls="'reservation_' + i + '_block'">
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

                        <div class="collapse" :id="'reservation_' + i + '_block'">

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
                            <div class="align-self-end ml-auto text-right">
                              <button type="button" class="btn btn-alt-primary" @click="selectFlight()">SELECT</button>
                            </div>
                          </div>

                        </div>

                      </div>
                  </a>
                </div>
            </div>
            <!-- END Customer's Past Orders -->
        </div>
        <!-- END Customer -->

    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
import countTo from 'vue-count-to'
import LoaderItem from '@/components/template/LoaderItem'

export default {
  name: 'search',
  components: { countTo, LoaderItem },
  data: () => ({
    numbers: 10
  }),
  methods: {
    selectFlight: function () {
      this.$router.push({ name: 'view' })
    }
  },
  mounted () {
    console.log(this.$router.currentRoute.params)
  }
}
</script>

<style lang="scss">
  #main-container {
    overflow-x: inherit;
  }
</style>

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

    <div class="bg-body-light border-b sticky-top">
        <div class="content py-5 text-right">
            <nav class="breadcrumb bg-body-light mb-0">
                <router-link :to="{ name: 'welcome' }" class="breadcrumb-item">Home</router-link>
                <span class="breadcrumb-item active">Search</span>
                <span v-if="!noresult && !loading" class="ml-auto mb-0"><countTo :startVal='0' :endVal='records.length'></countTo> flight{{ records.length > 1 ? 's' : '' }} found</span>
                <span v-if="noresult && !loading" class="ml-auto mb-0">no flights found</span>
            </nav>
        </div>
        <div class="progress rounded-0">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style="width: 30%; height: 7px;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>

    <div class="content">

        <div class="clearfix">
            <div class="t-80 col-lg-4 sticky-top float-left">
              <div class="col-12 block block-rounded" v-if="!loading && noresult">
                <div class="block-content block-content-full clearfix">
                  <div class="h3 text-muted text-center m-0 mb-30">
                    <i class="si si-close fa-2x"></i>
                  </div>
                  <div class="h3 text-muted text-center m-0">
                    No results
                  </div>
                </div>
              </div>
              <filters :data="records" :select="filter" v-if="!loading && !noresult" />
            </div>
            <div class="col-lg-8 float-left">
                <div class="row">
                  <div class="col-12 block block-rounded" v-if="!loading && (noresult || recordsDisplay.length === 0)">
                    <div class="block-content block-content-full clearfix">
                      <div class="h3 text-muted text-center m-0 mb-30">
                        <i class="si si-close fa-2x"></i>
                      </div>
                      <div class="h3 text-muted text-center m-0">
                        No results
                      </div>
                    </div>
                  </div>
                  <loader-item v-if="loading" />
                  <a v-if="!loading && !noresult" v-for="record in recordsDisplay" class="col-md-12 block block-rounded block-link-shadow cursor-pointer animated flipInX">
                    <airport-result :data="record" :select="selectFlight" />
                  </a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Filters from '@/components/utils/Filters'
import AirportResult from '@/components/utils/AirportResult'
import countTo from 'vue-count-to'
import LoaderItem from '@/components/template/LoaderItem'
import { ApiService } from '@/services/ApiService'
import neoInteger from '@/components/utils/neo4jInteger'

export default {
  name: 'search',
  components: { countTo, LoaderItem, AirportResult, Filters },
  data: () => ({
    loading: true,
    noresult: false,
    records: [],
    recordsDisplay: []
  }),
  methods: {
    selectFlight: function (record) {
      this.$router.push({ name: 'view', params: { record }, query: this.$route.query })
    },
    filters: function (records) {

    },
    filter: function (object) {
      let disp = []
      for (let rec of this.records) {
        let company = rec._fields[0].segments[0].relationship.properties.company
        let departureDate = new Date(neoInteger.fromValue(rec._fields[0].segments[0].relationship.properties.departureDate).toNumber() * 1000)
        let isMorningDisplay = object.morning && departureDate.getHours() >= 5 && departureDate.getHours() < 12
        let isAfternoonDisplay = object.afteroon && departureDate.getHours() >= 12 && departureDate.getHours() < 18
        let isEveningDisplay = object.evening && departureDate.getHours() >= 18 && departureDate.getHours() < 23
        let displayTime = isMorningDisplay || isAfternoonDisplay || isEveningDisplay
        let stops = rec._fields[0].segments.length - 1
        let displayStops = (stops === 0 && object.stops[0] === true) || (stops === 1 && object.stops[1] === true) || (stops > 1 && object.stops[2] === true)
        for (let cmp of object.companies) {
          if (company === cmp.code && displayTime && displayStops) {
            disp.push(rec)
            break
          }
        }
      }
      this.recordsDisplay = disp
    },
    mount: function () {
      this.loading = true
      this.noresult = false
      if (!this.$route.query.from || !this.$route.query.to || !this.$route.query.date || !this.$route.query.from_name || !this.$route.query.to_name || !this.$route.query.seatsAdult) {
        this.$router.push({ name: 'welcome' })
      } else {
        let apisearch = new ApiService('http://163.172.174.12:9001/')
        var self = this
        apisearch.get('api/itineraries', this.$route.query, {
          success: function (res) {
            if (res.data.records.length === 0) {
              self.noresult = true
            } else {
              self.records = res.data.records
              self.recordsDisplay = self.records
            }
            self.loading = false
          },
          error: function (err) {
            if (err) {
              self.$notify({
                type: 'error',
                title: 'Error while loading the results. Try again'
              })
            }
            self.loading = false
            self.noresult = true
          }
        })
      }
    }
  },
  watch: {
    '$route': 'mount'
  },
  mounted () {
    this.mount()
  }
}
</script>

<style lang="scss">
  #main-container {
    overflow-x: inherit;
  }
</style>

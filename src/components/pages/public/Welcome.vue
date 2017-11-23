<template>
  <div class="bg-image" style="background-image: url('static/assets/img/backgrounds/search.jpg'); max-height:100vh; overflow-y: auto; overflow-x: hidden;">
    <div class="hero">
      <div class="hero-inner">
        <div class="content content-full text-center">
          <h1 class="display-4 font-w700 text-white mb-10 animated fadeInDown">Cheesy Airlines</h1>
          <h2 class="font-w400 text-white-op mb-150 animated fadeInUp" data-timeout="250">Happiness starts with some cheese</h2>

          <div class="row animated fadeInUp" data-timeout="250">

              <div class="col-lg-6">

                <div class="block block-rounded">
                  <div class="block-content p-10">
                    <div class="row">
                      <div class="col-10">
                        <div class="form-group row">
                          <div class="col-12">
                            <div class="form-material input-group tranform-animated" :class="{translateY100: reverse}">
                              <span class="input-group-addon">
                                <i class="material-icons">{{ reverse ? 'flight_land' : 'flight_takeoff' }}</i>
                              </span>
                              <input type="text" class="form-control" id="gen_form_from" name="gen_form_from" :placeholder="reverse ? 'TO' : 'FROM'">
                              <span class="input-group-addon">{{ search.from }}</span>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-material input-group tranform-animated" :class="{'translateY-100': reverse}">
                              <span class="input-group-addon">
                                <i class="material-icons">{{ reverse ? 'flight_takeoff' : 'flight_land' }}</i>
                              </span>
                              <input type="text" class="form-control" id="gen_form_to" name="gen_form_to" :placeholder="reverse ? 'FROM' : 'TO'">
                              <span class="input-group-addon">{{ search.to }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-2 d-flex justify-content-center align-self-center">
                        <a href="#" @click="reverse = !reverse" class="mr-5 mb-5 d-flex justify-content-center align-self-center">
                          <i class="material-icons">swap_vert</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div class="col-lg-6">
                <div class="block block-rounded">
                  <div class="block-content block-content-full clearfix">
                    <div class="row">
                        <div class="col-12">
                          <datepicker v-model="search.date" placeholder="DATE" wrapper-class="container mt-20 mb-20 mc-auto p-0" inline />
                        </div>
                        <div class="col-12">
                          <div class="form-group row">
                            <div class="col-12">
                                <div class="dropup" role="group">
                                    <button type="button" class="btn btn-alt-info btn-block d-flex justify-content-center" id="seat_form_dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="material-icons mr-20">event_seat</i> {{ (search.seats.adults > 0 ? search.seats.adults + ' adult' + (search.seats.adults > 1 ? 's' : '') : '') + (search.seats.adults > 0 && search.seats.children > 0 ? ' and ' : '') + (search.seats.children > 0 ? search.seats.children + ' child' + (search.seats.children > 1 ? 'ren' : '') : '') }}
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="seat_form_dropdown">
                                        <h6 class="dropdown-header">Adults</h6>
                                        <div class="btn-group" role="group" aria-label="adultsGroup">
                                          <button type="button" :disabled="search.seats.adults === 1" @click.stop.prevent="search.seats.adults -= (search.seats.adults > 1 ? 1 : 0)" class="btn btn-alt-secondary">
                                            <i class="fa fa-minus"></i>
                                          </button>
                                          <button type="button" class="btn btn-alt-secondary" disabled="true">
                                            {{ search.seats.adults }}
                                          </button>
                                          <button type="button" :disabled="search.seats.adults === 9" @click.stop.prevent="search.seats.adults += (search.seats.adults < 9 ? 1 : 0)" class="btn btn-alt-secondary">
                                          <i class="fa fa-plus"></i>
                                          </button>
                                        </div>
                                        <h6 class="dropdown-header">Children</h6>
                                        <div class="btn-group" role="group" aria-label="childrenGroup">
                                          <button type="button" :disabled="search.seats.children === 0" @click.stop.prevent="search.seats.children -= (search.seats.children > 0 ? 1 : 0)" class="btn btn-alt-secondary">
                                            <i class="fa fa-minus"></i>
                                          </button>
                                          <button type="button" class="btn btn-alt-secondary" disabled="true">
                                            {{ search.seats.children }}
                                          </button>
                                          <button type="button" :disabled="search.seats.children === 9" @click.stop.prevent="search.seats.children += (search.seats.children < 9 ? 1 : 0)" class="btn btn-alt-secondary">
                                          <i class="fa fa-plus"></i>
                                          </button>
                                        </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-12">
                                <div class="form-material">
                                  <button type="button" class="btn btn-alt-primary btn-block" id="seat_form_submit" @click="submitSearch()">
                                    <i class="fa fa-search"></i>
                                  </button>
                                </div>
                              </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ApiService } from '@/services/ApiService'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'welcome',
  components: { Datepicker },
  data () {
    return {
      search: {
        from: '...',
        to: '...',
        from_name: '',
        to_name: '',
        seats: {
          adults: 1,
          children: 0
        },
        date: new Date()
      },
      reverse: false,
      suggestions: [],
      apisearch: null
    }
  },
  watch: {
    '$route': 'checkError'
  },
  methods: {
    checkError: function () {
      if (this.$route.params.e404) {
        this.$swal('404 Not Found', 'You\'ve been redirected!', 'error')
      }
    },
    submitSearch: function () {
      this.$router.push({
        name: 'search',
        query: {
          from: this.reverse ? this.search.to : this.search.from,
          from_name: this.reverse ? this.search.to_name : this.search.from_name,
          to: this.reverse ? this.search.from : this.search.to,
          to_name: this.reverse ? this.search.from_name : this.search.to_name,
          date: this.search.date.toISOString().split('T')[0],
          seatsAdult: this.search.seats.adults,
          seatsChild: this.search.seats.children
        }
      })
    },
    source: function (term, suggest) {
      term = term.toLowerCase()
      try { this.apisearch.cancel() } catch (e) {}
      this.apisearch.get('_search', { q: `coutry:${term} OR city:${term} OR name:${term} OR iata:${term}` }, {
        success: function (res) {
          let suggestions = []
          for (let i = 0; i < res.data.hits.hits.length; i++) {
            suggestions.push(res.data.hits.hits[i])
          }
          suggest(suggestions)
          self.suggestions = suggestions
        },
        error: function () {}
      })
    },
    renderItem: function (item, search) {
      search = search.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
      var re = new RegExp('(' + search.split(' ').join('|') + ')', 'gi')
      return '<div class="autocomplete-suggestion" data-iata="' + item._source.iata + '" data-val="' + item._source.name + '">' + item._source.name.replace(re, '<b>$1</b>') + '</div>'
    }
  },
  mounted () {
    this.checkError()
    this.$Codebase.helpers(['datepicker'])
    this.apisearch = new ApiService('http://163.172.174.12:9200/', false)
    var self = this
    jQuery('#gen_form_from').autoComplete({
      source: this.source,
      renderItem: this.renderItem,
      onSelect: function (e, term, item) {
        self.search.from = item.data('iata')
        self.search.from_name = item.data('val')
      }
    })
    jQuery('#gen_form_to').autoComplete({
      source: this.source,
      renderItem: this.renderItem,
      onSelect: function (e, term, item) {
        self.search.to = item.data('iata')
        self.search.to_name = item.data('val')
      }
    })
  }
}
</script>


<style lang="css">
.translateY100 {
  transform: translateY(100%);
}
.translateY-100 {
  transform: translateY(-100%);
}
.tranform-animated {
  transition: all 0.3s ease-in-out;
}
</style>

<template>
  <div class="bg-image" style="background-image: url('static/assets/img/backgrounds/search.jpg');">
    <div class="hero">
      <div class="hero-inner">
        <div class="content content-full text-center">
          <h1 class="display-4 font-w700 text-white mb-10 animated fadeInDown">Cheesy Airlines</h1>
          <h2 class="font-w400 text-white-op mb-200 animated fadeInUp" data-timeout="250">Happiness starts with some cheese</h2>

          <div class="row animated fadeInUp" data-timeout="250">

              <div class="col-6">

                <div class="block block-rounded">
                  <div class="block-content">
                    <!-- <div class="row">
                      <div class="col-12 d-flex justify-content-center">
                        <ul class="nav nav-tabs nav-tabs-alt">
                          <li class="nav-item">
                            <a :class="{active: genFormType === 0}" class="nav-link" href="#" @click="genFormType = 0">Round trip</a>
                          </li>
                          <li class="nav-item">
                            <a :class="{active: genFormType === 1}" class="nav-link" href="#" @click="genFormType = 1">One-way</a>
                          </li>
                        </ul>
                      </div>
                    </div> -->
                    <div class="row">
                      <div class="col-11">
                        <div class="form-group row">
                          <div class="col-12">
                            <div class="form-material input-group tranform-animated" :class="{translateY100: reverse}">
                              <span class="input-group-addon">
                                <i class="material-icons">{{ reverse ? 'flight_land' : 'flight_takeoff' }}</i>
                              </span>
                              <input type="text" class="countries form-control" id="gen_form_from" name="gen_form_from" :placeholder="reverse ? 'TO' : 'FROM'">
                              <span class="input-group-addon">...</span>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-material input-group tranform-animated" :class="{'translateY-100': reverse}">
                              <span class="input-group-addon">
                                <i class="material-icons">{{ reverse ? 'flight_takeoff' : 'flight_land' }}</i>
                              </span>
                              <input type="text" class="countries form-control" id="gen_form_to" name="gen_form_to" :placeholder="reverse ? 'FROM' : 'TO'">
                              <span class="input-group-addon">...</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-1 d-flex justify-content-center">
                        <a href="#" @click="reverse = !reverse" class="mr-5 mb-5 align-self-center">
                          <i class="material-icons">swap_vert</i>
                        </a>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group row">
                          <!-- <div class="col-12" v-show="genFormType === 1"> -->
                          <div class="col-12">
                            <div class="form-material input-group">
                              <span class="input-group-addon">
                                <i class="material-icons">event</i>
                              </span>
                              <input type="text" class="js-datepicker form-control" id="onewayfrom" name="onewayfrom" data-week-start="1" data-autoclose="true" data-today-highlight="true" data-date-format="mm/dd/yy" placeholder="DATE">
                            </div>
                          </div>
                          <!-- <div class="col-12" v-show="genFormType === 0">
                            <div class="form-material input-daterange input-group" data-date-format="mm/dd/yy" data-week-start="1" data-autoclose="true" data-today-highlight="true">
                              <span class="input-group-addon">
                                <i class="material-icons">event</i>
                              </span>
                              <input type="text" class="form-control" id="roundfrom" name="roundfrom" placeholder="FROM" data-week-start="1" data-autoclose="true" data-today-highlight="true">
                              <span class="input-group-addon font-w600">TO</span>
                              <input type="text" class="form-control" id="roundto" name="roundto" placeholder="DATE" data-week-start="1" data-autoclose="true" data-today-highlight="true">
                            </div>
                          </div> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="block block-rounded">
                  <div class="block-content">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group row">
                          <div class="col-2 d-flex justify-content-center">
                            <div class="row align-self-center">
                              <i class="material-icons">event_seat</i>
                            </div>
                          </div>
                          <div class="col-10">
                            <div class="row">
                              <div class="btn-group dropup" role="group">
                                  <button type="button" class="btn btn-alt-info" id="seat_form_dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      {{ (search.seats.adults > 0 ? search.seats.adults + ' adult' + (search.seats.adults > 1 ? 's' : '') : '') + (search.seats.adults > 0 && search.seats.children > 0 ? ' and ' : '') + (search.seats.children > 0 ? search.seats.children + ' child' + (search.seats.children > 1 ? 'ren' : '') : '') }}
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
                              <div class="ml-10">
                                <div class="form-material pt-0">
                                  <select class="form-control" id="gen_form_select_class" name="gen_form_select_class">
                                    <option value="Economy" selected>Economy</option>
                                    <option value="Premium Economy">Premium Economy</option>
                                    <option value="Business">Business</option>
                                    <option value="First class">First class</option>
                                  </select>
                                </div>
                              </div>
                              <button type="button" class="btn btn-alt-primary ml-auto mr-10" id="seat_form_submit" @click="submitSearch()">
                                <i class="fa fa-search"></i>
                              </button>
                              <!-- <button type="button" class="btn btn-alt-primary ml-auto mr-10" id="seat_form_submit" @click="printPage()">
                                <i class="fa fa-print"></i>
                              </button> -->
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
    <div id="section-to-print">
      <h3>Saurs tu pu</h3>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import autocomplete from '@/../static/assets/js/plugins/jquery-auto-complete/jquery.auto-complete.min'

export default {
  name: 'welcome',
  data () {
    return {
      search: {
        from: '',
        to: '',
        seats: {
          adults: 1,
          children: 0
        },
        dateFrom: null,
        dateTo: null
      },
      from: '',
      to: '',
      reverse: false,
      genFormType: 0,
      suggestions: []
    }
  },
  watch: {
    from: function (val) {
      this.iataAutocomplete(val, 'from')
    },
    '$route': 'checkError'
  },
  methods: {
    checkError: function () {
      if (this.$route.params.e404) {
        this.$swal('404 Not Found', 'You\'ve been redirected!', 'error')
      }
    },
    printPage: function () {
      window.print()
    },
    submitSearch: function () {
      this.$router.push({name: 'search', params: this.search })
    },
    iataAutocomplete: function (query, label) {
      // let suggestions = []
      // let arr = [{name: 'Paris Charles de Gaulle International Airport', code: 'CDG'}, {name: 'US Navy Army', code: 'USN'}]
      // for (var i = 0; i < arr.length; i++) {
      //   if (arr[i].name.toLowerCase().includes(query.toLowerCase()) || arr[i].code.toLowerCase().includes(query.toLowerCase())) {
      //     suggestions.push(arr[i])
      //   }
      // }
      // this.suggestions = suggestions
      // this.$http.get('https://iatacodes.org/api/v6/autocomplete.json?api_key=1b4d5cd1-a782-4e76-8cdb-cb0874976ebc&query=' + query, function(res) {
      //   console.log(res)
      // }, function(res) {
      //   console.log(res)
      // })
    }
  },
  mounted() {
    this.checkError()
    jQuery(function () {
      Codebase.helpers(['datepicker', 'masked-inputs'])
    })
    // Codebase.helpers(['datepicker'])
    jQuery('.countries').autoComplete({
      minChars: 1,
      source: function(term, suggest){
        term = term.toLowerCase()

        var countriesList  = [
          'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor L\'Este', 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'
        ]
        var suggestions = []

        for (let i = 0; i < countriesList.length; i++) {
          if (~ countriesList[i].toLowerCase().indexOf(term)) {
            suggestions.push(countriesList[i])
          }
        }

        suggest(suggestions)
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

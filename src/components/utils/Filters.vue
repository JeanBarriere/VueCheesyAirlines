<template>
  <div id="filters">
    <div class="block block-rounded text-center" v-if="records !== null">
      <div class="block-content">
          <div class="row items-push text-center">
              <div class="col-12 d-flex">
                <div class="font-size-h4 text-left">Stops</div>
              </div>
              <div class="col-12 d-flex">
                <label class="css-control css-control-info css-checkbox css-checkbox-rounded text-left">
                  <input type="checkbox" class="css-control-input" checked @click="checkStops(0, $event)">
                  <span class="css-control-indicator"></span> Direct
                </label>
              </div>
              <div class="col-12 d-flex">
                <label class="css-control css-control-info css-checkbox css-checkbox-rounded text-left">
                  <input type="checkbox" class="css-control-input" checked @click="checkStops(1, $event)">
                  <span class="css-control-indicator"></span> 1 stop
                </label>
              </div>
              <div class="col-12 d-flex">
                <label class="css-control css-control-info css-checkbox css-checkbox-rounded text-left">
                  <input type="checkbox" class="css-control-input" checked @click="checkStops(2, $event)">
                  <span class="css-control-indicator"></span> 2+ stops
                </label>
              </div>
              <div class="col-12 d-flex">
                <div class="font-size-h4 text-left">Airlines included</div>
                <div class="font-size-h4 text-right ml-auto">From:</div>
              </div>
              <div class="col-12 d-flex" v-for="company of companies">
                <label class="css-control css-control-info css-checkbox css-checkbox-rounded text-left">
                  <input type="checkbox" class="css-control-input" checked @click="checkCompany(company, $event)">
                  <span class="css-control-indicator"></span> {{ company.name }} ({{ company.total }})
                </label>
                <span class="ml-auto text-right">${{ company.price }}</span>
              </div>
              <div class="col-12 d-flex">
                <div class="font-size-h4 text-left">Departure time</div>
              </div>
              <div class="col-12 d-flex">
                <label class="css-control css-control-info css-checkbox css-checkbox-rounded text-left">
                  <input type="checkbox" v-model="filter.morning" class="css-control-input" checked @click="checkTime('morning', $event)">
                  <span class="css-control-indicator"></span> Morning (5:00a - 11:59a)
                </label>
              </div>
              <div class="col-12 d-flex">
                <label class="css-control css-control-info css-checkbox css-checkbox-rounded text-left">
                  <input type="checkbox" v-model="filter.afternoon" class="css-control-input" checked @click="checkTime('afternoon', $event)">
                  <span class="css-control-indicator"></span> Afternoon (12:00p - 5:59p)
                </label>
              </div>
              <div class="col-12 d-flex">
                <label class="css-control css-control-info css-checkbox css-checkbox-rounded text-left">
                  <input type="checkbox" v-model="filter.evening" class="css-control-input" checked @click="checkTime('evening', $event)">
                  <span class="css-control-indicator"></span> Evening (6:00p - 11:59p)
                </label>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import neoInteger from '@/components/utils/neo4jInteger'

export default {
  name: 'filters',
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    select: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    records: null,
    companies: [],
    filter: {
      morning: true,
      afternoon: true,
      evening: true,
      stops: [true, true, true],
      companies: []
    }
  }),
  methods: {
    checkCompany: function (company, event) {
      if (event.srcElement.checked) {
        this.filter.companies.push(company)
      } else {
        this.filter.companies.splice(this.filter.companies.indexOf(company), 1)
      }
      this.select(this.filter)
    },
    checkTime: function (when, event) {
      this.filter[when] = event.srcElement.checked
      this.select(this.filter)
    },
    checkStops: function (number, event) {
      this.filter.stops[number] = event.srcElement.checked
      this.select(this.filter)
    }
  },
  mounted: function () {
    let records = this.data
    let companies = []
    for (let record of records) {
      let r = record._fields[0]
      for (let i = 0; i < r.segments.length; i++) {
        companies.push({ code: r.segments[i].relationship.properties.company, name: r.segments[i].relationship.properties.company_name, price: neoInteger.fromValue(r.segments[i].relationship.properties.price).toNumber() })
      }
    }
    for (let cmp of companies) {
      cmp.total = companies.filter((obj) => obj.code === cmp.code).length
      let minPrice = Number.POSITIVE_INFINITY
      for (let mincmp of companies) {
        if (mincmp.code === cmp.code && mincmp.price < minPrice) {
          minPrice = mincmp.price
        }
      }
      cmp.price = minPrice
    }
    companies = companies.filter((company, index, self) => index === self.findIndex((t) => (t.code === company.code)))
    this.companies = companies
    this.filter.companies = [...this.companies]
    this.records = this.data
  }
}
</script>

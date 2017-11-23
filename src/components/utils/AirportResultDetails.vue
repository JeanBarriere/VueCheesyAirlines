<template>
  <div id="airport-result-details" v-if="record !== null">
    <div class="block-content block-content-full clearfix">
      <div class="d-flex flex-row align-items-start">
        <div class="align-self-stretch text-center mr-20">
          <img :src="'static/img/companies/' + company + '.jpg'" class="img-avatar img-avatar-thumb img-company-thumb" alt="">
          <div class="font-size-sm font-w600 text-uppercase text-muted">{{ companyName }}{{ record.segments.length > 1 ? ' +' + (record.segments.length - 1) : '' }}</div>
        </div>
        <div class="align-self-stretch mr-20">
          <div class="p2 font-w400">{{ departureDate | moment('HH:mm') }} - {{ arrivalDate | moment('HH:mm') }} ({{ totalHours + 'h' + (totalMinutes > 0 ? totalMinutes + 'm' : '') }})</div>
          <div class="p2 font-w700">{{ record.start.properties.iata }} - {{ record.end.properties.iata }}</div>
        </div>
        <div class="align-self-stretch">
          <div class="p2 font-w700 text-muted">{{ stops === 0 ? 'Direct' : (stops) + ' stop' + (stops > 1 ? 's' : '') }}</div>
        </div>
        <div class="align-self-stretch ml-auto text-right">
          <div class="h3 font-w700 text-muted">{{ totalHours + 'h' + (totalMinutes > 0 ? totalMinutes + 'm' : '') }} {{ totalDays > 0 ? ` +${totalDays}days` : '' }}</div>
        </div>
      </div>

      <div class="d-flex flex-column align-items-start">
        <div class="d-flex flex-row align-self-stretch">
          <div class="align-self-stretch mr-20">
            <div class="h3 font-w700">{{ departureDate | moment('HH:mm') }}</div>
          </div>
          <div class="align-self-stretch mr-20">
            <div class="h3 font-w700 text-muted"><i class="material-icons">arrow_forward</i></div>
          </div>
          <div class="align-self-stretch">
            <div class="h3 font-w700">{{ arrivalDate | moment('HH:mm') }}</div>
          </div>
        </div>
        <div class="align-self-stretch">
          <div class="p2 font-w400 text-muted">{{ record.start.properties.city }} to {{ record.end.properties.city }}</div>
          <div class="p2 font-w400 text-muted mb-20">{{ record.start.properties.name }} ({{ record.start.properties.iata }}) to {{ record.end.properties.name }} ({{ record.end.properties.iata }})</div>
          <div class="p2 font-w400 text-muted">Flight ID: {{ flightNumber }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import neoInteger from '@/components/utils/neo4jInteger'

export default {
  name: 'airport-result-details',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    record: null,
    cost: 0,
    totalHours: 0,
    totalMinutes: 0,
    totalDays: 0,
    price: 0,
    company: '',
    companyName: '',
    departureDate: null,
    arrivalDate: null,
    stops: 0,
    flightNumber: ''
  }),
  mounted: function () {
    let record = this.data._fields[0]
    this.cost = neoInteger.fromValue(this.data._fields[1]).toNumber()
    this.totalHours = Math.floor(neoInteger.fromValue(this.data._fields[2]).toNumber() / 3600)
    this.totalMinutes = Math.floor(neoInteger.fromValue(this.data._fields[2]).toNumber() % 60)
    this.departureDate = new Date(neoInteger.fromValue(record.segments[0].relationship.properties.departureDate).toNumber() * 1000)
    this.arrivalDate = new Date(neoInteger.fromValue(record.segments[record.segments.length - 1].relationship.properties.arrivalDate).toNumber() * 1000)
    this.companyName = record.segments[0].relationship.properties.company_name
    this.company = record.segments[0].relationship.properties.company
    this.flightNumber = record.segments[0].relationship.properties.flight_number
    let price = 0
    for (let i = 0; i < record.segments.length; i++) {
      price += neoInteger.fromValue(record.segments[i].relationship.properties.price).toNumber()
    }
    this.price = price
    this.totalDays = Math.floor(this.totalTime / 86400)
    this.stops = record.segments.length - 1
    this.record = record
  }
}
</script>

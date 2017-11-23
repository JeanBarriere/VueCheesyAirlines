<template>
  <div id="airport-result-map" class="map"></div>
</template>

<script>
  import 'leaflet-arc'
  import L from 'leaflet'
  import neoInteger from '@/components/utils/neo4jInteger'
  import moment from 'moment'

  export default {
    name: 'airport-result-map',
    props: {
      data: {
        type: Object,
        default: () => ({})
      }
    },
    data: () => ({
      map: null,
      airports: [],
      markers: [],
      arcs: []
    }),
    methods: {
      mouseOverArc: function (e) {
        e.target.setStyle({ weight: 8, opacity: 1 })
        e.target.redraw()
      },
      mouseOutArc: function (e) {
        e.target.setStyle({ weight: 4, opacity: 0.8 })
        e.target.redraw()
      },
      clickArc: function (e) {
        this.map.fitBounds(e.target.getBounds())
        L.popup().setContent('<p><b>Trip duration:</b> ' + this.airports[this.arcs.indexOf(e.target)].duration +
                  '<br><b>Departure time:</b> ' + this.airports[this.arcs.indexOf(e.target)].departureTime +
                  '<br>ID: ' + this.airports[this.arcs.indexOf(e.target)].flightNumber + '</p>')
          .setLatLng(e.target.getCenter())
          .openOn(this.map)
      },
      setAirportsInfos: function () {
        for (let i = 0; i < this.data._fields[0].segments.length; i++) {
          let segment = this.data._fields[0].segments[i]
          let departureDate = new Date(neoInteger.fromValue(segment.relationship.properties.departureDate).toNumber() * 1000)
          let arrivalDate = new Date(neoInteger.fromValue(segment.relationship.properties.arrivalDate).toNumber() * 1000)
          let flightNumber = segment.relationship.properties.flight_number ? segment.relationship.properties.flight_number : ''
          let duration = arrivalDate - departureDate
          if (i === 0) {
            this.airports.push({'name': segment.start.properties.name, 'coord': L.latLng(segment.start.properties.latitude, segment.start.properties.longitude), 'duration': Math.floor(duration / 3600000) + 'h' + (duration % 60 > 0 ? (duration % 60) : ''), 'departureTime': moment(departureDate).format('DD/MM/YYYY HH:mm'), 'flightNumber': flightNumber})
            this.airports.push({'name': segment.end.properties.name, 'coord': L.latLng(segment.end.properties.latitude, segment.end.properties.longitude), 'duration': Math.floor(duration / 3600000) + 'h' + (duration % 60 > 0 ? (duration % 60) : ''), 'departureTime': moment(departureDate).format('DD/MM/YYYY HH:mm'), 'flightNumber': flightNumber})
          } else {
            this.airports.push({'name': segment.end.properties.name, 'coord': L.latLng(segment.end.properties.latitude, segment.end.properties.longitude), 'duration': Math.floor(duration / 3600000) + 'h' + (duration % 60 > 0 ? (duration % 60) : ''), 'departureTime': moment(departureDate).format('DD/MM/YYYY HH:mm'), 'flightNumber': flightNumber})
          }
        }
      },
      displayWaipointsMarkers: function () {
        for (let i in this.airports) {
          this.markers[i] = L.popup({
            closeButton: false
          }).setLatLng(this.airports[i].coord)
            .setContent('<p><center>' + this.airports[i].name.fontsize(2).bold() + '</center></p>')
          this.map.addLayer(this.markers[i])
        }
        this.map.fitBounds([this.airports[0].coord, this.airports[this.airports.length - 1].coord])
      },
      displayArcs: function () {
        for (let i = 0; i < (this.airports.length - 1); i++) {
          this.arcs[i] = L.Polyline.Arc(this.airports[i].coord, this.airports[i + 1].coord, {
            color: '#868e96',
            vertices: 500,
            weight: 4,
            opacity: 0.8
          }).addTo(this.map)
            .on('mouseover', this.mouseOverArc)
            .on('mouseout', this.mouseOutArc)
            .on('click', this.clickArc)
        }
      },
      displayPath: function () {
        this.setAirportsInfos()
        this.displayWaipointsMarkers()
        this.displayArcs()
      },
      initmap: function () {
        this.map = L.map('airport-result-map', {
          closePopupOnClick: false,
          worldCopyJump: true,
          maxBounds: [[-90, -Infinity], [90, Infinity]],
          minZoom: 3
        })
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 18
        }).addTo(this.map)
      }
    },
    mounted () {
      this.initmap()
      this.displayPath()
    }
  }
</script>

<style lang="sass">
  @import "~leaflet/dist/leaflet.css"
</style>

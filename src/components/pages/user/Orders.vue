<template>
  <div id="account-tickets">

    <!-- Breadcrumb -->
    <div class="bg-body-dark border-b">
        <div class="content py-5 text-right">
            <nav class="breadcrumb bg-body-dark mb-0">
                <router-link :to="{ name: 'welcome' }" class="breadcrumb-item">Home</router-link>
                <router-link :to="{ name: 'account' }" class="breadcrumb-item">Account</router-link>
                <span class="breadcrumb-item active">Orders</span>
            </nav>
        </div>
    </div>
    <!-- END Breadcrumb -->

    <!-- Main Content -->
    <div class="content">
        <!-- Projects -->
        <h2 class="content-heading">
            <i class="si si-briefcase mr-5"></i> Orders
        </h2>
        <div class="row items-push">
            <div v-if="loadingBooks" class="col-md-6 col-xl-3">
              <loader-book />
            </div>
            <div v-else v-for="booking in bookings" class="col-md-6 col-xl-3">
                <div class="block block-rounded ribbon ribbon-modern text-center" :class="{'ribbon-primary': booking.status !== 'Canceled', 'ribbon-danger': booking.status === 'Canceled'}">
                    <div class="ribbon-box" v-if="booking.status !== 'Canceled'">$ {{ booking.cost / 100 }}</div>
                    <div class="ribbon-box" v-else>Canceled</div>
                    <div class="block-content block-content-full">
                        <div class="item item-circle bg-danger text-danger-light mx-auto my-20">
                            <i class="fa fa-globe"></i>
                        </div>
                        <div class="text-info">
                            <span>{{ booking.company + ' ' + booking.flightNumber }}</span>
                        </div>
                    </div>
                    <div class="block-content block-content-full block-content-sm bg-body-light">
                        <div class="font-w600 mb-5">Departure</div>
                        <div class="font-size-sm text-muted">{{ booking.from }} {{ booking.departureDate | moment('MM/DD/YY HH:mm') }}</div>
                        <div class="font-w600 mb-5">Arrival</div>
                        <div class="font-size-sm text-muted">{{ booking.to }} {{ booking.arrivalDate | moment('MM/DD/YY HH:mm') }}</div>
                    </div>
                    <div class="block-content block-content-full">
                        <router-link class="btn btn-rounded btn-alt-secondary" :to="{ name: 'account-orders-order', params: { id: booking.ID }}"><i class="fa fa-briefcase mr-5"></i>View Tickets ({{ booking.nb_passengers }})</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- END Projects -->
    </div>

  </div>
</template>

<script>
import LoaderBook from '@/components/template/LoaderBook'

export default {
  name: 'account-tickets',
  components: { LoaderBook },
  data: () => ({
    bookings: [],
    loadingBooks: true
  }),
  mounted: function () {
    var self = this
    this.$api.get('bookings', {}, {
      success: function (res) {
        let bookings = res.data.bookings
        for (let i = 0; i < bookings.length; i++) {
          try {
            let obj = JSON.parse(bookings[i].json)
            bookings[i].fromName = obj.from_name
            bookings[i].toName = obj.to_name
            bookings[i].departureDate = new Date(obj.departure_date)
            bookings[i].arrivalDate = new Date(obj.arrival_date)
            bookings[i].flightNumber = obj.flight_number
            bookings[i].totalHours = obj.total_hours
            bookings[i].totalMinutes = obj.total_minutes
          } catch (e) {}
        }
        self.bookings = bookings
        self.loadingBooks = false
      },
      error: function () {
        self.$notify({
          type: 'error',
          title: 'Error while loading your bookings. Try again'
        })
        self.loadingBooks = false
      }
    })
  }
}
</script>

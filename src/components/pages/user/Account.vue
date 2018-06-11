<template>
  <div id="account">

    <div class="bg-image bg-image-bottom" style="background-image: url('static/assets/img/photos/photo6@2x.jpg');">
        <div class="bg-primary-dark-op py-30">
            <div class="content content-full text-center">
                <!-- Avatar -->
                <div class="mb-15">
                    <a class="img-link" href="be_pages_generic_profile.html">
                        <img class="img-avatar img-avatar96 img-avatar-thumb" src="static/assets/img/avatars/avatar15.jpg" alt="">
                    </a>
                </div>
                <!-- END Avatar -->

                <!-- Personal -->
                <h1 class="h3 text-white font-w700 mb-10">{{ getUserName }}</h1>
                <!-- <h2 class="h5 text-white-op">
                  Customer
                </h2> -->
                <!-- END Personal -->

                <!-- Actions -->
                <!-- <button type="button" class="btn btn-rounded btn-hero btn-sm btn-alt-primary mb-5">
                    <i class="fa fa-envelope-o mr-5"></i> Send email
                </button> -->
                <!-- END Actions -->
            </div>
        </div>
    </div>
    <!-- END User Info -->

    <!-- Breadcrumb -->
    <div class="bg-body-dark border-b">
        <div class="content py-5 text-right">
            <nav class="breadcrumb bg-body-dark mb-0">
                <router-link :to="{ name: 'welcome' }" class="breadcrumb-item">Home</router-link>
                <span class="breadcrumb-item active">Account</span>
            </nav>
        </div>
    </div>
    <!-- END Breadcrumb -->

    <!-- Main Content -->
    <div class="content">

        <h2 class="content-heading">
            <button type="button" class="btn btn-sm btn-rounded btn-alt-secondary float-right" data-toggle="modal" data-target="#modal-edit-user">Edit</button>
            <i class="si si-eye mr-5"></i> Personal informations
        </h2>
        <div class="row items-push">
          <div class="col-12">
            <div class="block block-rounded text-center">
              <div class="block-content block-content-full block-content-sm bg-elegance-dark">
                  <div class="font-w600 text-white">{{ getUserName }}</div>
              </div>
              <div class="block-content block-content-full bg-image" style="background-image: url('static/assets/img/photos/photo5@2x.jpg');">
                <img class="img-avatar img-avatar-thumb" src="static/assets/img/avatars/avatar8.jpg" alt="">
              </div>
              <div class="block-content block-content-full block-content-sm bg-gd-lake">
                <div class="font-size-sm text-white">Early Traveler</div>
              </div>
              <div class="block-content block-content-full">
                <div class="mb-5"><i class="si si-badge fa-2x text-elegance"></i></div>
                <div class="font-size-sm text-muted">4400 points</div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="content-heading">
            <router-link class="btn btn-sm btn-rounded btn-alt-secondary float-right" :to="{ name: 'account-orders' }">View More..</router-link>
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
    </div>

  </div>
</template>

<script>
import LoaderBook from '@/components/template/LoaderBook'
import { mapGetters } from 'vuex'

export default {
  name: 'account',
  components: { LoaderBook },
  data: () => ({
    bookings: [],
    loadingBooks: true
  }),
  computed: mapGetters(['getUserName']),
  mounted: function () {
    var self = this
    this.$api.get('bookings', {}, {
      success: function (res) {
        let bookings = res.data.bookings.slice(0, 4)
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

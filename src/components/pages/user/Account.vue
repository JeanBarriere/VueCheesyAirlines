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
        <!-- Projects -->
        <h2 class="content-heading">
            <router-link class="btn btn-sm btn-rounded btn-alt-secondary float-right" :to="{ name: 'account-orders' }">View More..</router-link>
            <i class="si si-briefcase mr-5"></i> Orders
        </h2>
        <div class="row items-push">
            <div v-for="lastTicket in lastTickets" class="col-md-6 col-xl-3">
                <div class="block block-rounded ribbon ribbon-modern ribbon-primary text-center">
                    <div class="ribbon-box">$ {{ lastTicket.price / 100 }}</div>
                    <div class="block-content block-content-full">
                        <div class="item item-circle bg-danger text-danger-light mx-auto my-20">
                            <i class="fa fa-globe"></i>
                        </div>
                        <div class="text-info">
                            <span>{{ lastTicket.id }}</span>
                        </div>
                    </div>
                    <div class="block-content block-content-full block-content-sm bg-body-light">
                        <div class="font-w600 mb-5">Departure</div>
                        <div class="font-size-sm text-muted">{{ lastTicket.from }} {{ lastTicket.dateFrom | moment('MM/DD/YY HH:mm') }}</div>
                        <div class="font-w600 mb-5">Arrival</div>
                        <div class="font-size-sm text-muted">{{ lastTicket.to }} {{ lastTicket.dateTo | moment('MM/DD/YY HH:mm') }}</div>
                    </div>
                    <div class="block-content block-content-full">
                        <router-link class="btn btn-rounded btn-alt-secondary" :to="{ name: 'account-orders-order', params: { id: lastTicket.ref }}"><i class="fa fa-briefcase mr-5"></i>View Tickets ({{ lastTicket.number }})</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- END Projects -->
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'account',
  data: () => ({
    lastTickets: [
      {
        id: 'KD213',
        ref: 'KD213-171008-3495832',
        number: 6,
        from: 'BKK',
        to: 'URT',
        dateFrom: '2017-10-08',
        dateTo: '2017-10-08',
        price: 240040
      },
      {
        id: 'AF1666',
        ref: 'AF1666-170804-12342839',
        number: 1,
        from: 'CDG',
        to: 'BKK',
        dateFrom: '2017-08-04 15:20',
        dateTo: '2017-08-05 07:30',
        price: 120000
      }
    ]
  }),
  computed: mapGetters(['getUserName'])
}
</script>

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
            <div v-for="ticket in tickets" class="col-md-6 col-xl-3">
                <div class="block block-rounded ribbon ribbon-modern ribbon-primary text-center">
                    <div class="ribbon-box">$ {{ ticket.price / 100 }}</div>
                    <div class="block-content block-content-full">
                        <div class="item item-circle bg-danger text-danger-light mx-auto my-20">
                            <i class="fa fa-globe"></i>
                        </div>
                        <div class="text-info">
                            <span>{{ ticket.id }}</span>
                        </div>
                    </div>
                    <div class="block-content block-content-full block-content-sm bg-body-light">
                        <div class="font-w600 mb-5">Departure</div>
                        <div class="font-size-sm text-muted">{{ ticket.from }} {{ ticket.dateFrom | moment('MM/DD/YY HH:mm') }}</div>
                        <div class="font-w600 mb-5">Arrival</div>
                        <div class="font-size-sm text-muted">{{ ticket.to }} {{ ticket.dateTo | moment('MM/DD/YY HH:mm') }}</div>
                    </div>
                    <div class="block-content block-content-full">
                        <router-link class="btn btn-rounded btn-alt-secondary" :to="{ name: 'account-orders-order', params: { id: ticket.ref }}"><i class="fa fa-briefcase mr-5"></i>View Tickets ({{ ticket.number }})</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- END Projects -->
    </div>

  </div>
</template>

<script>
export default {
  name: 'account-tickets',
  data: () => ({
    tickets: [
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
  })
}
</script>

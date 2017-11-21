<template>
  <!-- Header -->
  <header id="page-header">
      <!-- Header Content -->
      <div class="content-header">
          <!-- Left Section -->
          <div class="content-header-section">
              <!-- Toggle Sidebar -->
              <button v-show="isHeaderIconShowed" type="button" class="btn btn-circle btn-dual-secondary" data-toggle="layout" data-action="sidebar_toggle">
                  <i class="fa fa-navicon"></i>
              </button>
              <!-- END Toggle Sidebar -->
          </div>
          <!-- END Left Section -->

          <!-- Right Section -->
          <div class="content-header-section" v-if="isLoggedIn === true">
              <!-- User Dropdown -->
              <div class="btn-group" role="group">
                  <button type="button" class="btn btn-rounded btn-alt-info" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {{ getUserName }}<i class="fa fa-angle-down ml-5"></i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right min-width-150" aria-labelledby="page-header-user-dropdown">
                    <router-link class="dropdown-item" :to="{ name: 'account' }"><i class="si si-user mr-5"></i> Profile</router-link>
                    <router-link class="dropdown-item" :to="{ name: 'account-orders' }"><i class="si si-briefcase mr-5"></i> Orders</router-link>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" @click="signout()" href="#">
                        <i class="si si-logout mr-5"></i> Sign Out
                    </a>
                  </div>
              </div>
          </div>
          <div class="content-header-section" v-else>
            <button type="button" class="btn btn-rounded btn-alt-info" data-toggle="modal" data-target="#modal-signin">Sign in</button>
            <!-- <button type="button" class="btn btn-rounded btn-alt-info" @click="signIn()">
                Sign in
            </button> -->
            <button v-if="$route.name === 'account-orders-order'" @click="printPage()" type="button" class="btn btn-rounded btn-alt-success"><i class="material-icons">print</i></button>
          </div>
          <!-- END Right Section -->
      </div>
      <!-- END Header Content -->

      <!-- Header Loader -->
      <div id="page-header-loader" class="overlay-header bg-primary">
          <div class="content-header content-header-fullrow text-center">
              <div class="content-header-item">
                  <i class="fa fa-sun-o fa-spin text-white"></i>
              </div>
          </div>
      </div>
      <!-- END Header Loader -->
  </header>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'page-header',
  computed: {
    ...mapGetters(['isHeaderIconShowed', 'isLoggedIn', 'getUserName'])
  },
  methods: {
    ...mapActions(['logout']),
    printPage: function () {
      window.print()
    },
    signout: function () {
      this.logout()
      if (this.$route.name === 'account' || this.$route.name === 'account-orders' || this.$route.name === 'account-orders-order') {
        this.$router.push({ name: 'welcome' })
      }
    }
  }
}
</script>

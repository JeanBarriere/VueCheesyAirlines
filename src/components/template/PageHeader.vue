<template>
  <!-- Header -->
  <header id="page-header">
      <!-- Header Content -->
      <div class="content-header">
          <!-- Left Section -->
          <div class="content-header-section">
              <!-- Toggle Sidebar -->
              <button v-show="$store.getters.isHeaderIconShowed" type="button" class="btn btn-circle btn-dual-secondary" data-toggle="layout" data-action="sidebar_toggle">
                  <i class="fa fa-navicon"></i>
              </button>
              <!-- END Toggle Sidebar -->
          </div>
          <!-- END Left Section -->

          <!-- Right Section -->
          <div class="content-header-section" v-if="$store.getters.isLoggedIn">
              <!-- User Dropdown -->
              <div class="btn-group" role="group">
                  <button type="button" class="btn btn-rounded btn-alt-info" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      J. Barriere<i class="fa fa-angle-down ml-5"></i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right min-width-150" aria-labelledby="page-header-user-dropdown">
                      <a class="dropdown-item" href="start_backend.html">
                          <i class="si si-user mr-5"></i> Profile
                      </a>
                      <a class="dropdown-item d-flex align-items-center justify-content-between" href="start_backend.html">
                          <span><i class="si si-envelope-open mr-5"></i> Inbox</span>
                          <span class="badge badge-primary">3</span>
                      </a>
                      <a class="dropdown-item" href="start_backend.html">
                          <i class="si si-note mr-5"></i> Invoices
                      </a>
                      <div class="dropdown-divider"></div>

                      <!-- Toggle Side Overlay -->
                      <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
                      <a class="dropdown-item" href="javascript:void(0)" data-toggle="layout" data-action="side_overlay_toggle">
                          <i class="si si-wrench mr-5"></i> Settings
                      </a>
                      <!-- END Side Overlay -->

                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" @click="signOut()" href="#">
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
            <button v-if="$route.name === 'ticket'" @click="printPage()" type="button" class="btn btn-rounded btn-alt-success"><i class="material-icons">print</i></button>
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
export default {
  name: 'page-header',
  data: () => ({

  }),
  methods: {
    printPage: function () {
      window.print()
    },
    signOut: function () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

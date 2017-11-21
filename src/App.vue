<template>
  <div id="app">

    <notifications />

    <div id="page-loader"></div>

    <div id="page-container" class="side-scroll main-content-boxed" :class="{ 'sidebar-o': isHeaderMenuShowed, 'page-header-inverse': isHeaderInversedShowed, 'page-header-fixed': isHeaderFixedShowed, 'page-header-glass': isHeaderGlassShowed }">
        <page-header />
        <main id="main-container">
            <router-view />
        </main>
        <page-footer />
        <modals />
    </div>

  </div>
</template>

<script>
import PageHeader from '@/components/template/PageHeader'
import PageFooter from '@/components/template/PageFooter'
import Modals from '@/components/template/Modals'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: mapGetters(['isHeaderMenuShowed', 'isHeaderInversedShowed', 'isHeaderFixedShowed', 'isHeaderGlassShowed']),
  components: { PageHeader, PageFooter, Modals }
}
</script>

<style lang="sass">
  @import "src/assets/css/base"

  .vue-notification
    margin-top: 30px
</style>

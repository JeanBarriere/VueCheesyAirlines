<template>
  <footer v-if="isDisplayingFooter === true" id="page-footer">
      <div class="content py-20 font-size-xs clearfix">
          <div class="float-right">
            <router-link :to="{ name: 'welcome' }">Privacy</router-link>
          </div>
          <div class="float-left">
            <router-link :to="{ name: 'welcome' }">Cheesy Airlines</router-link> &copy; <span class="js-year-copy"></span>
          </div>
      </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'page-footer',
  computed: mapGetters(['isDisplayingFooter'])
}
</script>

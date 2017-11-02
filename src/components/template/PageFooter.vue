<template>
  <footer v-if="$store.getters.isDisplayingFooter" id="page-footer">
      <div class="content py-20 font-size-xs clearfix">
          <div class="float-right">
            <router-link :to="{ name: 'privacy' }">Privacy</router-link>
          </div>
          <div class="float-left">
            <router-link :to="{ name: 'Welcome' }">Cheesy Airlines</router-link> &copy; <span class="js-year-copy"></span>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: "page-footer"
}
</script>

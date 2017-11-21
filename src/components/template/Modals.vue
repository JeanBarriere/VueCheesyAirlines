<template>
  <div id="modals">
    <sign-in />
    <sign-up />
  </div>
</template>

<script>
import SignIn from '@/components/template/modals/SignIn'
import SignUp from '@/components/template/modals/SignUp'

export default {
  name: 'modals',
  components: { SignIn, SignUp }
}
</script>

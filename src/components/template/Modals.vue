<template>
  <div id="modals">
    <sign-in />
    <sign-up />
    <edit-user />
  </div>
</template>

<script>
import SignIn from '@/components/template/modals/SignIn'
import SignUp from '@/components/template/modals/SignUp'
import EditUser from '@/components/template/modals/EditUser'

export default {
  name: 'modals',
  components: { SignIn, SignUp, EditUser }
}
</script>

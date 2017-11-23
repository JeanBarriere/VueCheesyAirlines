<template>
  <div class="modal rounded fade" id="modal-signin" tabindex="-1" role="dialog" aria-labelledby="modal-signin" aria-hidden="true">
      <div class="modal-dialog modal-dialog-popin" role="document">
          <div class="modal-content">
              <div class="block block-themed block-transparent mb-0">
                  <div class="block-header bg-info">
                      <h3 class="block-title">Login</h3>
                      <div class="block-options">
                          <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                              <i class="si si-close"></i>
                          </button>
                      </div>
                  </div>
                  <!-- <div v-if="isSaved === false"> -->
                    <div class="block-content">
                      <div class="form-group row">
                        <div class="col-12">
                          <div class="form-material">
                            <input type="email" class="form-control" v-model="user.email" id="form-signin-email" name="form-signin-email" />
                            <label for="form-signin-email">Email</label>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <div class="col-12">
                          <div class="form-material">
                            <input type="password" class="form-control" v-model="user.password" id="form-signin-password" name="form-signin-password" />
                            <label for="form-signin-password">Password</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  <!-- </div> -->
                  <!-- <div v-else>
                    <div class="block-content block-content-full text-center bg-info-light">
                        <img class="img-avatar img-avatar96 img-avatar-thumb bg-gray-dark" src="static/assets/img/avatars/groot.jpg" alt="">
                    </div>
                    <div class="block-content">
                      <div class="form-group row">
                        <div class="col-12 text-center">
                          <p>Welcome back, <strong>{{ getEmail }}</strong></p>
                          <a href="#" @click="unsave()" class="nav-link">Not you ?</a>
                        </div>
                      </div>
                    </div>
                  </div> -->
              </div>
              <div class="modal-footer">
                  <!-- <button type="button" class="btn btn-rounded btn-alt-primary d-flex justify-content-center" data-dismiss="modal"> -->
                  <div class="d-flex container flex-column">
                    <button type="button" class="btn btn-rounded btn-alt-primary d-flex justify-content-center btn-block" @click="signIn()" v-if="!signInLoad">
                      <i class="material-icons mb-5 mr-5">lock</i> Connect
                    </button>
                    <button type="button" class="btn btn-link d-flex justify-content-center btn-block" @click="signUp()" v-if="!signInLoad">
                      <i class="material-icons mb-5 mr-5">fiber_new</i> Don't have an account ?
                    </button>
                    <button type="button" class="btn btn-rounded btn-alt-primary d-flex justify-content-center btn-block disabled" v-if="signInLoad">
                      <i class="material-icons animated rubberBand fa-fw infinite">group_work</i>
                    </button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'modal-sign-in',
  data: () => ({
    user: {
      email: '',
      password: ''
    },
    signInLoad: false
  }),
  computed: {
    ...mapGetters(['isSaved', 'getUserEmail', 'getUserName', 'getUserToken'])
  },
  methods: {
    ...mapMutations(['unsave']),
    ...mapActions(['login']),
    signIn: function () {
      var self = this
      self.signInLoad = true
      this.login(this.user).then(() => {
        self.signInLoad = false
        self.$api.set(self.getUserToken)
        jQuery('#modal-signin').modal('hide')
        this.$notify({
          title: `Welcome back ${this.getUserName}`,
          type: 'success'
        })
      }).catch(() => {
        this.$notify({
          title: 'Invalid credentials',
          text: '<b>Username</b> or <b>Password</b> incorrect',
          type: 'error'
        })
        self.signInLoad = false
      })
    },
    signUp: function () {
      jQuery('#modal-signin').modal('hide')
      jQuery('#modal-signup').modal('show')
    }
  },
  mounted: function () {
    this.user.email = this.getUserEmail
  }
}
</script>

<style media="screen" lang="sass" scoped>
  .material-icons
    line-height: inherit
</style>

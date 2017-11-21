<template>
  <div class="modal rounded fade" id="modal-signup" tabindex="-1" role="dialog" aria-labelledby="modal-signup" aria-hidden="true">
      <div class="modal-dialog modal-dialog-popin" role="document">
          <div class="modal-content">
              <div class="block block-themed block-transparent mb-0">
                  <div class="block-header bg-info">
                      <h3 class="block-title">Signup</h3>
                      <div class="block-options">
                          <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                              <i class="si si-close"></i>
                          </button>
                      </div>
                  </div>
                  <div class="block-content">
                    <div class="form-group row">
                      <div class="col-12">
                        <div class="form-material">
                          <input type="text" class="form-control" v-model="user.firstname" id="form-signup-firstname" name="form-signup-firstname" />
                          <label for="form-signup-firstname">Firstname</label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-12">
                        <div class="form-material">
                          <input type="text" class="form-control" v-model="user.lastname" id="form-signup-lastname" name="form-signup-lastname" />
                          <label for="form-signup-lastname">Lastname</label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-12">
                        <div class="form-material">
                          <input type="email" class="form-control" v-model="user.email" id="form-signup-email" name="form-signup-email" />
                          <label for="form-signup-email">Email</label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-12">
                        <div class="form-material">
                          <input type="password" class="form-control" v-model="user.password" id="form-signup-password" name="form-signup-password" />
                          <label for="form-signup-password">Password</label>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="modal-footer">
                  <!-- <button type="button" class="btn btn-rounded btn-alt-primary d-flex justify-content-center" data-dismiss="modal"> -->
                  <div class="d-flex container flex-column">
                    <button type="button" class="btn btn-rounded btn-alt-success d-flex justify-content-center btn-block" @click="signUp()" v-if="!signUpLoad">
                      <i class="material-icons mb-5 mr-5">security</i> Sign up
                    </button>
                    <button type="button" class="btn btn-link d-flex justify-content-center btn-block" @click="signIn()" v-if="!signUpLoad">
                      <i class="material-icons mb-5 mr-5">fiber_new</i> Already have an account ?
                    </button>
                    <button type="button" class="btn btn-rounded btn-alt-primary d-flex justify-content-center btn-block disabled" v-if="signUpLoad">
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
  name: 'modal-sign-up',
  data: () => ({
    user: {
      firstname: '',
      lastname: '',
      name: '',
      email: this.getUserEmail,
      password: ''
    },
    signUpLoad: false
  }),
  computed: {
    ...mapGetters(['getUserEmail', 'getUserName'])
  },
  methods: {
    ...mapMutations(['unsave']),
    ...mapActions(['register']),
    signUp: function () {
      var self = this
      self.signUpLoad = true
      this.user.name = this.user.firstname + ' ' + this.user.lastname
      this.register(this.user).then(() => {
        self.signUpLoad = false
        jQuery('#modal-signup').modal('hide')
        this.$notify({
          title: `Welcome ${this.getUserName}`,
          type: 'success'
        })
      }).catch((err) => {
        let text
        if (err.response.status === 400) {
          text = 'Please, fill all the fields'
        } else if (err.response.status === 406) {
          text = `The email <b>${this.user.email}</b> is already registered`
        } else {
          text = 'An error occured'
        }
        this.$notify({
          title: 'Error while submitting form',
          text: text,
          type: 'error'
        })
        self.signUpLoad = false
      })
    },
    signIn: function () {
      jQuery('#modal-signup').modal('hide')
      jQuery('#modal-signin').modal('show')
    }
  }
}
</script>

<style media="screen" lang="sass" scoped>
  .material-icons
    line-height: inherit
</style>

<template>
  <div class="modal rounded fade" id="modal-edit-user" tabindex="-1" role="dialog" aria-labelledby="modal-edit-user" aria-hidden="true">
      <div class="modal-dialog modal-dialog-popin" role="document">
          <div class="modal-content">
              <div class="block block-themed block-transparent mb-0">
                  <div class="block-header bg-info">
                      <h3 class="block-title">Edit account</h3>
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
                          <input type="text" class="form-control" v-model="user.name" id="form-edit-user-name" name="form-edit-user-name" />
                          <label for="form-edit-user-name">Name *</label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-12">
                        <div class="form-material">
                          <input type="email" class="form-control" v-model="user.email" id="form-edit-user-email" name="form-edit-user-email" />
                          <label for="form-edit-user-email">Email *</label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-12">
                        <div class="form-material">
                          <input type="password" class="form-control" v-model="user.password" id="form-edit-user-password" name="form-edit-user-password" />
                          <label for="form-edit-user-password">Password *</label>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="modal-footer">
                  <!-- <button type="button" class="btn btn-rounded btn-alt-primary d-flex justify-content-center" data-dismiss="modal"> -->
                  <div class="d-flex container flex-column">
                    <button :disabled="user.password.trim().length === 0" type="button" class="btn btn-rounded btn-alt-success d-flex justify-content-center btn-block" @click="editUser()" v-if="!editUserLoad">
                      <i class="material-icons mb-5 mr-5">update</i> Update
                    </button>
                    <button type="button" class="btn btn-rounded btn-alt-primary d-flex justify-content-center btn-block disabled" v-if="editUserLoad">
                        <i class="material-icons animated rubberBand fa-fw infinite">group_work</i>
                    </button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'modal-edit-user',
  data: () => ({
    user: {
      name: '',
      email: '',
      password: ''
    },
    editUserLoad: false
  }),
  computed: {
    ...mapGetters(['getUserEmail', 'getUserName'])
  },
  methods: {
    ...mapActions(['edit']),
    editUser: function () {
      var self = this
      self.editUserLoad = true
      this.edit(this.user).then(() => {
        self.editUserLoad = false
        jQuery('#modal-edit-user').modal('hide')
        this.$notify({
          title: `Account updated`,
          type: 'success'
        })
      }).catch((err) => {
        let text
        if (err && err.response && err.response.status === 400) {
          text = 'Please, fill all the fields'
        } else if (err && err.response && err.response.status === 406) {
          text = `The email <b>${this.user.email}</b> is already registered`
        } else {
          text = 'An error occured'
        }
        this.$notify({
          title: 'Error while submitting form',
          text: text,
          type: 'error'
        })
        self.editUserLoad = false
      })
    }
  },
  mounted: function () {
    this.user.name = this.getUserName
    this.user.email = this.getUserEmail
  }
}
</script>

<style media="screen" lang="sass" scoped>
  .material-icons
    line-height: inherit
</style>

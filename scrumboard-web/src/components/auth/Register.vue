<template>
  <div>
    <TheHeader/>

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mx-auto">

          <div class="card mt-3">
            <div class="card-body">
              <h5 class="card-title text-center">Register</h5>

              <div class="alert alert-success" v-if="auth && user">
                Welcome, {{ user.email }}!
              </div>
              <div class="alert alert-danger" v-else-if="error">
                {{ error }}
                <button type="button" class="close" @click="hideError()">
                  <span>&times;</span>
                </button>
              </div>

              <form @submit.prevent="register(form)">
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas fa-user"></i>
                      </span>
                    </div>
                    <input type="email" v-model="form.email" placeholder="Email" class="form-control">
                  </div>
                </div>

                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas fa-unlock"></i>
                      </span>
                    </div>
                    <input type="password" v-model="form.password" placeholder="Password" class="form-control">
                  </div>
                </div>

                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas fa-unlock"></i>
                      </span>
                    </div>
                    <input type="password" v-model="form.password_confirmation" placeholder="Password confirmation" class="form-control">
                  </div>
                </div>

                <button type="submit" class="btn btn-primary btn-block">Register</button>
              </form>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TheHeader from '../shared/TheHeader'

export default {
  beforeDestroy () {
    this.hideError()
  },
  data () {
    return {
      form: {
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  computed: {
    ...mapState('auth', [
      'auth',
      'error'
    ]),
    ...mapState('user', [
      'user'
    ])
  },
  methods: {
    ...mapActions('auth', [
      'register',
      'hideError'
    ]),
    ...mapActions('user', [
      'loadUser'
    ])
  },
  watch: {
    auth: function (newAuth) {
      if (newAuth) {
        this.loadUser()
      }
    },
    user: function (newUser) {
      if (newUser) {
        this.$router.push('/overview')
      }
    }
  },
  components: {
    TheHeader
  }
}
</script>

<style>

</style>

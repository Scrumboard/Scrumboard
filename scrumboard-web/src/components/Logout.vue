<template>
  <div>
    <TheHeader/>

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mx-auto">

          <div class="card mt-3">
            <div class="card-body">
              <h5 class="card-title text-center">Logout</h5>

              <div class="alert alert-info" v-if="loading">
                Logging out...
              </div>
              <div class="alert alert-success" v-else-if="!user">
                Logged out!
              </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TheHeader from './shared/TheHeader'

export default {
  created () {
    this.logout()
  },
  computed: mapState('auth', {
    user: state => state.user
  }),
  methods: {
    ...mapActions('auth', [
      'logout'
    ])
  },
  components: {
    TheHeader
  }
}
</script>

<style>

</style>

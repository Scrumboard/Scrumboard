<template>
  <div>

    <TheHeader/>

    <div class="container">

      <div class="card">
        <div class="card-body">

          <h5 class="card-title">Details</h5>

          <form @submit.prevent="updateDetails(form)">
            <div class="form-group row">
              <label for="email" class="col-sm-4 col-xl-3 col-form-label">Email</label>
              <div class="col-sm-8 col-xl-9">
                <input type="text" readonly class="form-control" id="email" v-model="user.email" disabled>
              </div>
            </div>
            <div class="form-group row">
              <label for="firstname" class="col-sm-4 col-xl-3 col-form-label">Name</label>
              <div class="col-sm-8 col-xl-9">
                <div class="form-row">
                  <div class="col">
                    <input type="text" class="form-control" id="firstname" v-model="form.firstname" placeholder="First name">
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" id="lastname" v-model="form.lastname" placeholder="Last name">
                  </div>
                </div>
              </div>
            </div>

            <button class="btn btn-primary float-right" type="submit">Submit</button>
          </form>

        </div>
      </div>
      <div class="card">
        <div class="card-body">

          <h5 class="card-title">Authentication</h5>

          <form @submit.prevent="updatePassword(form)">
            <div class="form-group row">
              <label for="password-current" class="col-sm-4 col-xl-3 col-form-label">Current Password</label>
              <div class="col-sm-8 col-xl-9">
                <input type="password" class="form-control" id="password-current" placeholder="Current Password">
              </div>
            </div>
            <div class="form-group row">
              <label for="password-new" class="col-sm-4 col-xl-3 col-form-label">New Password</label>
              <div class="col-sm-8 col-xl-9">
                <input type="password" class="form-control" id="password-new" placeholder="New Password">
              </div>
            </div>
            <div class="form-group row">
              <label for="password-new-confirmation" class="col-sm-4 col-xl-3 col-form-label">New Password Confirmation</label>
              <div class="col-sm-8 col-xl-9">
                <input type="password" class="form-control" id="password-new-confirmation" placeholder="New Password Confirmation">
              </div>
            </div>

            <button class="btn btn-primary float-right" type="submit">Submit</button>
          </form>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheHeader from '@/components/shared/TheHeader'

export default {
  data () {
    return {
      form: {
        firstname: 'hello',
        lastname: 'world'
      }
    }
  },
  computed: mapState('user', [
    'user'
  ]),
  components: {
    TheHeader
  }
}
</script>

<style scoped>
  .card {
    margin-top: 1em;
    margin-bottom: 1em;
  }
</style>

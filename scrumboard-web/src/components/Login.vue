<template>
  <div>
    <TheHeader/>

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mx-auto">

          <div class="card mt-3">
            <div class="card-body">
              <h5 class="card-title text-center">Login</h5>

              <div class="alert alert-danger" v-if="alert.message">
                {{ alert.message }}
                <button type="button" class="close" @click="alertHide()">
                  &times;
                </button>
              </div>

              <form @submit.prevent="submit()">
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
                  <div class="form-check">
                    <input type="checkbox" v-model="form.remember" class="form-check-input" id="remember">
                    <label for="remember" class="form-check-label">
                      Remember me
                    </label>
                  </div>
                </div>

                <button type="submit" class="btn btn-primary btn-block">Login</button>
              </form>

            </div>

            <div class="card-footer text-center text-muted">
              <a>Forgot password?</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from './shared/TheHeader'

export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: false,
      },
      alert: {
        message: '',
      }
    }
  },
  methods: {
    submit() {
      this.alert.message = 'Oops! Nog geen implementatie beschikbaar'
    },
    alertHide() {
      this.alert.message = ''
    }
  },
  components: {
    TheHeader
  }
}
</script>

<style>

</style>

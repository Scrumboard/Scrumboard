<template>
  <div>
    <Menu></Menu>

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mx-auto">

          <div class="card mt-3">
            <div class="card-body">
              <h5 class="card-title text-center">Inloggen</h5>

              <form>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas fa-user"></i>
                      </span>
                    </div>
                    <input type="email" placeholder="E-mailadres" class="form-control">
                  </div>
                </div>

                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas fa-unlock"></i>
                      </span>
                    </div>
                    <input type="password" placeholder="Wachtwoord" class="form-control">
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="remember">
                    <label for="remember" class="form-check-label">
                      Aangemeld blijven
                    </label>
                  </div>
                </div>

                <button type="submit" class="btn btn-primary btn-block">Log In</button>
              </form>

            </div>

            <div class="card-footer text-center text-muted">
              <a>Wachtwoord vergeten?</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './shared/menu/Menu'

export default {
  components: {
    Menu
  }
}
</script>

<style>

</style>

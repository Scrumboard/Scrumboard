<template>

  <!-- Default div to put all the info in. -->
  <div>
    <!-- The menu bar -->
    <menubar></menubar>

    <!-- The container for all the information on the landings page -->
    <!-- This makes use of the grid system. -->
    <div class="row body-content">
    <div class="card welcome text-center mx-auto p-3 shadow rounded col-5">
      <div class="card-body">
        <h1 class="card-title">Welcome to Scrumboard!</h1>
        <p class="card-text">A free open source scrumboard website!</p>
        <p class="card-text"></p>
        <a href="#" class="btn btn-black">Get started!</a>
      </div>
    </div> <!-- End card -->
    </div> <!-- End row div -->

  <div class="info">

    <div class="row">
      <div class="card text-center mx-auto p-3 shadow rounded col-2">
        <div class="card-body">
          <h1 class="card-title"><i class="fab fa-creative-commons-nc-eu"></i></h1>
          <p class="card-text">All services on the website are entirely free!</p>
          <p class="card-text">U don't have to pay for team size, extra projects or functionalities.</p>
        </div>
      </div>

      <div class="card text-center mx-auto p-3 shadow rounded col-2">
        <div class="card-body">
          <h1 class="card-title"><i class="fab fa-github"></i></h1>
          <p class="card-text">All the code is on github, don't be afraid to help!</p>
          <a href="https://github.com/Scrumboard/Scrumboard" target="_blank" class="btn btn-black">Show me the code!</a>
          <p class="card-text"></p>
        </div>
      </div>

      <div class="card text-center mx-auto p-3 shadow rounded col-2">
        <div class="card-body">
          <h1 class="card-title"><i class="fas fa-database"></i></h1>
          <p class="card-text">We're transparent with all our data.</p>
          <p class="card-text">This means that u will know what we'll do with every bit of your information.</p>
          <p class="card-text"></p>
        </div>
      </div>

    </div>

  </div>

  </div> <!-- End default div -->
</template>

<script>
import Menu from './shared/menu/Menu'

export default {
  name: 'Landing',
  components: {
    menubar: Menu
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./src/styles/colors.scss";

.github_link {
  font-weight:400;
  font-size:22px;
}

.github_link:hover {
  border:none;
  outline:none;
  decoration:none;
}

.btn-black {
  background-color: $darkgrey;
  font-size: 18px;
  font-weight: 400;
  color: white;
}

.btn-black:hover {
  background-color: $darkpurple;
  color:white;
}

.welcome {
  margin-top: 8rem;
  margin-bottom: 10rem;
}

.card {
    -ms-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  -o-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.body-content {
  width: 100%;
}

.info, .row {
  z-index:9999;
  width: 100%;
  margin: 0px;
}

.info {
  padding:3rem;
  position:absolute;
}
</style>

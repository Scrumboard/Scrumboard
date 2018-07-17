<template>
  <div class="pos-f-t">

  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand">Scrumboard</a>

    <ul class="navbar-nav ml-auto d-flex flex-sm-row dissapear-small">
      <li class="nav-item mr-4 pl-2 pr-2">
        <a class="nav-link" href="#">Login</a>
      </li>
      <li class="nav-item mr-4 pl-2 pr-2">
        <a class="nav-link" href="#">Register</a>
      </li>
      <li class="nav-item active mr-4 pl-2 pr-2">
        <a class="nav-link" href="/">Home</a>
      </li>
    </ul>

    <!-- The if statement should be connected to logged in or not. -->
    <button class="navbar-toggler align-right" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>

    <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-2">
    <ul class="navbar-nav ml-auto d-flex flex-sm-row">
      <li class="nav-item mr-4 pl-2 pr-2">
        <a class="nav-link" href="#">Login</a>
      </li>
      <li class="nav-item mr-4 pl-2 pr-2">
        <a class="nav-link" href="#">Register</a>
      </li>
      <li class="nav-item active mr-4 pl-2 pr-2">
        <a class="nav-link" href="/">Home</a>
      </li>
    </ul>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./src/assets/colors.scss";

button:focus {
  outline:none;
}

a, a:visited, a:hover, a:active {
  color: inherit;
}

.nav-link {
    font-size:18px;
    color: white!important;
}

.nav-link:hover {
    color:$blue!important;
}

.navbar-brand {
    font-size:24px;
    color:white!important;
}

.navbar {
    font-family: 'Abel', sans-serif;
}

.navbar-toggler {
  display:none;
}

@media (max-width: 575.98px) {
  ul {
    width:100%;
    text-align:center;
  }

  .dissapear-small {
    display:none !important;
  }

  .navbar-toggler {
    display:inline-block;
  }
}

</style>

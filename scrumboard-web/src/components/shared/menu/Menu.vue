<template>
  <div class="pos-f-t">

  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand">Scrumboard</a>

    <ul class="navbar-nav ml-auto d-flex flex-row">
      <li class="nav-item mr-4 pl-2 pr-2">
        <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
      </li>
      <li class="nav-item mr-4 pl-2 pr-2">
        <a class="nav-link" href="#">Register</a>
      </li>
      <li class="nav-item active mr-4 pl-2 pr-2">
        <a class="nav-link" href="/">Home</a>
      </li>
    </ul>

    <!-- The if statement should be connected to logged in or not. -->
    <button v-if="false" class="navbar-toggler align-right" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>

    <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-2">
      <p class="text-white">Collapsed content</p>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      msg: 'Hello menu!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./src/styles/colors.scss";

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

</style>

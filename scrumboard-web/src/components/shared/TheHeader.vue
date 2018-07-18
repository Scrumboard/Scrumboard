<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">

    <a class="navbar-brand" href="#">Scrumboard</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav ml-auto text-center">
        <li class="nav-item px-3">
          <router-link v-if="!user" :to="{ name: 'login' }" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item px-3">
          <router-link v-if="!user" :to="{ name: 'register' }" class="nav-link">Register</router-link>
        </li>
        <li class="nav-item px-3">
          <router-link :to="{ name: 'Landing' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item px-3">
          <router-link v-if="user" :to="{ name: 'test' }" class="nav-link">Test</router-link>
        </li>
        <li class="nav-item px-3">
          <router-link v-if="user" :to="{ name: 'logout' }" class="nav-link">Logout</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState('auth', {
    user: state => state.user
  })
}
</script>

<style lang="scss" scoped>
@import "./src/assets/colors.scss";

.navbar {
  font-family: 'Abel', sans-serif;
}

.navbar-brand {
  font-size: 24px;
}

.navbar-dark .navbar-nav .nav-link {
  font-size: 18px;
  color: #fff;
  &:hover {
    color: $blue;
  }
}
</style>

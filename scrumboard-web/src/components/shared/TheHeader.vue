<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">

    <!-- <a class="navbar-brand" href="/">Scrumboard</a> -->
    <router-link :to="{ name: 'landing' }" class="navbar-brand">Scrumboard</router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav ml-auto text-center">
        <li v-if="!auth" class="nav-item px-3">
          <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
        </li>
        <li v-if="!auth" class="nav-item px-3">
          <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
        </li>
        <li class="nav-item px-3">
          <router-link :to="{ name: 'landing' }" class="nav-link">Home</router-link>
        </li>
        <li v-if="auth" class="nav-item px-3">
          <router-link :to="{ name: 'overview' }" class="nav-link">Overview</router-link>
        </li>
        <li v-if="auth" class="nav-item px-3">
          <router-link :to="{ name: 'board', params: { id: 1 } }" class="nav-link">Board</router-link>
        </li>
        <li v-if="auth" class="nav-item px-3">
          <router-link :to="{ name: 'settings' }" class="nav-link">Settings</router-link>
        </li>
        <li v-if="auth" class="nav-item px-3">
          <router-link :to="{ name: 'logout' }" class="nav-link">Logout</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState('auth', [
    'auth'
  ])
}
</script>

<style lang="scss" scoped>
@import "./src/assets/colors.scss";
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

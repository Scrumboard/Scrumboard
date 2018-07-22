<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "./src/assets/colors.scss";

  html {
    overflow-y: scroll;
  }

  body {
    background: $lightblue;
    font-family: 'Hind', sans-serif;
    padding-right: 0 !important;
  }
</style>

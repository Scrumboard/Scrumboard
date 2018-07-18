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

body {
  background: $lightblue;
  font-family: 'Hind', sans-serif;
}

html {
  overflow-y: scroll;
}
</style>

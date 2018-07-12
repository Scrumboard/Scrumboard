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

@import "./src/styles/colors.scss";

#app {
  background: linear-gradient(to top right, $darkpurple 0%, $darkblue 100%);
  height:100%;
  width:100%;
  position:absolute;
  left:0px;
  right:0px;
  font-family: 'Hind', sans-serif;
}
</style>

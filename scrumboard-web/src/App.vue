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

html,body {
  background:$lightblue!important;
  height:100%;
  width:100%;
  background-attachment: fixed;
  position:absolute;
  left:0px;
  right:0px;
  font-family: 'Hind', sans-serif;
}
</style>

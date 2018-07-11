<template>
  <h1> {{test}} </h1>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      msg: 'Welcome to the landing!',
      test: 'hello world'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./src/styles/colors.scss";

a {
  color: $lightgreen;
}
</style>

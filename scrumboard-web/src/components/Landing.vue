<template>
  <div>
    <menubar></menubar>
  </div>
</template>

<script>
import Menu from './shared/menu/Menu'

export default {
  name: 'Landing',
  components: {
    'menubar': Menu
  },
  data () {
    return {
      test: 'hello worldsss'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./src/styles/colors.scss";

</style>

<template>

  <!-- Default div to put all the info in. -->
  <div class="body">
    <!-- The menu bar -->
    <menubar></menubar>
    <div class="teams d-flex justify-content-center">
      <team :teamName="'Default'"></team>
      <team :teamName="'School'"></team>
    </div>

  </div> <!-- End default div -->
</template>

<script>
import TheHeader from './shared/TheHeader'
import Team from './Team'

export default {
  name: 'Overview',
  components: {
    menubar: TheHeader,
    team: Team
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./src/assets/colors.scss";

</style>

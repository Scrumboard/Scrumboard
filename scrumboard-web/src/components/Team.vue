<template>

  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h1 class="card-title"> {{teamName}} </h1>
    </div>
    <div class="list-group list-group-flush">
      <a href="#" class="list-group-item existing_board"><i class="fas fa-arrow-right"></i> IIPSEN5 </a>

      <a href="#" class="list-group-item add_board"><i class="fas fa-plus"></i> New Board</a>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Team',
  data () {
    return {}
  },
  props: {
    teamName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./src/assets/colors.scss";

.card {
  display:inline-block;
  margin:2rem;
}

.card-title {
  font-weight:bold;
}

.list-group-item {
  color: $darkgrey;
  font-size:20px;
  padding-left:3rem;
}
</style>

<template>

  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h1 class="card-title"> {{teamName}} </h1>
    </div>
    <div class="list-group list-group-flush">
      <a href="#" class="list-group-item existing_board"><i class="fas fa-fw fa-arrow-right"></i> IIPSEN5 </a>

      <a href="#" class="list-group-item add_board"><i class="fas fa-fw fa-plus"></i> New Board</a>
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
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
}

.card-title {
  font-weight:bold;
}

.fa-arrow-right, .fa-plus {
  color:$darkgrey;
  vertical-align: middle;
  font-size:20px;

  -webkit-transition: color .25s;
  -moz-transition: color .25s;
  -o-transition: color .25s;
  transition: color .25s;
}

.list-group-item:hover .fa-arrow-right {
  color:$blue;
}

.list-group-item:hover .fa-plus {
  color: #28a745;
}

.list-group-item {
  color: $darkgrey;
  font-size:1em;
  background-color:transparent;
  -webkit-transition: background-color .25s;
  -moz-transition: background-color .25s;
  -o-transition: background-color .25s;
  transition: background-color .25s;
}

.list-group-item:hover {
  background-color:rgba(225,225,225,0.50);
}

</style>

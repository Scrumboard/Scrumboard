<template>
  <div>

    <TheHeader/>

    <div class="container">
      <div class="row flex-nowrap bg-dark">

        <div v-for="lane in lanes" :key="lane.title" class="col-6 col-md-4 col-lg-3 bg-light border border-success">

          <div class="row" >
            <div class="col-12">
              <h3>{{ lane.title }}</h3>
            </div>
          </div>

        </div>

      </div>

      <Draggable :lanes="lanes">

        <template slot="drag-item"  slot-scope="{task}">
          <div class="card m-2 rounded-0" @mouseover="active = task" @mouseout="active = null">
            <div class="card-body pb-0">
              <p class="card-text">{{task.title}}</p>

              <p class="card-text float-right" :class="{'text-muted': (task != active)}">
                <span @click="deleteTask(task)">
                  <i class="fas fa-trash"></i>
                </span>
                <span @click="updateSelected(task)" data-toggle="modal" data-target="#modal">
                  <i class="fas fa-exchange-alt"></i>
                </span>
              </p>
            </div>
          </div>
        </template>

      </Draggable>

      <div class="row flex-nowrap bg-dark">

        <div v-for="lane in lanes" :key="lane.title" class="col-6 col-md-4 col-lg-3 bg-light border border-success">

          <div class="row" >
            <div class="col-12">
              <i class="fas fa-plus-circle" @click="createTask(lane)"></i>
            </div>
          </div>

        </div>

      </div>

      

    </div>

    <div class="modal fade" id="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content" v-if="selected">
          <div class="modal-header">
            <h5 class="modal-title">{{selected.title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="list-group">
              <a v-for="lane in lanes" :key="lane.id" @click="moveTask({selected, lane})" :class="{active: lane.tasks.indexOf(selected) > -1}" class="list-group-item list-group-item-action" data-dismiss="modal">{{lane.title}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import TheHeader from './shared/TheHeader'
import Draggable from './utils/Draggable'

export default {
  created () {
    this.findLanes()
  },
  data () {
    return {
      active: null
    }
  },
  computed: mapState('board', [
    'selected',
    'lanes'
  ]),
  methods: {
    ...mapActions('board', [
      'moveTask',
      'findLanes',
      'createTask',
      'deleteTask'
    ]),
    ...mapMutations('board', [
      'updateSelected'
    ])
  },
  components: {
    TheHeader,
    Draggable
  }
}
</script>

<style lang="scss" scoped>
  .container {
    overflow-x: scroll;
  }


</style>

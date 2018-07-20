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
      <div class="row flex-nowrap bg-dark" id="test">

        <div v-for="lane in lanes" :key="lane.title" class="col-6 col-md-4 col-lg-3 bg-light border border-success">

          <draggable class="row" v-model="lane.items" :options="{draggable: '.item', group: 'scrumboard', animation: 150}">
            <div v-for="item in lane.items" :key="item.id" class="col-12 item">
              <div class="card m-2">
                <div class="card-body">
                  {{ item.title }}<br />
                  <span @click="selected = item" data-toggle="modal" data-target="#modal">-></span>
                </div>
              </div>
            </div>
          </draggable>

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
              <a v-for="lane in lanes" :key="lane.id" @click="moveItem(selected, lane)" :class="{active: lane.items.indexOf(selected) > -1}" class="list-group-item list-group-item-action" data-dismiss="modal">{{lane.title}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import TheHeader from './shared/TheHeader'
import draggable from 'vuedraggable'

export default {
  data () {
    return {
      selected: null,
      lanes: [
        {
          id: 1,
          title: 'Todo',
          items: [
            { id: 1, title: 'item 1' },
            { id: 2, title: 'item 2' },
            { id: 3, title: 'item 3' }
          ]
        },
        {
          id: 2,
          title: 'Progress',
          items: [
            { id: 4, title: 'item 4' },
            { id: 5, title: 'item 5' }
          ]
        },
        {
          id: 3,
          title: 'Testing',
          items: [
            { id: 6, title: 'item 6' }
          ]
        },
        {
          id: 4,
          title: 'Done',
          items: [
            { id: 7, title: 'item 7' },
            { id: 8, title: 'item 8' }
          ]
        }
      ]
    }
  },
  methods: {
    moveItem (selected, laneTo) {
      for (let lane of this.lanes) {
        let index = lane.items.indexOf(selected)
        if (index > -1) {
          lane.items.splice(index, 1)
        }
      }
      laneTo.items.push(selected)
    }
  },
  components: {
    TheHeader,
    draggable
  }
}
</script>

<style lang="scss" scoped>
  .container {
    overflow-x: scroll;
  }
</style>

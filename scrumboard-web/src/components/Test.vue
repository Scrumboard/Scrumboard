<template>
  <div>

    <TheHeader/>

    <div class="container">
      <div class="row flex-nowrap bg-dark" id="test">

        <div v-for="lane in lanes" :key="lane.title" class="col-6 col-md-4 col-lg-3 bg-light border border-success">

          <draggable class="row" :options="{draggable: '.item', group: 'scrumboard', animation: 150}">
            <div class="col-12">
              <h3>{{ lane.title }}</h3>
            </div>
            <div v-for="item in lane.items" :key="item.id" class="col-12 item">
              <div class="card m-2">
                <div class="card-body">
                  {{ item.title }}
                </div>
              </div>
            </div>
          </draggable>

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
      lanes: [
        {
          title: 'Todo',
          items: [
            { id: 1, title: 'item 1' },
            { id: 2, title: 'item 2' },
            { id: 3, title: 'item 3' },
          ]
        },
        {
          title: 'Progress',
          items: [
            { id: 4, title: 'item 4' },
            { id: 5, title: 'item 5' },
          ]
        },
        {
          title: 'Testing',
          items: [
            { id: 6, title: 'item 6' },
          ]
        },
        {
          title: 'Done',
          items: [
            { id: 7, title: 'item 7' },
            { id: 8, title: 'item 8' },
          ]
        }
      ]
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

  .item {
    height: 100%;
  }
</style>

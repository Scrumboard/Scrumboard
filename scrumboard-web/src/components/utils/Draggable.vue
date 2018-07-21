<template>
  <div class="row flex-nowrap bg-dark" id="test">
    <div v-for="lane in lanes" :key="lane.id" :id="'lane-'+lane.id" @drop.prevent="" @dragover.prevent="insertLane($event, lane)"  class="col-6 col-md-4 col-lg-3 bg-dark border border-success">

      <div draggable="true"
        @dragstart="dragstart($event, item)" @dragend="dragend"
        @dragover="dragover($event, lane, itemIndex)"
        :class="{selected:(item == selected)}"
        v-for="(item, itemIndex) in lane.items" :key="item.id"
        :id="item.id">

        <slot name="drag-item" :item="item"></slot>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['lanes'],
  data () {
    return {
      selected: null
    }
  },
  methods: {
    dragstart (event, item) {
      this.selected = item
      event.dataTransfer.setData('text/plain', '')
    },
    dragend (event) {
      this.selected = null
    },
    dragover (event, lane, itemIndex) {
      this.removeItem(this.selected)
      let index = event.layerY / event.target.clientHeight < 0.5 ? itemIndex : itemIndex + 1
      lane.items.splice(index, 0, this.selected)
    },

    insertLane (event, lane) {
      if (event.target.id.indexOf('lane-') === -1) {
        return
      }
      this.removeItem(this.selected)
      lane.items.push(this.selected)
    },
    removeItem (item) {
      for (let lane of this.lanes) {
        const index = lane.items.indexOf(item)
        if (index > -1) {
          lane.items.splice(index, 1)
        }
      }
    }
  }
}
</script>

<style scoped>
  .selected  {
    color: #888888;
  }

  .selected > * {
    background-color: rgba(187, 187, 187, 0.3)
  }
</style>

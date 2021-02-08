<template>
  <div v-for="(item, index) in data" :key="item.id">
    <item :todo="item" :deletTodoItem="deletTodoItem" :index="index" :updateTodoItem="updateTodoItem"/>
  </div>
</template>

<script>
import item from './item.vue'

export default {
  name: 'List',
  components: {item},
  props: {
    data: {
      type: Array,
      required: true
    },
    deletTodoItem: {
      type: Function,
      required: true
    },
    updateTodoItem: {
      type: Function,
      required: true
    }
  },
  setup (props, context) {
    return {}
  }
}
</script>

<style scoped>
  div {
    width: 100%;
  }
</style>

<template>
  <h3 :style="{color}">孙子组件</h3>
</template>

<script>
import {inject} from 'vue'
export default {
  name: 'GrandSon',
  setup () {
    let color = inject('color')
    return {
      color
    }
  }
}
</script>

<style scoped>

</style>

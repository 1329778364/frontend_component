<template>
  <fieldset>
    <legend>使用 toRefs 转换响应式对象为普通对象</legend>
    <li>name:{{name}}</li>
    <li>age:{{age}}</li>
  </fieldset>
</template>

<script>
import {reactive, ref, toRefs} from 'vue'
export default {
  name: 'use_toRef',
  setup () {
    const state = reactive({
      name: 'wlq',
      age: 12
    })
    const state2 = toRefs(state)
    console.log('state2', state2)
    setInterval(() => {
      // state2.name.value += "====";
    }, 2000)
    return {
      ...state2
    }
  }
}
</script>

<style scoped>

</style>

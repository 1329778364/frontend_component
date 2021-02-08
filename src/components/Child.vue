<template>
  <fieldset>
    <legend>子组件</legend>
    <h4>message:{{msg}}</h4>
    <h4>length:{{mylength}}</h4>
    <button @click="emitXxx">子组件事件分发</button>
  </fieldset>
  <GrandSon></GrandSon>
</template>

<script lang="ts">
import {toRef, Ref, computed, ref} from 'vue'
import GrandSon from './GrandSon.vue'
function getlength (message:Ref) {
  return computed(() => {
    return message.value.toString().length
  })
}

export default {
  name: 'Child',
  props: ['msg'],
  components: {
    GrandSon
  },
  setup (props, context) {
    console.log(props.msg)
    // 直接使用 传过来的就是 value值
    console.log(context)
    // 转成ref对象 由于要实时获取长度，则可以使用计算属性来监听，但是
    const mylength = getlength(toRef(props, 'msg'))
    // const mylength = computed(() => {
    //   return props.msg.length
    // });
    function emitXxx () {
      context.emit('xxx', '++')
    }

    return {
      emitXxx,
      mylength
    }
  },

  beforeCreate (): void {
    console.log('child-beforeCreate')
  },
  created (): void {
    console.log('child-created')
  },

  beforeMount (): void {
    console.log('child-beforeMount')
  },

  mounted (): void {
    console.log('child-mounted')
  },

  beforeUpdate (): void {
    console.log('child-beforeUpdate')
  },

  updated (): void {
    console.log('child-updated')
  },

  beforeUnmount (): void {
    console.log('child-beforeUnmount')
  },
  unmounted (): void {
    console.log('child-unmounted')
  }

}
</script>

<style scoped>

</style>

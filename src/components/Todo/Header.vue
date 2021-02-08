<template>
  <div class="input-container">
    <span>输入：</span>
    <input placeholder="请输入待办事项：" v-model="title"/>
    <button @click="add">确认</button>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'
import {ITodo} from '../../types/todo'

export default {
  name: 'Header',
  props: {
    addTodoItem: {
      type: Function,
      required: true
    }
  },
  setup (props, context) {
    let title = ref('')
    let add = () => {
      let text = title.value
      if (text.trim() === '') return
      let item = {
        id: Date.now(),
        title: text,
        isComplete: false
      }
      props.addTodoItem(item)
      title.value = ''
    }
    return {
      title,
      add
    }
  }

}
</script>

<style scoped>
  .input-container {
    width: 100%;
    height: 30px;
    background-color: #f2f2f2;
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: left;
    border: 1px solid pink;
    border-radius: 10px;

  }

  input {
    width: 60%;
    height: 25px;
    border: grey;
    border-radius: 5px;
  }

  button {
    margin: 10px 10px;
    height: 25px;
  }

</style>

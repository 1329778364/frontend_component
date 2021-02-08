<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="selectAll_or_not">
    </label>
    <div>
      <span>
        <span>已完成：{{count}} /全部：{{data.length}}</span>
      </span>
      <button class="todo-button" @click="clearCompleted" >清除已完成任务</button>
    </div>
  </div>
</template>

<script lang="ts">
  import {ITodo} from "../../types/todo"
  import {computed} from "vue"

  export default {
    name: "Footer",
    props: {
      data: {
        type: Array as () => ITodo [],
        required: true
      },
      selectAll: {
        type: Function,
        required: true
      },
      clearComplete:{
        type: Function,
        required: true
      }
    },
    setup(props, context) {
      let count = computed(() => {
        return props.data.reduce((pre, cur, index) => pre + (cur.isComplete ? 1 : 0), 0)
      });

      // 进行全选与不选操作 修改数据
      let selectAll_or_not = computed({
        set(val) {
          props.selectAll(val);
        },
        get() {
          if (props.data.length == 0) {
            return false
          }
          let count = props.data.reduce((pre, cur, index) => pre + (cur.isComplete ? 1 : 0), 0);
          return count == props.data.length;
        }
      });
      // 清除已完成
      let clearCompleted = () => {
        props.clearComplete()
      };

      return {
        count,
        selectAll_or_not,
        clearCompleted
      }
    }

  }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    width: 100%;
    border: 1px solid pink;
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .todo-button {
    margin: 0 10px;
  }
</style>

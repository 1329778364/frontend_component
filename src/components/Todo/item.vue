<template>
  <div @mouseenter="mousehandler(true)" @mouseleave="mousehandler(false)" class="todo-item"
       :style="{backgroundColor:bgcolor ,color:textcolor}">
    <input type="checkbox" v-model="isComplete">
    <div class="todo-content">
      {{todo.title}}
    </div>
    <button @click="delete_item" v-show="show">删除</button>
  </div>
</template>

<script lang="ts">
  import {ITodo} from "../../types/todo";
  import {ref, computed} from "vue"

  export default {
    name: "item",
    props: {
      // 利用接口进行 数据类型约束
      todo: Object as () => ITodo,
      deletTodoItem: {
        type: Function,
        required: true
      },
      index: {
        type: Number,
        required: true
      },
      updateTodoItem: {
        type: Function,
        required: true
      }
    },
    setup(props, context) {
      let show = ref(false);
      let textcolor = ref("black");
      let bgcolor = ref("white");
      let mousehandler = (option: boolean) => {
        if (option) {
          bgcolor.value = "gray";
          textcolor.value = "black";
          show.value = true;
        } else {
          bgcolor.value = "white";
          textcolor.value = "black";
          show.value = false;
        }
      };

      let delete_item = () => {
        props.deletTodoItem(props.index);
      };
      let isComplete = computed({
        get() {
          return props.todo.isComplete
        },
        set(val) {
          props.updateTodoItem(val, props.index)
        }
      });
      return {
        mousehandler,
        bgcolor,
        textcolor,
        show,
        delete_item,
        isComplete
      }
    }
  }
</script>

<style scoped>
  .todo-item {
    width: 100%;
    height: 20px;
    border: 1px solid pink;
    padding: 5px 10px;
    margin: 5px 0;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: left;
  }

  .todo-content {
    display: flex;
    width: 80%;
    background-color: aliceblue;
    border-radius: 2px;
    padding: 2px 5px;
    text-align: center;
    justify-content: start;
  }

  button {
    margin: 0 5px;
  }
</style>

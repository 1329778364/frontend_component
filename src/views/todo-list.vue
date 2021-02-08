<template>
  <div class="todo-body">
    <h3>ToDo List</h3>
    <Header :addTodoItem="addTodoItem"/>
    <List :data="todos" :deletTodoItem="deletTodoItem" :updateTodoItem="updateTodoItem"/>
    <Footer :data="todos" :selectAll="selectAll" :clearComplete="clearComplete"/>
  </div>
</template>

<script lang="ts">
  import Header from "../components/Todo/Header.vue";
  import Footer from "../components/Todo/Footer.vue";
  import List from "../components/Todo/List.vue";
  import {ITodo} from "../types/todo";
  import {reactive, ref, toRefs, watch, onMounted} from "vue";
  import {saveTools, loadTodos} from "../utils/localStorageUtils";

  export default {
    name: "todoList",
    components: {
      Header, Footer, List
    },

    setup(props, context) {
      let state = reactive<{ todos: ITodo[] }>({
        todos: []
      });

      onMounted(()=>{
        setTimeout(() => {
          state.todos = loadTodos();
        }, 2000);
      });

      let addTodoItem = (item: ITodo) => {
        state.todos.unshift(item);
      };
      let deletTodoItem = (index: number) => {
        state.todos.splice(index, 1);
      };
      let updateTodoItem = (val: boolean, index: number) => {
        state.todos[index]["isComplete"] = val;
      };
      // 全选
      let selectAll = (flage: boolean) => {
        if (flage) {
          state.todos.forEach(((item, index) => item.isComplete = true))
        } else {
          state.todos.forEach(((item, index) => item.isComplete = false))
        }
      };
      let clearComplete = () => {
        state.todos = state.todos.filter((item => !item.isComplete))
      };

      watch(()=>state.todos, (value => {
        saveTools(value);
      }), {deep:true});

      return {
        // 转换成 对应的 响应对象
        ...toRefs(state),
        addTodoItem,
        deletTodoItem,
        updateTodoItem,
        selectAll,
        clearComplete
      }
    }
  }
</script>

<style scoped>
  h3 {
    margin: 0 0 5px;
    color: dodgerblue;
  }

  .todo-body {
    width: 80%;
    padding: 10px 20px;
    margin: 0 auto;
    border-radius: 10px;
    border: 1px solid gold;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

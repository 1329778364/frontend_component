<template>
  <h3>Flex 导航栏</h3>
  <Navigator></Navigator>
  <h3>父级组件APP</h3>
  <button @click="update">更新数据</button>
  <Child v-if="show" :msg="message" @xxx="xxx"/>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input type="text" placeholder="请输入姓氏" v-model="user.firstname">
    <br>
    名字：<input type="text" placeholder="请输入名字" v-model="user.lastname">
  </fieldset>
  <fieldset>
    <legend>计算属性和监听的使用</legend>
    计算属性-姓名：<input type="text" placeholder="显示姓名" v-model="fullname1"><br>
    计算属性- 姓名：<input type="text" placeholder="显示姓名" v-model="fullname2"><br>
    监视属性变化-姓名：<input type="text" placeholder="显示姓名" v-model="fullname3"><br>
  </fieldset>

  <button @click="changeSomething">changeSomething</button>

  <h3>使用Hooks函数</h3>
  <h4>x:{{ x }}</h4>
  <h4>y:{{ y }}</h4>

  <use_request/>
  <use_toRef/>
  <fieldset>
    <legend>祖孙组件之间通信</legend>
    <button @click="color='red'">red</button>
    <button @click="color='yellow'">yellow</button>
    <button @click="color='blue'">blue</button>
  </fieldset>
  <!--利用suspend 解决异步加载问题-->
  <Suspense>
    <template #default>
      <AsyncComponent/>
    </template>
    <template v-slot:fallback>
      <h2>Loading...</h2>
    </template>
  </Suspense>
</template>

<script lang="ts">
import use_request from '../components/use_request.vue'
import use_toRef from '../components/use_toRef.vue'
import Child from '../components/Child.vue'
import Navigator from "../components/Navigator.vue"
// 引入异步组件
// const AsyncComponent = defineAsyncComponent(() => import("./components/AsyncComponent.vue"));
import AsyncComponent from '../components/AsyncComponent.vue'
import {ref, reactive, computed, watch, watchEffect, provide, defineAsyncComponent} from 'vue'
import useMouseClick from '../hooks/useMouseClick'

export default {
  name: 'Home',
  components: {
    Child, use_request, use_toRef, AsyncComponent, Navigator
  },
  setup() {
    let message = ref('hahha')
    let color = ref('red')
    provide('color', color)

    function update() {
      message.value += 'yyy'
    }

    // 自定义事件
    function xxx(str: string) {
      message.value += str
    }

    /* ------------------- */
    const user = reactive({
      firstname: '王',
      lastname: '立强'
    })

    // 只使用计算属性的get操作
    const fullname1 = computed(() => {
      return user.firstname + '_' + user.lastname
    })

    // 使用计算属性的get set操作
    const fullname2 = computed({
      get() {
        return user.firstname + '_' + user.lastname
      },
      set(val: string) {
        const names = val.split('_')
        user.firstname = names[0]
        user.lastname = names[1]
      }
    })
    /* 使用监视器 */
    let fullname3 = ref('')
    watch(user, ({firstname, lastname}) => {
      fullname3.value = firstname + '_' + lastname
    }, {immediate: true, deep: true})
    watchEffect(() => {
      fullname3.value = user.firstname + '_' + user.lastname
    })
    watchEffect(() => {
      const names = fullname3.value.split('_')
      user.firstname = names[0]
      user.lastname = names[1]
    })

    const {x, y} = useMouseClick()

    return {
      message,
      update,
      xxx,
      user,
      fullname1,
      fullname2,
      fullname3,
      x,
      y,
      color
    }
  },

  /* s生命周期一趟究竟 */
  beforeCreate(): void {
    console.log('beforeCreate')
  },
  created(): void {
    console.log('created')
  },

  beforeMount(): void {
    console.log('beforeMount')
  },

  mounted(): void {
    console.log('mounted')
  },

  beforeUpdate(): void {
    console.log('beforeUpdate')
  },

  updated(): void {
    console.log('updated')
  },

  beforeUnmount(): void {
    console.log('beforeUnmount')
  },
  unmounted(): void {
    console.log('unmounted')
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    changeSomething() {
      this.show = !this.show
    }
  }
}
</script>

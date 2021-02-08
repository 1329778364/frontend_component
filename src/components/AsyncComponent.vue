<template>
  <fieldset>
    <legend>异步子组件</legend>
    <div class="rec">
      <div>{{msg}}</div>
    </div>

  </fieldset>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AsyncComponent',

  async setup () {
    let result = await axios.get('/public/data/products.json')

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          msg: '我是两秒钟之后的数据。。。'
        })
      }, 2000)
    })
  }
}

</script>

<style scoped>
  .rec {
    width: 100%;
    height: 100px;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    background: dodgerblue;
  }
</style>

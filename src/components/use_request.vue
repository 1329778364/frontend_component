<template>
  <fieldset>
    <legend>使用Hooks 进行网络数据请求</legend>
    <h4 v-if="loading">正在加载中。。。。</h4>
    <h4 v-else-if="errMsg">错误信息：{{errMsg}}</h4>
    <ul v-else>
      <li>id:{{data.id}}</li>
      <li>data:{{data.address}}</li>
      <li>data:{{data.distance}}</li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>使用Hooks 进行网络数据请求 列表</legend>
    <div v-for="(item, index) in data">
      <li>id:{{item.id}}</li>
      <li>data:{{item.title}}</li>
      <li>data:{{item.price}}</li>
      <hr>
    </div>

  </fieldset>

</template>

<script lang="ts">
  import {ref, reactive, computed, watch, watchEffect} from "vue"
  import useRequest from "../hooks/useRequest";

  // 约束data 返回内容
  interface IAddressData{
    id: number;
    address: string;
    distance: string;
  }
  interface IProductsData{
    id: string;
    title: string;
    price: number;
  }

  export default {
    name: "use_request",

    setup() {
      // 通过泛型接口限制输出数据格式
      let {loading, data, errMsg} = useRequest<IProductsData[]>("/data/products.json");
      console.log(data);
      // let {loading, data, errMsg} = useRequest<IAddressData>("/data/address.json");
      // console.log(data)

      watch(data, () => {
        console.log(data.value.length);
      });
      return {
        loading,
        data,
        errMsg
      }
    }
  }
</script>

<style scoped>

</style>

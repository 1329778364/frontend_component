<template>
  <div class="box">
    <div class="bgimg"></div>
    <div class="content">
      <img :src="data.img">
      <div class="textContent">
        <div class="title">{{ data.title }}</div>
        <div class="detail">{{ data.detail }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ContentData} from "../types/contentdata"
import {ITodo} from "../types/todo";

export default {
  name: "MohuBeijin",
  props: {
    data: {
      type: Object as () => ContentData,
      require: true
    }
  },
  setup(props, context) {

    return {}
  }
}
</script>

<style scoped lang="less">
.box {
  position: relative;
  width: 350px;
  height: 150px;

  .bgimg {
    width: 100%;
    height: 100%;
    background: url("../assets/rectangle.jpg") no-repeat;
    background-size: 100% 100%;
    filter: blur(5px);
    border-radius: 10px;
  }

  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
      margin: 10px;
      border-radius: 5px;
    }

    .textContent {
      width: 65%;
      height: 100%;
      padding: 10px;
      font-family: "Yu Gothic UI Semilight", serif;

      .title {
        font-size: 20px;
        font-weight: bold;
        padding: 10px 0;
        text-align: left;
        //   溢出省略操作
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .detail {
        text-align: left;
      }

    }
  }
}

</style>

<template>
  <!--表单伪类-->
  <div>
    <input type="text">
    <input type="checkbox" disabled="disabled">
    <input type="checkbox">
  </div>
  <!--  纯CSS实现 单选 -->
  <fieldset class="singleSelect">
    <legend>纯CSS实现单选</legend>
    <label>
      <input type="radio" name="samename">
      <span></span>
    </label>
    <label>
      <input type="radio" name="samename">
      <span></span>
    </label>
    <label>
      <input type="radio" name="samename">
      <span></span>
    </label>
  </fieldset>

  <ul class="jiegouxingSelect">
    <li>1</li>
    <li>1</li>
    <p>1</p>
    <li>1</li>
    <li>1</li>
    <li>1</li>
  </ul>

  <div class="learn3D">
    <div class="card"></div>
  </div>

  <div style="height: 50px"></div>

</template>

<script>
export default {
  name: "LearnCSS"
}
</script>

<style scoped lang="less">
.learn3D {
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  perspective:500px;

  .card {
    width: 100px;
    height: 100px;
    background-color: green;
    transform-origin: 0 0 ;
    transform: rotateZ(0);
  }

}

input:enabled {
  background-color: pink;
}

input:disabled {
  background-color: yellow;
}

input:checked {
  width: 100px;
  height: 100px;
}

input:focus {
  background-color: green;
}

/*
 实现自定义单选
*/
.singleSelect {

  & > label {
    display: inline-block;
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    position: relative;

    input {
      visibility: hidden;
      //position: absolute;
      top: -10px;
    }

    /* 重点是这里 需要实现 选中的兄弟节点 span 进行状态改变 */

    input:checked + span {
      background-color: red;
    }

    & > span {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 10px;
    }
  }
}

/* 结构性选择器测试 */
.jiegouxingSelect {

  p:nth-child(3) {
    color: #42b983;
  }

  li:nth-of-type(4) {
    color: red;
  }

}
</style>

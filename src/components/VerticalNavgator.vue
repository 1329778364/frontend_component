<template>
  <!-- css实现垂直手风琴 -->
  <ul class="accordion">
    <li><input type="radio" name="item" id="item1">
      <label for="item1">一级标题1<i class="fas fa-caret-right"></i></label>
      <ol>
        <li>二级标题1</li>
        <li>二级标题2</li>
        <li>二级标题3</li>
        <li>二级标题4</li>
      </ol>
    </li>
    <li><input type="radio" name="item" id="item2">
      <label for="item2">一级标题2<i class="fas fa-caret-right"></i></label>
      <ol>
        <li>二级标题1</li>
        <li>二级标题2</li>
        <li>二级标题3</li>
        <li>二级标题4</li>
      </ol>
    </li>
    <li>
      <input type="radio" name="item" id="item3">
      <label for="item3">一级标题3<i class="fas fa-caret-right"></i></label>
      <ol>
        <li>二级标题1</li>
        <li>二级标题2</li>
        <li>二级标题3</li>
        <li>二级标题4</li>
      </ol>
    </li>
    <li><input type="radio" name="item" id="item4">
      <label for="item4">一级标题4<i class="fas fa-caret-right"></i></label>
      <ol>
        <li>二级标题1</li>
        <li>二级标题2</li>
        <li>二级标题3</li>
        <li>二级标题4</li>
      </ol>
    </li>
  </ul>
</template>

<script>
export default {
  name: "VerticalNavgator"
}
</script>

<style scoped lang="less">
li {
  list-style: none;
}

.accordion {
  margin: auto;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  text-align: left;

  li {
    width: 100%;

    input {
      display: none;

      &:checked + label i {
        transform: rotate(90deg);
      }

      &:checked ~ ol li {
        height: 50px;
      }
    }

    label {
      position: relative;
      color: white;
      display: block;
      width: 100%;
      padding: 20px 50px;
      background-color: #5fb878;

      i {
        position: absolute;
        top: calc(50% - 12px);
        left: 20px;
        font-size: 24px;
      }

      &::after {
        content: "";
        position: absolute;
        right: 20px;
        bottom: -14px;
        width: 30px;
        height: 15px;
        background-color: inherit;
        //transform: rotate(45deg); 通过旋转正方形 影藏一半得到三角形
        clip-path: polygon(0 0, 100% 0, 50% 100%);
      }

      &:hover {
        background-color: #88E8A1;
      }
    }

    &:not(:first-child) {
      label {
        border-top: 1px solid black;
      }
    }

    ol {
      width: 100%;
      background-color: #333;

      li {
        position: relative;
        width: 100%;
        height: 0;
        line-height: 50px;
        color: white;
        padding-left: 20px;
        transition: all 0.3s;

        &::before {
          content: "";
          position: absolute;
          top: 3px;
          left: 0;
          width: 5px;
          height: 44px;
          background-color: #5fb878;
          transform: scaleY(0);
          // 为变形 加动画
          transition: all 0.3s;
        }

        &:hover::before {
          transform: scaleY(1);
        }
      }
    }
  }
}
</style>

<template>
  <!--     -->
  <fieldset class="body">
    <legend>具有拟态风格的 自适应导航栏</legend>
    <div class="navbar">
      <input type="checkbox" name="" id="nav">
      <label for="nav"></label>
      <ul>
        <li><a href="javascript:">点赞</a></li>
        <li><a href="javascript:">点赞</a></li>
        <li><a href="javascript:">点赞</a></li>
        <li><a href="javascript:">点赞</a></li>
        <li><a href="javascript:">点赞</a></li>
      </ul>
    </div>
  </fieldset>


</template>

<script lang="ts">
export default {
  name: "NitaiNavbar"
}
</script>

<style scoped lang="less">
@labelwidth: 40px;
.body {
  width: 100%;
  height: 300px;
  background-color: #e6f1f9;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .navbar {
    position: relative;
    height: @labelwidth + 10;
    width: 100vw;
    background-color: #e6f1f9;
    box-shadow: 0 10px 50px #c6d9ed;

    input {
      display: none;

      &:checked + label {
        box-shadow: 0 0 0 white, 0 0 0 white,
        5px 3px 6px 1px #c6d9ed inset;
      }

      &:checked + label::before {
        top: calc(50% - 2px);
        transform: rotate(-45deg);
        transition: top 0.3s ease-out, transform 0.3s ease-out 0.3s;
      }

      &:checked + label::after {
        top: calc(50% - 2px);
        transform: rotate(45deg);
        transition: top 0.3s ease-out, transform 0.3s ease-out 0.3s;
      }

    }

    label {
      position: absolute;
      width: @labelwidth;
      height: @labelwidth;
      right: @labelwidth;
      top: calc(50% - @labelwidth / 2);
      border-radius: 5px;
      border: 1px solid rgba(85, 86, 94, 0.3);
      background-color: #e6f1f9;
      box-shadow: 5px 3px 6px 1px #c6d9ed, -5px 6px 1px #fff;
      // 鼠标移入变小手
      cursor: pointer;
      transition: all 0.5s ease-out;

      &::before, &::after {
        content: "";
        position: absolute;
        left: 5px;
        width: @labelwidth - 10px;
        height: 4px;
        background-color: black;
        border-radius: 4px;
        transition: all 0.5s ease-out;
      }

      &::before {
        top: calc(50% - 6px);
      }

      &::after {
        top: calc(50% + 6px);
      }
    }

    ul {
      position: relative;
      top: @labelwidth + 10;
      width: 100vm;
      transform-origin: 50% 0;
      opacity: 0;
      transform: scaleY(0);
      transition: all 0.5s ease-out;

      li {
        display: block;
        height: @labelwidth;

        a {
          display: block;
          height: 100%;
          width: 100%;
          line-height: 50px;
          text-decoration: none;
          color: black;
          box-shadow: 0 10px 20px #c6d9ed;
          transition: all 0.3s ease-out;

          &:hover {
            box-shadow: 0 0 0 white, 0 15px 20px #c6d9ed inset;
          }
        }
      }
    }

    input:checked ~ ul {
      opacity: 1;
      transform: scaleY(1);
    }
  }

  @media (min-width: 800px) {
    .navbar {
      label {
        display: none;
      }

      ul {
        // 让元素回到原来的定位属性
        position: static;
        width: 700px;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 auto;
        opacity: 1;
        transform: scaleY(1);

        li {
          height: @labelwidth - 5;
          width: 100px;

          a {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
            box-shadow: 5px 3px 6px 1px #c6d9ed, -5px -3px 6px 1px #fff;

            &:hover {
              box-shadow: 0 0 0 white, 0 0 0 white, 5px 3px 6px 1px #c6d9ed inset,
                -5px -3px 6px 1px #c6d9ed inset;
            }
          }
        }
      }
    }
  }
}

</style>

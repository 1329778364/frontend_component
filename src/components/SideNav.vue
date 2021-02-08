<template>
  <div class="container-nav">
    <input type="checkbox" id="sidenav">
    <label for="sidenav">
      <i class="fas fa-outdent"></i>
      <div class="func-original">
        <CapsulButton></CapsulButton>
      </div>
    </label>
    <ul>
      <li>
        <img src="../assets/rectangle.jpg">
        <span>王立强</span>
      </li>
      <li v-for="(item, index) in navDict" :id="index">
        <a href="Javascript:">
          <i class="fas" :class="item.icon"></i>
          <span>
            <router-link :to="item.to">{{ item.title }}</router-link>
          </span>
        </a>
      </li>
    </ul>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>

</template>

<script lang="ts">
import CapsulButton from "./CapsulButton.vue";

export default {
  name: "SideNav",
  props: {
    navDict: {
      type: Array,
      require: true
    }
  },
  components: {CapsulButton},
  setup() {


    return {}
  }
}
</script>

<style scoped lang="less">
@top-nav-height: 40px;
@side-nav-width: 70px;
@side-nav-width-activate: 150px;

.container-nav {
  position: relative;
  width: 100vm;
  height: 100vh;

  // 三根横线 上方导航栏
  label {
    position: absolute;
    top: 0;
    left: @side-nav-width;
    height: @top-nav-height;
    padding: 0 10px;
    color: #5d6baa;
    background-color: #bfe5f7;
    font-size: calc(@top-nav-height - 10px);
    cursor: pointer;
    text-align: left;
    line-height: @top-nav-height;
    border: 1px solid #c6c3c3;
    cursor: pointer;
    transition: all 0.3s;

    width: calc(100% - @side-nav-width);
    display: flex;
    align-items: center;
    justify-content: space-between;

    i {
      justify-self: flex-start;
    }
  }

  // 复选框
  input {
    display: none;

    &:checked {
      & + label {
        left: @side-nav-width-activate;
        width: calc(100% - @side-nav-width);

      }

      & ~ ul {
        width: @side-nav-width-activate;

        li {
          height: 40px;
          display: flex;
          align-items: center;
          margin-bottom: 0;

          &:first-child {
            height: 100px;
            justify-content: flex-start;

            img {
              width: 60px;
              height: 60px;
            }

            span {
              display: block;
            }
          }

          a {
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            i {
              padding-left: 20px;
              margin-bottom: 0;
              font-size: 16px;
            }

            span {
              padding-left: 10px;
              font-size: 16px;
            }
          }
        }
      }

      & ~ .body {
        left: @side-nav-width-activate;
      }
    }
  }

  // 左侧导航栏
  ul {
    width: @side-nav-width;
    height: 100%;
    background-color: #293e56;
    overflow: hidden;
    transition: all 0.3s;

    li {
      height: 60px;
      width: 100%;
      margin-bottom: 5px;

      &:first-child {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 10px 10px;

        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        span {
          color: white;
          white-space: nowrap;
          overflow: hidden;
          display: none;
          padding-left: 10px;
        }
      }

      a {
        width: 100%;
        color: #d5d1d2;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        i {
          font-size: 24px;
          margin-bottom: 10px;
        }

        span {
          font-size: 10px;
          white-space: nowrap;
        }

        &:hover {
          color: yellow;
        }
      }
    }
  }

  // 主显示页面
  .body {
    position: absolute;
    padding: 10px;
    top: @top-nav-height;
    left: @side-nav-width;
    width: calc(100% - @side-nav-width);
    height: calc(100% - @top-nav-height);
    background-color: gray;
    transition: all 0.3s;
  }

  // 功能区
  .func-original {
    position: relative;
    width: 500px;
    padding: 0 100px;
  }
}

</style>

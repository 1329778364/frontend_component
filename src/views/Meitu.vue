<template>
  <!--  动态响应导航栏-->
  <h3>动态响应导航栏</h3>
  <div class="top-bar">
    <div class="left-menu" @click="clickButton">
      <!--   图标   -->
      <ul class="menu-icon" @mouseenter="clickButton">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul class="nav" v-show="showNav">
        <li><a>手机</a></li>
        <li><a>手机</a></li>
        <li><a>手机</a></li>
        <li><a>手机</a></li>
        <li><a>手机</a></li>
        <li><a>手机</a></li>
        <li>
          <span class="fas fa-search"></span><a>手机</a>
        </li>
      </ul>

    </div>
    <div class="title">
      <span>美图手机</span>
    </div>
    <div class="user-info">
      <div class="fas fa-user"></div>
    </div>
  </div>
  <!--  模糊化背景图片 -->
  <h3>模糊化背景图片</h3>
  <div v-for="(item, index) in contendata" :id="index"
       style="display: flex;align-items: center; justify-content: space-between">
    <MohuBeijin :data="item"></MohuBeijin>
  </div>
  <!--  CSS学习  -->
  <h3> CSS学习 </h3>
  <LearnCSS></LearnCSS>
  <h3> css实现垂直手风琴 </h3>
  <VerticalNavgator></VerticalNavgator>
  <h3> 具有拟态风格的 自适应导航栏 </h3>
  <NitaiNavbar></NitaiNavbar>
  <EnterOutStyle></EnterOutStyle>
  <BolanNav></BolanNav>
  <div style="height: 50px"></div>

</template>

<script lang="ts">
import {computed, ref, onMounted, reactive} from "vue"

import MohuBeijin from "../components/MohuBeijin.vue"
import LearnCSS from "../components/LearnCSS.vue";
import VerticalNavgator from "../components/VerticalNavgator.vue"
import NitaiNavbar from "../components/NitaiNavbar.vue"
import CapsulButton from "../components/CapsulButton.vue"
import SideNav from "../components/SideNav.vue"
import EnterOutStyle from "../components/EnterOutStyle.vue"
import BolanNav from "../components/BolanNav.vue";
import App from "../App.vue";

export default {
  name: "Meitu",
  components: {
    App,
    MohuBeijin,
    LearnCSS,
    VerticalNavgator,
    NitaiNavbar,
    CapsulButton,
    SideNav,
    EnterOutStyle,
    BolanNav
  },
  props: {},
  setup() {
    let showNav = ref(false);
    let contendata = reactive([{
      img: "/src/assets/rectangle.jpg",
      title: "我是标题我是标题我是标题我是标题我是标题我是标题",
      detail: "我是内容是的哈斯丰盛的分公司递归深度公司的公害"
    }, {
      img: "/src/assets/rectangle.jpg",
      title: "我是标题",
      detail: "我是内容是的哈斯丰盛的分公司递归深度公司的公害"
    }, {
      img: "/src/assets/rectangle.jpg",
      title: "我是标题",
      detail: "我是内容是的哈斯丰盛的分公司递归深度公司的公害"
    }])

    function clickButton() {
      this.showNav = !this.showNav;
    }

    onMounted(() => {
      if (window.innerWidth > 768) {
        showNav.value = true;
      } else {
        showNav.value = false;
      }
    })
    window.onresize = () => {
      if (window.innerWidth > 768) {
        showNav.value = true;
      } else {
        showNav.value = false;

      }
    };

    return {
      showNav,
      clickButton,
      contendata
    }
  }
}
</script>

<style scoped lang="less">
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #000;
  color: white;

  .title {
    span {
      width: 150px;
    }
  }

  .left-menu {
    position: relative;

    .menu-icon {
      width: 20px;
      height: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &:hover {
        li {
          &:nth-child(2) {
            visibility: hidden;
          }

          &:nth-child(1) {
            transform: rotateZ(45deg);
            width: 25px;
            transition: 0.5s;
          }

          &:nth-child(3) {
            transform: rotateZ(-45deg);
            width: 25px;
            transition: 0.5s;
          }
        }
      }

      li {
        width: 20px;
        height: 2px;
        background-color: white;
        // 修改旋转的原点
        transform-origin: left center;
      }
    }

    .nav {
      position: absolute;
      top: 30px;
      left: -20px;
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      background-color: black;

      li {
        width: 100%;
        border-bottom: 2px solid gray;
        display: flex;
        align-items: flex-start;
        padding: 10px 10px;

        &:hover {
          border-bottom: 2px solid white;
        }

        span {
          padding: 0 10px 0 0;
        }
      }
    }
  }

  .user-info {
    font-size: 18px;
  }

  // 设置媒体查询 进行响应式布局
  @media only screen {
    @media (min-width: 768px) {
      .left-menu {
        order: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: auto;

        .menu-icon {
          display: none;
        }

        .nav {
          // 清除样式
          visibility: visible;
          position: static;
          display: flex;
          flex-direction: row;
          width: 80%;

          li {
            display: flex;
            justify-content: center;
            margin: 0 10px;
          }
        }

      }

      .title {
        order: 1;
      }

      .user-info {
        order: 3;
      }
    }

  }
}


</style>



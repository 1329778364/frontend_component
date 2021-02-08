<template>
  <side-nav :nav-dict="navDict"></side-nav>
</template>

<script>
import axios from "axios";
import SideNav from "./components/SideNav.vue";
export default {
  name: 'App',
  components: {
    SideNav
  },
  setup() {
    // let data = axios.get("/public/data/products.json")
    let navDict = [
      {icon: "fa-user", title: "home", to:"/home"},
      {icon: "fa-calendar-check", title: "ilearning", to:"/ilearning"},
      {icon: "fa-hammer", title: "meitu", to:"/meitu"},
      {icon: "fa-address-card", title: "snake", to:"/snake"},
      {icon: "fa-search", title: "todolist", to:"/todolist"},
    ];
    return{
      navDict
    }
  }

}
</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  width: 100vw;
  bottom: 0;
  height: 40px;
  background-color: #a7a2a2;
  align-items: center;
  margin: auto 0;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}


</style>

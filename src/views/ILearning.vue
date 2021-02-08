<template>
  <div class="bar">
    <div>菜单</div>
    <div>I learning</div>
    <div>搜索</div>
  </div>
  <div class="sliderbar">
    <img src="/src/assets/first.jpg">
  </div>
  <div class="menu">
    <div>My Course</div>
    <div>Star Teacher</div>
    <div>Subject</div>
    <div>Hobby</div>
  </div>
  <div class="sub-title">
    <div>Latest course</div>
    <div>More + </div>
  </div>
  <div class="course">

  </div>
</template>

<script>
export default {
  name: "ILearning"
}
</script>

<style scoped lang="less">
@total-width: 750;

.bar {
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  margin: 10px;
}

;
.sliderbar {
  //margin: 10px;
  width: 90%;
  border-radius: 20px;
  margin: 10px auto;

  img {
    width: 100%;
    border-radius: 10px;
  }
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  div {
    width: 40%;
    font-size: 25px;
    padding: 20px 10px;
    margin: 10px 0;
    border-radius: 8px;
    box-shadow: 5px 5px 10px #a19e9e;

    &:nth-child(1) {
      background-color: #ff7b4e;
    }

    &:nth-child(2) {
      background-color: #cb6bff;
    }

    &:nth-child(3) {
      background-color: #ff4f71;
    }

    &:nth-child(4) {
      background-color: #108fff;
    }
  }
}
.sub-title{
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  color: #7b7b82;
}
.course {
}
</style>

<template>
  <div class="body">
    <div>HTML/CSS</div>
    <div>HTMLasd/CSS</div>
    <div>HTMLHTML/CSS</div>
    <div>HTML/CSSCSS</div>
    <div>HTML/CSSsa</div>
    <div>HTMsadL/CSS</div>
    <div>HTMLasd/CSS</div>
  </div>
</template>

<script>
export default {
  name: "Navigator"
}
</script>

<style scoped lang="less">
.body {
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #c7cdcc;
  font-size: 14px;
  flex-wrap: wrap;
  div {
    flex: 1;
    padding: 5px;
    margin: 2px 2px;
    background-color: #a7a2a2;
    &:hover{
      background-color: #bff539;
    }
  }
}


</style>

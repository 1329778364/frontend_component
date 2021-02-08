<template>
    <div class="card" @mouseleave="mouseleaveHandler" @mouseenter="mouseenterHandler">
      <span></span>
    </div>
</template>

<script>

export default {
  name: "EnterOutStyle",
  setup() {
    let isIn = true
    let isOut = false;
    let card = document.querySelector(".card");
    let span;
    let mouseenterHandler = (e) => {
      if (isIn) {
        let el = document.querySelector(".card span");
        if (!el) {
          el = document.createElement("span");
        }
        el.style.left = e.offsetX + "px";
        el.style.top = e.offsetY + "px";
        el.classList.add("in")
        el.classList.remove("out")
        if (!document.querySelector(".card span")) {
          card.appendChild(el);
        }
        span = document.querySelector(".card span")
        isIn = false;
        isOut = true;
      }
    }

    function mouseleaveHandler(e) {
      if (isOut) {
        span = document.querySelector(".card span")
        span.style.left = e.offsetX + "px";
        span.style.top = e.offsetY + "px";
        span.classList.add("out")
        span.classList.remove("in")
        isIn = true;
        isOut = false;
      }

    }


    return {
      mouseenterHandler,
      mouseleaveHandler
    }
  }
}
</script>

<style scoped lang="less">
  .card {
    position: relative;
    width: 300px;
    height: 500px;
    background-color: #6ac2ee;
    display: flex;
    z-index: 1;
    overflow: hidden;
  }

  .in {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: #bff539;
    transform: translate(-50%, -50%);
    animation: in 1s ease-out forwards;
  }

  .out {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 1200px;
    height: 1200px;
    border-radius: 50%;
    background-color: #bff539;
    transform: translate(-50%, -50%);
    animation: out 1s ease-out forwards;
  }

  @keyframes in {
    0% {
      width: 0;
      height: 0;
    }
    100% {
      width: 1200px;
      height: 1200px;
    }
  }
  @keyframes out {
    0% {
      width: 1200px;
      height: 1200px;
    }
    100% {
      width: 0;
      height: 0;
    }
  }

</style>

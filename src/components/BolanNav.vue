<template>
  <div class="header">
    <svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)"></use>
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"></use>
        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"></use>
        <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,0.3)"></use>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "BolanNav"
}
</script>

<style scoped lang="less">
.header {
  position: relative;
  text-align: center;
  background: linear-gradient(60deg, rgba(89, 70, 192, 1) 0%, rgba(0, 156, 203, 1) 100%);
  width: 100%;
  height: 300px;
  margin: 30px;

  .waves {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    min-height: 50px;
    max-height: 150px;

    .parallax {
      use {
        animation: move-use 25s cubic-bezier(0.55, 0.45, 0.45, 0.5) infinite;

        &:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 7s;
        }

        &:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
        }

        &:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 13s;
        }
      }
    }
  }

  @keyframes move-use {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
}

@media (max-width: 768px) {
  .waves {
    height: 20px;
    min-height: 20px;

  }

}


</style>

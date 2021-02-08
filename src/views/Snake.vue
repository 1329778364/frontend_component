<template>
  <div class="body">
    <div class="stage" id="stage">
      <div class="snake" id="snake">
        <div></div>
        <div></div>
      </div>
      <div class="food" id="food">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="score-panel">
      <div>score:{{ init_state.score }}</div>
      <div>Level:{{ init_state.level }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {onMounted, ref, reactive} from 'vue'
import GameControl from './Modules/GameControl'

export default {
  name: 'Snake',
  setup (props, context) {
    // 由于这是需要使用到的数据 所以需要 要在mounted之前 的渲染界面的时候用到
    let init_state = reactive({
      score: 0,
      level: 1
    })
    onMounted(() => {
      let controller = new GameControl()
      init_state.score = controller.score_panel.score
      init_state.level = controller.score_panel.level
      controller.init()
    })

    return {
      init_state
    }
  }
}
</script>

<style scoped lang="less">
@import "Snake.less";
</style>

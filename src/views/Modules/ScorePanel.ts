import {ref} from "vue";

class ScorePanel {
  public score;
  public level;

  constructor() {
    this.score = ref(0);
    this.level = ref(1);
  }

  public addScore() {
    this.score.value += 1;
    if (Math.floor(this.score.value / 10) > (this.level.value - 1)) {
      this.addLevel();
    }
  }

  private addLevel() {
    this.level.value += 1;
  }
}

export default ScorePanel;

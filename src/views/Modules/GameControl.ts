import Food from "../Modules/Food";
import Stage from "../Modules/Stage";
import ScorePanel from "../Modules/ScorePanel";
import Snake from "../Modules/Snake";

class GameControl {
  /*
  * 游戏控制器，控制其他类的运作
  * */
  snake: Snake;
  food: Food;
  public score_panel: ScorePanel;
  stage: Stage;
  direction: String;
  private interval: NodeJS.Timeout;
  isLive: Boolean = true;
  step_len: number = 10;

  constructor() {
    this.stage = new Stage();
    this.snake = new Snake();
    this.food = new Food();
    this.score_panel = new ScorePanel();
    this.init();
  }

  init() {
    document.addEventListener("keydown", this.keydownHandler.bind(this))
  }

  keydownHandler(event: KeyboardEvent) {

    if (this.interval) {
      clearInterval(this.interval);
    }

    this.direction = event.key;
    this.interval = setInterval(function () {
      this.run()
      //  TODO 时间一直会减小 节流 防抖
    }.bind(this), (300 - (this.score_panel.level.value - 1) * 30))
  }

  run() {
    switch (this.direction) {
      case "ArrowUp":
        this.snake.y -= this.step_len;
        break;
      case "ArrowDown":
        this.snake.y += this.step_len;
        break;
      case "ArrowLeft":
        this.snake.x -= this.step_len;
        break;
      case "ArrowRight":
        this.snake.x += this.step_len;
        break;
    }
    if (!this.isLive) {
      if (this.interval) {
        clearInterval(this.interval);
      }
      return;
    }

    if (this.snake.x < 0 || this.snake.y < 0 ||
      this.snake.x > this.stage.width - 10 ||
      this.snake.y > this.stage.heigh - 10) {
      console.log("撞墙");
      this.isLive = false;
    } else {
      this.snake.setHeadPos(this.snake.x, this.snake.y);
      this.checkEat();
    }
  }

  checkEat() {
    /*
    * 检查是否吃到食物
    * */
    // 表示吃到食物
    if (this.snake.x == this.food.position[0] && this.snake.y == this.food.position[1]) {
      console.log("吃到食物");
      this.snake.addBody();
      this.food.setPosition(this.stage.width, this.stage.heigh);
      this.score_panel.addScore();
    }
  }
}

export default GameControl;

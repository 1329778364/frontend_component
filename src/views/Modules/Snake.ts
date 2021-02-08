class Snake {
  head: HTMLElement;
  bodies: HTMLCollection;
  private element: HTMLElement;
  x: number;
  y: number;

  constructor() {
    this.element = document.getElementById("snake");
    this.head = document.querySelector("#snake>div");
    // 能够动态变长的 集合 HTMl 元素集合
    this.bodies = this.element.getElementsByTagName("div");
    [this.x, this.y] = this.getHeadPos();
  }

  getHeadPos() {
    return [this.head.offsetLeft, this.head.offsetTop]
  }

  setHeadPos(x: number, y: number) {
    this.head.style.left = `${x}px`;
    this.head.style.top = `${y}px`
    this.moveBody();
  }

  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }

  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      (this.bodies[i] as HTMLElement).style.left = `${x}px`;
      (this.bodies[i] as HTMLElement).style.top = `${y}px`;
      (this.bodies[i] as HTMLElement).style.width = "10px";
      (this.bodies[i] as HTMLElement).style.height = "10px";
      (this.bodies[i] as HTMLElement).style.border = "1px solid gold";
      (this.bodies[i] as HTMLElement).style.backgroundColor = "black";
      (this.bodies[i] as HTMLElement).style.position = "absolute";
    }
  }

}

export default Snake

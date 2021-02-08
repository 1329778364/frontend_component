class Food {

  private element: HTMLElement;
  private _position: Array<any>;

  constructor() {
    this.element = document.getElementById("food")!;
    this._position = [this.element.offsetLeft, this.element.offsetTop]
  }

  get position(): Array<any> {
    return this._position;
  }

  setPosition(width: number, heigh: number) {
    this.element.style.left = `${(Math.floor(Math.random()*(width/10))) * 10}px`;
    this.element.style.top = `${(Math.floor(Math.random()*(heigh/10))) * 10}px`;
    this._position = [this.element.offsetLeft, this.element.offsetTop];
  }

}

export default Food;

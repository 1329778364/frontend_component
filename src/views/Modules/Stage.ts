class Stage {
  element: HTMLElement;
  public width: number;
  public heigh: number;

  constructor() {
    this.element = document.getElementById("stage");
    this.width = this.element.offsetWidth;
    this.heigh = this.element.offsetHeight;
  }
}

export default Stage;

import Button from "./Button.js";

export default class Button_Retry extends Button {
  constructor(x, y) {
    super(x, y, 200, 0, window.ENUMS.SHAPE.ROUND);
    this.color = color(125, 125, 125);
  }
  draw() {}
  clicked() {
    console.log(this.parent);
  }
  released() {
    console.log("released");
  }
  pressed() {
    console.log("pressed");
  }
  animate() {
    this.setRotInDegree(-90 * this.animationProgress);
  }
  hoverEnd() {}
}

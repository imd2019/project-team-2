import Button from "./Button.js";

export default class Button_Retry extends Button {
  constructor(x, y) {
    super(x, y, 95, 0, window.ENUMS.SHAPE.ROUND, "restartScene");
    this.color = color(125, 125, 125);
  }

  init() {
    this.addImage("Retry", window.ENUMS.IMAGE.BUTTON_RETRY);
    this.switchImage("Retry");
  }

  draw() {}

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

import Button from "./Button.js";

export default class Button_Retry extends Button {
  constructor(x, y) {
    super(x, y, 95, 0, window.ENUMS.SHAPE.ROUND, "restartScene");
    this.color = color(125, 125, 125);
  }

  init() {
    this.addImage("Retry", window.ENUMS.IMAGE.BUTTON_RETRY);
    this.switchImage("Retry");
    this.addImage("RetryGrau", window.ENUMS.IMAGE.BUTTON_RETRY_GRAU);
  }

  draw() {
    if (this.enabled) {
      this.switchImage("Retry");
    } else {
      this.switchImage("RetryGrau");
    }
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

import Button from "./Button.js";

export default class Button_Retry extends Button {
  constructor(x, y, event) {
    super(x, y, 95, 0, window.ENUMS.SHAPE.ROUND, event);
    this.color = color(125, 125, 125);
    this.addImage("Retry", window.ENUMS.IMAGE.BUTTON_RETRY);
    this.switchImage("Retry");
    this.addImage("RetryGrau", window.ENUMS.IMAGE.BUTTON_RETRY_GRAU);
  }

  init() {}

  onDisable() {
    this.switchImage("RetryGrau");
    this.rot = 0;
  }
  onEnable() {
    this.switchImage("Retry");
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

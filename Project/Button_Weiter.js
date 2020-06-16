import Button from "./Button.js";

export default class Button_Weiter extends Button {
  constructor(x, y, event) {
    super(x, y, 110, 120, window.ENUMS.SHAPE.RECT, event);
    this.color = color(125, 125, 125);
  }

  init() {
    this.addImage("Weiter", window.ENUMS.IMAGE.BUTTON_WEITER_1);
    this.switchImage("Weiter");
  }

  draw() {}

  released() {}
  pressed() {}
  animate() {
    this.setImageSize(
      this.width + 25 * this.animationProgress,
      this.height - 15 * this.animationProgress
    );
  }
  hoverEnd() {}
}

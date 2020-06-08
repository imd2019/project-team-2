import Button from "./Button.js";

export default class Button_Weiter extends Button {
  constructor(x, y) {
    super(x, y, 221, 210, window.ENUMS.SHAPE.RECT);
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
    this.setImageSize(
      221 + 113 * this.animationProgress,
      180 - 30 * this.animationProgress
    );
    if (this.animationProgress === 1) {
      this.switchImage("Weiter_2");
    }
  }
  hoverEnd() {}
}

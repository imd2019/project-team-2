import Button from "./Button.js";

export default class Button_Weiter extends Button {
  constructor(x, y) {
    super(x, y, 221, 210, window.ENUMS.SHAPE.RECT, "Weiter");
    this.color = color(125, 125, 125);
  }

  init() {
    this.addImage("Weiter", window.ENUMS.IMAGE.BUTTON_WEITER_1);
    this.addImage("Weiter_2", window.ENUMS.IMAGE.BUTTON_WEITER_2);
    this.switchImage("Weiter");
  }

  draw() {
    textFont(window.ENUMS.FONT.MARKER_FELT);

    fill(this.color);
    textAlign(CENTER);
    textSize(30);
    rect(255, 255, 255, 255);
    text("Start", 0, this.height / 2 - 25, this.width);
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("nextScene"));
  }
  released() {}
  pressed() {}
  animate() {
    this.color = color(170, 101 + 100 * this.animationProgress, 91);
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

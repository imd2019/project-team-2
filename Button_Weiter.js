import Button from "./Button.js";

export default class Button_Weiter extends Button {
  constructor(x, y, event) {
    super(x, y, 221, 210, window.ENUMS.SHAPE.RECT, event);
    this.color = color(125, 125, 125);
  }

  init() {
    this.addImage("Weiter", window.ENUMS.IMAGE.BUTTON_WEITER_1);
    this.addImage("Weiter_2", window.ENUMS.IMAGE.BUTTON_WEITER_2);
    this.switchImage("Weiter");
  }

  draw() {
    textFont(window.ENUMS.FONT.MARKER_FELT);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("Ich bin ein Weiterbutton", 0, this.height / 2 - 25, this.width);
  }

  released() {}
  pressed() {}
  animate() {
    this.setImageSize(
      221 + 113 * this.animationProgress,
      210 - 30 * this.animationProgress
    );
  }
  hoverEnd() {}
}

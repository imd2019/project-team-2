import Button from "./Button.js";

export default class Button_Start extends Button {
  constructor(x, y) {
    super(x, y, 115, 65, window.ENUMS.SHAPE.RECT, "Weiter");
    this.color = color(125, 125, 125);
  }

  init() {
  }

  draw() {
    textFont(window.ENUMS.FONT.MARKER_FELT);
    strokeWeight(5);
    stroke("#6bb592");
    fill(this.color);
    textAlign(CENTER);
    textSize(30);
    rect(0, 0, this.width, this.height,10);
    fill(255);
    noStroke();
    text("START", 0, this.height / 2+10, this.width);
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("nextScene"));
  }
  released() {}
  pressed() {}
  animate() {
    this.color = color(125+45*this.animationProgress, 125 + 76 * this.animationProgress, 125-34*this.animationProgress);
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

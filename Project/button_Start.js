import Button from "./Button.js";

export default class Button_Start extends Button {
  constructor(x, y) {
    super(x, y, 70, 50, window.ENUMS.SHAPE.RECT, "Weiter");
    this.color = color(170, 201, 91);
    this.textSize = 20;
    this.setScaleOffset(35, 25);
  }

  init() {}

  draw() {
    textFont(window.ENUMS.FONT.MARKER_FELT);
    strokeWeight(5);
    stroke("#6bb592");
    fill(this.color);
    textAlign(CENTER);
    textSize(this.textSize);
    rect(0, 0, this.width, this.height, 10);
    fill(255);
    noStroke();
    text(" START", 0, this.height / 2 + 7.5, this.width);
  }

  clicked() {
    window.ENUMS.SOUND.SONG.play();
    window.dispatchEvent(new CustomEvent("nextScene"));
  }
  released() {}
  pressed() {}
  animate() {
    this.scale = 1 + 0.2 * this.animationProgress;
  }
  hoverEnd() {}
}

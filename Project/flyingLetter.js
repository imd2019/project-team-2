import MoveableObject from "./moveableObject.js";

export default class FlyingLetter extends MoveableObject {
  constructor(x, y, letter) {
    super(x, y, 5, 5, window.ENUMS.SHAPE.ROUND);
    this.letter = letter;
    this.setMaxMinSpeed(0, -2);
    this.setAcceleration(0, -0.04);
    this.lifeTime = 50;
    this.transparency = 255;
  }
  update() {
    if (this.lifeTime > 0) {
      this.lifeTime--;
    }
    if (this.lifeTime < 50) {
      this.transparency = this.transparency - 255 / 50;
    }
    this.move();
  }
  draw() {
    fill(0, 0, 0, this.transparency);
    textSize(15);
    strokeWeight(5);
    textFont(window.ENUMS.FONT.MARKER_FELT);
    textAlign(CENTER);
    text(this.letter, 0, 0);
  }
}

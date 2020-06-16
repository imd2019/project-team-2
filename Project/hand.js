import MoveableObject from "./moveableObject.js";

export default class Hand extends MoveableObject {
  constructor(x, y) {
    super(x, y, 895, 602, window.ENUMS.SHAPE.RECT);
  }
  init() {
    this.addImage("HandWeiss", window.ENUMS.IMAGE.HAND_WHITE);
    this.switchImage("HandWeiss");
    this.velocity.y = -25;
    this.setAcceleration(0, 0.5);
    this.setMaxMinSpeed(0, -200);
  }
  update() {
    if (this.y <= 200) {
      this.stop();
    }
    this.move();
  }
}

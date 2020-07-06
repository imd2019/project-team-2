import MoveableObject from "./moveableObject.js";
import Util from "./util.js";
export default class Message extends MoveableObject {
  constructor(x, y, height, msg) {
    super(x, y, 200, height, window.ENUMS.SHAPE.RECT);
    this.msg = msg;
    this.setRotInDegree(-20);
    this.animationTime = 0;
    this.animationSpeed = 0.06;
    this.animationProgress = 0;
  }
  update() {
    this.animationTime += this.animationSpeed;
    if (this.animationTime > 1) {
      this.animationTime = 1;
    }
    this.animationProgress = Util.easeOutSine(this.animationTime);
    let vec = Util.vecRotate([0, 800], this.rot);
    this.setOffset(
      vec[0] * (1 - this.animationProgress),
      vec[1] * (1 - this.animationProgress)
    );
  }
  draw() {
    noStroke();
    rect(0, 0, this.width, this.height, 10);
    fill(0);
    textSize(16);
    textFont(window.ENUMS.FONT.FRUTIGER_ROMAN);
    text(this.msg, 10, 33, this.width - 10);
  }
}

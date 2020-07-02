import MoveableObject from "./moveableObject.js";
import Util from "./util.js";

export default class Sign extends MoveableObject {
  constructor(x, y, text) {
    super(x, 0 - 78, 159, 78, window.ENUMS.SHAPE.RECT);
    this.setOffset(0, -5);
    this.text = text;
    this.animationTime = 0;
    this.animationSpeed = 0.04;
  }
  init() {
    this.addImage("sign", window.ENUMS.IMAGE.SIGN);
    this.switchImage("sign");
  }
  update() {
    if (this.animationTime < 1) this.animationTime += this.animationSpeed;
    if (this.animationTime > 1) this.animationTime = 1;
    let progress = 1 - Util.easeOutBounce(this.animationTime);
    this.y = 0 - 78 * progress;
  }
  draw() {
    fill(0);
    textSize(20);
    textFont(window.ENUMS.FONT.MARKER_FELT);
    textAlign(CENTER);
    text(this.text + "", 0, 60, this.width);
  }
  changeText(string) {
    this.text = string;
  }
}

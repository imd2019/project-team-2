import MoveableObject from "./moveableObject.js";
import Util from "./util.js";

export default class Wecker extends MoveableObject {
  constructor(x, y) {
    super(x, y, 246 / 3.5, 480 / 3.5, window.ENUMS.SHAPE.RECT);
    this.setOffset(0, -5);
    this.zeit = 30;
    this.animationTime = 0;
    this.animationSpeed = 0.04;
  }
  init() {
    this.addImage("wecker", window.ENUMS.IMAGE.WECKER);
    this.switchImage("wecker");
  }
  update() {
    if (this.animationTime == 1) {
      this.countdown();
    }
    if (this.animationTime < 1) this.animationTime += this.animationSpeed;
    if (this.animationTime > 1) this.animationTime = 1;
    let progress = 1 - Util.easeOutBounce(this.animationTime);
    this.y = 0 - 78 * progress;
  }
  countdown() {
    if (this.zeit > 0) {
      this.zeit--;
      this.wait(1);
    }
  }
  draw() {
    fill(0);
    textSize(20);
    textFont(window.ENUMS.FONT.MARKER_FELT);
    textAlign(CENTER);
    text(this.zeit, 0, 110, this.width);
    //console.log(this.zeit);
  }
  //   changeText(string) {
  //     this.text = string;
  //   }
}

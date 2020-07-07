import MoveableObject from "./moveableObject.js";
import Util from "./util.js";

export default class Wecker extends MoveableObject {
  constructor(x, y) {
    super(x, y, 246 / 3.5, 480 / 3.5, window.ENUMS.SHAPE.RECT);
    this.setOffset(0, -5);
    this.zeit = 5;
    this.animationTime = 0;
    this.animationSpeed = 0.04;
    this.wiggleTime = 0;
    this.wiggleSpeed = -0.2;
    this.wiggleProgress = 0;
    this.setRotationOffset(35, 0);
    this.waiting = true;
  }
  init() {
    this.addImage("wecker", window.ENUMS.IMAGE.WECKER);
    this.switchImage("wecker");
  }
  update() {
    if (this.animationTime == 1) {
      if (this.waiting) {
        this.waiting = false;
        this.wait(4);
      } else {
        this.countdown();
      }
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
      if (this.zeit == 0) {
        this.wiggleTime = 0;
        this.setRotInDegree(0);
        window.dispatchEvent(new CustomEvent("timeIsUp"));
      }
    }
  }
  draw() {
    //Wecker Klingeln
    if (this.zeit <= 10 && this.zeit > 0) {
      this.wiggleTime += this.wiggleSpeed;
      this.setRotInDegree(0 + 10 * this.wiggleProgress);
      if (this.wiggleTime <= -1 || this.wiggleTime >= 1)
        this.wiggleSpeed = this.wiggleSpeed * -1;
      if (this.wiggleSpeed > 0) {
        if (this.wiggleTime < 0) {
          this.wiggleProgress = Util.easeOutSine(abs(this.wiggleTime)) * -1;
        } else {
          this.wiggleProgress = Util.easeOutSine(this.wiggleTime);
        }
      } else {
        if (this.wiggleTime > 0) {
          this.wiggleProgress = Util.easeOutSine(this.wiggleTime);
        } else {
          this.wiggleProgress = Util.easeOutSine(abs(this.wiggleTime)) * -1;
        }
      }
    }

    fill(0);
    textSize(20);
    textFont(window.ENUMS.FONT.MARKER_FELT);
    textAlign(CENTER);
    text(this.zeit, 0, 110, this.width * 1.3);
  }
}

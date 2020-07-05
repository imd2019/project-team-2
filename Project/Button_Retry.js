import Button from "./Button.js";
import Util from "./util.js";

export default class Button_Retry extends Button {
  constructor(x, y, event) {
    super(x, y, 95, 0, window.ENUMS.SHAPE.ROUND, event);
    this.addImage("Retry", window.ENUMS.IMAGE.BUTTON_RETRY);
    this.switchImage("Retry");
    this.addImage("RetryGrau", window.ENUMS.IMAGE.BUTTON_RETRY_GRAU);
    this.scaleAnimationTime = 0;
    this.scaleAnimationProgress = 0;
    this.scaleAnimationSpeed = 0.12;
    this.scaleAnimationStart = false;
    this.setScaleOffset(47.5, 47.5);
  }

  init() {}

  onDisable() {
    this.switchImage("RetryGrau");
    this.rot = 0;
    this.scaleAnimationTime = 0;
    this.scaleAnimationStart = false;
    this.scaleAnimationProgress = 0;
    this.scaleAnimationSpeed = abs(this.scaleAnimationSpeed);
  }
  onEnable() {
    this.switchImage("Retry");
    this.scaleAnimationStart = true;
  }

  updateAnimationValues() {
    super.updateAnimationValues();
    if (this.scaleAnimationStart) {
      this.scaleAnimationTime += this.scaleAnimationSpeed;
      if (this.scaleAnimationTime < 0) this.scaleAnimationTime = 0;
      if (this.scaleAnimationTime > 1) this.scaleAnimationTime = 1;
      this.scaleAnimationProgress = Util.easeInOutSine(this.scaleAnimationTime);
      if (this.scaleAnimationSpeed > 0) {
        if (this.scaleAnimationTime >= 1) {
          this.scaleAnimationSpeed = -this.scaleAnimationSpeed;
        }
      } else {
        if (this.scaleAnimationTime <= 0) {
          this.scaleAnimationSpeed = abs(this.scaleAnimationSpeed);
          this.scaleAnimationStart = false;
        }
      }
    }
  }

  animate() {
    this.scale = 1 + 0.2 * this.scaleAnimationProgress;
    this.setRotInDegree(-90 * this.animationProgress);
  }
}

import Button from "./Button.js";
import Util from "./util.js";

export default class Button_Weiter extends Button {
  constructor(x, y, event) {
    super(x, y, 110, 120, window.ENUMS.SHAPE.RECT, event);
    this.switchSceneId = null;
    this.addImage("Weiter", window.ENUMS.IMAGE.BUTTON_WEITER_1);
    this.switchImage("Weiter");
    this.addImage("WeiterGrau", window.ENUMS.IMAGE.BUTTON_WEITER_GRAU);
    this.scaleAnimationTime = 0;
    this.scaleAnimationProgress = 0;
    this.scaleAnimationSpeed = 0.12;
    this.scaleAnimationStart = false;
    this.setScaleOffset(55, 60);
  }

  init() {}

  draw() {}
  onEnable() {
    this.switchImage("Weiter");
    this.scaleAnimationStart = true;
  }
  onDisable() {
    this.switchImage("WeiterGrau");
    this.resize(this.width, this.height);
    this.scaleAnimationTime = 0;
    this.scaleAnimationStart = false;
    this.scaleAnimationProgress = 0;
    this.scaleAnimationSpeed = abs(this.scaleAnimationSpeed);
  }

  released() {}

  pressed() {}

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
    this.offSetY = 7.5 * this.animationProgress;
    this.setImageSize(
      this.width + 25 * this.animationProgress,
      this.height - 15 * this.animationProgress
    );
  }
  hoverEnd() {}
  clicked() {
    window.dispatchEvent(
      new CustomEvent(this.event, { detail: this.switchSceneId })
    );
  }
}

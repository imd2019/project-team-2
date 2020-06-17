import InteractiveObject from "./interactiveObject.js";
import Util from "./util.js";

export default class Button extends InteractiveObject {
  constructor(x, y, width, height, shape, event) {
    super(x, y, width, height, shape);
    this.animationTime = 0;
    this.animationProgress = 0;
    this.animationSpeed = 0.06;
    this.event = event;
  }
  draw() {}
  changeEvent(event) {
    this.event = event;
  }
  update() {
    this.updateAnimationValues();
    this.animate();
  }

  clicked() {
    window.dispatchEvent(new CustomEvent(this.event));
  }

  released() {}

  pressed() {}

  hover() {}

  updateAnimationValues() {
    if (this.hovered === false) {
      this.animationTime > 0
        ? (this.animationTime -= this.animationSpeed)
        : (this.animationTime = 0);
    } else {
      this.animationTime < 1
        ? (this.animationTime += this.animationSpeed)
        : (this.animationTime = 1);
    }
    this.hovered
      ? (this.animationProgress = Util.easeOutQuint(this.animationTime))
      : (this.animationProgress =
          1 - Util.easeOutQuint(1 - this.animationTime));
  }
  animate() {}
  hoverEnd() {}
}

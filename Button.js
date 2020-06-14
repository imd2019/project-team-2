import InteractiveObject from "./interactiveObject.js";
import Util from "./util.js";

export default class Test extends InteractiveObject {
  constructor(x, y, width, height, shape, event) {
    super(x, y, width, height, shape);
    this.color = color(125, 125, 125);
    this.hoverTime = 0;
    this.animationProgress = 0;
    this.animationSpeed = 0.06;
    this.event = event;
  }
  draw() {
    // fill(this.color);
    // rect(0, 0, 100, 400);
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

  hover() {
    this.hoverTime < 1
      ? (this.hoverTime += this.animationSpeed)
      : (this.hoverTime = 1);
  }

  updateAnimationValues() {
    if (this.hovered === false) {
      this.hoverTime > 0
        ? (this.hoverTime -= this.animationSpeed)
        : (this.hoverTime = 0);
    }
    this.hovered
      ? (this.animationProgress = Util.easeOutQuint(this.hoverTime))
      : (this.animationProgress = 1 - Util.easeOutQuint(1 - this.hoverTime));
  }
  animate() {}
  hoverEnd() {}
}

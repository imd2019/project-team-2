import InteractiveObject from "./interactiveObject.js";
import Util from "./util.js";
import Button from "./Button.js";
import MoveableObject from "./moveableObject.js";

export default class Test extends MoveableObject {
  constructor() {
    super(200, 300, 221, 210, window.ENUMS.SHAPE.ROUND);
    this.setMaxMinSpeed(5, -5);
    this.setAcceleration(0.4, 0);
    this.setRotAcceleration(0.03);
    this.setRotMaxMinSpeed(0.5, -0.5);
  }
  draw() {}
  update() {
    if (this.x > 400) {
      this.setAcceleration(-0.4, 0);
    } else if (this.x < 100) {
      this.setAcceleration(0.4, 0);
    }
    if (this.getVelocity().rot === 0.5) {
      this.setRotAcceleration(-0.03);
    } else if (this.getVelocity().rot === -0.5) {
      this.setRotAcceleration(0.03);
    }
    this.move();
  }
  clicked() {
    console.log(this.parent);
  }
  released() {
    console.log("released");
  }
  pressed() {
    console.log("pressed");
  }
  animate() {
    this.setImageSize(
      221 + 113 * this.animationProgress,
      180 - 30 * this.animationProgress
    );
    if (this.animationProgress === 1) {
      this.switchImage("Weiter_2");
    }
  }
  hoverEnd() {}
}

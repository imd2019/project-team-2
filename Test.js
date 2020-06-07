import InteractiveObject from "./interactiveObject.js";
import Util from "./util.js";
import Button from "./Button.js";

export default class Test extends Button {
  constructor() {
    super(200, 300, 221, 210, window.ENUMS.SHAPE.RECT);
    this.color = color(125, 125, 125);
  }
  draw() {}
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
  }
  hoverEnd() {}
}

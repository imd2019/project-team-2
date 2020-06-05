import InteractiveObject from "./interactiveObject.js";

export default class Test extends InteractiveObject {
  constructor() {
    super(200, 300, 100, 400, window.ENUMS.SHAPE.RECT);
  }
  draw() {
    fill(255);
    rect(0, 0, 100, 400);
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
  hover() {
    console.log("hover");
  }
  hoverEnd() {
    console.log("HoverEnd");
  }
}

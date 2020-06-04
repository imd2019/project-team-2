import InteractiveObject from "./interactiveObject.js";

export default class Test extends InteractiveObject {
  constructor() {
    super(100, 100, 100, 100, window.ENUMS.SHAPE.RECT);
  }
  draw() {
    fill(255);
    rect(0, 0, 10, 10);
  }
  clicked() {
    console.log("clicked");
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

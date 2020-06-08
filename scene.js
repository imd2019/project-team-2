import InteractiveObject from "./interactiveObject.js";

export default class Scene extends InteractiveObject {
  constructor(name) {
    super(0, 0, windowWidth, windowHeight, window.ENUMS.SHAPE.RECT);
    this.name = name;
  }

  init() {
    console.log("init");
  }

  end() {}

  onEnd() {}

  restart() {}
}

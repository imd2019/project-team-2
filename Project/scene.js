import InteractiveObject from "./interactiveObject.js";

export default class Scene extends InteractiveObject {
  constructor(name) {
    super(0, 0, windowWidth, windowHeight, window.ENUMS.SHAPE.RECT);
    this.name = name;
    window.addEventListener("restartScene", (e) => {
      this.restartScene();
    });
  }

  init() {}

  restartScene() {
    if (this.enabled) this.restart();
  }

  restart() {
    console.log("RESTART");
  }
}

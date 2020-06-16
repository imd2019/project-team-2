import InteractiveObject from "./interactiveObject.js";
import Scene from "./scene.js";

export default class Game extends InteractiveObject {
  constructor(name) {
    super(
      0,
      0,
      window.ENUMS.SIZE.X,
      window.ENUMS.SIZE.Y,
      window.ENUMS.SHAPE.RECT
    );
    this.name = name;
    this.currentScene;
    this.scenes = [];
    this.started = false;
  }

  init() {
    window.addEventListener("nextScene", (e) => {
      this.nextScene();
    });
  }

  update() {}

  onInit() {
    this.init();
    for (let element of this.scenes) {
      element.onInit();
    }
  }

  clicked() {
    // this.wait(4);
  }

  addScene(scene) {
    if (scene instanceof Scene) {
      scene.disable();
      this.scenes.push(scene);
      return true;
    }
    console.error("Das Übergebene Objekt ist keine Szene");
    return false;
  }

  start() {
    if (this.scenes.length > 0) {
      this.currentScene = 0;
      this.nextScene(this.currentScene);
      this.started = true;
      return true;
    }
    console.error("Dem Spiel muss mindestens eine Szene zugewiesen werden");
    return false;
  }

  getCurrentScene() {
    return this.scenes[this.currentScene];
  }

  nextScene(specific = null) {
    if (this.started === true) {
      if (this.children.length > 0) this.removeChild(this.getCurrentScene());
      for (let element of this.scenes) {
        element.disable();
      }
      specific === null ? this.currentScene++ : (this.currentScene = specific);
      this.addChild(this.getCurrentScene());
      this.getCurrentScene().enable();
      this.onNextScene();
    }
  }

  onNextScene() {}

  end() {
    this.start = false;
    this.onEnd();
  }

  onEnd() {}
}

import InteractiveObject from "./interactiveObject.js";
import Scene from "./scene.js";

export default class Game extends InteractiveObject {
  constructor(name) {
    super(0, 0, windowWidth, windowHeight, window.ENUMS.SHAPE.RECT);
    this.name = name;
    this.currentScene;
    this.scenes = [];
    this.started = false;
    window.addEventListener("nextScene", (e) => {
      this.nextScene();
    });
    window.addEventListener("restartScene", (e) => {
      this.restartScene();
    });
  }

  update() {}

  onInit() {
    for (let element of this.scenes) {
      element.onInit();
    }
  }

  clicked() {
    this.wait(4);
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
      for (let element of this.scenes) {
        element.disable();
      }
      specific === null ? this.currentScene++ : (this.currentScene = specific);
      this.addChild(this.getCurrentScene());
      this.getCurrentScene().enable();
      this.onNextScene();
      console.log(this.children);
    }
  }

  onNextScene() {}

  restartScene() {
    this.getCurrentScene().restart();
  }

  end() {
    this.start = false;
    this.onEnd();
  }

  onEnd() {}
}

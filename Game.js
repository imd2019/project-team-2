import InteractiveObject from "./interactiveObject.js";
import Scene from "./scene.js";

export default class Game extends InteractiveObject {
  constructor(name) {
    super(0, 0, windowWidth, windowHeight, window.ENUMS.SHAPE.RECT);
    this.name = name;
    this.currentScene;
    this.unlocked = true;
    this.scenes = [];
    this.started = false;
  }
  draw() {
    if (this.started) {
      this.getCurrentScene().display();
    }
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
    if (this.scenes.length > 0 && this.unlocked === true) {
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
    for (let element of this.scenes) {
      element.disable();
    }
    specific === null ? this.currentScene++ : (this.currentScene = specific);
    this.getCurrentScene().enable();
    this.onNextScene();
  }

  onNextScene() {}

  end() {
    this.start = false;
    this.onEnd();
  }

  onEnd() {}

  lock() {
    this.unlocked = false;
  }
  unlock() {
    this.unlocked = true;
  }
  isUnlocked() {
    return this.unlocked;
  }
}

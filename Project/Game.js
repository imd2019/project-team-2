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
    this.gameScores = {
      haendewaschen: [0],
      people_bouncy: [0, 0, 0],
    };
  }

  init() {
    window.addEventListener("nextScene", (e) => {
      this.nextScene(e.detail);
    });
    window.addEventListener("switchToMap", (e) => {
      this.switchToMap(e.detail);
    });
    window.addEventListener("setGameScore", (e) => {
      this.setGameScore(e.detail.game, e.detail.score);
    });
    window.addEventListener("getGameScores", (e) => {
      this.getGameScores(e.detail);
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

  switchToMap(mapState) {
    this.nextScene(window.ENUMS.SCENE_NAMES.MAP);
    this.getCurrentScene().switchMapState(mapState);
  }

  nextScene(specific = null) {
    if (this.started === true) {
      if (this.children.length > 0) this.removeChild(this.getCurrentScene());
      for (let element of this.scenes) {
        element.disable();
      }
      specific === null
        ? this.currentScene++
        : (this.currentScene = this.getSceneByName(specific));
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

  getSceneByName(name) {
    let result = -1;
    for (let i in this.scenes) {
      if (this.scenes[i].name === name) {
        result = i;
      }
    }
    return result;
  }

  getGameScores(scene) {
    scene.scores = this.gameScores;
  }

  setGameScore(game, score) {
    for (let i in score) {
      this.gameScores[game].push(score[i]);
    }
    console.log(this.gameScores);
  }
}

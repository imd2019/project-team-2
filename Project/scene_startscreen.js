import Scene from "./scene.js";

export default class Startscreen extends Scene {
  constructor() {
    super("Startscreen");
  }
  init() {
    this.addImage("background", window.ENUMS.IMAGE.BACKGROUND_STARTSCREEN);
    this.switchImage("background");
  }
}

import Scene from "./scene.js";
import Button_Start from "./button_Start.js";

export default class Startscreen extends Scene {
  constructor() {
    super(window.ENUMS.SCENE_NAMES.START);
    this.startbutton;
  }
  init() {
    this.startbutton = new Button_Start(1045, 460);
    this.startbutton.setRotInDegree(-19);
    this.addChild(this.startbutton);
    this.addImage("background", window.ENUMS.IMAGE.BACKGROUND_STARTSCREEN);
    this.switchImage("background");
  }
}

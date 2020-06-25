import Scene from "./scene.js";
import Button_Start from "./button_Start.js";
import Message from "./message.js";
import { DisplayObject } from "./displayObject.js";

export default class Startscreen extends Scene {
  constructor() {
    super(window.ENUMS.SCENE_NAMES.START);
    this.startbutton;
    this.msg;
  }
  init() {
    this.startbutton = new Button_Start(1045, 460);
    this.startbutton.setRotInDegree(-19);
    this.addChild(this.startbutton);
    this.addImage("background", window.ENUMS.IMAGE.BACKGROUND_STARTSCREEN);
    this.switchImage("background");

    this.msg = new Message(
      770,
      240,
      100,
      "Diese Masken sind echt unbequem und was bringen die schon..."
    );
    this.addChild(this.msg);

    let fingers = new DisplayObject(0, 0);
    fingers.setImageSize(window.ENUMS.SIZE.X, window.ENUMS.SIZE.Y);
    fingers.currentImage = window.ENUMS.IMAGE.STARTSCREEN_FINGERS;
    this.addChild(fingers);
  }
}

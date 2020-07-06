import Scene from "./scene.js";
import Button_Start from "./button_Start.js";
import Message from "./message.js";
import { DisplayObject } from "./displayObject.js";

export default class Startscreen extends Scene {
  constructor() {
    super(window.ENUMS.SCENE_NAMES.START);
    this.startbutton;
    this.msg1;
    this.msg2;
    this.msg3;
    window.addEventListener("animationTraum", () => {
      this.animationTraum();
    });
    this.goToMap = false;
    this.msgSend = false;
  }

  animationTraum() {
    window.ENUMS.SOUND.SONG.play();
    this.setDomOffset(window.ENUMS.POS.X, window.ENUMS.POS.Y);
    this.showDom();
    this.playDom();
    this.wait(10);
    this.goToMap = true;
    console.log("Gute Nacht");
  }

  update() {
    if (!this.msgSend) this.sendMessages();
    if (this.goToMap) {
      this.stopDom();
      this.hideDom();
      window.dispatchEvent(new CustomEvent("nextScene"));
    }
  }

  sendMessages() {
    this.msgSend = true;
    this.msg1.enable();
    this.msg2.enable();
    this.msg3.enable();
  }

  init() {
    this.addDom("traum", window.ENUMS.DOM.ANIMATION_TRAUM);
    this.switchDom("traum");

    this.addImage("background", window.ENUMS.IMAGE.BACKGROUND_STARTSCREEN);
    this.switchImage("background");

    this.msg1 = new Message(
      770,
      240,
      100,
      "Diese Masken sind echt unbequem und was bringen die schon?"
    );
    this.addChild(this.msg1);
    this.msg2 = new Message(
      865,
      325,
      100,
      "ja das frage ich mich auch und dieses ganze Händewaschen..."
    );
    this.addChild(this.msg2);
    this.msg3 = new Message(
      850,
      450,
      100,
      "Ja, das nervt. Weißt du denn eigentlich, wie man sich richtig verhält? Oder wie richtige Hygiene funktioniert?"
    );
    this.addChild(this.msg3);

    this.msg1.disable();
    this.msg2.disable();
    this.msg3.disable();

    let loch = new DisplayObject(0, 0);
    loch.setImageSize(window.ENUMS.SIZE.X, window.ENUMS.SIZE.Y);
    loch.currentImage = window.ENUMS.IMAGE.BACKGROUND_STARTSCREEN_LOCH;
    this.addChild(loch);

    this.startbutton = new Button_Start(1068, 509);
    this.startbutton.setRotInDegree(-20);
    this.addChild(this.startbutton);

    let fingers = new DisplayObject(0, 0);
    fingers.setImageSize(window.ENUMS.SIZE.X, window.ENUMS.SIZE.Y);
    fingers.currentImage = window.ENUMS.IMAGE.STARTSCREEN_FINGERS;
    this.addChild(fingers);
    this.wait(0.7);
  }
}

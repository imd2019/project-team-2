import Scene from "./scene.js";
import Button_Weiter from "./Button_Weiter.js";
import Virus from "./virus.js";
import Hand from "./hand.js";
import Sign from "./sign.js";
import Button_Retry from "./Button_Retry.js";

export default class Haendewaschen extends Scene {
  constructor() {
    super("Haendewaschen");
    this.weiterButton;
    this.retryButton;
    this.hand;
    this.virus;
    this.sign_name;
    this.sign_level;
    window.addEventListener("VirusReleased", (e) => {
      this.virusReleased();
    });
    window.addEventListener("CheckPlacement", (e) => {
      this.checkPlacement();
    });
  }

  init() {
    this.weiterButton = new Button_Weiter(
      this.width - 170,
      this.height - 135,
      "CheckPlacement"
    );
    this.retryButton = new Button_Retry(0 + 130, this.height - 75, "nextScene");
    this.hand = new Hand(235, window.ENUMS.SIZE.Y);
    this.virus = new Virus(width / 2, height / 2 + 38);
    this.sign_name = new Sign(50, 0, "Händewaschen");
    this.sign_level = new Sign(215, 0, "Level 1");
    this.retryButton.disable(false);
    this.weiterButton.disable(false);
    this.addChild(this.hand);
    this.addChild(this.weiterButton);
    this.addChild(this.retryButton);
    this.addChild(this.virus);
    this.addChild(this.sign_name);
    this.addChild(this.sign_level);
    this.addImage("background", window.ENUMS.IMAGE.BACKGROUND_HAENDEWASCHEN);
    this.switchImage("background");
    this.addDom("Animation1", window.ENUMS.DOM.ANIMATION_WHITE);
    this.switchDom("Animation1");
    this.setDomSize(this.width / 2, this.height / 2);
  }
  virusReleased() {
    if (
      (this.virus.x > 245 &&
        this.virus.x < 610 &&
        this.virus.y > 205 &&
        this.virus.y < 1080) ||
      (this.virus.x > 770 &&
        this.virus.x < 1140 &&
        this.virus.y > 205 &&
        this.virus.y < 1080)
    ) {
      this.weiterButton.enable();
      this.retryButton.enable();
    }
  }
  checkPlacement() {
    this.showDom();
    this.playDom();
    this.stopDom(4);
    this.hand.disable();
    // this.scene.wait
    // play DOM
  }
}

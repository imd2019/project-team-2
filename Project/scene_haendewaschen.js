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
  }

  init() {
    this.weiterButton = new Button_Weiter(
      this.width - 170,
      this.height - 135,
      "nextScene"
    );
    this.retryButton = new Button_Retry(0 + 130, this.height - 75, "nextScene");
    this.hand = new Hand(235, window.ENUMS.SIZE.Y);
    this.virus = new Virus(width / 2, height / 2 + 38);
    this.sign_name = new Sign(50, 0, "Händewaschen");
    this.sign_level = new Sign(215, 0, "Level 1");
    this.addChild(this.hand);
    this.addChild(this.weiterButton);
    this.addChild(this.retryButton);
    this.addChild(this.virus);
    this.addChild(this.sign_name);
    this.addChild(this.sign_level);
    this.retryButton.disable();
    this.weiterButton.disable();
    this.addImage("background", window.ENUMS.IMAGE.BACKGROUND_HAENDEWASCHEN);
    this.switchImage("background");
  }

  virusReleased() {
    this.weiterButton.enable();
    this.retryButton.enable();
  }
}

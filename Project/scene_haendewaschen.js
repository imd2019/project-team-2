import Scene from "./scene.js";
import Button_Weiter from "./Button_Weiter.js";
import Virus from "./virus.js";
import Hand from "./hand.js";

export default class Haendewaschen extends Scene {
  constructor() {
    super("Haendewaschen");
    this.weiterButton;
    this.hand;
    this.virus;
    window.addEventListener("VirusReleased", (e) => {
      this.virusReleased();
    });
  }

  init() {
    this.weiterButton = new Button_Weiter(
      this.width - 200,
      this.height - 500,
      "nextScene"
    );
    this.hand = new Hand(235, window.ENUMS.SIZE.Y);
    this.virus = new Virus(width / 2, height / 2 + 38);
    this.addChild(this.hand);
    this.addChild(this.weiterButton);
    this.addChild(this.virus);

    this.weiterButton.disable();

    this.addImage("background", window.ENUMS.IMAGE.BACKGROUND_HAENDEWASCHEN);
    this.switchImage("background");
  }

  virusReleased() {
    this.weiterButton.enable();
  }
}

import Scene from "./scene.js";
import Button_Weiter from "./Button_Weiter.js";
import Virus from "./virus.js";

export default class Haendewaschen extends Scene {
  constructor() {
    super("Haendewaschen");
    this.weiterButton;
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
    this.virus = new Virus(width / 2, height / 2);
    this.addChild(this.virus);
    this.addChild(this.weiterButton);
    this.weiterButton.disable();

    this.addImage("background", window.ENUMS.IMAGE.BACKGROUND_HAENDEWASCHEN);
    this.switchImage("background");
  }

  virusReleased() {
    this.weiterButton.enable();
  }
}

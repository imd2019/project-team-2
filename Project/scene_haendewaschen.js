import Scene from "./scene.js";
import Button_Weiter from "./Button_Weiter.js";
import Virus from "./virus.js";
import Hand from "./hand.js";
import Sign from "./sign.js";
import Button_Retry from "./Button_Retry.js";

export default class Haendewaschen extends Scene {
  constructor() {
    super(window.ENUMS.SCENE_NAMES.HAENDEWASCHEN);
    this.weiterButton;
    this.retryButton;
    this.hand;
    this.virus;
    this.sign_name;
    this.sign_level;
    this.animation1 = false;
    this.animation2 = false;
    this.animation3 = false;
    this.animation4 = false;
    this.level = 1;
    window.addEventListener("VirusReleased", (e) => {
      this.virusReleased();
    });
    window.addEventListener("CheckPlacement", (e) => {
      this.checkPlacement();
    });
  }

  init() {
    if (this.level < 3) {
      this.weiterButton = new Button_Weiter(
        this.width - 170,
        this.height - 135,
        "CheckPlacement"
      );
    }
    this.retryButton = new Button_Retry(
      0 + 130,
      this.height - 75,
      "retryScene"
    );
    this.hand = new Hand(235, window.ENUMS.SIZE.Y);
    this.virus = new Virus(width / 2, height / 2 + 38);
    this.sign_name = new Sign(50, 0, "Händewaschen");
    this.sign_level = new Sign(215, 0, "Level " + this.level + "/3");
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
    this.addDom("Animation1", window.ENUMS.DOM.ANIMATION_WHITE_1);
    //this.switchDom("Animation1");
    this.addDom("Animation2", window.ENUMS.DOM.ANIMATION_WHITE_2);
    //this.switchDom("Animation2");
    this.addDom("Animation3", window.ENUMS.DOM.ANIMATION_WHITE_3);
    //this.switchDom("Animation3");
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
      // this.retryButton.enable();
    } else {
      this.weiterButton.disable(false);
      this.retryButton.disable(false);
    }
  }
  update() {
    if (this.animation1) {
      this.switchDom("Animation1");
      this.setDomSize(1000, 800);
      this.setDomOffset(100, 80);
      this.showDom();
      this.animation2 = true;
      this.animation1 = false;
      this.wait(2.5);
      return;
    } else if (this.animation2) {
      this.switchDom("Animation2");
      this.setDomSize(1000, 800);
      this.setDomOffset(100, 80);
      this.showDom();
      this.animation3 = true;
      this.animation2 = false;
      this.wait(4.5);
      return;
    } else if (this.animation3) {
      this.switchDom("Animation3");
      this.setDomSize(1000, 800);
      this.setDomOffset(100, 80);
      this.showDom();
      this.wait(3);
      this.animation4 = true;
      this.animation3 = false;
      return;
    } else if (this.animation4) {
      this.hideDom();
      this.nextLevel();
      this.animation4 = false;
    }
  }
  checkPlacement() {
    this.hand.disable();
    this.virus.disable();
    this.animation1 = true;
  }
  nextLevel() {
    console.log(this.animation4);
    this.hand.enable();
    this.level++;

    this.virus.enable();
    this.virus.x = width / 2;
    this.virus.y = height / 2 + 38;
    this.virus.resize(150, 150);
    if (this.animation4 === true && this.level == 4) {
      this.weiterButton.changeEvent("nextScene");
      this.weiterButton.switchSceneId = window.ENUMS.SCENE_NAMES.MAP;
      this.level = 3;
    }
    this.sign_level.changeText("Level " + this.level + "/3");
  }
}

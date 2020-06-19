import Scene from "./scene.js";
import Button_Weiter from "./Button_Weiter.js";
import Virus from "./virus.js";
import Hand from "./hand.js";
import Sign from "./sign.js";
import Button_Retry from "./Button_Retry.js";
import Button_MentorVirus from "./button_MentorVirus.js";

export default class Haendewaschen extends Scene {
  constructor() {
    super(window.ENUMS.SCENE_NAMES.HAENDEWASCHEN);
    this.weiterButton;
    this.retryButton;
    this.hand;
    this.virus;
    this.mentorVirus;
    this.sign_name;
    this.sign_level;
    this.level = 1;
    this.handColor = ["Weiss-", "Braun-", "Weiss-Lack-", "Braun-Lack-"];
    this.currentColor = "";
    this.animationRow = ["palm"];
    this.animationIndexNow = -1;
    this.savePlace = ["spaces", "tips", "thumb"];
    window.addEventListener("VirusReleased", (e) => {
      this.virusReleased();
    });
    window.addEventListener("PlayAnimation", (e) => {
      this.playAnimation();
    });
    window.addEventListener("MentorVirus", (e) => {
      this.askMentor();
    });
    window.addEventListener("nextHaendeLevel", (e) => {
      this.checkNextLevel();
    });
    window.addEventListener("resetLevel", (e) => {
      this.resetLevel();
    });
  }

  init() {
    if (this.level < 3) {
      this.weiterButton = new Button_Weiter(
        this.width - 170,
        this.height - 135,
        "PlayAnimation"
      );
    }
    this.retryButton = new Button_Retry(
      0 + 130,
      this.height - 75,
      "resetLevel"
    );

    this.mentorVirus = new Button_MentorVirus(1180, 10, "MentorVirus");

    this.hand = new Hand(235, window.ENUMS.SIZE.Y);
    this.newHandColor();

    this.virus = new Virus(width / 2, height / 2 + 38);
    this.sign_name = new Sign(50, 0, "Händewaschen");
    this.sign_level = new Sign(215, 0, "Level " + this.level + "/3");
    this.retryButton.disable(false);
    this.weiterButton.disable(false);

    this.mentorVirus.enable();
    this.mentorVirus.updateText(
      "Du wurdest abgewaschen! Probiere es nochmal ..."
    );
    this.addChild(this.hand);
    this.addChild(this.weiterButton);
    this.addChild(this.retryButton);
    this.addChild(this.virus);

    this.addChild(this.sign_name);
    this.addChild(this.sign_level);
    this.addImage("background", window.ENUMS.IMAGE.BACKGROUND_HAENDEWASCHEN);
    this.switchImage("background");
    this.addDom("Weiss-palm", window.ENUMS.DOM.ANIMATION_WHITE_PALM);
    //this.switchDom("Animation1");
    this.addDom("Weiss-tips", window.ENUMS.DOM.ANIMATION_WHITE_TIPS);
    //this.switchDom("Animation2");
    this.addDom("Weiss-spaces", window.ENUMS.DOM.ANIMATION_WHITE_SPACES);
    //this.switchDom("Animation3");
    this.addChild(this.mentorVirus);

    //console.log(this.mentorVirus);
  }
  virusReleased() {
    if (
      // (this.virus.x > 245 &&
      //   this.virus.x < 610 &&
      //   this.virus.y > 205 &&
      //   this.virus.y < 1080) ||
      // (this.virus.x > 770 &&
      //   this.virus.x < 1140 &&
      //   this.virus.y > 205 &&
      //   this.virus.y < 1080)
      this.hand.onHand(this.virus.getRealXY().x, this.virus.getRealXY().y)
    ) {
      this.weiterButton.enable();
      // this.retryButton.enable();
    } else {
      this.weiterButton.disable(false);
      this.retryButton.disable(false);
    }
  }
  update() {
    console.log(this.animationRow.length);
    if (this.animationIndexNow >= 0) {
      if (this.animationIndexNow < this.animationRow.length) {
        console.log(this.animationRow);
        this.switchDom(
          this.currentColor + this.animationRow[this.animationIndexNow]
        );
        this.setDomSize(1000, 800);
        this.setDomOffset(100, 80);
        this.showDom();
        this.weiterButton.disable(false);
        switch (this.animationRow[this.animationIndexNow]) {
          case "palm":
            this.wait(2.5);
            break;
          case "tips":
            this.wait(3);
            break;
          case "spaces":
            this.wait(4.5);
            break;
          case "thumb":
            this.wait(2.5);
            break;
        }
        this.animationIndexNow++;
      } else {
        this.showEnd();
      }
    }
  }

  showEnd() {
    this.hideDom();

    let index = this.isVirusSafe();
    if (index >= 0) {
      this.virus.hide(false);
      this.animationRow.push("" + this.savePlace.splice(index, 1)[0]);
      this.mentorVirus.updateText(
        "Du hast es geschafft. Auf zur nächsten Person!"
      );
      this.weiterButton.enable();
    } else {
      this.mentorVirus.updateText(
        "Du wurdest abgewaschen! Probiere es nochmal ..."
      );
      this.retryButton.enable();
    }
    this.mentorVirus.showText();
    this.hand.enable();
    this.weiterButton.changeEvent("nextHaendeLevel");
    if (this.animation4 === true && this.level == 4) {
      this.weiterButton.changeEvent("nextScene");
      this.weiterButton.switchSceneId = window.ENUMS.SCENE_NAMES.MAP;
      this.level = 3;
    }
    this.animationIndexNow = -1;
  }

  playAnimation() {
    this.hand.disable();
    this.virus.disable();
    this.animationIndexNow = 0;
  }

  isVirusSafe() {
    for (let i in this.savePlace) {
      if (
        this.hand.testHitboxHand(
          this.virus.getRealXY().x,
          this.virus.getRealXY().y,
          this.savePlace[i]
        )
      )
        return i;
    }
    return -1;
  }

  resetLevel() {
    this.setUpLevel();
  }

  setUpLevel() {
    this.weiterButton.disable(false);
    this.retryButton.disable(false);
    this.hand.setSpeed();
    this.hand.y = window.ENUMS.SIZE.Y + 50;
    this.newHandColor();
    this.virus.enable();
    this.weiterButton.changeEvent("PlayAnimation");
    this.mentorVirus.hideText();

    this.sign_level.changeText("Level " + this.level + "/3");
    this.virus.x = width / 2;
    this.virus.y = height / 2 + 38;
    this.virus.resize(150, 150);
  }

  checkNextLevel() {
    this.level++;
    this.setUpLevel();
  }

  nextLevel() {}

  askMentor() {
    //console.log("hi");
  }

  newHandColor() {
    this.currentColor = random(this.handColor);
    this.currentColor = "Weiss-";
    this.hand.switchImage(this.currentColor + "Hand");
  }
}

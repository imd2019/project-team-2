import Scene from "./scene.js";
import Button_Weiter from "./Button_Weiter.js";
import Virus from "./virus.js";
import Hand from "./hand.js";
import Sign from "./sign.js";
import Button_Retry from "./Button_Retry.js";
import Button_MentorVirus from "./button_MentorVirus.js";
import InteractiveObject from "./interactiveObject.js";
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
    this.virusPositions = [];
    this.trys = 0;
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
      this.setUpLevel();
    });
    window.addEventListener("heatmap", (e) => {
      this.showHeatmap();
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
      "nextHaendeLevel"
    );

    this.mentorVirus = new Button_MentorVirus(1260, 100, "MentorVirus");

    this.hand = new Hand(235, window.ENUMS.SIZE.Y);
    this.newHandColor();

    this.virus = new Virus(width / 2, height / 2 + 38);
    this.sign_name = new Sign(50, 0, "Händewaschen");
    this.sign_level = new Sign(215, 0, "Level " + this.level + "/3");
    this.retryButton.disable(false);
    this.weiterButton.disable(false);

    this.mentorVirus.enable();
    this.mentorVirus.updateText(
      "Beginnen wir mit deinem Training. Setze dich auf die Hand!"
    );
    //  this.mentorVirus.showText();
    this.addChild(this.hand);
    this.addChild(this.weiterButton);
    this.addChild(this.retryButton);
    this.addChild(this.virus);

    this.addChild(this.sign_name);
    this.addChild(this.sign_level);
    this.addImage("background", window.ENUMS.IMAGE.BACKGROUND_HAENDEWASCHEN);
    this.switchImage("background");
    this.addDom("Weiss-palm", window.ENUMS.DOM.ANIMATION_WHITE_PALM);
    this.addDom("Weiss-tips", window.ENUMS.DOM.ANIMATION_WHITE_TIPS);
    this.addDom("Weiss-spaces", window.ENUMS.DOM.ANIMATION_WHITE_SPACES);
    this.addDom("Weiss-thumb", window.ENUMS.DOM.ANIMATION_WHITE_THUMB);

    this.addDom("Weiss-Lack-palm", window.ENUMS.DOM.ANIMATION_WHITE_LACK_PALM);
    this.addDom("Weiss-Lack-tips", window.ENUMS.DOM.ANIMATION_WHITE_LACK_TIPS);
    this.addDom(
      "Weiss-Lack-spaces",
      window.ENUMS.DOM.ANIMATION_WHITE_LACK_SPACES
    );
    this.addDom(
      "Weiss-Lack-thumb",
      window.ENUMS.DOM.ANIMATION_WHITE_LACK_THUMB
    );

    this.addDom("Braun-palm", window.ENUMS.DOM.ANIMATION_BROWN_PALM);
    this.addDom("Braun-tips", window.ENUMS.DOM.ANIMATION_BROWN_TIPS);
    this.addDom("Braun-spaces", window.ENUMS.DOM.ANIMATION_BROWN_SPACES);
    this.addDom("Braun-thumb", window.ENUMS.DOM.ANIMATION_BROWN_THUMB);

    this.addDom("Braun-Lack-palm", window.ENUMS.DOM.ANIMATION_BROWN_LACK_PALM);
    this.addDom("Braun-Lack-tips", window.ENUMS.DOM.ANIMATION_BROWN_LACK_TIPS);
    this.addDom(
      "Braun-Lack-spaces",
      window.ENUMS.DOM.ANIMATION_BROWN_LACK_SPACES
    );
    this.addDom(
      "Braun-Lack-thumb",
      window.ENUMS.DOM.ANIMATION_BROWN_LACK_THUMB
    );

    this.addChild(this.mentorVirus);
    this.setUpLevel();
  }

  virusReleased() {
    if (this.hand.onHand(this.virus.getRealXY().x, this.virus.getRealXY().y)) {
      if (!this.weiterButton.enabled) this.weiterButton.enable();
    } else {
      this.weiterButton.disable(false);
      this.retryButton.disable(false);
    }
  }

  update() {
    if (this.animationIndexNow >= 0) {
      if (this.animationIndexNow < this.animationRow.length) {
        this.switchDom(
          this.currentColor + this.animationRow[this.animationIndexNow]
        );
        // this.setDomSize(1000, 800);
        this.setDomOffset(window.ENUMS.POS.X, window.ENUMS.POS.Y);
        this.showDom();
        this.weiterButton.disable(false);
        switch (this.animationRow[this.animationIndexNow]) {
          case "palm":
            window.ENUMS.SOUND.HAENDEWASCHEN_RUB.play();
            this.wait(2.5);
            break;
          case "tips":
            window.ENUMS.SOUND.HAENDEWASCHEN_TIPS.play();
            this.wait(3);
            break;
          case "spaces":
            window.ENUMS.SOUND.HAENDEWASCHEN_INBETWEEN.play();
            this.wait(4);
            break;
          case "thumb":
            window.ENUMS.SOUND.HAENDEWASCHEN_THUMB.play();
            this.wait(3);
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
      //Gewonnen
      this.virus.hide(false);
      this.animationRow.push("" + this.savePlace.splice(index, 1)[0]);
      this.mentorVirus.updateText("Du hast es geschafft. Weiter gehts!");
      this.weiterButton.enable();
      this.level++;
      this.virusPositions.push({ x: this.virus.x, y: this.virus.y });
    } else {
      //Verloren
      this.mentorVirus.updateText(
        "Du wurdest abgewaschen! Probiere es nochmal ..."
      );
      this.trys++;
      this.retryButton.enable();
    }
    //   this.mentorVirus.showText();
    this.hand.enable();
    this.weiterButton.changeEvent("nextHaendeLevel");

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

  setUpLevel() {
    if (this.level == 4) {
      this.showHeatmap();
      window.ENUMS.SOUND.HAENDEWASCHEN_BM.stop();
    } else {
      window.ENUMS.SOUND.HAENDEWASCHEN_BM.play();
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
  }
  showHeatmap() {
    this.level = 3;
    this.weiterButton.enable();
    this.retryButton.disable(false);
    this.virus.disable();
    this.hand.switchImage("Heatmap");
    this.hand.hide(false);
    for (let i in this.virusPositions) {
      let pos = this.virusPositions[i];
      let dVir = new InteractiveObject(
        pos.x,
        pos.y,
        40,
        40,
        window.ENUMS.SHAPE.ROUND
      );
      dVir.disable(false);
      dVir.addImage("virus", window.ENUMS.IMAGE.VIRUS_1);
      dVir.switchImage("virus");
      this.addChild(dVir);
    }
    window.dispatchEvent(
      new CustomEvent("setGameScore", {
        detail: { game: "haendewaschen", score: [this.trys] },
      })
    );
    this.weiterButton.changeEvent("switchToMap");
    this.weiterButton.switchSceneId = 2;
    this.mentorVirus.updateText("Hier sind die Schwachstellen der Menschen.");
    // this.mentorVirus.showText();
  }

  nextLevel() {}

  newHandColor() {
    this.currentColor = random(this.handColor);
    this.hand.switchImage(this.currentColor + "Hand");
  }
}

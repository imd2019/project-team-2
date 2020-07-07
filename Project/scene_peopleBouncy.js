import Scene from "./scene.js";
import Sign from "./sign.js";
import People from "./people.js";
import InteractiveObject from "./interactiveObject.js";
import Playground from "./playground.js";
import VirusProjectile from "./virusProjectile.js";
import Util from "./util.js";
import Wecker from "./wecker.js";
import Button_Weiter from "./Button_Weiter.js";
import Button_MentorVirus from "./button_MentorVirus.js";
import Hannah from "./hannah.js";

export default class PeopleBouncy extends Scene {
  constructor() {
    super(window.ENUMS.SCENE_NAMES.PEOPLE_BOUNCY);
    this.level = 0;
    this.sign_level;
    this.sign_name;
    this.wecker;
    this.playground;
    this.people = [];
    this.viruses = [];
    this.currentPlayer = 0;
    this.weiterButton;
    this.startScene = true;
    this.mentorVirus;
    this.peopleSize = 1;
    this.scores = [];

    window.addEventListener("newGoalPosition", (e) => {
      this.findNewGoalPosition(e.detail);
    });
    window.addEventListener("deleteVirusProjectile", (e) => {
      this.deleteVirus(e.detail);
    });
    window.addEventListener("timeIsUp", () => {
      this.levelEnd();
    });
    window.addEventListener("nextPeopleBouncyLevel", (e) => {
      this.setUpLevel();
    });
    window.addEventListener("hannahInfected", (e) => {
      this.sceneEnd();
    });
  }

  init() {
    this.addImage(
      "Hintergrund-1",
      window.ENUMS.IMAGE.BACKGROUND_PEOPLEBOUNCY_LEVEL_1
    );
    this.addImage(
      "Hintergrund-2",
      window.ENUMS.IMAGE.BACKGROUND_PEOPLEBOUNCY_LEVEL_2
    );
    this.addImage(
      "Hintergrund-3",
      window.ENUMS.IMAGE.BACKGROUND_PEOPLEBOUNCY_LEVEL_3
    );

    this.sign_name = new Sign(50, 0, "People Bouncy");
    this.sign_level = new Sign(215, 0, "Level " + this.level + "/3");
    this.wecker = new Wecker(380, 0);
    this.wecker.scaleSize(1.1);
    this.mentorVirus = new Button_MentorVirus(1260, 100, "MentorVirus");

    this.weiterButton = new Button_Weiter(
      this.width - 170,
      this.height - 135,
      "nextPeopleBouncyLevel"
    );
    this.weiterButton.disable(false);
    this.addChild(this.sign_level);
    this.addChild(this.sign_name);
    this.addChild(this.wecker);
    this.addChild(this.weiterButton);
    this.addChild(this.mentorVirus);
    this.setUpLevel();
  }

  setupPlayground(level) {
    switch (level) {
      case 1:
        this.playground = new Playground(
          210,
          170,
          952,
          529,
          window.ENUMS.IMAGE.PEOPLEBOUNCY_PLAYGROUND_1
        );
        this.playground.addHitbox(0, 0, 660, 395, window.ENUMS.SHAPE.RECT);
        this.playground.addHitbox(540, 150, 390, 320, window.ENUMS.SHAPE.RECT);
        this.addChild(this.playground);
        break;
      case 2:
        this.removeChild(this.playground);
        this.playground = new Playground(
          210,
          170,
          952,
          529,
          window.ENUMS.IMAGE.PEOPLEBOUNCY_PLAYGROUND_2
        );
        this.playground.addHitbox(0, 0, 660, 395, window.ENUMS.SHAPE.RECT);
        this.playground.addHitbox(540, 150, 390, 320, window.ENUMS.SHAPE.RECT);
        this.addChild(this.playground);
        break;
      case 3:
        this.removeChild(this.playground);
        this.playground = new Playground(
          290,
          170,
          852,
          429,
          window.ENUMS.IMAGE.PEOPLEBOUNCY_PLAYGROUND_3
        );
        this.playground.addHitbox(0, 0, 600, 330, window.ENUMS.SHAPE.RECT);
        this.playground.addHitbox(470, 120, 370, 280, window.ENUMS.SHAPE.RECT);
        this.addChild(this.playground);
        break;
      case 4:
        this.removeChild(this.playground);
        this.playground = new Playground(
          290,
          170,
          852,
          429,
          window.ENUMS.IMAGE.PEOPLEBOUNCY_PLAYGROUND_3
        );
        this.playground.addHitbox(0, 0, 600, 330, window.ENUMS.SHAPE.RECT);
        this.playground.addHitbox(470, 120, 370, 280, window.ENUMS.SHAPE.RECT);
        this.addChild(this.playground);
        break;
    }
  }

  setUpLevel() {
    this.level++;
    this.setupPlayground(this.level);
    this.deletePeople();
    this.wecker.zeit = 30;
    this.weiterButton.disable(false);
    switch (this.level) {
      case 1:
        window.ENUMS.SOUND.PEOPLEBOUNCY_BM_CLASSROOM.play();
        this.mentorVirus.updateText(
          "Wie viel kannst du anstecken? Drücke die Leertaste!"
        );
        this.peopleSize = 1.7;
        //   this.mentorVirus.showText();
        this.spawnPeople(10, 0);
        break;
      case 2:
        window.ENUMS.SOUND.PEOPLEBOUNCY_BM_PLAYGROUND.play();
        this.mentorVirus.updateText(
          "Oh nein, Schutzmasken! Schützen sie wirklich?"
        );
        this.peopleSize = 1;
        //   this.mentorVirus.showText();
        this.spawnPeople(25, 0.5);
        break;
      case 3:
        window.ENUMS.SOUND.PEOPLEBOUNCY_BM_PLAYGROUND.play();
        window.ENUMS.SOUND.PEOPLEBOUNCY_BM_WIND.play();
        this.mentorVirus.updateText(
          "Was sie sich jetzt wohl ausgedacht haben ?"
        );
        //  this.mentorVirus.showText();
        this.spawnPeople(20, 1);
        break;
      case 4:
        window.ENUMS.SOUND.PEOPLEBOUNCY_BM_STORM.play();
        this.mentorVirus.updateText("Oh, sieh mal, da ist ja Hannah!", 25);
        this.sign_level.disable();
        this.weiterButton.disable();
        this.peopleSize = 2;
        let people = new People(400, 400, 4);
        people.init();
        people.currentGender = "girl-";
        people.voice = "m";
        people.setActivityFixGoal(660, 400);
        people.scaleSize(this.peopleSize);
        people.setMaxMinSpeed(3, -3);
        this.people.push(people);
        this.addChild(people);
        let hannah = new Hannah(770, 400);
        hannah.init();
        hannah.scaleSize(this.peopleSize);
        this.people.push(hannah);
        this.addChild(hannah);
        this.removeChild(this.wecker);
        break;
    }

    this.sign_level.changeText("Level " + this.level + "/3");
    if (this.level === 4) {
      this.switchImage("Hintergrund-3");
    } else {
      this.switchImage("Hintergrund-" + this.level);
    }
    this.startScene = true;
    console.log(this.people);
    this.switchActivePlayer(0);
  }

  draw() {}

  update() {
    if (this.startScene === true) {
      for (let element of this.people) {
        let elRealPos = element.getRealXY();
        let velocity = element.getVelocity();
        if (
          !this.playground.isPointOnPlayground(
            elRealPos.x + velocity.x * 2,
            elRealPos.y + velocity.y * 2
          )
        ) {
          let wrongVec = this.getWrongVectorsOnPlayground(
            elRealPos.x,
            elRealPos.y,
            velocity.x,
            velocity.y
          );
          element.decideDirection(wrongVec);
          element.setVelocity(0, 0);
          element.move();
        }
      }
      this.checkCollision();
    }
  }

  spawnPeople(count, pMask) {
    for (let i = 0; i < count; i++) {
      let pos = this.playground.getRealRandomPosition();
      let people = new People(pos.x, pos.y, this.level);
      people.init();
      people.scaleSize(this.peopleSize);
      let r = random();
      if (r < pMask) {
        people.setMask();
      }

      this.people.push(people);
      this.addChild(people);
    }
  }

  disablePeople() {
    for (let i = 0; i < this.people.length; i++) {
      this.people[i].disable(false);
    }
  }

  deletePeople() {
    for (let i = 0; i < this.people.length; i++) {
      this.removeChild(this.people[i]);
    }
    this.people = [];
  }

  getWrongVectorsOnPlayground(x, y, vcx, vcy) {
    let result = [];
    if (!this.playground.isPointOnPlayground(x + vcx, y)) result.push("acx");
    if (!this.playground.isPointOnPlayground(x, y + vcy)) result.push("acy");
    if (result.legnth === 0) {
      result.push("none");
    }
    return result;
  }

  findNewGoalPosition(people) {
    let pos = this.playground.getRealRandomPosition();
    people.setGoalPosition(pos.x, pos.y);
  }

  switchActivePlayer(index) {
    if (this.getCurrentPlayer() != undefined)
      this.getCurrentPlayer().isActivePlayer = false;
    this.currentPlayer = index;
    this.getCurrentPlayer().infect();
  }

  getCurrentPlayer() {
    return this.people[this.currentPlayer];
  }

  onKeyPressed() {
    if (this.startScene === true) {
      if (keyCode === 32) {
        let pos = this.getCurrentPlayer().getRealXY();
        let vel = this.getCurrentPlayer().getVirusOutputVelocity();
        if (vel.x != 0 || vel.y != 0) {
          let virus = new VirusProjectile(
            pos.x,
            pos.y,
            vel.x,
            vel.y,
            vel.dir,
            this.level
          );
          virus.scaleSize(this.peopleSize);
          virus.init();
          this.viruses.push(virus);
          this.addChild(virus);
        }
      }
    }
  }

  deleteVirus(virus) {
    this.removeChild(virus);
    let index = this.viruses.indexOf(virus);
    if (index >= 0) {
      this.viruses.splice(index, 1);
    } else {
      console.error(
        "Der Virus konnte nicht gelöscht werden, da Virus nicht exestiert."
      );
    }
  }

  checkCollision() {
    let result = this.checkPeopleVirusCollision();
    if (result) {
      if (result.people instanceof Hannah) {
        result.people.infect();
      } else {
        this.switchActivePlayer(this.people.indexOf(result.people));
      }
      this.deleteVirus(result.virus);
    }
    this.checkPeopleTalkCollision();
    this.checkPeoplePandemicDistanceCollision();
  }

  checkPeopleVirusCollision() {
    for (let pElement of this.people) {
      if (pElement.isInfected === false) {
        for (let vElement of this.viruses) {
          if (this.collideObjObj(pElement, vElement)) {
            return { virus: vElement, people: pElement };
          }
        }
      }
    }
    return false;
  }

  checkPeopleTalkCollision() {
    for (let element1 of this.people) {
      if (
        element1.currentExpression === element1.expressions.nothing &&
        element1.currentActivity != "fixGoal"
      ) {
        let peopleToTalk = [];

        for (let element2 of this.people) {
          if (element1 === element2 || element2.currentActivity === "fixGoal")
            continue;
          if (
            Util.getDistanceBetweenObjects(element1, element2) < 70 &&
            element2.currentExpression === element2.expressions.nothing
          ) {
            peopleToTalk.push(element2);
          }
        }

        if (peopleToTalk.length > 0) {
          let rnd = random(1);
          if (rnd < 0.002) {
            let partner = random(peopleToTalk);
            element1.setupTalk(partner);
            partner.setupTalk(element1);
          }
        }
      }
    }
  }

  checkPeoplePandemicDistanceCollision() {
    for (let element1 of this.people) {
      let peopleInDistance = [];
      if (element1.currentActivity != "away") {
        //ANDEREN FRAGEN
        for (let element2 of this.people) {
          if (element1 === element2) continue;
          if (Util.getDistanceBetweenObjects(element1, element2) < 90) {
            peopleInDistance.push(element2);
          }
        }

        if (peopleInDistance.length > 0) {
          let rnd = random();
          if (this.level == 3) {
            if (rnd < 0.5) {
              this.findNewGoalPosition(element1);
              element1.setActivityAway(
                peopleInDistance[0].x,
                peopleInDistance[0].y
              );
            }
          }
        }
        //   let partner = random(peopleInDistance);
        //   console.log(partner);
        //   element1.setupTalk(partner);
        //   partner.setupTalk(element1);
        // }
      }
    }
  }

  collideObjObj(obj_1, obj_2) {
    if (
      obj_1.shape === window.ENUMS.SHAPE.ROUND &&
      obj_2.shape === window.ENUMS.SHAPE.ROUND
    ) {
      let d = Util.getDistanceBetweenObjects(obj_1, obj_2);

      let r = obj_1.width / 2 + obj_2.width / 2;
      if (d < r) {
        return true;
      }
      return false;
    }
  }

  countInfectedPeople() {
    let infectedCount = 0;
    let count = this.people.length;
    for (let element of this.people) {
      if (element.isInfected) {
        infectedCount++;
      }
    }
    let prozent = 100 / (count / infectedCount);
    return prozent;
  }

  levelEnd() {
    window.ENUMS.SOUND.PEOPLEBOUNCY_BM_PLAYGROUND.stop();
    window.ENUMS.SOUND.PEOPLEBOUNCY_BM_WIND.stop();
    window.ENUMS.SOUND.PEOPLEBOUNCY_BM_CLASSROOM.stop();

    let score = round(this.countInfectedPeople());
    this.mentorVirus.updateText(
      "Die Zeit ist um. Du hast " + score + "% der Schüler infiziert."
    );
    this.scores.push(score);
    //this.mentorVirus.showText();
    this.weiterButton.enable();
    this.startScene = false;
    this.disablePeople();
  }

  sceneEnd() {
    window.ENUMS.SOUND.PEOPLEBOUNCY_BM_CLASSROOM.stop();
    window.ENUMS.SOUND.PEOPLEBOUNCY_BM_STORM.stop();
    window.ENUMS.SOUND.PEOPLEBOUNCY_BM_PLAYGROUND.stop();
    window.dispatchEvent(
      new CustomEvent("setGameScore", {
        detail: { game: "people_bouncy", score: this.scores },
      })
    );
  }
}

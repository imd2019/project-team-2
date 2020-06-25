import Scene from "./scene.js";
import Sign from "./sign.js";
import People from "./people.js";
import InteractiveObject from "./interactiveObject.js";
import Playground from "./playground.js";
import VirusProjectile from "./virusProjectile.js";
import Util from "./util.js";
import Wecker from "./wecker.js";

export default class PeopleBouncy extends Scene {
  constructor() {
    super(window.ENUMS.SCENE_NAMES.PEOPLE_BOUNCY);
    this.level = 1;
    this.sign_level;
    this.sign_name;
    this.wecker;
    this.playground;
    this.people = [];
    this.viruses = [];
    this.currentPlayer = 0;
    window.addEventListener("newGoalPosition", (e) => {
      this.findNewGoalPosition(e.detail);
    });
    window.addEventListener("deleteVirusProjectile", (e) => {
      this.deleteVirus(e.detail);
    });
  }

  init() {
    this.addImage(
      "Hintergrund-1",
      window.ENUMS.IMAGE.BACKGROUND_PEOPLEBOUNCY_LEVEL_1
    );
    this.switchImage("Hintergrund-" + this.level);
    this.sign_name = new Sign(50, 0, "People Bouncy");
    this.sign_level = new Sign(215, 0, "Level " + this.level + "/3");
    this.wecker = new Wecker(380, 0);
    this.playground = new Playground(
      290,
      170,
      852,
      429,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_PLAYGROUND_1
    );
    this.playground.addHitbox(0, 0, 600, 340, window.ENUMS.SHAPE.RECT);
    this.playground.addHitbox(470, 120, 370, 280, window.ENUMS.SHAPE.RECT);
    this.addChild(this.playground);
    this.addChild(this.sign_level);
    this.addChild(this.sign_name);
    this.addChild(this.wecker);
    this.spawnPeople(10);
    this.switchActivePlayer(0);
  }

  draw() {}

  update() {
    for (let element of this.people) {
      element.updateActivity();
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

  spawnPeople(count) {
    for (let i = 0; i < count; i++) {
      let pos = this.playground.getRealRandomPosition();
      let people = new People(pos.x, pos.y);
      this.people.push(people);
      this.addChild(people);
    }
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
    this.getCurrentPlayer().isActivePlayer = false;
    this.currentPlayer = index;
    this.getCurrentPlayer().infect();
  }

  getCurrentPlayer() {
    return this.people[this.currentPlayer];
  }

  onKeyPressed() {
    if (keyCode === 32) {
      let pos = this.getCurrentPlayer().getRealXY();
      let vel = this.getCurrentPlayer().getVirusOutputVelocity();
      let virus = new VirusProjectile(pos.x, pos.y, vel.x, vel.y, vel.dir);
      virus.init();
      this.viruses.push(virus);
      this.addChild(virus);
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
      this.switchActivePlayer(this.people.indexOf(result.people));
      this.deleteVirus(result.virus);
    }
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

  collideObjObj(obj_1, obj_2) {
    let obj_1_pos = obj_1.getRealXY();
    let obj_2_pos = obj_2.getRealXY();
    if (
      obj_1.shape === window.ENUMS.SHAPE.ROUND &&
      obj_2.shape === window.ENUMS.SHAPE.ROUND
    ) {
      let dx = obj_1_pos.x - obj_2_pos.x;
      let dy = obj_1_pos.y - obj_2_pos.y;
      let d = Util.betrag([dx, dy]);

      let r = obj_1.width / 2 + obj_2.width / 2;
      if (d < r) {
        return true;
      }
      return false;
    }
  }
}

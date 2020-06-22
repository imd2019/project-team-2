import Scene from "./scene.js";
import Sign from "./sign.js";
import People from "./people.js";
import InteractiveObject from "./interactiveObject.js";
import Playground from "./playground.js";

export default class PeopleBouncy extends Scene {
  constructor() {
    super(window.ENUMS.SCENE_NAMES.PEOPLE_BOUNCY);
    this.level = 1;
    this.sign_level;
    this.sign_name;
    this.playground;
    this.people = [];
    window.addEventListener("newGoalPosition", (e) => {
      this.findNewGoalPosition(e.detail);
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
    this.spawnPeople(10);
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
}

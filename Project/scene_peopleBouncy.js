import Scene from "./scene.js";
import Sign from "./sign.js";
import People from "./people.js";

export default class PeopleBouncy extends Scene {
  constructor() {
    super(window.ENUMS.SCENE_NAMES.PEOPLE_BOUNCY);
    this.level = 1;
    this.sign_level;
    this.sign_name;
  }
  init() {
    this.addImage(
      "Hintergrund-1",
      window.ENUMS.IMAGE.BACKGROUND_PEOPLEBOUNCY_LEVEL_1
    );
    this.switchImage("Hintergrund-" + this.level);
    this.sign_name = new Sign(50, 0, "People Bouncy");
    this.sign_level = new Sign(215, 0, "Level " + this.level + "/3");
    this.addChild(this.sign_level);
    this.addChild(this.sign_name);
  }

  spawnPeople(count) {
    for (let i = 0; i < count; i++) {
      let pos = this.getRandomPositionOnMap();
      let people = new People(pos.x, pos.y);
      this.addChild(people);
    }
  }
  getRandomPositionOnMap() {
    return { x: random(0, 500), y: random(0, 500) };
  }
}

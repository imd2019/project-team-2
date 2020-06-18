import MoveableObject from "./moveableObject.js";
import InteractiveObject from "./interactiveObject.js";

export default class Hand extends MoveableObject {
  constructor(x, y) {
    super(x, y, 895, 602, window.ENUMS.SHAPE.RECT);
    this.hitBoxen = {
      palm: [],
      spaces: [],
      tips: [],
      thumb: [],
    };
    this.hitBoxInit = false;
  }
  init() {
    this.addImage("HandWeiss", window.ENUMS.IMAGE.HAND_WHITE);
    this.switchImage("HandWeiss");
    this.velocity.y = -25;
    this.setAcceleration(0, 0.5);
    this.setMaxMinSpeed(0, -200);
  }
  update() {
    if (this.y <= 200) {
      this.stop();
      if (this.hitBoxInit === false) {
        this.initHitBox();
        this.hitBoxInit = true;
      }
    }
    this.move();
  }

  initHitBox() {
    let palm1 = new InteractiveObject(
      655,
      335,
      230,
      190,
      window.ENUMS.SHAPE.ROUND
    );
    let palm2 = new InteractiveObject(
      655,
      500,
      230,
      230,
      window.ENUMS.SHAPE.RECT
    );
    palm2.setRotInDegree(40);
    this.hitBoxen.palm.push(palm1);
    this.hitBoxen.palm.push(palm2);

    for (let i in this.hitBoxen) {
      let array = this.hitBoxen[i];
      for (let element of array) {
        this.addChild(element);
      }
    }
  }

  drawHitBox() {
    for (let element of this.children) {
      push();
      translate(element.x, element.y);
      rotate(element.rot);
      fill(0);
      if (element.shape === window.ENUMS.SHAPE.ROUND) {
        ellipse(0, 0, element.width, element.height);
      } else {
        rect(0, 0, element.width, element.height);
      }
      pop();
    }
  }

  draw() {
    this.drawHitBox();
  }
}

/* 4 Zonen:
    - Handinnenfläche
    - Zwischenräume/Handrückseite
    - Fingerspitzen
    - Daumenrückseite
*/

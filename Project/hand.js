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
    //Hitbox Handfläche
    let palm1 = new InteractiveObject(
      655,
      335,
      230,
      190,
      window.ENUMS.SHAPE.ROUND
    );
    let palm2 = new InteractiveObject(
      580,
      420,
      160,
      150,
      window.ENUMS.SHAPE.RECT
    );

    this.hitBoxen.palm.push(palm1);
    this.hitBoxen.palm.push(palm2);

    //Hitbox Fingerzwischenräume von links nach rechts
    //linke Hand
    let spacesBelow1 = new InteractiveObject(
      75,
      240,
      30,
      400,
      window.ENUMS.SHAPE.ROUND
    );
    let spacesAbove1 = new InteractiveObject(
      45,
      170,
      30,
      70,
      window.ENUMS.SHAPE.RECT
    );

    let spacesBelow2 = new InteractiveObject(
      133,
      215,
      30,
      400,
      window.ENUMS.SHAPE.ROUND
    );
    let spacesAbove2 = new InteractiveObject(
      112,
      115,
      35,
      90,
      window.ENUMS.SHAPE.RECT
    );
    let spacesBelow3 = new InteractiveObject(
      190,
      220,
      30,
      400,
      window.ENUMS.SHAPE.ROUND
    );
    let spacesAbove3 = new InteractiveObject(
      190,
      115,
      35,
      90,
      window.ENUMS.SHAPE.RECT
    );
    let spacesBelow4 = new InteractiveObject(
      260,
      320,
      60,
      400,
      window.ENUMS.SHAPE.ROUND
    );
    let spacesAbove4 = new InteractiveObject(
      300,
      270,
      35,
      60,
      window.ENUMS.SHAPE.RECT
    );

    spacesAbove1.setRotInDegree(-12);
    spacesAbove2.setRotInDegree(-1);
    spacesAbove3.setRotInDegree(10);
    spacesAbove4.setRotInDegree(45);
    this.hitBoxen.spaces.push(spacesAbove1);
    this.hitBoxen.spaces.push(spacesBelow1);
    this.hitBoxen.spaces.push(spacesAbove2);
    this.hitBoxen.spaces.push(spacesBelow2);
    this.hitBoxen.spaces.push(spacesAbove3);
    this.hitBoxen.spaces.push(spacesBelow3);
    this.hitBoxen.spaces.push(spacesAbove4);
    this.hitBoxen.spaces.push(spacesBelow4);

    //rechte Hand Hier weitermachen !!!!!

    let spacesBelow5 = new InteractiveObject(
      595,
      230,
      30,
      400,
      window.ENUMS.SHAPE.ROUND
    );
    let spacesAbove5 = new InteractiveObject(
      570,
      160,
      30,
      70,
      window.ENUMS.SHAPE.RECT
    );

    spacesAbove5.setRotInDegree(-12);
    this.hitBoxen.spaces.push(spacesAbove5);
    this.hitBoxen.spaces.push(spacesBelow5);

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
      fill(0, 0, 0, 100);
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

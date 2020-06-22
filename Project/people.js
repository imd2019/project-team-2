import MoveableObject from "./moveableObject.js";

export default class People extends MoveableObject {
  constructor(x, y) {
    super(x, y, 50, 100, window.ENUMS.SHAPE.ROUND);
    this.currentGender = "";
    this.genders = ["boy-", "girl-"];
    this.currentDirection = "";
    this.directions = { front: "front" };
  }

  init() {
    this.setGender();
    this.setDirection();
    this.addImage(
      "boy-" + this.directions.front,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_BOY_FRONT
    );
    this.addImage(
      "girl-" + this.directions.front,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_GIRL_FRONT
    );
    this.switchImage(this.currentGender + this.currentDirection);
    this.setMaxMinSpeed(8, -8);
    this.decideDirection();
  }

  setGender() {
    this.currentGender = random(this.genders);
  }

  setDirection() {
    this.currentDirection = this.directions.front;
  }

  decideDirection(wrongVectors = ["none"]) {
    let oldAcX = this.acceleration.x;
    let oldAcY = this.acceleration.y;
    let newAcX = null;
    let newAcY = null;
    let resultX = 0;
    let resultY = 0;
    for (let i in wrongVectors) {
      switch (wrongVectors[i]) {
        case "acx":
          oldAcX > 0 ? (newAcX = random(-2, -1)) : (newAcX = random(1, 2));
        case "acy":
          oldAcY > 0 ? (newAcY = random(-2, -1)) : (newAcY = random(1, 2));
        case "none":
          newAcX = random(-2, 2);
          newAcY = random(-2, 2);
      }
    }
    newAcX === null ? (resultX = oldAcX) : (resultX = newAcX);
    newAcY === null ? (resultY = oldAcY) : (resultY = newAcY);
    this.setAcceleration(resultX, resultY);
  }
}

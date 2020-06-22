import MoveableObject from "./moveableObject.js";

export default class People extends MoveableObject {
  constructor(x, y) {
    super(x, y, 50, 100, window.ENUMS.SHAPE.ROUND);
    this.currentGender = "";
    this.genders = ["boy-", "girl-"];
    this.currentDirection = "";
    this.directions = { front: "front" };
    this.goalPosition = { x: 0, y: 0 };
    this.currentActivity = "goal";
    this.activities = ["wait", "goal", "rnd"];
    this.needActivity = false;
    this.normalAcceleration = 0.3;
    this.activityTimer = 0;
    this.activityMaxTimer = 0;
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
    this.setMaxMinSpeed(random(1, 3), random(-3, -1));
    this.decideDirection();
    this.getNewGoalPosition();
    console.log(this.goalPosition);
  }

  getNewGoalPosition() {
    window.dispatchEvent(new CustomEvent("newGoalPosition", { detail: this }));
  }

  switchActivity() {
    this.currentActivity = random(this.activities);
    switch (this.currentActivity) {
      case "wait":
        this.activityMaxTimer = random(200);
        break;
      case "goal":
        this.activityMaxTimer = 4000;
        this.getNewGoalPosition();
        break;
      case "rnd":
        this.activityMaxTimer = random(300);
        this.decideDirection();
    }
    this.activityTimer = 0;
    this.needActivity = false;
    console.log("new Activity is: " + this.currentActivity);
  }

  updateActivity() {
    if (this.needActivity) this.switchActivity();
  }

  update() {
    if (this.activityTimer > this.activityMaxTimer) {
      this.needActivity = true;
    } else {
      this.activityTimer++;
    }

    switch (this.currentActivity) {
      case "wait":
        break;
      case "goal":
        this.checkGoal();
        this.setAccelerationToGoal();
        this.move();
        break;
      case "rnd":
        this.move();
        break;
    }
  }

  setGoalPosition(x, y) {
    this.goalPosition.x = x;
    this.goalPosition.y = y;
  }

  checkGoal() {
    if (abs(this.x - this.goalPosition.x) < 0.5) this.x = this.goalPosition.x;
    if (abs(this.y - this.goalPosition.y) < 0.5) this.y = this.goalPosition.y;
    if (this.x === this.goalPosition.x && this.y === this.goalPosition.y) {
      this.needActivity = true;
    }
  }

  setAccelerationToGoal() {
    let newAcX = 0;
    let newAcY = 0;

    if (this.x < this.goalPosition.x) {
      newAcX = this.normalAcceleration;
    } else if (this.x > this.goalPosition.x) {
      newAcX = -this.normalAcceleration;
    } else if (this.x === this.goalPosition.x) {
      newAcX = 0;
    }
    if (this.y < this.goalPosition.y) {
      newAcY = this.normalAcceleration;
    } else if (this.y > this.goalPosition.y) {
      newAcY = -this.normalAcceleration;
    } else if (this.y === this.goalPosition.y) {
      newAcY = 0;
    }
    if (this.velocity.x > 0) {
      if (this.velocity.x > abs(this.x - this.goalPosition.x)) {
        this.velocity.x = -(abs(this.x - this.goalPosition.x) / 2);
      }
    }
    if (this.velocity.x < 0) {
      if (abs(this.velocity.x) > abs(this.x - this.goalPosition.x)) {
        this.velocity.x = abs(this.x - this.goalPosition.x) / 2;
      }
    }
    if (this.velocity.y > 0) {
      if (this.velocity.y > abs(this.y - this.goalPosition.y)) {
        this.velocity.y = -(abs(this.y - this.goalPosition.y) / 2);
      }
    }
    if (this.velocity.y < 0) {
      if (abs(this.velocity.y) > abs(this.y - this.goalPosition.y)) {
        this.velocity.y = abs(this.y - this.goalPosition.y) / 2;
      }
    }

    this.setAcceleration(newAcX, newAcY);
  }

  setGender() {
    this.currentGender = random(this.genders);
  }

  setDirection() {
    this.currentDirection = this.directions.front;
  }

  decideDirection(wrongVectors = ["none"]) {
    let oldAcX = this.velocity.x;
    let oldAcY = this.velocity.y;
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

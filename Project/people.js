import MoveableObject from "./moveableObject.js";

export default class People extends MoveableObject {
  constructor(x, y) {
    super(x, y, 50, 100, window.ENUMS.SHAPE.ROUND);
    this.currentGender = "";
    this.genders = ["boy-", "girl-"];
    this.currentDirection = "";
    this.directions = {
      front: "front",
      left: "left",
      right: "right",
      back: "back",
    };
    this.healthConditions = { healthy: "healthy", sick: "sick" };
    this.health = this.healthConditions.healthy;
    this.goalPosition = { x: 0, y: 0 };
    this.currentActivity = "goal";
    this.activities = ["wait", "goal", "rnd"];
    this.needActivity = false;
    this.normalAcceleration = 0.3;
    this.activityTimer = 0;
    this.activityMaxTimer = 0;
    this.isInfected = false;
    this.isActivePlayer = false;
  }

  init() {
    this.setGender();
    this.setDirection();
    //Front
    this.addImage(
      "boy-" + this.directions.front + this.healthConditions.healthy,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_BOY_FRONT
    );
    this.addImage(
      "girl-" + this.directions.front + this.healthConditions.healthy,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_GIRL_FRONT
    );
    //Left
    this.addImage(
      "boy-" + this.directions.left + this.healthConditions.healthy,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_BOY_LEFT
    );
    this.addImage(
      "girl-" + this.directions.left + this.healthConditions.healthy,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_GIRL_LEFT
    );
    //Right
    this.addImage(
      "boy-" + this.directions.right + this.healthConditions.healthy,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_BOY_RIGHT
    );
    this.addImage(
      "girl-" + this.directions.right + this.healthConditions.healthy,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_GIRL_RIGHT
    );
    //Back
    this.addImage(
      "boy-" + this.directions.back + this.healthConditions.healthy,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_BOY_BACK
    );
    this.addImage(
      "girl-" + this.directions.back + this.healthConditions.healthy,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_GIRL_BACK
    );

    //INFECTED

    this.addImage(
      "boy-" + this.directions.front + this.healthConditions.sick,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_BOY_FRONT_INFECTED
    );
    this.addImage(
      "girl-" + this.directions.front + this.healthConditions.sick,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_GIRL_FRONT_INFECTED
    );
    //Left
    this.addImage(
      "boy-" + this.directions.left + this.healthConditions.sick,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_BOY_LEFT_INFECTED
    );
    this.addImage(
      "girl-" + this.directions.left + this.healthConditions.sick,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_GIRL_LEFT_INFECTED
    );
    //Right
    this.addImage(
      "boy-" + this.directions.right + this.healthConditions.sick,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_BOY_RIGHT_INFECTED
    );
    this.addImage(
      "girl-" + this.directions.right + this.healthConditions.sick,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_GIRL_RIGHT_INFECTED
    );
    //Back
    this.addImage(
      "boy-" + this.directions.back + this.healthConditions.sick,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_BOY_BACK_INFECTED
    );
    this.addImage(
      "girl-" + this.directions.back + this.healthConditions.sick,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_GIRL_BACK_INFECTED
    );
    this.switchImage(this.currentGender + this.currentDirection + this.health);
    this.setMaxMinSpeed(random(1, 3), random(-3, -1));
    this.decideDirection();
    this.getNewGoalPosition();
    console.log(this.goalPosition);
  }

  getNewGoalPosition() {
    window.dispatchEvent(new CustomEvent("newGoalPosition", { detail: this }));
  }

  infect() {
    this.isActivePlayer = true;
    this.isInfected = true;
    this.health = this.healthConditions.sick;
  }

  draw() {
    this.updateImage();
    if (this.isActivePlayer) {
      image(window.ENUMS.IMAGE.VIRUS_1, 0, -35, 20, 20);
    }
  }

  updateImage() {
    this.updateDirection();
    this.switchImage(this.currentGender + this.currentDirection + this.health);
  }

  updateDirection() {
    let vel = this.getVelocity();
    if (abs(vel.x) > abs(vel.y)) {
      if (vel.x > 0) {
        this.currentDirection = this.directions.right;
      } else {
        this.currentDirection = this.directions.left;
      }
    } else {
      if (vel.y < 0) {
        this.currentDirection = this.directions.back;
      } else {
        this.currentDirection = this.directions.front;
      }
    }
    return this.currentDirection;
  }

  getVirusOutputVelocity() {
    let result = { dir: this.currentDirection, x: 0, y: 0 };
    switch (this.currentDirection) {
      case this.directions.front:
        result.x = 0;
        result.y = 5;
        break;
      case this.directions.back:
        result.x = 0;
        result.y = -5;
        break;
      case this.directions.left:
        result.x = -5;
        result.y = 0;
        break;
      case this.directions.right:
        result.x = 5;
        result.y = 0;
        break;
    }
    return result;
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
    // console.log("new Activity is: " + this.currentActivity);
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
          break;
        case "acy":
          oldAcY > 0 ? (newAcY = random(-2, -1)) : (newAcY = random(1, 2));
          break;
        case "none":
          newAcX = random(-2, 2);
          newAcY = random(-2, 2);
          break;
      }
    }
    newAcX === null ? (resultX = oldAcX) : (resultX = newAcX);
    newAcY === null ? (resultY = oldAcY) : (resultY = newAcY);
    this.setAcceleration(resultX, resultY);
  }
}

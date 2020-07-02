import MoveableObject from "./moveableObject.js";
import FlyingLetter from "./flyingLetter.js";
import Util from "./util.js";

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
    this.masked = "";
    this.virusCooldown = 0;
    this.healthConditions = { healthy: "healthy", sick: "sick" };
    this.health = this.healthConditions.healthy;
    this.goalPosition = { x: 0, y: 0 };
    this.currentActivity = "goal";
    this.activities = ["goal", "rnd", "away"];
    this.needActivity = false;
    this.normalAcceleration = 0.3;
    this.activityTimer = 0;
    this.activityMaxTimer = 0;
    this.isInfected = false;
    this.isActivePlayer = false;
    this.expressions = { sneeze: "sneeze", nothing: "nothing", speak: "speak" };
    this.currentExpression = this.expressions.nothing;
    this.expressionTimer = 0;
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

//masked people

this.addImage(
  "boy-" + this.directions.front + this.healthConditions.healthy + "masked",
  window.ENUMS.IMAGE.PEOPLEBOUNCY_BOY_FRONT_MASK
);
this.addImage(
  "girl-" + this.directions.front + this.healthConditions.healthy+ "masked",
  window.ENUMS.IMAGE.PEOPLEBOUNCY_GIRL_FRONT_MASK
);
//Left
this.addImage(
  "boy-" + this.directions.left + this.healthConditions.healthy+ "masked",
  window.ENUMS.IMAGE.PEOPLEBOUNCY_BOY_LEFT_MASK
);
this.addImage(
  "girl-" + this.directions.left + this.healthConditions.healthy+ "masked",
  window.ENUMS.IMAGE.PEOPLEBOUNCY_GIRL_LEFT_MASK
);
//Right
this.addImage(
  "boy-" + this.directions.right + this.healthConditions.healthy+ "masked",
  window.ENUMS.IMAGE.PEOPLEBOUNCY_BOY_RIGHT_MASK
);
this.addImage(
  "girl-" + this.directions.right + this.healthConditions.healthy+ "masked",
  window.ENUMS.IMAGE.PEOPLEBOUNCY_GIRL_RIGHT_MASK
);
//Back
this.addImage(
  "boy-" + this.directions.back + this.healthConditions.healthy+ "masked",
  window.ENUMS.IMAGE.PEOPLEBOUNCY_BOY_BACK_MASK
);
this.addImage(
  "girl-" + this.directions.back + this.healthConditions.healthy+ "masked",
  window.ENUMS.IMAGE.PEOPLEBOUNCY_GIRL_BACK_MASK
);

//INFECTED

this.addImage(
  "boy-" + this.directions.front + this.healthConditions.sick+ "masked",
  window.ENUMS.IMAGE.PEOPLEBOUNCY_BOY_FRONT_INFECTED_MASK
);
this.addImage(
  "girl-" + this.directions.front + this.healthConditions.sick+ "masked",
  window.ENUMS.IMAGE.PEOPLEBOUNCY_GIRL_FRONT_INFECTED_MASK
);
//Left
this.addImage(
  "boy-" + this.directions.left + this.healthConditions.sick+ "masked",
  window.ENUMS.IMAGE.PEOPLEBOUNCY_BOY_LEFT_INFECTED_MASK
);
this.addImage(
  "girl-" + this.directions.left + this.healthConditions.sick+ "masked",
  window.ENUMS.IMAGE.PEOPLEBOUNCY_GIRL_LEFT_INFECTED_MASK
);
//Right
this.addImage(
  "boy-" + this.directions.right + this.healthConditions.sick+ "masked",
  window.ENUMS.IMAGE.PEOPLEBOUNCY_BOY_RIGHT_INFECTED_MASK
);
this.addImage(
  "girl-" + this.directions.right + this.healthConditions.sick+ "masked",
  window.ENUMS.IMAGE.PEOPLEBOUNCY_GIRL_RIGHT_INFECTED_MASK
);
//Back
this.addImage(
  "boy-" + this.directions.back + this.healthConditions.sick+ "masked",
  window.ENUMS.IMAGE.PEOPLEBOUNCY_BOY_BACK_INFECTED_MASK
);
this.addImage(
  "girl-" + this.directions.back + this.healthConditions.sick+ "masked",
  window.ENUMS.IMAGE.PEOPLEBOUNCY_GIRL_BACK_INFECTED_MASK
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
      image(window.ENUMS.IMAGE.VIRUS_1, 0, -40, 25, 25);
    }
    if (
      this.currentExpression === this.expressions.sneeze &&
      this.isActivePlayer
    ) {
      switch (this.currentDirection) {
        case "left":
          line(-11, -10, -15, -8);
          line(-11, -12, -15, -14);
          line(-15, -11, -17, -11);
          break;
        case "right":
          line(11, -10, 15, -8);
          line(11, -12, 15, -14);
          line(15, -11, 17, -11);
          break;
        case "front":
          line(-1, -8, -3, -4);
          line(1, -8, 3, -4);
          line(0, -4, 0, -2);
          break;
      }
    }
    // text(this.currentExpression, 0, 25);
  }

  setMask() {
    this.masked = "masked";
  }

  isMasked() {
  if(this.masked === "masked"){
return true;
  }
return false;
  }

  updateImage() {
    this.updateDirection();
    this.switchImage(this.currentGender + this.currentDirection + this.health + this.masked);
  }

  updateDirection() {
    if (this.currentExpression != "speak") {
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
  }

  getVirusOutputVelocity() {  
      let result = { dir: this.currentDirection, x: 0, y: 0 };

    if(this.virusCooldown<=0) {
    let speed = 1;
    switch (this.currentExpression) {
      case this.expressions.nothing:
        speed = 2;
        break;
      case this.expressions.sneeze:
        speed = 7;
        break;
      case this.expressions.speak:
        speed = 4;
        break;
    }
    switch (this.currentDirection) {
      case this.directions.front:
        result.x = 0;
        result.y = speed;
        break;
      case this.directions.back:
        result.x = 0;
        result.y = -speed;
        break;
      case this.directions.left:
        result.x = -speed;
        result.y = 0;
        break;
      case this.directions.right:
        result.x = speed;
        result.y = 0;
        break;
    }
    if(this.isMasked()){
      result.x = result.x/2;
      result.y= result.y/2;
     // let r = random();
      // if(r<0.5){
      //   result.x=0;
      //   result.y=0;
      // }
    }
   this.virusCooldown=20;
  } 
  return result;
}

  switchActivity(activity = null) {
    if (activity === null) {
      this.currentActivity = random(this.activities);
    } else {
      this.currentActivity = activity;
    }
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
      case "talk":
        this.activityMaxTimer = 100;
        break;
        case "away":
          this.activityMaxTimer = 100;
          break;
    }

    this.activityTimer = 0;
    this.needActivity = false;
    // console.log("new Activity is: " + this.currentActivity);
  }

  updateActivity() {
    if (this.activityTimer > this.activityMaxTimer) {
      this.needActivity = true;
    } else {
      this.activityTimer++;
    }
    if (this.needActivity) this.switchActivity();
  }

  doActivity() {
    if (this.currentActivity != "talk") this.children = []; //LÖSCHT DAS KINDER ARRAY !!!!!!!!!!!!!!
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
      case "talk":
        let r = random();
        if (r < 0.04) {
          this.addChild(
            new FlyingLetter(0, -this.width / 2, Util.getRandomLetter())
          );
        }
        break;

        case "away":
          this.checkAway();
          this.setAccelerationAwayFromGoal();
          this.move();
          break;
    }
  }

  triggerSneezeRnd() {
    let rnd = random(1);
    if (rnd < 0.02 && this.currentExpression === this.expressions.nothing) {
      this.currentExpression = this.expressions.sneeze;
      if (this.isActivePlayer)
    //    window.ENUMS.SOUND.PEOPLEBOUNCY_GIRL_SNEEZE.play();
      this.expressionTimer = 25;
    }
  }
  updateExpression() {
    if (this.expressionTimer > 0) {
      this.expressionTimer--;
      if (this.expressionTimer <= 0) {
        this.currentExpression = this.expressions.nothing;
      }
    }
  }

  update() {
    this.updateActivity();
    this.doActivity();
    this.updateExpression();
    if(this.virusCooldown>0){
  this.virusCooldown--;
}
    if (this.isInfected) {
      this.triggerSneezeRnd();
    }
  }

  setGoalPosition(x, y) {
    this.goalPosition.x = x;
    this.goalPosition.y = y;
  }

  setActivityAway(x,y) {
    this.setGoalPosition(x,y);
this.switchActivity("away");
  }

  checkGoal() {
    if (abs(this.x - this.goalPosition.x) < 0.5) this.x = this.goalPosition.x;
    if (abs(this.y - this.goalPosition.y) < 0.5) this.y = this.goalPosition.y;
    if (this.x === this.goalPosition.x && this.y === this.goalPosition.y) {
      this.needActivity = true;
    }
  }

checkAway() {
let distance =Util.getDistanceBetweenObjects(this,this.goalPosition); 
if(distance>70){
  this.needActivity=true;
}
}

  setupTalk(people) {
    this.currentExpression = this.expressions.speak;
    this.expressionTimer = 100;
    this.switchActivity("talk");
    this.stop();
    let dx = abs(people.x - this.x);
    let dy = abs(people.y - this.y);
    if (dx > dy) {
      if (this.x > people.x) {
        this.currentDirection = this.directions.left;
        console.log("links");
      } else {
        this.currentDirection = this.directions.right;
        console.log("rechts");
      }
    } else {
      if (this.y > people.y) {
        this.currentDirection = this.directions.back;
        console.log("nach oben");
      } else {
        console.log("nach unten");

        this.currentDirection = this.directions.front;
      }
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
        this.velocity.x = (this.goalPosition.x - this.x) / 2;
      }
    }
    if (this.velocity.x < 0) {
      if (abs(this.velocity.x) > abs(this.x - this.goalPosition.x)) {
        this.velocity.x = (this.goalPosition.x - this.x) / 2;
      }
    }
    if (this.velocity.y > 0) {
      if (this.velocity.y > abs(this.y - this.goalPosition.y)) {
        this.velocity.y = (this.goalPosition.y - this.y) / 2;
      }
    }
    if (this.velocity.y < 0) {
      if (abs(this.velocity.y) > abs(this.y - this.goalPosition.y)) {
        this.velocity.y = (this.goalPosition.y - this.y) / 2;
      }
    }

    this.setAcceleration(newAcX, newAcY);
  }


  setAccelerationAwayFromGoal() {
    let newAcX = 0;
    let newAcY = 0;

    if (this.x < this.goalPosition.x) {
      newAcX = -this.normalAcceleration;
    } else if (this.x > this.goalPosition.x) {
      newAcX = +this.normalAcceleration;
    } else if (this.x === this.goalPosition.x) {
      newAcX = 0;
    }
    if (this.y < this.goalPosition.y) {
      newAcY = -this.normalAcceleration;
    } else if (this.y > this.goalPosition.y) {
      newAcY = +this.normalAcceleration;
    } else if (this.y === this.goalPosition.y) {
      newAcY = 0;
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

import People from "./people.js";

export default class Hannah extends People {
  constructor(x, y) {
    super(x, y);
  }

  init() {
    this.currentGender = "hannah-";
    this.setDirection();
    //Front

    this.addImage(
      "hannah-" + this.directions.front + this.healthConditions.healthy,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_HANNAH_FRONT
    );
    //Left

    this.addImage(
      "hannah-" + this.directions.left + this.healthConditions.healthy,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_HANNAH_LEFT
    );
    //Right

    this.addImage(
      "hannah-" + this.directions.right + this.healthConditions.healthy,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_HANNAH_RIGHT
    );
    //Back

    this.addImage(
      "hannah-" + this.directions.back + this.healthConditions.healthy,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_HANNAH_BACK
    );
    //Infected
    //Front

    this.addImage(
      "hannah-" + this.directions.front + this.healthConditions.sick,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_HANNAH_FRONT_INFECTED
    );
    //Left

    this.addImage(
      "hannah-" + this.directions.left + this.healthConditions.sick,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_HANNAH_LEFT_INFECTED
    );
    //Right

    this.addImage(
      "hannah-" + this.directions.right + this.healthConditions.sick,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_HANNAH_RIGHT_INFECTED
    );
    //Back

    this.addImage(
      "hannah-" + this.directions.back + this.healthConditions.sick,
      window.ENUMS.IMAGE.PEOPLEBOUNCY_HANNAH_BACK_INFECTED
    );

    this.switchImage(this.currentGender + this.currentDirection + this.health);
    this.setMaxMinSpeed(random(1, 3), random(-3, -1));
    this.decideDirection();
    this.getNewGoalPosition();
    console.log(this.goalPosition);
  }

  update() {}

  draw() {
    super.draw();
    image(window.ENUMS.IMAGE.PEOPLEBOUNCY_HEART, -1, -30, 20, 15);
  }
  updateImage() {
    this.switchImage(
      this.currentGender + this.directions.left + this.health + this.masked
    );
  }
}

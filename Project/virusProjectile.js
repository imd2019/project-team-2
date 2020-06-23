import MoveableObject from "./moveableObject.js";

export default class VirusProjectile extends MoveableObject {
  constructor(x, y, velX, velY, direction) {
    super(x, y, 50, 0, window.ENUMS.SHAPE.ROUND);
    let xSign = 1;
    let ySign = 1;
    velX > 0 ? (xSign = -1) : (xSign = 1);
    velY > 0 ? (ySign = -1) : (ySign = 1);
    this.setAcceleration(xSign * 0.1, ySign * 0.1);
    xSign < 0 ? (this.maxSpeed.x = velX) : (this.minSpeed.x = velX);
    ySign < 0 ? (this.maxSpeed.y = velY) : (this.minSpeed.y = velY);

    this.setVelocity(velX, velY);
    this.direction = direction;
  }

  init() {
    this.addImage("swarm", window.ENUMS.IMAGE.VIRUS_1);
    this.switchImage("swarm");
  }

  update() {
    this.move();
    if (this.velocity.x === 0 && this.velocity.y === 0) {
      this.remove();
    }
  }

  remove() {
    window.dispatchEvent(
      new CustomEvent("deleteVirusProjectile", { detail: this })
    );
  }
}

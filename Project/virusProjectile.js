import MoveableObject from "./moveableObject";

export default class VirusProjectile extends MoveableObject {
  constructor(x, y, velX, velY) {
    super(x, y, 50, 0, window.ENUMS.SHAPE.ROUND);
    this.setVelocity(velX, velY);
  }

  init() {
    this.addImage("swarm", window.ENUMS.IMAGE.VIRUS_1);
    this.switchImage("swarm");
  }

  update() {
    this.move();
  }
}

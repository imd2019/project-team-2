import InteractiveObject from "./interactiveObject.js";

export default class MoveableObject extends InteractiveObject {
  constructor(x, y, width, height, shape) {
    super(x, y, width, height, shape);
    this.velocity = { x: 0, y: 0 };
    this.maxSpeed = 0;
    this.minSpeed = 0;
    this.acceleration = { x: 0, y: 0 };
    this.rotVelocity = 0;
    this.rotMaxSpeed = 0;
    this.rotMinSpeed = 0;
    this.rotAcceleration = 0;
  }

  setCoordinats(x, y) {
    this.x = x;
    this.y = y;
  }

  move() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.rot += this.rotVelocity;

    this.velocity.x += this.acceleration.x;
    if (this.velocity.x >= this.maxSpeed) this.velocity.x = this.maxSpeed;
    if (this.velocity.x <= this.minSpeed) this.velocity.x = this.minSpeed;
    this.velocity.y += this.acceleration.y;
    if (this.velocity.y >= this.maxSpeed) this.velocity.y = this.maxSpeed;
    if (this.velocity.y <= this.minSpeed) this.velocity.y = this.minSpeed;
    this.rotVelocity += this.rotAcceleration;
    if (this.rotVelocity >= this.rotMaxSpeed)
      this.rotVelocity = this.rotMaxSpeed;
    if (this.rotVelocity <= this.rotMinSpeed)
      this.rotVelocity = this.rotMinSpeed;
  }

  setAcceleration(x, y) {
    this.acceleration.x = x;
    this.acceleration.y = y;
  }

  setMaxMinSpeed(max, min = 0) {
    this.maxSpeed = max;
    this.minSpeed = min;
  }

  setRotAcceleration(acc) {
    this.rotAcceleration = acc;
  }

  setRotMaxMinSpeed(max, min = 0) {
    this.rotMaxSpeed = max;
    this.rotMinSpeed = min;
  }

  getVelocity() {
    return { rot: this.rotVelocity, x: this.velocity.x, y: this.velocity.y };
  }

  stop() {
    this.velocity.x = 0;
    this.velocity.y = 0;
    this.acceleration.x = 0;
    this.acceleration.y = 0;
  }

  onHit() {}
}

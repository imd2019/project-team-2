import InteractiveObject from "./interactiveObject.js";

export default class MoveableObject extends InteractiveObject {
  constructor(x, y, width, height, shape) {
    super(x, y, width, height, shape);
    this.velocity = { x: 0, y: 0 };
    this.maxSpeed = { x: 0, y: 0 };
    this.minSpeed = { x: 0, y: 0 };
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
    if (this.velocity.x >= this.maxSpeed.x) this.velocity.x = this.maxSpeed.x;
    if (this.velocity.x <= this.minSpeed.x) this.velocity.x = this.minSpeed.x;
    this.velocity.y += this.acceleration.y;
    if (this.velocity.y >= this.maxSpeed.y) this.velocity.y = this.maxSpeed.y;
    if (this.velocity.y <= this.minSpeed.y) this.velocity.y = this.minSpeed.y;
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
    this.maxSpeed.x = max;
    this.maxSpeed.y = max;
    this.minSpeed.x = min;
    this.minSpeed.y = min;
  }

  setRotAcceleration(degree) {
    this.rotAcceleration = radians(degree);
  }

  setRotMaxMinSpeed(max, min = 0) {
    this.rotMaxSpeed = radians(max);
    this.rotMinSpeed = radians(min);
  }

  getVelocity() {
    return { rot: this.rotVelocity, x: this.velocity.x, y: this.velocity.y };
  }

  stop() {
    this.velocity.x = 0;
    this.velocity.y = 0;
    this.acceleration.x = 0;
    this.acceleration.y = 0;
    this.rotAcceleration = 0;
    this.rotVelocity = 0;
  }

  onHit() {}
}

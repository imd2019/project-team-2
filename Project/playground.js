import InteractiveObject from "./interactiveObject.js";

export default class Playground extends InteractiveObject {
  constructor(x, y, width, height, img) {
    super(x, y, width, height, window.ENUMS.SHAPE.RECT);
    this.addImage("img", img);
    this.switchImage("img");
    this.hitboxen = [];
  }

  addHitbox(x, y, width, height, shape) {
    let hitbox = new InteractiveObject(x, y, width, height, shape);
    this.hitboxen.push(hitbox);
    this.addChild(hitbox);
  }

  isPointOnPlayground(x, y) {
    for (let element of this.hitboxen) {
      if (element.hitTest(x, y)) return true;
    }
    return false;
  }

  getRealRandomPosition() {
    let pos = this.getRealXY();
    let x = 0;
    let y = 0;
    while (!this.isPointOnPlayground(x, y)) {
      x = random(pos.x, pos.x + this.width);
      y = random(pos.y, pos.y + this.height);
    }
    return { x: x, y: y };
  }

  drawHitbox() {
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
    this.drawHitbox();
  }
}

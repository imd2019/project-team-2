import { DisplayObject } from "./displayObject.js";
import Util from "./util.js";

export default class InteractiveObject extends DisplayObject {
  constructor(x, y, width, height, shape) {
    super(x, y);
    if (this.width < 0 || this.height < 0) {
      console.error(
        "Die Höhe oder Breite eines Objektes sollten niemals negativ sein!!!"
      );
    }
    this.width = width;
    this.shape = shape;
    this.shape === window.ENUMS.SHAPE.ROUND
      ? (this.height = this.width)
      : (this.height = height);
    this.setImageSize(this.width, this.height);
    this.enabled = true;
    this.children = [];
    this.hovered = false;
    this.waitStarttime = 0;
    this.waitTime = 0;
    this.rotationOffsetX = 0;
    this.rotationOffsetY = 0;
    this.scaleOffsetX = 0;
    this.scaleOffsetY = 0;
    this.initialized = false;
  }

  onInit() {
    if (this.enable && !this.initialized) {
      this.initialized = true;
      this.init();
      for (let element of this.children) {
        if (element instanceof InteractiveObject) {
          element.onInit();
        } else if (element instanceof DisplayObject) {
          if (element.enable) {
            element.init();
          }
        }
      }
    }
  }

  enable(hide = false) {
    this.enabled = true;
    this.onEnable();
    this.hide(hide);
  }
  onEnable() {}
  onDisable() {}

  disable(hide = true) {
    this.enabled = false;
    this.onDisable();
    this.hide(hide);
  }

  hitTest(x, y, debug = false) {
    if (this.enabled) {
      let realCord = this.getRealXY();
      switch (this.shape) {
        case window.ENUMS.SHAPE.RECT:
          let leftX = realCord.x;
          let rightX = leftX + this.width;
          let topY = realCord.y;
          let botY = topY + this.height;
          let rotatedVec = this.rotateRealPoint(x, y, debug);
          if (debug) console.log(mouseX, mouseY);
          if (debug) console.log(rotatedVec);
          if (debug) {
            push();
            noFill();
            stroke("red");
            translate(leftX, topY);
            rotate(this.getRealRotation());
            rect(0, 0, this.width, this.height);
            pop();
          }
          if (
            rotatedVec.x >= leftX &&
            rotatedVec.x <= rightX &&
            rotatedVec.y >= topY &&
            rotatedVec.y <= botY
          ) {
            return true;
          }
          break;
        case window.ENUMS.SHAPE.ROUND:
          let dx = abs(x - realCord.x);
          let dy = abs(y - realCord.y);
          let d = Util.betrag([dx, dy]);
          if (d <= this.width / 2) {
            return true;
          }
          break;
      }
    }
    return false;
  }

  scaleSize(amount) {
    this.scale = amount;
    this.setHitboxSize(50 * amount, 50 * amount);
  }

  setHitboxSize(w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
      return true;
    }
    console.error("Die Höhe und Breite müssen positiv sein");
    return false;
  }

  resize(sizeX, sizeY) {
    this.setImageSize(sizeX, sizeY);
    this.setDomSize(sizeX, sizeY);
    this.setHitboxSize(sizeX, sizeY);
  }

  setRotationOffset(x, y) {
    this.rotationOffsetX = x;
    this.rotationOffsetY = y;
  }

  setScaleOffset(x, y) {
    this.scaleOffsetX = x;
    this.scaleOffsetY = y;
  }

  onUpdate() {
    if (this.waitStarttime === 0) {
      if (this.enabled) {
        this.update();
        for (let element of this.children) {
          if (element instanceof InteractiveObject) {
            element.onUpdate();
          } else if (element instanceof DisplayObject) {
            element.update();
          }
        }
      }
    } else {
      let timeNow = Date.now();
      if (timeNow >= this.waitStarttime + this.waitTime) {
        this.enable();
        this.waitStarttime = 0;
      }
    }
  }

  wait(sek) {
    this.waitTime = sek * 1000;
    this.waitStarttime = Date.now();
    this.disable(false);
  }

  onKeyPressed() {
    if (this.enabled) {
      for (let element of this.children) {
        if (element instanceof InteractiveObject) {
          element.onKeyPressed();
        }
      }
      this.keyPressed();
    }
  }

  keyPressed() {}

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      for (let element of this.children) {
        if (element instanceof InteractiveObject) {
          element.mouseClicked();
        }
      }
      this.clicked();
    }
  }

  clicked() {}

  mousePressed() {
    if (this.hitTest(mouseX, mouseY)) {
      for (let element of this.children) {
        if (element instanceof InteractiveObject) {
          element.mousePressed();
        }
      }
      this.pressed();
    }
  }

  pressed() {}

  mouseReleased() {
    if (this.hitTest(mouseX, mouseY)) {
      for (let element of this.children) {
        if (element instanceof InteractiveObject) {
          element.mouseReleased();
        }
      }
      this.released();
    }
  }

  released() {}

  mouseHover() {
    if (this.hitTest(mouseX, mouseY)) {
      this.hovered = true;
      for (let element of this.children) {
        if (element instanceof InteractiveObject) {
          element.mouseHover();
        }
      }
      this.hover();
    } else {
      if (this.hovered) {
        this.hoverEnd();
        this.hovered = false;
      }
    }
  }

  hover() {}

  hoverEnd() {}

  addChild(obj) {
    if (obj instanceof DisplayObject) {
      obj.parent = this;
    }
    this.children.push(obj);
  }

  removeChild(obj) {
    let index = this.children.indexOf(obj);
    if (index >= 0) {
      obj.parent = undefined;
      this.children.splice(index, 1);
      return true;
    }
    console.error("There is no child " + obj);
    return false;
  }

  display() {
    if (this.visible) {
      push();
      translate(this.x + this.offSetX, this.y + this.offSetY);
      translate(this.scaleOffsetX, this.scaleOffsetY);
      scale(this.scale);
      translate(-this.scaleOffsetX, -this.scaleOffsetY);
      translate(this.rotationOffsetX, this.rotationOffsetY);
      rotate(this.rot);
      translate(-this.rotationOffsetX, -this.rotationOffsetY);
      if (this.currentImage != undefined) {
        if (this.shape === window.ENUMS.SHAPE.ROUND) imageMode(CENTER);
        if (this.shape === window.ENUMS.SHAPE.RECT) imageMode(CORNER);
        image(this.currentImage, 0, 0, this.imageWidth, this.imageHeight);
      }
      this.draw();
      for (let element of this.children) {
        if (element instanceof DisplayObject) {
          element.display();
        }
      }
      pop();
    }
  }

  rotateRealPoint(x, y, debug = false) {
    let p = this.parent;
    let vector = [x - this.x, y - this.y];
    vector = Util.vecRotate(vector, -this.rot);
    vector[0] += this.x;
    vector[1] += this.y;
    while (p != undefined) {
      let pvector = [vector[0] - p.x, vector[1] - p.y];

      vector = Util.vecRotate(pvector, -p.rot);

      vector[0] += p.x;
      vector[1] += p.y;
      p = p.parent;
    }

    return {
      x: vector[0],
      y: vector[1],
    };
  }

  getRealRotation() {
    let result = this.rot;
    let p = this.parent;
    while (p != undefined) {
      result += p.rot;
      p = p.parent;
    }
    return result;
  }
}

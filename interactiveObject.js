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
  }

  onInit() {
    if (this.enable) {
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
    this.hide(hide);
  }

  disable(hide = true) {
    this.enabled = false;
    this.hide(hide);
  }

  hitTest(x, y) {
    if (this.enabled) {
      let realCord = this.getRealXY();
      switch (this.shape) {
        case window.ENUMS.SHAPE.RECT:
          let leftX = realCord.x;
          let rightX = leftX + this.width;
          let topY = realCord.y;
          let botY = topY + this.height;
          let rotatedVec = this.rotateRealPoint(x, y);
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

  onUpdate() {
    if (this.enable) {
      this.update();
      for (let element of this.children) {
        if (element instanceof DisplayObject) {
          element.onUpdate();
        }
      }
    }
  }
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
      scale(this.scale);
      rotate(this.rot);
      if (this.currentImage != undefined) {
        if (this.shape === window.ENUMS.SHAPE.ROUND) imageMode(CENTER);
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

  rotateRealPoint(x, y) {
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

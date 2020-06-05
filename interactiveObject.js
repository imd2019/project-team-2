import { DisplayObject } from "./displayObject.js";

export default class InteractiveObject extends DisplayObject {
  constructor(x, y, width, height, shape) {
    super(x, y);
    this.width = width;
    this.height = height;
    this.setImageSize(width, height);
    this.shape = shape;
    this.enabled = true;
    this.children = [];
    this.hovered = false;
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
      switch (this.shape) {
        case window.ENUMS.SHAPE.RECT:
          if (
            x > this.x &&
            x < this.x + this.width &&
            y > this.y &&
            y < this.y + this.height
          ) {
            return true;
          }
          break;
        case window.ENUMS.SHAPE.ROUND:
          break;
      }
    }
    return false;
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
      super.display();
      for (let element of this.children) {
        if (element instanceof DisplayObject) {
          element.display();
        }
      }
    }
  }
}

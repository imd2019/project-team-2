import MoveableObject from "./moveableObject.js";

export default class People extends MoveableObject {
  constructor(x, y) {
    super(x, y, 50, 100, window.ENUMS.SHAPE.RECT);
  }
  init() {
    addImage();
    switchImage();
  }
}

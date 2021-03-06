import MoveableObject from "./moveableObject.js";

export default class Virus extends MoveableObject {
  constructor(x, y) {
    super(x, y, 130, 0, window.ENUMS.SHAPE.ROUND);
    this.dragDrop = false;
  }
  init() {
    this.addImage("1", window.ENUMS.IMAGE.VIRUS_1);
    this.switchImage("1");
  }

  update() {
    if (this.dragDrop) {
      this.setCoordinats(mouseX, mouseY);
      this.resize(55, 55);
    }
  }

  pressed() {
    this.dragDrop = true;
  }

  released() {
    this.dragDrop = false;
    window.dispatchEvent(new CustomEvent("VirusReleased"));
  }
}

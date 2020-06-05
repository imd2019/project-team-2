import InteractiveObject from "./interactiveObject.js";

export class DisplayObject {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.imageWidth = 100;
    this.imageHeight = 100;
    this.rot = 0;
    this.scale = 1;
    this.images = {};
    this.currentImage = undefined;
    this.offSetX = 0;
    this.offSetY = 0;
    this.visible = true;
    this.parent = undefined;
  }
  //Malt Objekte über ein evtl drunterliegendes Bild
  draw() {}

  //Macht das Objekt unsichtbar
  hide(hide = true) {
    this.visible = hide ? false : true;
  }

  //Fügt ein neues Bild der BilderListe hinzu unter dem endsprechenden Schlüssel
  addImage(key, image) {
    this.images[key] = image;
  }

  //Wechselt das aktuelle Bild auf das Bild des entsprechenden Keys aus der Bilderliste
  switchImage(key) {
    if (this.images.hasOwnProperty(key)) {
      this.currentImage = this.images[key];
      return true;
    }

    console.error("There is no Image named " + key);
    return false;
  }

  //Setzt die größen des aktuell gezeichneten Bildes neu
  setImageSize(width, height) {
    this.imageWidth = width;
    this.imageHeight = height;
  }

  //Setze das bildliche Offset des Objektes
  setOffset(x, y) {
    this.offSetX = x;
    this.offSetY = y;
  }

  display() {
    if (this.visible) {
      push();
      translate(this.x + this.offSetX, this.y + this.offSetY);
      scale(this.scale);
      rotate(this.rot);
      if (this.currentImage != undefined) {
        if (this instanceof InteractiveObject) {
          if (this.shape === window.ENUMS.SHAPE.ROUND) imageMode(CENTER);
        }
        image(this.currentImage, 0, 0, this.imageWidth, this.imageHeight);
      }
      this.draw();
      pop();
    }
  }
  getRealXY() {
    let result = { x: this.x, y: this.y };
    let p = this.parent;
    while (p != undefined) {
      result.x += p.x;
      result.y += p.y;
      p = p.parent;
    }
    return result;
  }
}

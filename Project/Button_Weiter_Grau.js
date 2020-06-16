import { DisplayObject } from "./displayObject.js";
// ist ja eigentlich kein Button, da zu keiner Zeit klickbar
// soll ich es so lösen, dass es ein Bild ist und dann ausgetauscht wird oder kann man bei
//this.weiterButton.disable(); definieren, dass es nicht angezeigt wird sondern stattdessen eben das Bild Button_Weiter_grau...?
export default class Button_Weiter_Grau extends DisplayObject {
  constructor(x, y) {
    super(x, y, 110, 120); //WAS MUSS IN SUPE? NUR x,y? wo gebe ich die Größe dann an?
    this.color = color(125, 125, 125);
  }

  init() {
    this.addImage("WeiterGrau", window.ENUMS.IMAGE.BUTTON_WEITER_GRAU);
    this.switchImage("WeiterGrau");
  }

  draw() {}
}

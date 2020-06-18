import Button from "./Button.js";

export default class Button_MentorVirus extends Button {
  constructor(x, y) {
    super(x, y, 95, 0, window.ENUMS.SHAPE.ROUND, "MentorVirus");
    this.color = color(125, 125, 125);
  }

  init() {
    this.addImage("MentorVirus", window.ENUMS.IMAGE.BUTTON_MENTORVIRUS);
    this.switchImage("MentorVirus");
    this.addImage("MentorVirusText", window.ENUMS.IMAGE.BUTTON_MENTORVIRUS);
  }

  draw() {
    if (this.enabled) {
      this.switchImage("MentorVirus");
    } else {
      this.switchImage("MentorVirusText");    
    }
  }

  released() {
    console.log("released");
  }

  pressed() {
    console.log("pressed");
  }

  animate() {
    this.setRotInDegree(-90 * this.animationProgress);
  }

  hoverEnd() {}
}

import Button from "./Button.js";

export default class Button_MentorVirus extends Button {
  constructor(x, y) {
    super(x, y, 200, 250, window.ENUMS.SHAPE.RECT, "MentorVirus");
   // this.color = color(125, 125, 125);
  }

  init() {
    this.addImage("MentorVirus", window.ENUMS.IMAGE.BUTTON_MENTORVIRUS);
    this.switchImage("MentorVirus");
    this.addImage("MentorVirusText", window.ENUMS.IMAGE.BUTTON_MENTORVIRUSTEXT);
  }

  onEnable() {
    this.switchImage("MentorVirus");
  }
  onDisable() {
    
  }

  released() {
    console.log("released");
  }

  pressed() {
    console.log("pressed");
  }

  animate() {
    this.switchImage("MentorVirusText") * this.animationProgress;
  }

  hoverEnd() {}
}

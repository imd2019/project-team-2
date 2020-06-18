import Button from "./Button.js";

export default class Button_MentorVirus extends Button {
  constructor(x, y) {
    super(x, y, 175, 160, window.ENUMS.SHAPE.RECT, "MentorVirus");
   // this.color = color(125, 125, 125);
   this.text=false;
  }

  init() {
    this.addImage("MentorVirus", window.ENUMS.IMAGE.BUTTON_MENTORVIRUS);
    this.switchImage("MentorVirus");
  }

  onEnable() {
    this.switchImage("MentorVirus");
  }
  onDisable() {
    this.switchImage("MentorVirus");

  }

  released() {
    console.log("released");
  }

  pressed() {
    console.log("pressed");
  }

  clicked() {
    if(this.text==false) {
    this.switchImage("MentorVirusText");
    this.resize(175, 160);
    this.text=true;
  } else {
    this.switchImage("MentorVirus");
    this.resize(175, 160);
    this.text=false;
  }
}

  hoverEnd() {}
}

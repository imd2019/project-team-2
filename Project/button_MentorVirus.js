import Button from "./Button.js";

export default class Button_MentorVirus extends Button {
  constructor(x, y) {
    super(x, y, 330, 250, window.ENUMS.SHAPE.RECT, "MentorVirus");
   // this.color = color(125, 125, 125);
   this.text=false;
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
    this.resize(330,250);
    this.text=true;
  } else {
    this.switchImage("MentorVirus");
    this.resize(330,250);
    this.text=false;
  }
}

  hoverEnd() {}
}

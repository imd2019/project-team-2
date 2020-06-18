import Button from "./Button.js";

export default class Button_MentorVirusText extends Button {
  constructor(x, y) {
    super(x, y, 200, 150, window.ENUMS.SHAPE.RECT, "MentorVirusText");
   // this.color = color(125, 125, 125);
   this.text=false;
  }

  init() {

    this.addImage("MentorVirusText", window.ENUMS.IMAGE.BUTTON_MENTORVIRUSTEXT);
    this.switchImage("MentorVirusText");
  }

  onEnable() {
    this.switchImage("MentorVirusText");
  }
  onDisable() {
    this.switchImage("MentorVirusText");

  }

  released() {
    console.log("released");
  }

  pressed() {
    console.log("pressed");
  }

  clicked() {
 //   if(this.text==false) {
//    this.switchImage("MentorVirusText");
//    this.resize(200, 160);
 //   this.text=true;
 // } else {
//    this.switchImage("MentorVirusText");
//    this.resize(200, 160);
//    this.text=false;
  //}
}

  hoverEnd() {}
}

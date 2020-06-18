import Button from "./Button.js";
import Button_MentorVirusText from "./button_MentorVirusText.js";

export default class Button_MentorVirus extends Button {
  constructor(x, y) {
    super(x, y, 175, 160, window.ENUMS.SHAPE.RECT, "MentorVirus");
   // this.color = color(125, 125, 125);
   this.text=false;
   this.mentorVirusText;
  }

  init() {
    this.addImage("MentorVirus", window.ENUMS.IMAGE.BUTTON_MENTORVIRUS);
    
    this.switchImage("MentorVirus");
    this.mentorVirusText = new Button_MentorVirusText (-200,0);
    this.addChild(this.mentorVirusText); 
    console.log(this);
  }


  released() {
    console.log("released");
  }

  pressed() {
    console.log("pressed");
  }

  clicked() {
    if(this.text==false) {
    this.mentorVirusText.enable();
    this.text=true;
  } else {
    this.mentorVirusText.disable();
    this.text=false;
  }
}

  hoverEnd() {}
}

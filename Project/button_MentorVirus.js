import Button from "./Button.js";
import Button_MentorVirusText from "./button_MentorVirusText.js";

export default class Button_MentorVirus extends Button {
  constructor(x, y) {
    super(x, y, 165, 165, window.ENUMS.SHAPE.RECT, "MentorVirus");
   // this.color = color(125, 125, 125);
   this.text=true;
   this.mentorVirusText;
  }

  init() {
    this.addImage("MentorVirus", window.ENUMS.IMAGE.BUTTON_MENTORVIRUS);
    
    this.switchImage("MentorVirus");
    this.mentorVirusText = new Button_MentorVirusText (-150,70);
    this.addChild(this.mentorVirusText); 
    this.mentorVirusText.enable();
    console.log(this);
    this.updateText();
  }


  released() {
    console.log("released");
  }

  pressed() {
    console.log("pressed");
  }

  updateText(string) {
    this.mentorVirusText.textbubble = string;
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


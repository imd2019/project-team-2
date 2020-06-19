import Button from "./Button.js";
import Button_MentorVirusText from "./button_MentorVirusText.js";

export default class Button_MentorVirus extends Button {
  constructor(x, y) {
    super(x, y, 165, 165, window.ENUMS.SHAPE.RECT, "MentorVirus");
    // this.color = color(125, 125, 125);
    this.text = true;
    this.mentorVirusText = new Button_MentorVirusText(-150, 70);
  }

  init() {
    this.addImage("MentorVirus", window.ENUMS.IMAGE.BUTTON_MENTORVIRUS);
    this.switchImage("MentorVirus");
    this.addChild(this.mentorVirusText);
    this.mentorVirusText.enable();
    console.log(this);
  }

  updateText(string) {
    this.mentorVirusText.textbubble = string;
  }

  showText() {
    this.mentorVirusText.enable();
    this.text = true;
  }

  clicked() {
    if (this.text == false) {
      this.showText();
    } else {
      this.mentorVirusText.disable();
      this.text = false;
    }
  }

  hoverEnd() {}
}

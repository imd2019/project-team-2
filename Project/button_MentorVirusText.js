import Button from "./Button.js";

export default class Button_MentorVirusText extends Button {
  constructor(x, y) {
    super(x, y, 200, 150, window.ENUMS.SHAPE.RECT, "MentorVirusText");
   // this.color = color(125, 125, 125);
   this.ausgabeText="hi";
  }

  init() {

    this.addImage("MentorVirusText", window.ENUMS.IMAGE.BUTTON_MENTORVIRUSTEXT);
    this.switchImage("MentorVirusText");
  }


  released() {
  }

  draw(){
    fill(0);
    textSize(17);
    textFont(window.ENUMS.FONT.MARKER_FELT);
   
    text(this.ausgabeText, 20, 30, this.width-30,this.height-30);
  }

  pressed() {
  }

  clicked() {
}

  hoverEnd() {}
}

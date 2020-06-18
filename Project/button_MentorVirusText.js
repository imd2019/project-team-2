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


  released() {
  }

  draw(){
    fill(0);
    textSize(17);
    textFont(window.ENUMS.FONT.MARKER_FELT);
   
    text("hxxxxxxxx xxxxxxxxx xxxxxxxxxxxxxxxx xxxxxxxxx xxxxxxxxxxxxxx xxxxxxxxi", 10, 28, this.width-20,this.height-20);
  }

  pressed() {
  }

  clicked() {
}

  hoverEnd() {}
}

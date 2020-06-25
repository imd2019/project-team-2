import Button from "./Button.js";

export default class Button_MentorVirusText extends Button {
  constructor(x, y) {
    super(x, y, 210, 150, window.ENUMS.SHAPE.RECT, "MentorVirusText");
    // this.color = color(125, 125, 125);
    this.textbubble = "";
  }

  init() {
    this.addImage("MentorVirusText", window.ENUMS.IMAGE.BUTTON_MENTORVIRUSTEXT);
    this.switchImage("MentorVirusText");
  }

  released() {}

  draw() {
    fill("white");
    textSize(20);
    textFont(window.ENUMS.FONT.MARKER_FELT);
    textAlign(CENTER);
    text(this.textbubble, 25, 20, this.width - 75, this.height - 50);
  }

  pressed() {}

  clicked() {}

  hoverEnd() {}
}

import Button from "./Button.js";
import Button_MentorVirusText from "./button_MentorVirusText.js";
import Util from "./util.js";

export default class Button_MentorVirus extends Button {
  constructor(x, y) {
    super(x, y, 165, 165, window.ENUMS.SHAPE.ROUND, "MentorVirus");
    // this.color = color(125, 125, 125);
    this.text = true;
    this.mentorVirusText = new Button_MentorVirusText(-225, -10);
    this.wiggleTime = 0;
    this.wiggleSpeed = -0.16;
    this.wiggleProgress = 0;
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
    this.setRotInDegree(0);
  }
  hideText() {
    this.mentorVirusText.disable();
    this.text = false;
  }

  clicked() {
    if (this.text == false) {
      this.showText();
    } else {
      this.hideText();
    }
  }

  updateAnimationValues() {
    this.wiggleTime += this.wiggleSpeed;
    if (this.wiggleTime <= -1 || this.wiggleTime >= 1)
      this.wiggleSpeed = this.wiggleSpeed * -1;
    if (this.wiggleSpeed > 0) {
      if (this.wiggleTime < 0) {
        this.wiggleProgress = Util.easeOutQuad(abs(this.wiggleTime)) * -1;
      } else {
        this.wiggleProgress = Util.easeOutQuad(this.wiggleTime);
      }
    } else {
      if (this.wiggleTime > 0) {
        this.wiggleProgress = Util.easeOutQuad(this.wiggleTime);
      } else {
        this.wiggleProgress = Util.easeOutQuad(abs(this.wiggleTime)) * -1;
      }
    }
    console.log(this.wiggleProgress);
  }

  animate() {
    if (this.text === false && this.hovered === true) {
      this.setRotInDegree(0 + 15 * this.wiggleProgress);
    }
  }

  hoverEnd() {
    this.wiggleTime = 0;
    this.setRotInDegree(0);
  }
}

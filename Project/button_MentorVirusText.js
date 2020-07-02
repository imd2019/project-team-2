import Button from "./Button.js";
import Util from "./util.js";

export default class Button_MentorVirusText extends Button {
  constructor(x, y) {
    super(x, y, 210, 150, window.ENUMS.SHAPE.RECT, "MentorVirusText");
    // this.color = color(125, 125, 125);
    this.textbubble = "";
    this.extend = false;
    this.animationSpeed = 0.1;
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
    if (this.animationProgress === 1)
      text(this.textbubble, 25, 20, this.width - 75, this.height - 50);
  }

  animate() {
    this.setImageSize(
      210 * this.animationProgress,
      150 * this.animationProgress
    );
    this.offSetX = -this.x + this.x * this.animationProgress;
    this.animationTime < 0.2 ? this.hide() : this.hide(false);
  }

  isRetracting() {
    if(!this.extend) {
      if(this.animationTime==0){
      return false;
      }
    }
      return true;
  }

  updateAnimationValues() {
    if (this.extend && this.animationTime < 1) {
      this.animationTime += this.animationSpeed;
      if (this.animationTime > 1) this.animationTime = 1;
      this.animationProgress = Util.easeOutSine(this.animationTime);
    } else if (this.extend === false && this.animationTime > 0) {
      this.animationTime -= this.animationSpeed;
      if (this.animationTime < 0) this.animationTime = 0;
      this.animationProgress = 1 - Util.easeOutSine(1 - this.animationTime);
    }
  }

  extract() {
    this.extend = true;
  }
  retract() {
    this.extend = false;
  }

  pressed() {}

  clicked() {}

  hoverEnd() {}
}

import Button from "./Button.js";

export default class Button_Map extends Button {
  constructor(x, y, switchSceneId) {
    super(x, y, 207, 60, window.ENUMS.SHAPE.ROUND, "nextScene");
    this.transperency = 0;
    this.color = color(100, 100, 100, this.transperency);
    this.switchSceneId = switchSceneId;
  }

  draw() {
    noStroke();
    fill(this.color);
    ellipse(0, 0, this.width);
  }

  animate() {
    this.color = color(255, 255, 255, 0 + 100 * this.animationProgress);
  }

  onDisable() {
    this.transperency = 100;
    this.color = color(100, 100, 100, this.transperency);
  }
  clicked() {
    window.dispatchEvent(
      new CustomEvent(this.event, { detail: this.switchSceneId })
    );
  }
}

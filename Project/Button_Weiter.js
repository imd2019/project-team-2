import Button from "./Button.js";

export default class Button_Weiter extends Button {
  constructor(x, y, event) {
    super(x, y, 110, 120, window.ENUMS.SHAPE.RECT, event);
    this.switchSceneId = null;
    this.addImage("Weiter", window.ENUMS.IMAGE.BUTTON_WEITER_1);
    this.switchImage("Weiter");
    this.addImage("WeiterGrau", window.ENUMS.IMAGE.BUTTON_WEITER_GRAU);
  }

  init() {}

  draw() {}
  onEnable() {
    this.switchImage("Weiter");
  }
  onDisable() {
    this.switchImage("WeiterGrau");
  }
  released() {}
  pressed() {}
  animate() {
    this.setImageSize(
      this.width + 25 * this.animationProgress,
      this.height - 15 * this.animationProgress
    );
  }
  hoverEnd() {}
  clicked() {
    window.dispatchEvent(
      new CustomEvent(this.event, { detail: this.switchSceneId })
    );
  }
}

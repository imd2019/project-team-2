import Scene from "./scene.js";

export default class Endscreen extends Scene {
  constructor() {
    super(window.ENUMS.SCENE_NAMES.END_SCREEN);
    this.playVideo = false;
  }
  init() {
    this.addDom("end", window.ENUMS.DOM.PEOPLE_BOUNCY_END);
    this.playVideo = true;
  }
  update() {
    if (this.playVideo) {
      this.switchDom("end");
      this.showDom();
      this.setDomSize(window.ENUMS.SIZE.X, window.ENUMS.SIZE.Y);
      this.setDomOffset(window.ENUMS.POS.X, window.ENUMS.POS.Y);
      this.playDom();
      this.wait(3);
      this.playVideo = false;
    } else {
      this.hideDom();
    }
  }
}

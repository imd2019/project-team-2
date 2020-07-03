import Scene from "./scene.js";

export default class Endscreen extends Scene {
  constructor() {
    super(window.ENUMS.SCENE_NAMES.END_SCREEN);
    this.playVideo = false;
    this.datafetched = false;
    this.scores = [];
  }
  init() {
    this.addDom("end", window.ENUMS.DOM.PEOPLE_BOUNCY_END);
    this.playVideo = true;
  }
  update() {
    if (!this.datafetched) {
      window.dispatchEvent(new CustomEvent("getGameScores", { detail: this }));
      this.datafetched = true;
    }
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
  draw() {
    if (this.playVideo) return;
    if (this.scores.length > 0)
      text(this.scores.people_bouncy[0] + "", 100, 100);
  }
}

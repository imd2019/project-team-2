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
      //   this.switchDom("end");
      //   this.showDom();
      //   this.setDomSize(window.ENUMS.SIZE.X, window.ENUMS.SIZE.Y);
      //   this.setDomOffset(window.ENUMS.POS.X, window.ENUMS.POS.Y);
      //   this.playDom();
      //   this.wait(3);
      this.playVideo = false;
    } else {
      //   this.hideDom();
    }
  }
  draw() {
    if (this.playVideo) return;
    let midScreen = {
      x: window.ENUMS.SIZE.X / 2,
      y: window.ENUMS.SIZE.Y / 2,
    };
    fill(255);
    textSize(40);
    textFont(window.ENUMS.FONT.MARKER_FELT);
    textAlign(CENTER);
    text("Oh Nein, du hast deine Freundin Hannah infiziert!", midScreen.x, 70);
    textSize(27);
    textFont(window.ENUMS.FONT.FRUTIGER);

    text(
      "Das sollte dir mit deinen Freunden in Wirklichkeit nicht passieren.\n Wenn du husten oder niesen musst, dann halte Abstand von anderen Menschen.",
      midScreen.x - 550,
      120,
      1100
    );
    text("Händewaschen", midScreen.x - 400, 270);
    text("Versuche: " + this.scores.haendewaschen[0], midScreen.x - 400, 320);
    imageMode(CENTER);
    image(window.ENUMS.IMAGE.HAND_HEATMAP, midScreen.x - 400, 370, 300, 300);
  }
}

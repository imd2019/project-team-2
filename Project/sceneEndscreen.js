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
    let midScreen = {
      x: window.ENUMS.SIZE.X / 2,
      y: window.ENUMS.SIZE.Y / 2,
    };
    fill(255);
    textSize(50);
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

    //Händewaschen
    textSize(32);
    textFont(window.ENUMS.FONT.MARKER_FELT);
    text("Händewaschen", midScreen.x - 400, 270);
    textFont(window.ENUMS.FONT.FRUTIGER);
    textSize(27);
    text("Deine Fehlversuche: ", midScreen.x - 420, 320);
    textFont(window.ENUMS.FONT.MARKER_FELT);
    text(`${this.scores.haendewaschen[0]}`, midScreen.x - 290, 320);
    textFont(window.ENUMS.FONT.FRUTIGER);

    imageMode(CENTER);
    image(
      window.ENUMS.IMAGE.ENDSCREEN_HEATMAP,
      midScreen.x - 370,
      490,
      370,
      250
    );

    image(
      window.ENUMS.IMAGE.ENDSCREEN_SCHRIFT,
      midScreen.x - 380,
      720,
      370,
      290
    );

    //People Bouncy
    textSize(32);
    textFont(window.ENUMS.FONT.MARKER_FELT);
    text("People-Bouncy", midScreen.x + 290, 270);
    textFont(window.ENUMS.FONT.FRUTIGER);
    imageMode(CENTER);

    textSize(27);
    textAlign(CENTER);
    text("Level 1: ", midScreen.x + 35, 355);
    textSize(20);
    image(
      window.ENUMS.IMAGE.PEOPLEBOUNCY_LEVEL1,
      midScreen.x + 205,
      350,
      370,
      250
    );
    textAlign(LEFT);
    text(
      `In einem engen Raum ohne Abstand hast du          infizieren können.`,
      midScreen.x + 300,
      380,
      300
    );
    textFont(window.ENUMS.FONT.MARKER_FELT);
    text(`${this.scores.people_bouncy[0]}%`, midScreen.x + 450, 405, 400);
    textFont(window.ENUMS.FONT.FRUTIGER);
    textSize(27);
    textAlign(CENTER);
    text("Level 2: ", midScreen.x + 35, 505);
    textSize(20);
    image(
      window.ENUMS.IMAGE.PEOPLEBOUNCY_LEVEL2,
      midScreen.x + 185,
      510,
      350,
      230
    );
    textAlign(LEFT);
    text(
      `Draußen mit Masken ohne  Abstand hast du          infizieren können.`,
      midScreen.x + 300,
      540,
      300
    );
    textFont(window.ENUMS.FONT.MARKER_FELT);
    text(`${this.scores.people_bouncy[1]}%`, midScreen.x + 450, 565.5, 400);
    textFont(window.ENUMS.FONT.FRUTIGER);
    textSize(27);
    textAlign(CENTER);
    text("Level 3: ", midScreen.x + 35, 655);
    textSize(20);

    image(
      window.ENUMS.IMAGE.PEOPLEBOUNCY_LEVEL3,
      midScreen.x + 205,
      650,
      410,
      280
    );
    textAlign(LEFT);
    text(
      `Draußen mit Masken und Abstand hast du          infizieren können.`,
      midScreen.x + 300,
      680,
      300
    );
    textFont(window.ENUMS.FONT.MARKER_FELT);
    text(`${this.scores.people_bouncy[2]}%`, midScreen.x + 450, 705, 400);
  }
}

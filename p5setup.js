import EventDispatcher from "./eventDispatcher.js";

let sketch = new p5();

let width = windowWidth;
let heigh = windowHeight;

let eventDispatcher = new EventDispatcher();
window.EventDispatcher = eventDispatcher;

//Images
let emolga;
let buttonWeiter;
let buttonWeiter_2;
let buttonRetry;
let backgroundHaendewaschen;
let virus_1;

//DOMS
let animation_brown;
let animation_white;
let testVideo;

//Schriftarten
let markerFelt;

function preload() {
  console.log("preload");

  /* BeispielCode
  	VARIABLENNAME = loadImage("images/bildname.png");
  */
  emolga = loadImage("images/Emolga2.png");
  buttonWeiter = loadImage("images/Button_Weiter.png");
  buttonWeiter_2 = loadImage("images/Button_Weiter_2.png");
  buttonRetry = loadImage("images/Button_Retry.png");
  backgroundHaendewaschen = loadImage("images/Hintergrund_Haendewaschen.png");
  virus_1 = loadImage("images/Virus_1.png");

  animation_brown = createImg("images/Animation_Brown.gif");
  animation_white = createImg("images/Animation_White.gif");
  animation_white.hide();
  animation_brown.hide();

  testVideo = sketch.createVideo("videos/Backup.mp4");
  testVideo.hide();

  markerFelt = loadFont("typo/MarkerFelt.ttf");
}
window.preload = preload;

function setup() {
  console.log("setup");
  sketch.createCanvas(windowWidth, windowHeight);
  sketch.frameRate(30);

  window.testVideo = testVideo;
  window.ENUMS = Object.freeze({
    SHAPE: Object.freeze({
      ROUND: 0,
      RECT: 1,
    }),
    IMAGE: Object.freeze({
      BUTTON_RETRY: buttonRetry,
      BUTTON_WEITER_1: buttonWeiter,
      BUTTON_WEITER_2: buttonWeiter_2,
      EMOLGA: emolga,
      BACKGROUND_HAENDEWASCHEN: backgroundHaendewaschen,
      VIRUS_1: virus_1,
    }),
    DOM: Object.freeze({
      ANIMATION_BROWN: animation_brown,
      ANIMATION_WHITE: animation_white,
      TEST_VIDEO: testVideo,
    }),
    FONT: Object.freeze({
      MARKER_FELT: markerFelt,
    }),
  });
}
window.setup = setup;

function windowResized() {
  sketch.resizeCanvas(windowWidth, windowHeight);
}
window.addEventListener("resize", windowResized);

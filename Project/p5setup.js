import EventDispatcher from "./eventDispatcher.js";

let sketch = new p5();

let width = windowWidth;
let heigh = windowHeight;

let eventDispatcher = new EventDispatcher();
window.EventDispatcher = eventDispatcher;

//Images
let emolga;
let buttonWeiter;
let buttonRetry;
let buttonWeiterGrau;
let buttonRetryGrau;
let backgroundHaendewaschen;
let virus_1;
let hand_white;
let sign;
let backgroundStartscreen;
let backgroundMap;
let mentorVirus;

//DOMS
let animation_brown;
let animation_white1;
let animation_white2;
let animation_white3;
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
  buttonRetry = loadImage("images/Button_Retry.png");
  buttonWeiterGrau = loadImage("images/Button_Weiter_grau.png");
  buttonRetryGrau = loadImage("images/Button_Retry_grau.png");
  hand_white = loadImage("images/Haendewaschen_Hand_Weiß.png");
  backgroundStartscreen = loadImage("images/background_Startscreen.png");
  backgroundHaendewaschen = loadImage("images/Hintergrund_Haendewaschen.png");
  backgroundMap = loadImage("images/background_Karte.png");
  virus_1 = loadImage("images/Virus_1.png");
  sign = loadImage("images/Schild.png");
  mentorVirus = loadImage("images/MentorVirus.png");

  animation_brown = createImg("images/Animation_Brown.gif");
  animation_white1 = createImg("images/Haendewaschen_Weiss_Handflaechen.gif");
  animation_white2 = createImg("images/Haendewaschen_Weiss_Zwischenraeume.gif");
  animation_white3 = createImg("images/Haendewaschen_Weiss_Fingerspitzen.gif");
  animation_brown.hide();
  animation_white1.hide();
  animation_white2.hide();
  animation_white3.hide();

  testVideo = sketch.createVideo("videos/Backup.mp4");
  testVideo.hide();

  markerFelt = loadFont("typo/MarkerFelt.ttf");
}
window.preload = preload;

function setup() {
  console.log("setup");
  sketch.createCanvas(1366, 768);
  sketch.frameRate(30);

  window.testVideo = testVideo;
  window.ENUMS = Object.freeze({
    SIZE: Object.freeze({
      X: 1366,
      Y: 768,
    }),
    SHAPE: Object.freeze({
      ROUND: 0,
      RECT: 1,
    }),

    SCENE_NAMES: Object.freeze({
      START: "Startscreen",
      MAP: "Map",
      HAENDEWASCHEN: "Haendewaschen",
      MASK: "SzeneTest",
      PEOPLE_BOUNCY: "SzeneTest2",
    }),

    IMAGE: Object.freeze({
      BUTTON_WEITER_1: buttonWeiter,
      BUTTON_RETRY: buttonRetry,
      BUTTON_WEITER_GRAU: buttonWeiterGrau,
      BUTTON_RETRY_GRAU: buttonRetryGrau,
      BUTTON_MENTORVIRUS: mentorVirus,
      EMOLGA: emolga,

      HAND_WHITE: hand_white,
      BACKGROUND_STARTSCREEN: backgroundStartscreen,
      BACKGROUND_HAENDEWASCHEN: backgroundHaendewaschen,
      BACKGROUND_MAP: backgroundMap,
      VIRUS_1: virus_1,
      SIGN: sign,
    }),
    DOM: Object.freeze({
      ANIMATION_BROWN: animation_brown,
      ANIMATION_WHITE_1: animation_white1,
      ANIMATION_WHITE_2: animation_white2,
      ANIMATION_WHITE_3: animation_white3,
      TEST_VIDEO: testVideo,
    }),
    FONT: Object.freeze({
      MARKER_FELT: markerFelt,
    }),
  });
}
window.setup = setup;

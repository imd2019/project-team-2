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
let hand_brown;
let hand_brown_lack;
let hand_white_lack;
let hand_heatmap;
let sign;
let backgroundStartscreen;
let backgroundMap;
let mentorVirus;
let mentorVirusText;

//DOMS
let animation_white_palm;
let animation_white_tips;
let animation_white_spaces;
let animation_white_thumb;
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
  //Hände
  hand_white = loadImage("images/Haendewaschen_Weiss_Hand.png");
  hand_brown = loadImage("images/Haendewaschen_Braun_Hand.png");
  hand_brown_lack = loadImage("images/Haendewaschen_Braun_Lack_Hand.png");
  hand_white_lack = loadImage("images/Haendewaschen_Weiss_Lack_Hand.png");
  hand_heatmap = loadImage("images/Haendewaschen_HeatMap.png");

  backgroundStartscreen = loadImage("images/background_Startscreen.png");
  backgroundHaendewaschen = loadImage("images/Hintergrund_Haendewaschen.png");
  backgroundMap = loadImage("images/background_Karte.png");
  virus_1 = loadImage("images/Virus_1.png");
  sign = loadImage("images/Schild.png");
  mentorVirusText = loadImage("images/MentorVirusText.png");
  mentorVirus = loadImage("images/MentorVirus.png");

  animation_white_palm = createImg(
    "images/Haendewaschen_Weiss_Handflaechen.gif"
  );
  animation_white_tips = createImg(
    "images/Haendewaschen_Weiss_Fingerspitzen.gif"
  );
  animation_white_spaces = createImg(
    "images/Haendewaschen_Weiss_Zwischenraeume.gif"
  );
  animation_white_thumb = createImg("images/Haendewaschen_Weiss_Daumen.gif");

  animation_white_palm.hide();
  animation_white_tips.hide();
  animation_white_spaces.hide();
  animation_white_thumb.hide();

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
      BUTTON_MENTORVIRUSTEXT: mentorVirusText,
      EMOLGA: emolga,

      HAND_WHITE: hand_white,
      HAND_BROWN: hand_brown,
      HAND_WHITE_LACK: hand_white_lack,
      HAND_BROWN_LACK: hand_brown_lack,
      HAND_HEATMAP: hand_heatmap,

      BACKGROUND_STARTSCREEN: backgroundStartscreen,
      BACKGROUND_HAENDEWASCHEN: backgroundHaendewaschen,
      BACKGROUND_MAP: backgroundMap,
      VIRUS_1: virus_1,
      SIGN: sign,
    }),
    DOM: Object.freeze({
      ANIMATION_WHITE_PALM: animation_white_palm,
      ANIMATION_WHITE_TIPS: animation_white_tips,
      ANIMATION_WHITE_SPACES: animation_white_spaces,
      ANIMATION_WHITE_THUMB: animation_white_thumb,
      TEST_VIDEO: testVideo,
    }),
    FONT: Object.freeze({
      MARKER_FELT: markerFelt,
    }),
  });
}
window.setup = setup;

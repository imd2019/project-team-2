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
let background_people_bouncy_1;
let background_people_bouncy_2;
let background_people_bouncy_3;
let backgroundMap;
let mentorVirus;
let mentorVirusText;

//People von PeopleBouncy
let peopleBouncy_boy_vorne;
let peopleBouncy_girl_vorne;
let peopleBouncy_playground1;

//DOMS
let animation_white_palm;
let animation_white_tips;
let animation_white_spaces;
let animation_white_thumb;

let animation_white_lack_palm;
let animation_white_lack_tips;
let animation_white_lack_spaces;
let animation_white_lack_thumb;

let animation_brown_palm;
let animation_brown_tips;
let animation_brown_spaces;
let animation_brown_thumb;

let animation_brown_lack_palm;
let animation_brown_lack_tips;
let animation_brown_lack_spaces;
let animation_brown_lack_thumb;

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
  background_people_bouncy_1 = loadImage(
    "images/Hintergrund_PeopleBouncy_Level1.png"
  );
  background_people_bouncy_2 = loadImage(
    "images/Hintergrund_PeopleBouncy_Level2.png"
  );
  background_people_bouncy_3 = loadImage(
    "images/Hintergrund_PeopleBouncy_Level3.png"
  );
  virus_1 = loadImage("images/Virus_1.png");
  sign = loadImage("images/Schild.png");
  mentorVirusText = loadImage("images/MentorVirusText.png");
  mentorVirus = loadImage("images/MentorVirus.png");

  //People von PeopleBouncy
  peopleBouncy_boy_vorne = loadImage("images/PeopleBouncy_boy_vorne.png");
  peopleBouncy_girl_vorne = loadImage("images/PeopleBouncy_girl_vorne.png");

  peopleBouncy_playground1 = loadImage("images/PeopleBouncy_spielfeld1.png");

  //animations white
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

  //animations white lack
  animation_white_lack_palm = createImg(
    "images/Haendewaschen_Weiss_Lack_Handflaechen.gif"
  );
  animation_white_lack_tips = createImg(
    "images/Haendewaschen_Weiss_Lack_Fingerspitzen.gif"
  );
  animation_white_lack_spaces = createImg(
    "images/Haendewaschen_Weiss_Lack_Zwischenraeume.gif"
  );
  animation_white_lack_thumb = createImg(
    "images/Haendewaschen_Weiss_Lack_Daumen.gif"
  );

  animation_white_lack_palm.hide();
  animation_white_lack_tips.hide();
  animation_white_lack_spaces.hide();
  animation_white_lack_thumb.hide();

  //animations brown
  animation_brown_palm = createImg(
    "images/Haendewaschen_Braun_Handflaechen.gif"
  );
  animation_brown_tips = createImg(
    "images/Haendewaschen_Braun_Fingerspitzen.gif"
  );
  animation_brown_spaces = createImg(
    "images/Haendewaschen_Braun_Zwischenraeume.gif"
  );
  animation_brown_thumb = createImg("images/Haendewaschen_Braun_Daumen.gif");

  animation_brown_palm.hide();
  animation_brown_tips.hide();
  animation_brown_spaces.hide();
  animation_brown_thumb.hide();

  //animations brown lack
  animation_brown_lack_palm = createImg(
    "images/Haendewaschen_Braun_Lack_Handflaechen.gif"
  );
  animation_brown_lack_tips = createImg(
    "images/Haendewaschen_Braun_Lack_Fingerspitzen.gif"
  );
  animation_brown_lack_spaces = createImg(
    "images/Haendewaschen_Braun_Lack_Zwischenraeume.gif"
  );
  animation_brown_lack_thumb = createImg(
    "images/Haendewaschen_Braun_Lack_Daumen.gif"
  );

  animation_brown_lack_palm.hide();
  animation_brown_lack_tips.hide();
  animation_brown_lack_spaces.hide();
  animation_brown_lack_thumb.hide();

  testVideo = sketch.createVideo("videos/Backup.mp4");
  testVideo.hide();

  markerFelt = loadFont("typo/MarkerFelt.ttf");
}
window.preload = preload;

function setup() {
  console.log("setup");
  let canvas = sketch.createCanvas(1366, 768);
  sketch.frameRate(30);
  canvas.parent("p5");

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
      PEOPLE_BOUNCY: "PeopleBouncy",
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

      PEOPLEBOUNCY_BOY_FRONT: peopleBouncy_boy_vorne,
      PEOPLEBOUNCY_GIRL_FRONT: peopleBouncy_girl_vorne,
      PEOPLEBOUNCY_PLAYGROUND_1: peopleBouncy_playground1,

      BACKGROUND_STARTSCREEN: backgroundStartscreen,
      BACKGROUND_MAP: backgroundMap,
      BACKGROUND_HAENDEWASCHEN: backgroundHaendewaschen,
      BACKGROUND_PEOPLEBOUNCY_LEVEL_1: background_people_bouncy_1,
      BACKGROUND_PEOPLEBOUNCY_LEVEL_2: background_people_bouncy_2,
      BACKGROUND_PEOPLEBOUNCY_LEVEL_3: background_people_bouncy_3,
      VIRUS_1: virus_1,
      SIGN: sign,
    }),
    DOM: Object.freeze({
      ANIMATION_WHITE_PALM: animation_white_palm,
      ANIMATION_WHITE_TIPS: animation_white_tips,
      ANIMATION_WHITE_SPACES: animation_white_spaces,
      ANIMATION_WHITE_THUMB: animation_white_thumb,

      ANIMATION_WHITE_LACK_PALM: animation_white_lack_palm,
      ANIMATION_WHITE_LACK_TIPS: animation_white_lack_tips,
      ANIMATION_WHITE_LACK_SPACES: animation_white_lack_spaces,
      ANIMATION_WHITE_LACK_THUMB: animation_white_lack_thumb,

      ANIMATION_BROWN_PALM: animation_brown_palm,
      ANIMATION_BROWN_TIPS: animation_brown_tips,
      ANIMATION_BROWN_SPACES: animation_brown_spaces,
      ANIMATION_BROWN_THUMB: animation_brown_thumb,

      ANIMATION_BROWN_LACK_PALM: animation_brown_lack_palm,
      ANIMATION_BROWN_LACK_TIPS: animation_brown_lack_tips,
      ANIMATION_BROWN_LACK_SPACES: animation_brown_lack_spaces,
      ANIMATION_BROWN_LACK_THUMB: animation_brown_lack_thumb,

      TEST_VIDEO: testVideo,
    }),
    FONT: Object.freeze({
      MARKER_FELT: markerFelt,
    }),
  });
}
window.setup = setup;

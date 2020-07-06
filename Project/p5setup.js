import EventDispatcher from "./eventDispatcher.js";
//import "./lib/p5.sound.js";

let sketch = new p5();
sketch._incrementPreload();

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
let virus_2;
let virus_3;
let hand_white;
let hand_brown;
let hand_brown_lack;
let hand_white_lack;
let hand_heatmap;
let sign;
let wecker;
let startscreenFingers;
let backgroundStartscreenLoch;
let backgroundStartscreen;
let background_people_bouncy_1;
let background_people_bouncy_2;
let background_people_bouncy_3;
let backgroundMap;
let backgroundMap_2;
let mentorVirus;
let mentorVirusText;
let endscreen_heatMap;
let endscreen_schrift;
let peopleBouncy_level1;
let peopleBouncy_level2;
let peopleBouncy_level3;

//People von PeopleBouncy
let peopleBouncy_boy_hinten;
let peopleBouncy_boy_links;
let peopleBouncy_boy_rechts;
let peopleBouncy_boy_vorne;
let peopleBouncy_girl_hinten;
let peopleBouncy_girl_links;
let peopleBouncy_girl_rechts;
let peopleBouncy_girl_vorne;
let peopleBouncy_hannah_hinten;
let peopleBouncy_hannah_links;
let peopleBouncy_hannah_rechts;
let peopleBouncy_hannah_vorne;

let peopleBouncy_heart;

let peopleBouncy_boy_hinten_infiziert;
let peopleBouncy_boy_links_infiziert;
let peopleBouncy_boy_rechts_infiziert;
let peopleBouncy_boy_vorne_infiziert;
let peopleBouncy_girl_hinten_infiziert;
let peopleBouncy_girl_links_infiziert;
let peopleBouncy_girl_rechts_infiziert;
let peopleBouncy_girl_vorne_infiziert;
let peopleBouncy_hannah_hinten_infiziert;
let peopleBouncy_hannah_links_infiziert;
let peopleBouncy_hannah_rechts_infiziert;
let peopleBouncy_hannah_vorne_infiziert;

let peopleBouncy_playground1;
let peopleBouncy_playground2;
let peopleBouncy_playground3;

//masked people
let peopleBouncy_boy_hinten_mask;
let peopleBouncy_boy_links_mask;
let peopleBouncy_boy_rechts_mask;
let peopleBouncy_boy_vorne_mask;
let peopleBouncy_girl_hinten_mask;
let peopleBouncy_girl_links_mask;
let peopleBouncy_girl_rechts_mask;
let peopleBouncy_girl_vorne_mask;

let peopleBouncy_boy_hinten_infiziert_mask;
let peopleBouncy_boy_links_infiziert_mask;
let peopleBouncy_boy_rechts_infiziert_mask;
let peopleBouncy_boy_vorne_infiziert_mask;
let peopleBouncy_girl_hinten_infiziert_mask;
let peopleBouncy_girl_links_infiziert_mask;
let peopleBouncy_girl_rechts_infiziert_mask;
let peopleBouncy_girl_vorne_infiziert_mask;

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
//Videos
let animation_traum;
let peopleBouncyEnd;
let testVideo;

//Sound
let song;
let haendewaschen_sound_rub;
let haendewaschen_sound_tips;
let haendewaschen_sound_inbetween;
let haendewaschen_sound_thumb;

let peopleBouncy_girl_sneeze;

let peopelBouncy_L_cough_1;
let peopelBouncy_L_cough_2;
let peopelBouncy_L_cough_3;

let peopelBouncy_L_sneeze_1;
let peopelBouncy_L_sneeze_2;
let peopelBouncy_L_sneeze_3;

let peopelBouncy_F_cough_1;
let peopelBouncy_F_cough_2;
let peopelBouncy_F_cough_3;

let peopelBouncy_F_sneeze_1;
let peopelBouncy_F_sneeze_2;
let peopelBouncy_F_sneeze_3;

let peopelBouncy_D_cough_1;
let peopelBouncy_D_cough_2;
let peopelBouncy_D_cough_3;

let peopelBouncy_D_sneeze_1;
let peopelBouncy_D_sneeze_2;
let peopelBouncy_D_sneeze_3;

let peopelBouncy_m_cough_1;
let peopelBouncy_m_cough_2;

let peopelBouncy_m_sneeze_1;
let peopelBouncy_m_sneeze_2;

//Hintergrund Musik

let peopleBouncy_bm_playground;
let peopleBouncy_bm_storm;
let peopleBouncy_bm_wind;
let peopleBouncy_bm_classroom;

//Schriftarten
let markerFelt;
let frutiger;
let frutiger_roman;
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
  endscreen_heatMap = loadImage("images/Endscreen_HeatMap.png");
  endscreen_schrift = loadImage("images/Endscreen_HeatMap_schrift.png");
  peopleBouncy_level1 = loadImage("images/PeopleBouncy_level1.png");
  peopleBouncy_level2 = loadImage("images/PeopleBouncy_level2.png");
  peopleBouncy_level3 = loadImage("images/PeopleBouncy_level3.png");

  //Hände
  hand_white = loadImage("images/Haendewaschen_Weiss_Hand.png");
  hand_brown = loadImage("images/Haendewaschen_Braun_Hand.png");
  hand_brown_lack = loadImage("images/Haendewaschen_Braun_Lack_Hand.png");
  hand_white_lack = loadImage("images/Haendewaschen_Weiss_Lack_Hand.png");
  hand_heatmap = loadImage("images/Haendewaschen_HeatMap.png");

  startscreenFingers = loadImage("images/Fingerkuppen.png");
  backgroundStartscreenLoch = loadImage(
    "images/background_Startscreen_loch.png"
  );
  backgroundStartscreen = loadImage("images/background_Startscreen.png");
  backgroundHaendewaschen = loadImage("images/Hintergrund_Haendewaschen.png");
  backgroundMap = loadImage("images/background_Karte.png");
  backgroundMap_2 = loadImage("images/background_Karte_2.png");
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
  virus_2 = loadImage("images/Virus_2.png");
  virus_3 = loadImage("images/Virus_3.png");
  sign = loadImage("images/Schild.png");
  wecker = loadImage("images/Wecker.png");
  mentorVirusText = loadImage("images/MentorVirusText.png");
  mentorVirus = loadImage("images/MentorVirus.png");

  //People von PeopleBouncy
  peopleBouncy_boy_hinten = loadImage("images/PeopleBouncy_boy_hinten.png");
  peopleBouncy_boy_links = loadImage("images/PeopleBouncy_boy_links.png");
  peopleBouncy_boy_rechts = loadImage("images/PeopleBouncy_boy_rechts.png");
  peopleBouncy_boy_vorne = loadImage("images/PeopleBouncy_boy_vorne.png");
  peopleBouncy_girl_hinten = loadImage("images/PeopleBouncy_girl_hinten.png");
  peopleBouncy_girl_links = loadImage("images/PeopleBouncy_girl_links.png");
  peopleBouncy_girl_rechts = loadImage("images/PeopleBouncy_girl_rechts.png");
  peopleBouncy_girl_vorne = loadImage("images/PeopleBouncy_girl_vorne.png");
  peopleBouncy_hannah_hinten = loadImage(
    "images/PeopleBouncy_hannah_hinten.png"
  );
  peopleBouncy_hannah_links = loadImage("images/PeopleBouncy_hannah_links.png");
  peopleBouncy_hannah_rechts = loadImage(
    "images/PeopleBouncy_hannah_rechts.png"
  );
  peopleBouncy_hannah_vorne = loadImage("images/PeopleBouncy_hannah_vorne.png");

  peopleBouncy_heart = loadImage("images/PeopleBouncy_heart.png");

  //infiziert
  peopleBouncy_boy_hinten_infiziert = loadImage(
    "images/PeopleBouncy_boy_hinten_infiziert.png"
  );
  peopleBouncy_boy_links_infiziert = loadImage(
    "images/PeopleBouncy_boy_links_infiziert.png"
  );
  peopleBouncy_boy_rechts_infiziert = loadImage(
    "images/PeopleBouncy_boy_rechts_infiziert.png"
  );
  peopleBouncy_boy_vorne_infiziert = loadImage(
    "images/PeopleBouncy_boy_vorne_infiziert.png"
  );
  peopleBouncy_girl_hinten_infiziert = loadImage(
    "images/PeopleBouncy_girl_hinten_infiziert.png"
  );
  peopleBouncy_girl_links_infiziert = loadImage(
    "images/PeopleBouncy_girl_links_infiziert.png"
  );
  peopleBouncy_girl_rechts_infiziert = loadImage(
    "images/PeopleBouncy_girl_rechts_infiziert.png"
  );
  peopleBouncy_girl_vorne_infiziert = loadImage(
    "images/PeopleBouncy_girl_vorne_infiziert.png"
  );
  peopleBouncy_hannah_hinten_infiziert = loadImage(
    "images/PeopleBouncy_hannah_hinten_infiziert.png"
  );
  peopleBouncy_hannah_links_infiziert = loadImage(
    "images/PeopleBouncy_hannah_links_infiziert.png"
  );
  peopleBouncy_hannah_rechts_infiziert = loadImage(
    "images/PeopleBouncy_hannah_rechts_infiziert.png"
  );
  peopleBouncy_hannah_vorne_infiziert = loadImage(
    "images/PeopleBouncy_hannah_vorne_infiziert.png"
  );

  //masked people
  peopleBouncy_boy_hinten_mask = loadImage(
    "images/PeopleBouncy_boy_hinten.png"
  );
  peopleBouncy_boy_links_mask = loadImage(
    "images/PeopleBouncy_boy_links_maske.png"
  );
  peopleBouncy_boy_rechts_mask = loadImage(
    "images/PeopleBouncy_boy_rechts_maske.png"
  );
  peopleBouncy_boy_vorne_mask = loadImage(
    "images/PeopleBouncy_boy_vorne_maske.png"
  );
  peopleBouncy_girl_hinten_mask = loadImage(
    "images/PeopleBouncy_girl_hinten.png"
  );
  peopleBouncy_girl_links_mask = loadImage(
    "images/PeopleBouncy_girl_links_maske.png"
  );
  peopleBouncy_girl_rechts_mask = loadImage(
    "images/PeopleBouncy_girl_rechts_maske.png"
  );
  peopleBouncy_girl_vorne_mask = loadImage(
    "images/PeopleBouncy_girl_vorne_maske.png"
  );

  peopleBouncy_boy_hinten_infiziert_mask = loadImage(
    "images/PeopleBouncy_boy_hinten_infiziert.png"
  );
  peopleBouncy_boy_links_infiziert_mask = loadImage(
    "images/PeopleBouncy_boy_links_infiziert_maske.png"
  );
  peopleBouncy_boy_rechts_infiziert_mask = loadImage(
    "images/PeopleBouncy_boy_rechts_infiziert_maske.png"
  );
  peopleBouncy_boy_vorne_infiziert_mask = loadImage(
    "images/PeopleBouncy_boy_vorne_infiziert_maske.png"
  );
  peopleBouncy_girl_hinten_infiziert_mask = loadImage(
    "images/PeopleBouncy_girl_hinten_infiziert.png"
  );
  peopleBouncy_girl_links_infiziert_mask = loadImage(
    "images/PeopleBouncy_girl_links_infiziert_maske.png"
  );
  peopleBouncy_girl_rechts_infiziert_mask = loadImage(
    "images/PeopleBouncy_girl_rechts_infiziert_maske.png"
  );
  peopleBouncy_girl_vorne_infiziert_mask = loadImage(
    "images/PeopleBouncy_girl_vorne_infiziert_maske.png"
  );

  peopleBouncy_playground1 = loadImage("images/PeopleBouncy_spielfeld1.png");
  peopleBouncy_playground2 = loadImage("images/PeopleBouncy_spielfeld2.png");
  peopleBouncy_playground3 = loadImage("images/PeopleBouncy_spielfeld3.png");

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

  //Video
  animation_traum = sketch.createVideo("videos/StartAnimation.mp4");
  animation_traum.hide();
  peopleBouncyEnd = sketch.createVideo("videos/PeopleBouncy_Zerreissen.mp4");
  peopleBouncyEnd.hide();

  testVideo = sketch.createVideo("videos/Backup.mp4");
  testVideo.hide();

  //sound
  song = loadSound("sound/DreamTransition.mp3");
  song.setVolume(0.2);

  haendewaschen_sound_rub = loadSound("sound/d_Handflächen.mp3");
  haendewaschen_sound_rub.setVolume(2.5);

  haendewaschen_sound_tips = loadSound("sound/d_Fingerspitzen.mp3");
  haendewaschen_sound_tips.setVolume(2.5);

  haendewaschen_sound_inbetween = loadSound("sound/d_Zwischenräume.mp3");
  haendewaschen_sound_inbetween.setVolume(2.5);

  haendewaschen_sound_thumb = loadSound("sound/d_Daumen.mp3");
  haendewaschen_sound_thumb.setVolume(2.5);

  peopleBouncy_girl_sneeze = loadSound("sound/PeopleBouncy_girl_sneeze.mp3");
  peopleBouncy_girl_sneeze.setVolume(0.3);

  //People Bouncy Leander Sound
  peopelBouncy_L_cough_1 = loadSound("sound/L_husten_1.mp3");
  peopelBouncy_L_cough_1.setVolume(0.3);

  peopelBouncy_L_cough_2 = loadSound("sound/L_husten_2.mp3");
  peopelBouncy_L_cough_2.setVolume(0.3);

  peopelBouncy_L_cough_3 = loadSound("sound/L_husten_3.mp3");
  peopelBouncy_L_cough_3.setVolume(0.3);

  peopelBouncy_L_sneeze_1 = loadSound("sound/L_niesen_1.mp3");
  peopelBouncy_L_sneeze_1.setVolume(0.3);

  peopelBouncy_L_sneeze_2 = loadSound("sound/L_niesen_2.mp3");
  peopelBouncy_L_sneeze_2.setVolume(0.3);

  peopelBouncy_L_sneeze_3 = loadSound("sound/L_niesen_3.mp3");
  peopelBouncy_L_sneeze_3.setVolume(0.3);

  //People Bouncy Flo Sound
  peopelBouncy_F_cough_1 = loadSound("sound/f_husten1.mp3");
  peopelBouncy_F_cough_1.setVolume(0.3);

  peopelBouncy_F_cough_2 = loadSound("sound/f_husten2.mp3");
  peopelBouncy_F_cough_2.setVolume(0.3);

  peopelBouncy_F_cough_3 = loadSound("sound/f_husten3.mp3");
  peopelBouncy_F_cough_3.setVolume(0.3);

  peopelBouncy_F_sneeze_1 = loadSound("sound/f_niesen1.mp3");
  peopelBouncy_F_sneeze_1.setVolume(0.3);

  peopelBouncy_F_sneeze_2 = loadSound("sound/f_niesen2.mp3");
  peopelBouncy_F_sneeze_2.setVolume(0.3);

  peopelBouncy_F_sneeze_3 = loadSound("sound/f_niesen3.mp3");
  peopelBouncy_F_sneeze_3.setVolume(0.3);

  //People Bouncy Diandra Sound
  peopelBouncy_D_cough_1 = loadSound("sound/d_husten_1.m4a");
  peopelBouncy_D_cough_1.setVolume(0.3);

  peopelBouncy_D_cough_2 = loadSound("sound/d_husten_2.m4a");
  peopelBouncy_D_cough_2.setVolume(0.3);

  peopelBouncy_D_cough_3 = loadSound("sound/d_husten3.m4a");
  peopelBouncy_D_cough_3.setVolume(0.3);

  peopelBouncy_D_sneeze_1 = loadSound("sound/d_niesen1.m4a");
  peopelBouncy_D_sneeze_1.setVolume(0.3);

  peopelBouncy_D_sneeze_2 = loadSound("sound/d_niesen2.m4a");
  peopelBouncy_D_sneeze_2.setVolume(0.3);

  peopelBouncy_D_sneeze_3 = loadSound("sound/d_niesen3.m4a");
  peopelBouncy_D_sneeze_3.setVolume(0.3);

  //People Bouncy Leander Sound
  peopelBouncy_m_cough_1 = loadSound("sound/m_husten_1.mp3");
  peopelBouncy_m_cough_1.setVolume(0.3);

  peopelBouncy_m_cough_2 = loadSound("sound/m_husten_2.mp3");
  peopelBouncy_m_cough_2.setVolume(0.3);

  peopelBouncy_m_sneeze_1 = loadSound("sound/m_niesen_1.mp3");
  peopelBouncy_m_sneeze_1.setVolume(0.3);

  peopelBouncy_m_sneeze_2 = loadSound("sound/m_niesen_2.mp3");
  peopelBouncy_m_sneeze_2.setVolume(0.3);

  //HintergrundMusik

  peopleBouncy_bm_playground = loadSound(
    "sound/zapsplat_playground_sounds.mp3"
  );
  peopleBouncy_bm_playground.setVolume(0.02);

  peopleBouncy_bm_storm = loadSound("sound/zapsplat_Thunderstrom.mp3");
  peopleBouncy_bm_storm.setVolume(0.3);

  peopleBouncy_bm_wind = loadSound("sound/zapsplat_wind_window_hard.mp3");
  peopleBouncy_bm_wind.setVolume(0.04);

  peopleBouncy_bm_classroom = loadSound(
    "sound/zapsplat_children_classroom.mp3"
  );
  peopleBouncy_bm_classroom.setVolume(0.02);

  //typo
  markerFelt = loadFont("typo/MarkerFelt.ttf");
  frutiger = loadFont("typo/FrutigerLT45Light.ttf");
  frutiger_roman = loadFont("typo/FrutigerCE55Roman.ttf");

  // let fake = loadImage("asfjhkjashjfh.png");
  sketch._decrementPreload();
}

window.preload = preload;

function setup() {
  // preload();

  console.log("setup");
  // let canvas = sketch.createCanvas(1366, 768);
  let canvas = sketch.createCanvas(1366, 768);
  sketch.frameRate(30);
  canvas.parent("p5");

  var div = document.getElementById("defaultCanvas0");
  var canvasPos = div.getBoundingClientRect();
  window.animation_traum = animation_traum;
  window.testVideo = testVideo;
  window.ENUMS = Object.freeze({
    SIZE: Object.freeze({
      X: 1366,
      Y: 768,
    }),
    POS: Object.freeze({
      X: canvasPos.x,
      Y: canvasPos.y,
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
      END_SCREEN: "Endscreen",
    }),

    IMAGE: Object.freeze({
      BUTTON_WEITER_1: buttonWeiter,
      BUTTON_RETRY: buttonRetry,
      BUTTON_WEITER_GRAU: buttonWeiterGrau,
      BUTTON_RETRY_GRAU: buttonRetryGrau,
      BUTTON_MENTORVIRUS: mentorVirus,
      BUTTON_MENTORVIRUSTEXT: mentorVirusText,
      EMOLGA: emolga,
      ENDSCREEN_HEATMAP: endscreen_heatMap,
      ENDSCREEN_SCHRIFT: endscreen_schrift,
      PEOPLEBOUNCY_LEVEL1: peopleBouncy_level1,
      PEOPLEBOUNCY_LEVEL2: peopleBouncy_level2,
      PEOPLEBOUNCY_LEVEL3: peopleBouncy_level3,

      HAND_WHITE: hand_white,
      HAND_BROWN: hand_brown,
      HAND_WHITE_LACK: hand_white_lack,
      HAND_BROWN_LACK: hand_brown_lack,
      HAND_HEATMAP: hand_heatmap,

      PEOPLEBOUNCY_BOY_BACK: peopleBouncy_boy_hinten,
      PEOPLEBOUNCY_BOY_LEFT: peopleBouncy_boy_links,
      PEOPLEBOUNCY_BOY_RIGHT: peopleBouncy_boy_rechts,
      PEOPLEBOUNCY_BOY_FRONT: peopleBouncy_boy_vorne,
      PEOPLEBOUNCY_GIRL_BACK: peopleBouncy_girl_hinten,
      PEOPLEBOUNCY_GIRL_LEFT: peopleBouncy_girl_links,
      PEOPLEBOUNCY_GIRL_RIGHT: peopleBouncy_girl_rechts,
      PEOPLEBOUNCY_GIRL_FRONT: peopleBouncy_girl_vorne,
      PEOPLEBOUNCY_HANNAH_BACK: peopleBouncy_hannah_hinten,
      PEOPLEBOUNCY_HANNAH_LEFT: peopleBouncy_hannah_links,
      PEOPLEBOUNCY_HANNAH_RIGHT: peopleBouncy_hannah_rechts,
      PEOPLEBOUNCY_HANNAH_FRONT: peopleBouncy_hannah_vorne,

      PEOPLEBOUNCY_HEART: peopleBouncy_heart,

      PEOPLEBOUNCY_BOY_BACK_INFECTED: peopleBouncy_boy_hinten_infiziert,
      PEOPLEBOUNCY_BOY_LEFT_INFECTED: peopleBouncy_boy_links_infiziert,
      PEOPLEBOUNCY_BOY_RIGHT_INFECTED: peopleBouncy_boy_rechts_infiziert,
      PEOPLEBOUNCY_BOY_FRONT_INFECTED: peopleBouncy_boy_vorne_infiziert,
      PEOPLEBOUNCY_GIRL_BACK_INFECTED: peopleBouncy_girl_hinten_infiziert,
      PEOPLEBOUNCY_GIRL_LEFT_INFECTED: peopleBouncy_girl_links_infiziert,
      PEOPLEBOUNCY_GIRL_RIGHT_INFECTED: peopleBouncy_girl_rechts_infiziert,
      PEOPLEBOUNCY_GIRL_FRONT_INFECTED: peopleBouncy_girl_vorne_infiziert,
      PEOPLEBOUNCY_HANNAH_BACK_INFECTED: peopleBouncy_hannah_hinten_infiziert,
      PEOPLEBOUNCY_HANNAH_LEFT_INFECTED: peopleBouncy_hannah_links_infiziert,
      PEOPLEBOUNCY_HANNAH_RIGHT_INFECTED: peopleBouncy_hannah_rechts_infiziert,
      PEOPLEBOUNCY_HANNAH_FRONT_INFECTED: peopleBouncy_hannah_vorne_infiziert,

      //masked people

      PEOPLEBOUNCY_BOY_BACK_MASK: peopleBouncy_boy_hinten_mask,
      PEOPLEBOUNCY_BOY_LEFT_MASK: peopleBouncy_boy_links_mask,
      PEOPLEBOUNCY_BOY_RIGHT_MASK: peopleBouncy_boy_rechts_mask,
      PEOPLEBOUNCY_BOY_FRONT_MASK: peopleBouncy_boy_vorne_mask,
      PEOPLEBOUNCY_GIRL_BACK_MASK: peopleBouncy_girl_hinten_mask,
      PEOPLEBOUNCY_GIRL_LEFT_MASK: peopleBouncy_girl_links_mask,
      PEOPLEBOUNCY_GIRL_RIGHT_MASK: peopleBouncy_girl_rechts_mask,
      PEOPLEBOUNCY_GIRL_FRONT_MASK: peopleBouncy_girl_vorne_mask,

      PEOPLEBOUNCY_BOY_BACK_INFECTED_MASK: peopleBouncy_boy_hinten_infiziert_mask,
      PEOPLEBOUNCY_BOY_LEFT_INFECTED_MASK: peopleBouncy_boy_links_infiziert_mask,
      PEOPLEBOUNCY_BOY_RIGHT_INFECTED_MASK: peopleBouncy_boy_rechts_infiziert_mask,
      PEOPLEBOUNCY_BOY_FRONT_INFECTED_MASK: peopleBouncy_boy_vorne_infiziert_mask,
      PEOPLEBOUNCY_GIRL_BACK_INFECTED_MASK: peopleBouncy_girl_hinten_infiziert_mask,
      PEOPLEBOUNCY_GIRL_LEFT_INFECTED_MASK: peopleBouncy_girl_links_infiziert_mask,
      PEOPLEBOUNCY_GIRL_RIGHT_INFECTED_MASK: peopleBouncy_girl_rechts_infiziert_mask,
      PEOPLEBOUNCY_GIRL_FRONT_INFECTED_MASK: peopleBouncy_girl_vorne_infiziert_mask,

      //backgrounds

      PEOPLEBOUNCY_PLAYGROUND_1: peopleBouncy_playground1,
      PEOPLEBOUNCY_PLAYGROUND_2: peopleBouncy_playground2,
      PEOPLEBOUNCY_PLAYGROUND_3: peopleBouncy_playground3,

      STARTSCREEN_FINGERS: startscreenFingers,
      BACKGROUND_STARTSCREEN_LOCH: backgroundStartscreenLoch,
      BACKGROUND_STARTSCREEN: backgroundStartscreen,
      BACKGROUND_MAP: backgroundMap,
      BACKGROUND_MAP_2: backgroundMap_2,
      BACKGROUND_HAENDEWASCHEN: backgroundHaendewaschen,
      BACKGROUND_PEOPLEBOUNCY_LEVEL_1: background_people_bouncy_1,
      BACKGROUND_PEOPLEBOUNCY_LEVEL_2: background_people_bouncy_2,
      BACKGROUND_PEOPLEBOUNCY_LEVEL_3: background_people_bouncy_3,
      VIRUS_1: virus_1,
      VIRUS_2: virus_2,
      VIRUS_3: virus_3,
      SIGN: sign,
      WECKER: wecker,
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

      ANIMATION_TRAUM: animation_traum,
      PEOPLE_BOUNCY_END: peopleBouncyEnd,

      TEST_VIDEO: testVideo,
    }),
    SOUND: Object.freeze({
      SONG: song,
      HAENDEWASCHEN_RUB: haendewaschen_sound_rub,
      HAENDEWASCHEN_TIPS: haendewaschen_sound_tips,
      HAENDEWASCHEN_INBETWEEN: haendewaschen_sound_inbetween,
      HAENDEWASCHEN_THUMB: haendewaschen_sound_thumb,
      PEOPLEBOUNCY_GIRL_SNEEZE: peopleBouncy_girl_sneeze,

      PEOPLEBOUNCY_L_COUGH_1: peopelBouncy_L_cough_1,
      PEOPLEBOUNCY_L_COUGH_2: peopelBouncy_L_cough_2,
      PEOPLEBOUNCY_L_COUGH_3: peopelBouncy_L_cough_3,
      PEOPLEBOUNCY_L_SNEEZE_1: peopelBouncy_L_sneeze_1,
      PEOPLEBOUNCY_L_SNEEZE_2: peopelBouncy_L_sneeze_2,
      PEOPLEBOUNCY_L_SNEEZE_3: peopelBouncy_L_sneeze_3,

      PEOPLEBOUNCY_F_COUGH_1: peopelBouncy_F_cough_1,
      PEOPLEBOUNCY_F_COUGH_2: peopelBouncy_F_cough_2,
      PEOPLEBOUNCY_F_COUGH_3: peopelBouncy_F_cough_3,
      PEOPLEBOUNCY_F_SNEEZE_1: peopelBouncy_F_sneeze_1,
      PEOPLEBOUNCY_F_SNEEZE_2: peopelBouncy_F_sneeze_2,
      PEOPLEBOUNCY_F_SNEEZE_3: peopelBouncy_F_sneeze_3,

      PEOPLEBOUNCY_D_COUGH_1: peopelBouncy_D_cough_1,
      PEOPLEBOUNCY_D_COUGH_2: peopelBouncy_D_cough_2,
      PEOPLEBOUNCY_D_COUGH_3: peopelBouncy_D_cough_3,
      PEOPLEBOUNCY_D_SNEEZE_1: peopelBouncy_D_sneeze_1,
      PEOPLEBOUNCY_D_SNEEZE_2: peopelBouncy_D_sneeze_2,
      PEOPLEBOUNCY_D_SNEEZE_3: peopelBouncy_D_sneeze_3,

      PEOPLEBOUNCY_M_COUGH_1: peopelBouncy_m_cough_1,
      PEOPLEBOUNCY_M_COUGH_2: peopelBouncy_m_cough_2,
      PEOPLEBOUNCY_M_SNEEZE_1: peopelBouncy_m_sneeze_1,
      PEOPLEBOUNCY_M_SNEEZE_2: peopelBouncy_m_sneeze_2,

      PEOPLEBOUNCY_BM_PLAYGROUND: peopleBouncy_bm_playground,
      PEOPLEBOUNCY_BM_STORM: peopleBouncy_bm_storm,
      PEOPLEBOUNCY_BM_WIND: peopleBouncy_bm_wind,
      PEOPLEBOUNCY_BM_CLASSROOM: peopleBouncy_bm_classroom,
    }),

    FONT: Object.freeze({
      MARKER_FELT: markerFelt,
      FRUTIGER: frutiger,
      FRUTIGER_ROMAN: frutiger_roman,
    }),
  });
}
window.setup = setup;

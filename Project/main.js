import Test from "./Test.js";
import InteractiveObject from "./interactiveObject.js";
import Button_Retry from "./Button_Retry.js";
import Button_Weiter from "./Button_Weiter.js";
import Game from "./Game.js";
import Scene from "./scene.js";
import Haendewaschen from "./scene_haendewaschen.js";

import Startscreen from "./scene_startscreen.js";
import Map from "./scene_map.js";
import PeopleBouncy from "./scene_peopleBouncy.js";

let weiter;
let world;
let retry;
let test;
let init = true;
let testScene;
let testScene2;
let sceneHaendewaschen;
let sceneMap1;
let scenePeopleBouncy;

let sceneStartscreen;

function draw() {
  // window.ENUMS.SOUND.SONG.play();
  if (init) {
    world = new Game("world");

    sceneStartscreen = new Startscreen();
    sceneMap1 = new Map();
    testScene = new Scene("SzeneTest");
    testScene2 = new Scene("SzeneTest2");
    scenePeopleBouncy = new PeopleBouncy();
    world.addScene(sceneStartscreen);
    sceneHaendewaschen = new Haendewaschen();
    testScene = new Scene("SzeneTest");
    testScene2 = new Scene("SzeneTest2");

    world.addScene(sceneMap1);
    world.addScene(sceneHaendewaschen);
    world.addScene(scenePeopleBouncy);
    world.addScene(testScene);
    world.addScene(testScene2);

    world.start();
    test = new Test();
    weiter = new Button_Weiter(750, 100, "nextScene");
    retry = new Button_Retry(800, 500);
    testScene.addChild(retry);
    testScene.addChild(weiter);
    testScene2.addChild(test);
    world.onInit();

    world.nextScene(window.ENUMS.SCENE_NAMES.START);

    init = false;
  }
  background(0);
  world.mouseHover();
  world.onUpdate();
  world.display();
}
window.draw = draw;

function mouseClicked() {
  world.mouseClicked();
}
window.mouseClicked = mouseClicked;

function mouseReleased() {
  world.mouseReleased();
}
window.mouseReleased = mouseReleased;

function mousePressed() {
  world.mousePressed();
}
window.mousePressed = mousePressed;

function keyPressed() {
  world.onKeyPressed();
}
window.keyPressed = keyPressed;

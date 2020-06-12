import Test from "./Test.js";
import InteractiveObject from "./interactiveObject.js";
import Button_Retry from "./Button_Retry.js";
import Button_Weiter from "./Button_Weiter.js";
import Game from "./Game.js";
import Scene from "./scene.js";
import Haendewaschen from "./scene_haendewaschen.js";

let weiter;
let world;
let retry;
let test;
let init = true;
let testScene;
let testScene2;
let sceneHaendewaschen;

function draw() {
  if (init) {
    world = new Game("world");
    sceneHaendewaschen = new Haendewaschen();
    testScene = new Scene("SzeneTest");
    testScene2 = new Scene("SzeneTest2");
    world.addScene(sceneHaendewaschen);
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
    world.nextScene(0);

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

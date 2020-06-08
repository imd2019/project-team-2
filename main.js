import Test from "./Test.js";
import InteractiveObject from "./interactiveObject.js";
import Button_Retry from "./Button_Retry.js";
import Button_Weiter from "./Button_Weiter.js";
import Game from "./Game.js";
import Scene from "./scene.js";

let weiter;
let world;
let retry;
let test;
let init = true;
let testScene;

function draw() {
  if (init) {
    world = new Game("world");
    testScene = new Scene("SzeneTest");
    world.addScene(testScene);
    world.start();
    world.addChild(testScene);
    test = new Test();
    weiter = new Button_Weiter(750, 100);
    retry = new Button_Retry(800, 500);
    testScene.addChild(retry);
    testScene.addChild(weiter);
    testScene.addChild(test);
    world.onInit();
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

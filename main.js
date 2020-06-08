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
    test = new Test();
    weiter = new Button_Weiter(500, 300);
    retry = new Button_Retry(100, 400);
    testScene.addChild(retry);
    testScene.addChild(weiter);
    testScene.addChild(test);
    retry.addImage("Retry", window.buttonRetry);
    retry.switchImage("Retry");
    weiter.addImage("Weiter", window.buttonWeiter);
    weiter.addImage("Weiter_2", window.buttonWeiter_2);
    weiter.switchImage("Weiter");
    test.addImage("emolga", window.emolga);
    test.switchImage("emolga");
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

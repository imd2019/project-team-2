import Test from "./Test.js";
import InteractiveObject from "./interactiveObject.js";
let test;
let world;
let init = true;
function draw() {
  if (init) {
    world = new InteractiveObject(
      0,
      0,
      windowWidth,
      windowHeight,
      window.ENUMS.SHAPE.RECT
    );
    test = new Test();
    world.addChild(test);
    test.addImage("Weiter", window.buttonWeiter);
    test.addImage("Weiter_2", window.buttonWeiter_2);
    test.switchImage("Weiter");
    console.log(test);
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

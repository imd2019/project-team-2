let sketch = new p5();
let width = windowWidth;
let heigh = windowHeight;
let emolga;

function preload() {
  console.log("preload");

  /* BeispielCode
  	BILDNAME = loadImage("images/bildname.png");
  */
  emolga = loadImage("images/Emolga2.png");
}

function setup() {
  preload();
  console.log("setup");
  sketch.createCanvas(windowWidth, windowHeight);
  sketch.frameRate(30);

  emolga.loadPixels();
  window.emolga = emolga;

  window.ENUMS = Object.freeze({
    SHAPE: Object.freeze({
      ROUND: 0,
      RECT: 1,
    }),
  });
}
window.setup = setup;

function windowResized() {
  sketch.resizeCanvas(windowWidth, windowHeight);
}
window.addEventListener("resize", windowResized);

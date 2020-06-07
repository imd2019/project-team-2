let sketch = new p5();

let width = windowWidth;
let heigh = windowHeight;

let emolga;
let buttonWeiter;
let buttonWeiter_2;

let testVideo;

function preload() {
  console.log("preload");

  /* BeispielCode
  	BILDNAME = loadImage("images/bildname.png");
  */
  emolga = loadImage("images/Emolga2.png");
  buttonWeiter = loadImage("images/Button_Weiter.png");
  buttonWeiter_2 = loadImage("images/Button_Weiter_2.png");
  // testVideo = sketch.createVideo("videos/Backup.mp4");
}
window.preload = preload;

function setup() {
  console.log("setup");
  sketch.createCanvas(windowWidth, windowHeight);
  sketch.frameRate(30);

  emolga.loadPixels();
  buttonWeiter.loadPixels();
  buttonWeiter_2.loadPixels();
  window.buttonWeiter = buttonWeiter;
  window.buttonWeiter_2 = buttonWeiter_2;

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

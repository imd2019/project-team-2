import InteractiveObject from "./interactiveObject.js";

export default class Scene extends InteractiveObject {
  constructor(name) {
    super(0, 0, windowWidth, windowHeight, window.ENUMS.SHAPE.RECT);
    this.name = name;
    this.video = {};
  }

  addVideo(name, video) {
    this.video[name] = video;
    return true;
  }

  playVideo(name) {
    if (this.video.hasOwnProperty(name)) {
      this.video[name].play();
      //this.video[name].hide();
      return true;
    }
    console.error(`Es gibt kein Video mit dem Namen ${name}`);
    return false;
  }

  init() {
    console.log("init");
  }

  end() {}

  onEnd() {}

  restart() {}
}

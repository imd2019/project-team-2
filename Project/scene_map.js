import Scene from "./scene.js";
import Button_Map from "./button_map.js";

export default class Map extends Scene {
  constructor() {
    super(window.ENUMS.SCENE_NAMES.MAP);
    this.buttonMap1;
    this.buttonMap2;
    this.buttonMap3;
  }
  init() {
    this.buttonMap1 = new Button_Map(
      307.8,
      309,
      window.ENUMS.SCENE_NAMES.HAENDEWASCHEN
    );
    this.addChild(this.buttonMap1);
    this.buttonMap2 = new Button_Map(738, 265.5, window.ENUMS.SCENE_NAMES.MASK);
    this.buttonMap2.disable(false);
    this.addChild(this.buttonMap2);
    this.buttonMap3 = new Button_Map(
      1140,
      135,
      window.ENUMS.SCENE_NAMES.PEOPLE_BOUNCY
    );
    this.buttonMap3.disable(false);
    this.addChild(this.buttonMap3);
    this.addImage("background", window.ENUMS.IMAGE.BACKGROUND_MAP);
    this.switchImage("background");
  }
}

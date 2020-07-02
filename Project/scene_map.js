import Scene from "./scene.js";
import Button_Map from "./button_map.js";

export default class Map extends Scene {
  constructor() {
    super(window.ENUMS.SCENE_NAMES.MAP);
    this.buttonMap1;
    this.buttonMap2;
    this.buttonMap3;
    this.state = 0;
  }
  init() {
    this.buttonMap1 = new Button_Map(
      307.8,
      309,
      window.ENUMS.SCENE_NAMES.HAENDEWASCHEN
    );
    this.buttonMap1.disable(false);
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
    this.addImage("background_2", window.ENUMS.IMAGE.BACKGROUND_MAP_2);
    this.switchMapState(0);
  }

  switchMapState(mapState) {
    switch (mapState) {
      case 0:
        this.state = 0;
        this.switchImage("background");
        this.buttonMap1.enable();
        break;
      case 1:
        this.state = 1;
        this.switchImage("background");
        break;
      case 2:
        this.state = 2;
        this.switchImage("background_2");
        this.buttonMap3.enable();
        break;
    }
  }
}

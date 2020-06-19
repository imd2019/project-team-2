import MoveableObject from "./moveableObject.js";
import InteractiveObject from "./interactiveObject.js";

export default class Hand extends MoveableObject {
  constructor(x, y) {
    super(x, y, 895, 602, window.ENUMS.SHAPE.RECT);
    this.hitBoxen = {
      palm: [],
      spaces: [],
      tips: [],
      thumb: [],
    };
    this.hitBoxInit = false;
    this.addImage("Weiss-Hand", window.ENUMS.IMAGE.HAND_WHITE);
    this.addImage("Braun-Hand", window.ENUMS.IMAGE.HAND_BROWN);
  }
  init() {
    this.setSpeed();
  }

  setSpeed() {
    this.velocity.y = -25;
    this.setAcceleration(0, 0.5);
    this.setMaxMinSpeed(0, -200);
  }

  update() {
    if (this.y <= 200) {
      this.stop();
      if (this.hitBoxInit === false) {
        this.initHitBox();
        this.hitBoxInit = true;
      }
    }
    this.move();
  }

  initHitBox() {
    //Hitbox Handfläche
    let palm1 = new InteractiveObject(
      640,
      355,
      220,
      190,
      window.ENUMS.SHAPE.ROUND
    );
    let palm2 = new InteractiveObject(
      570,
      430,
      150,
      140,
      window.ENUMS.SHAPE.RECT
    );

    this.hitBoxen.palm.push(palm1);
    this.hitBoxen.palm.push(palm2);

    // Fingerinnenseite
    let innenseite1a = new InteractiveObject(
      510,
      160,
      30,
      30,
      window.ENUMS.SHAPE.RECT
    );
    let innenseite1b = new InteractiveObject(
      525,
      190,
      30,
      30,
      window.ENUMS.SHAPE.RECT
    );
    let innenseite2 = new InteractiveObject(
      580,
      110,
      30,
      90,
      window.ENUMS.SHAPE.RECT
    );

    let innenseite3 = new InteractiveObject(
      657,
      80,
      30,
      110,
      window.ENUMS.SHAPE.RECT
    );
    let innenseite4 = new InteractiveObject(
      730,
      110,
      30,
      90,
      window.ENUMS.SHAPE.RECT
    );

    let kleinerFingerAußenA = new InteractiveObject(
      18,
      170,
      30,
      30,
      window.ENUMS.SHAPE.RECT
    );
    let kleinerFingerAußenB = new InteractiveObject(
      28,
      200,
      30,
      30,
      window.ENUMS.SHAPE.RECT
    );

    this.hitBoxen.palm.push(innenseite1a);
    this.hitBoxen.palm.push(innenseite1b);
    this.hitBoxen.palm.push(innenseite2);
    this.hitBoxen.palm.push(innenseite3);
    this.hitBoxen.palm.push(innenseite4);
    this.hitBoxen.palm.push(kleinerFingerAußenA);
    this.hitBoxen.palm.push(kleinerFingerAußenB);

    //Hitbox Fingerzwischenräume von links nach rechts
    //linke Hand
    let spacesBelow1 = new InteractiveObject(
      85,
      250,
      40,
      400,
      window.ENUMS.SHAPE.ROUND
    );
    let spacesAbove1 = new InteractiveObject(
      60,
      190,
      30,
      45,
      window.ENUMS.SHAPE.RECT
    );

    let spacesBelow2 = new InteractiveObject(
      140,
      225,
      40,
      400,
      window.ENUMS.SHAPE.ROUND
    );
    let spacesAbove2 = new InteractiveObject(
      122,
      130,
      35,
      80,
      window.ENUMS.SHAPE.RECT
    );
    let spacesBelow3 = new InteractiveObject(
      200,
      230,
      40,
      400,
      window.ENUMS.SHAPE.ROUND
    );
    let spacesAbove3 = new InteractiveObject(
      190,
      145,
      35,
      65,
      window.ENUMS.SHAPE.RECT
    );
    let spacesBelow4 = new InteractiveObject(
      260,
      330,
      60,
      400,
      window.ENUMS.SHAPE.ROUND
    );
    let spacesAbove4 = new InteractiveObject(
      280,
      300,
      35,
      30,
      window.ENUMS.SHAPE.RECT
    );

    // spacesAbove1.setRotInDegree(-12);
    // spacesAbove2.setRotInDegree(-1);
    // spacesAbove3.setRotInDegree(10);
    // spacesAbove4.setRotInDegree(45);
    this.hitBoxen.spaces.push(spacesAbove1);
    this.hitBoxen.spaces.push(spacesBelow1);
    this.hitBoxen.spaces.push(spacesAbove2);
    this.hitBoxen.spaces.push(spacesBelow2);
    this.hitBoxen.spaces.push(spacesAbove3);
    this.hitBoxen.spaces.push(spacesBelow3);
    this.hitBoxen.spaces.push(spacesAbove4);
    this.hitBoxen.spaces.push(spacesBelow4);

    //rechte Hand
    let spacesBelow5 = new InteractiveObject(
      580,
      250,
      40,
      400,
      window.ENUMS.SHAPE.ROUND
    );
    let spacesAbove5 = new InteractiveObject(
      555,
      190,
      30,
      45,
      window.ENUMS.SHAPE.RECT
    );
    let spacesBelow6 = new InteractiveObject(
      640,
      225,
      40,
      400,
      window.ENUMS.SHAPE.ROUND
    );
    let spacesAbove6 = new InteractiveObject(
      620,
      130,
      35,
      80,
      window.ENUMS.SHAPE.RECT
    );
    let spacesBelow7 = new InteractiveObject(
      695,
      230,
      40,
      400,
      window.ENUMS.SHAPE.ROUND
    );
    let spacesAbove7 = new InteractiveObject(
      685,
      145,
      35,
      65,
      window.ENUMS.SHAPE.RECT
    );
    let spacesBelow8 = new InteractiveObject(
      760,
      330,
      60,
      400,
      window.ENUMS.SHAPE.ROUND
    );
    let spacesAbove8 = new InteractiveObject(
      770,
      290,
      35,
      30,
      window.ENUMS.SHAPE.RECT
    );

    // spacesAbove5.setRotInDegree(-12);
    this.hitBoxen.spaces.push(spacesAbove5);
    this.hitBoxen.spaces.push(spacesBelow5);
    this.hitBoxen.spaces.push(spacesAbove6);
    this.hitBoxen.spaces.push(spacesBelow6);
    this.hitBoxen.spaces.push(spacesAbove7);
    this.hitBoxen.spaces.push(spacesBelow7);
    this.hitBoxen.spaces.push(spacesAbove8);
    this.hitBoxen.spaces.push(spacesBelow8);

    //Handrückseite
    let rückseite1 = new InteractiveObject(
      150,
      355,
      220,
      190,
      window.ENUMS.SHAPE.ROUND
    );
    let rückseite2 = new InteractiveObject(
      80,
      450,
      150,
      130,
      window.ENUMS.SHAPE.RECT
    );
    this.hitBoxen.spaces.push(rückseite1);
    this.hitBoxen.spaces.push(rückseite2);

    //Fingerspiten von links nach rechts
    //linke Hand
    let tip1 = new InteractiveObject(25, 145, 50, 70, window.ENUMS.SHAPE.ROUND);
    let tip2 = new InteractiveObject(100, 70, 50, 70, window.ENUMS.SHAPE.ROUND);
    let tip3 = new InteractiveObject(190, 45, 50, 70, window.ENUMS.SHAPE.ROUND);
    let tip4 = new InteractiveObject(270, 90, 50, 70, window.ENUMS.SHAPE.ROUND);

    this.hitBoxen.tips.push(tip1);
    this.hitBoxen.tips.push(tip2);
    this.hitBoxen.tips.push(tip3);
    this.hitBoxen.tips.push(tip4);

    //rechte Hand

    let tip5 = new InteractiveObject(520, 135, 50, 0, window.ENUMS.SHAPE.ROUND);
    let tip6 = new InteractiveObject(595, 60, 50, 0, window.ENUMS.SHAPE.ROUND);
    let tip7 = new InteractiveObject(685, 35, 50, 0, window.ENUMS.SHAPE.ROUND);
    let tip8 = new InteractiveObject(760, 80, 50, 0, window.ENUMS.SHAPE.ROUND);

    this.hitBoxen.tips.push(tip5);
    this.hitBoxen.tips.push(tip6);
    this.hitBoxen.tips.push(tip7);
    this.hitBoxen.tips.push(tip8);

    //linker Daumen
    let thumbLeft1 = new InteractiveObject(
      360,
      290,
      70,
      0,
      window.ENUMS.SHAPE.ROUND
    );
    let thumbLeft2 = new InteractiveObject(
      315,
      320,
      40,
      40,
      window.ENUMS.SHAPE.RECT
    );
    let thumbLeft3 = new InteractiveObject(
      290,
      360,
      40,
      40,
      window.ENUMS.SHAPE.RECT
    );
    let thumbLeft4 = new InteractiveObject(
      295,
      340,
      20,
      20,
      window.ENUMS.SHAPE.RECT
    );
    this.hitBoxen.thumb.push(thumbLeft1);
    this.hitBoxen.thumb.push(thumbLeft2);
    this.hitBoxen.thumb.push(thumbLeft3);
    this.hitBoxen.thumb.push(thumbLeft4);

    //rechter Daumen

    let thumbRight1 = new InteractiveObject(
      860,
      290,
      70,
      0,
      window.ENUMS.SHAPE.ROUND
    );
    let thumbRight2 = new InteractiveObject(
      810,
      320,
      40,
      40,
      window.ENUMS.SHAPE.RECT
    );
    let thumbRight3 = new InteractiveObject(
      780,
      360,
      40,
      40,
      window.ENUMS.SHAPE.RECT
    );
    let thumbRight4 = new InteractiveObject(
      790,
      340,
      20,
      20,
      window.ENUMS.SHAPE.RECT
    );
    this.hitBoxen.thumb.push(thumbRight1);
    this.hitBoxen.thumb.push(thumbRight2);
    this.hitBoxen.thumb.push(thumbRight3);
    this.hitBoxen.thumb.push(thumbRight4);

    for (let i in this.hitBoxen) {
      let array = this.hitBoxen[i];
      for (let element of array) {
        this.addChild(element);
      }
    }
  }

  drawHitBox() {
    for (let element of this.children) {
      push();
      translate(element.x, element.y);
      rotate(element.rot);
      fill(0, 0, 0, 100);
      if (element.shape === window.ENUMS.SHAPE.ROUND) {
        ellipse(0, 0, element.width, element.height);
      } else {
        rect(0, 0, element.width, element.height);
      }
      pop();
    }
  }

  draw() {
    this.drawHitBox();
  }

  onHand(x, y) {
    for (let i in this.hitBoxen) {
      if (this.testHitboxHand(x, y, i)) return true;
    }
    return false;
  }

  testHitboxHand(x, y, area) {
    if (this.hitBoxen.hasOwnProperty(area)) {
      for (let i in this.hitBoxen[area]) {
        if (this.hitBoxen[area][i].hitTest(x, y)) {
          return true;
        }
      }
      return false;
    } else {
      console.error(`Es gibt keine Area mit dem Namen ${area}`);
      return false;
    }
  }
}

/* 4 Zonen:
    - Handinnenfläche und Fingerinnenseite
    - Zwischenräume/Handrückseite
    - Fingerspitzen
    - Daumenrückseite
*/

export default class Util {
  static betrag(vektor) {
    return sqrt(sq(vektor[0]) + sq(vektor[1]));
  }

  static vecRotate(v, a) {
    return [v[0] * cos(a) - v[1] * sin(a), v[0] * sin(a) + v[1] * cos(a)];
  }

  static easeOutBounce(x) {
    const n1 = 7.5625;
    const d1 = 2.75;

    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
  }

  static easeOutElastic(x) {
    const c4 = (2 * Math.PI) / 3;
    return x === 0
      ? 0
      : x === 1
      ? 1
      : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
  }

  static easeOutQuint(x) {
    return 1 - Math.pow(1 - x, 5);
  } //https://easings.net/de#easeOutQuint

  static easeOutQuart(x) {
    return 1 - pow(1 - x, 4);
  }

  static easeInQuart(x) {
    return x * x * x * x;
  }
  static easeOutSine(x) {
    return sin((x * PI) / 2);
  }
}

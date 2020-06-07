export default class Util {
  static betrag(vektor) {
    return sqrt(sq(vektor[0]) + sq(vektor[1]));
  }
  static vecRotate(v, a) {
    return [v[0] * cos(a) - v[1] * sin(a), v[0] * sin(a) + v[1] * cos(a)];
  }
  static easeOutQuint(x) {
    return 1 - Math.pow(1 - x, 5);
  } //https://easings.net/de#easeOutQuint
}

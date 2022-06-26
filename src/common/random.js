export class Random {
  generate() {
    return Math.random();
  }

  generateInBounds(min, max) {
    return min + Math.random() * (max - min);
  }
}

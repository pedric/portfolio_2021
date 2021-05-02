class Swipe {
  constructor() {
    this.swipeStart = {};
    this.swipeEnd = {};
  }

  setStartPoints(x, y) {
    x = parseInt(x);
    y = parseInt(y);
    this.swipeStart = { x, y };
  }

  setEndPoints(x, y) {
    x = parseInt(x);
    y = parseInt(y);
    this.swipeEnd = { x, y };
  }
}

export default Swipe;

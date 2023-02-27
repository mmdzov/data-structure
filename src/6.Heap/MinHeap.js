const Heap = require("./heap");

class MinHeap extends Heap {
  constructor() {
    super();
  }

  isItNeat(element1, element2) {
    return element1 <= element2;
  }
}

module.exports = MinHeap;

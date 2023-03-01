const Heap = require("./heap");

class MaxHeap extends Heap {
  constructor() {
    super("max");
  }

  isItNeat(element1, element2) {
    return element1 >= element2;
  }
}

module.exports = MaxHeap;

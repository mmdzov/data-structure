class Heap {
  constructor() {
    if (new.target === Heap)
      throw new Error("Sorry! You cannot create an instance of this class");

    this.dataset = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  insert(data) {
    this.dataset.push(data);
    this.heapifyUp();
    return this;
  }

  swapUp(index1, index2) {
    const temp = this.dataset[index1];
    this.dataset[index1] = this.dataset[index2];
    this.dataset[index2] = temp;
  }

  getParent(index) {
    return this.dataset[this.getParentIndex(index)];
  }

  isItNeat(element1, element2) {
    return false;
  }

  heapifyUp() {
    let current = this.dataset.length - 1;

    while (
      this.hasParent(current) &&
      !this.isItNeat(this.getParent(current), this.dataset[current])
    ) {
      this.swapUp(current, this.getParentIndex(current));
      current = this.getParentIndex(current);
    }
  }

  search(item) {
    let founds = [];

    for (let i = 0; i < this.dataset.length; i++) {
      if (this.dataset[i] === item) founds.push(i);
    }

    return founds;
  }
}

module.exports = Heap;

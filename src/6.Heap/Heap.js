class Heap {
  constructor(typeofHeap = null) {
    if (new.target === Heap)
      throw new Error("Sorry! You cannot create an instance of this class");

    this.typeofHeap = typeofHeap;

    this.dataset = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  getLeftIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  hasRightChild(parentIndex) {
    return this.getRightIndex(parentIndex) < this.dataset.length;
  }

  hasLeftChild(parentIndex) {
    return this.getLeftIndex(parentIndex) < this.dataset.length;
  }

  insert(data) {
    this.dataset.push(data);
    this.heapifyUp();
    return this;
  }

  swap(index1, index2) {
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

  isEmpty() {
    return !this.dataset.length;
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.dataset[0];
  }

  heapifyUp(startIndex) {
    let current = startIndex || this.dataset.length - 1;

    while (
      this.hasParent(current) &&
      !this.isItNeat(this.getParent(current), this.dataset[current])
    ) {
      this.swap(current, this.getParentIndex(current));
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

  poll() {
    if (this.dataset.length === 0) return null;

    if (this.dataset.length === 1) return this.dataset.pop();

    const item = this.dataset[0];

    this.dataset[0] = this.dataset.pop();

    this.heapifyDown();

    return item;
  }

  pop() {
    const dataset = this.dataset.sort((a, b) => b - a);

    const item = dataset[0];

    if (!item) return null;

    this.remove(item);

    return item;
  }

  heapifyDown(startIndex = 0) {
    let current = startIndex;
    let next = null;

    while (this.hasLeftChild(current)) {
      if (
        this.hasRightChild(current) &&
        this.isItNeat(this.getRightIndex(current), this.getLeftIndex(current))
      ) {
        next = this.getRightIndex(current);
      } else next = this.getLeftIndex(current);

      if (this.isItNeat(this.dataset[current], this.dataset[next])) break;

      this.swap(current, next);
      current = next;
    }
  }

  remove(item) {
    let itemsToRemove = this.search(item);

    for (let i = 0; i < itemsToRemove.length; i++) {
      const index = itemsToRemove.pop();

      if (index === this.dataset.length - 1) this.dataset.pop();
      else {
        this.dataset[index] = this.dataset.pop();

        const parent = this.getParent(index);

        if (
          this.hasLeftChild(index) &&
          (!parent || this.isItNeat(parent), this.dataset[index])
        ) {
          this.heapifyDown(index);
        } else this.heapifyUp(index);
      }
    }

    return this;
  }
}

module.exports = Heap;

const MinHeap = require("../6.Heap/MinHeap");

class PriorityQueue {
  constructor() {
    this.minHeap = new MinHeap();

    this.priorities = new Map();
  }

  enqueue(value, priority) {
    this.priorities.set(priority, value);

    this.minHeap.insert(priority);

    return this;
  }

  dequeue() {
    const priority = this.minHeap.pop();

    this.priorities.delete(priority);

    return this;
  }

  get(_value) {
    let data = null;

    this.priorities.forEach((value, priority) => {
      if (_value === value) {
        data = { priority, value };
        return;
      }
    });

    return data;
  }

  getByPriority(priority) {
    return { priority, value: this.priorities.get(priority) };
  }

  isEmpty() {
    return this.minHeap.isEmpty();
  }

  front() {
    return this.getByPriority(this.minHeap.peek());
  }

  rear() {
    if (this.isEmpty()) return null;

    const dataset = this.minHeap.dataset;

    return this.getByPriority(dataset[dataset.length - 1]);
  }

  print() {
    const dataset = this.minHeap.dataset.map((priority) =>
      this.getByPriority(priority),
    );

    return dataset;
  }

  printPriorities() {
    return this.minHeap.dataset;
  }

  size() {
    return this.minHeap.dataset.length;
  }
}

module.exports = PriorityQueue;

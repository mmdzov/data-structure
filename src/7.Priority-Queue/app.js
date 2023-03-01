const MinHeap = require("../6.Heap/MinHeap");

class PriorityQueue extends MinHeap {
  constructor() {
    super();
    this.priorities = new Map();
  }

  enqueue(value, priority) {
    this.priorities.set(priority, value);

    super.insert(priority);

    return this;
  }

  dequeue() {
    const priority = super.pop();

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

  front() {
    return this.getByPriority(super.peek());
  }

  rear() {
    if (this.isEmpty()) return null;

    const dataset = super.dataset;

    return this.getByPriority(dataset[dataset.length - 1]);
  }

  print() {
    const dataset = super.dataset.map((priority) =>
      this.getByPriority(priority),
    );

    return dataset;
  }

  printPriorities() {
    return super.dataset;
  }

  size() {
    return super.dataset.length;
  }
}

module.exports = PriorityQueue;

const SinglyLinkedList = require("../2.Linked-List/2_1.Singly-Linked-List/app");

class Queue {
  constructor() {
    this.linkedList = new SinglyLinkedList();
  }

  enqueue(value) {
    return this.linkedList.prepend(value);
  }

  dequeue() {
    return this.linkedList.pop();
  }

  size() {
    return this.linkedList.length;
  }

  peek() {
    if (this.linkedList.isEmpty()) return null;

    return this.linkedList.head.value;
  }
}

module.exports = Queue;

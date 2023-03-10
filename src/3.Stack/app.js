const SinglyLinkedList = require("../2.Linked-List/2_1.Singly-Linked-List/app");

class Stack {
  constructor() {
    this.linkedList = new SinglyLinkedList();
  }

  push(value) {
    return this.linkedList.prepend(value);
  }

  pop() {
    return this.linkedList.pop();
  }

  peek() {
    if (this.linkedList.isEmpty()) return null;

    return this.linkedList.head.value;
  }

  size() {
    return this.linkedList.length;
  }
}

module.exports = Stack;

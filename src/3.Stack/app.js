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
    return this.linkedList.peek();
  }

  length() {
    return this.linkedList.length;
  }
}

module.exports = Stack;

class Node {
  constructor(value = undefined, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return node;
    }

    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;

    return node;
  }

  getHead() {
    return this.head;
  }
}

module.exports = SinglyLinkedList;

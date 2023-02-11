class Node {
  constructor(value = undefined, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const node = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = node;
    this.tail = node;

    if (!this.head) {
      this.head = this.tail;
      return node;
    }
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
}

module.exports = DoublyLinkedList;

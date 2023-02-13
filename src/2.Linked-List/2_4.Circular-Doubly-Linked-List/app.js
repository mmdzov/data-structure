class Node {
  constructor(value = undefined, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length++;
  }

  add(value) {
    const node = new Node(value, this.head, this.tail);
    if (this.tail) this.tail.next = node;
    this.tail = node;
    this.length++;

    if (!this.head) this.head = this.tail;
    else this.head.prev = node;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
}

module.exports = CircularDoublyLinkedList;

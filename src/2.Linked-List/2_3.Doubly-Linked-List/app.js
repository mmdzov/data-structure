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
    this.length = 0;
  }

  add(value) {
    const node = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = node;
    this.tail = node;
    this.length++;

    if (!this.head) {
      this.head = this.tail;
      return node;
    }
  }

  traversal(callback = (value, next, prev, index) => {}) {
    let curr = this.head;
    let counter = 0;

    while (curr) {
      callback(curr.value, curr.next, curr.prev, counter);

      counter++;
      curr = curr.next;
    }
  }

  reverse(callback = (value, next, prev, index) => {}) {
    let curr = this.tail;
    let counter = 0;

    while (curr) {
      callback(curr.value, curr.next, curr.prev, counter);

      counter++;
      curr = curr.prev;
    }
  }

  pop() {
    this.tail = this.tail.prev;
    this.tail.next = null;

    return true;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
}

module.exports = DoublyLinkedList;

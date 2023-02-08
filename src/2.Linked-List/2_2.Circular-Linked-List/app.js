class Node {
  constructor(value = undefined, next = null) {
    this.value = value;
    this.next = next;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value, this.head);
    let curr = this.head;

    if (!this.head) this.head = node;
    else {
      while (curr.next) {
        curr = curr.next;
        if (curr.next === this.head) break;
      }

      curr.next = node;
    }

    return node;
  }

  getHead() {
    return this.head;
  }
}

module.exports = CircularLinkedList;

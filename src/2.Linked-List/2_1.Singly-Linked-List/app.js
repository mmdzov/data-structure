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

  remove(value) {
    let curr = this.head;
    let prev = null;

    while (curr) {
      if (curr.value === value) {
        if (!prev) this.head = curr.next;
        else prev.next = curr.next;
        return curr.value;
      }
      prev = curr;
      curr = curr.next;
    }

    return false;
  }

  getHead() {
    return this.head;
  }
}

module.exports = SinglyLinkedList;

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

  insertAt(value, index) {
    let node = new Node(value);
    let curr = this.head;
    let counter = 0;
    let prev = null;

    if (index === 0) {
      while (curr) {
        if (curr.next === this.head) break;
        curr = curr.next;
      }

      node.next = this.head;
      this.head = node;

      curr.next = node;

      return node;
    }

    while (curr) {
      if (counter === index) {
        if (curr.next === this.head) {
          node.next = this.head;
          this.head = node;
          return node;
        }

        node.next = curr;
        prev.next = node;

        return node;
      }
      if (curr.next === this.head) return false;

      counter++;
      prev = curr;
      curr = curr.next;
    }
    return false;
  }

  getHead() {
    return this.head;
  }
}

module.exports = CircularLinkedList;

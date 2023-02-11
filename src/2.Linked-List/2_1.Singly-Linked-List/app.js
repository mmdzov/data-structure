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

  search(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return curr;
      curr = curr.next;
    }

    return false;
  }

  searchByIndex(index) {
    let curr = this.head;
    let counter = 0;

    while (curr) {
      if (counter === index) return curr;
      counter++;
      curr = curr.next;
    }

    return false;
  }

  indexOf(value) {
    let curr = this.head;
    let counter = 0;

    while (curr) {
      if (curr.value === value) return counter;
      counter++;
      curr = curr.next;
    }

    return null;
  }

  insertAt(value, index) {
    let curr = this.head;
    let counter = 0;
    let prev = null;

    while (curr) {
      if (counter === index) {
        const node = new Node(value, curr);
        if (!prev) this.head = node;
        else prev.next = node;
        return node;
      }

      prev = curr;
      curr = curr.next;
      counter++;
    }

    return null;
  }

  traversal(callback = (value, next, index) => {}) {
    let curr = this.head;
    let counter = 0;

    while (curr) {
      callback(curr.value, curr.next, counter);

      counter++;
      curr = curr.next;
    }
  }

  getHead() {
    return this.head;
  }
}

module.exports = SinglyLinkedList;

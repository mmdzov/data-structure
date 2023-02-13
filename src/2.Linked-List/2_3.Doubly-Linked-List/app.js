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

    if (!this.head) this.head = this.tail;

    return node;
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
    this.tail = this.tail?.prev || null;
    if (this.tail?.next) this.tail.next = null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.length--;

    return true;
  }

  remove(value) {
    let curr = this.head;

    while (curr) {
      if (curr.value === value) {
        if (curr?.prev) curr.prev.next = curr.next;
        if (curr?.next) curr.next.prev = curr.prev;
        if (!curr?.next && !curr?.prev) {
          this.head = null;
          this.tail = null;
        }
        this.length--;
        return true;
      }
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
      if (index === counter) return curr;

      counter++;
      curr = curr.next;
    }

    return false;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
}

module.exports = DoublyLinkedList;

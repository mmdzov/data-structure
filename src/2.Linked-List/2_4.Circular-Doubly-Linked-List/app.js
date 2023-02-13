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

  indexOf(value) {
    let curr = this.head;
    let counter = 0;

    while (curr) {
      if (curr.value === value) return counter;
      if (curr.next === this.head) break;

      counter++;
      curr = curr.next;
    }

    return null;
  }

  search(value) {
    let curr = this.head;

    while (curr) {
      if (curr.value === value) return curr;
      if (curr.next === this.head) break;

      curr = curr.next;
    }

    return false;
  }

  searchByIndex(index) {
    let curr = this.head;
    let counter = 0;

    while (curr) {
      if (counter === index) return curr;
      if (curr.next === this.head) break;

      counter++;
      curr = curr.next;
    }

    return false;
  }

  traversal(callback = (value, next, prev, index) => {}) {
    let curr = this.head;
    let counter = 0;

    while (curr) {
      callback(curr.value, curr.next, curr.prev, counter);
      if (curr.next === this.head) break;

      counter++;
      curr = curr.next;
    }
  }

  reverse(callback = (value, next, prev, index) => {}) {
    let curr = this.tail;
    let counter = 0;

    while (curr) {
      callback(curr.value, curr.next, curr.prev, counter);
      if (curr.prev === this.head) break;

      counter++;
      curr = curr.prev;
    }
  }

  pop() {
    this.tail = this.tail?.prev || null;
    if (this.tail?.next) this.tail.next = this.head;
    if (this.head?.prev) this.head.prev = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.length--;

    return true;
  }

  remove(value) {
    let curr = this.head;
    let prev = null;

    if (this.head.value === value || this.tail.value === value) {
      if (this.tail.value === value) this.tail = this.tail.prev;
      else if (this.head.value === value) this.head = this.head.next;

      this.head.prev = this.tail;
      this.tail.next = this.head;

      this.length--;
      return true;
    }

    while (curr) {
      if (curr.value === value) {
        prev.next = curr.next;
        curr.prev.next = curr.next;
        prev.next.prev = curr.prev;
        this.length--;
        return true;
      }

      if (curr.next === this.head) break;

      prev = curr;
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

module.exports = CircularDoublyLinkedList;

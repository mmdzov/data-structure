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

  indexOf(value) {
    let curr = this.head;
    let counter = 0;

    while (curr) {
      if (curr.value === value) return counter;
      if (curr.next === this.head) return null;

      curr = curr.next;
      counter++;
    }

    return null;
  }

  search(value) {
    let curr = this.head;

    while (curr) {
      if (curr.value === value) return curr;
      if (curr.next === this.head) return false;

      curr = curr.next;
    }

    return false;
  }

  searchByIndex(index) {
    let curr = this.head;
    let counter = 0;

    while (curr) {
      if (counter === index) return curr;
      if (curr.next === this.head) return false;

      counter++;
      curr = curr.next;
    }

    return false;
  }

  remove(value) {
    let curr = this.head;
    let prev = null;

    if (curr.value === value) {
      while (curr) {
        if (curr.next === this.head) break;
        curr = curr.next;
      }
      let next = this.head.next;
      curr.next = next;
      this.head = next;
      return true;
    }

    while (curr) {
      if (curr.value === value) {
        prev.next = curr.next;
        return true;
      }

      if (curr.next === this.head) return false;

      prev = curr;
      curr = curr.next;
    }

    return false;
  }

  traversal(callback = (value, next, index) => {}) {
    let curr = this.head;
    let counter = 0;

    while (curr) {
      callback(curr.value, curr.next, counter);

      if (curr.next === this.head) break;

      counter++;
      curr = curr.next;
    }
  }

  getHead() {
    return this.head;
  }
}

module.exports = CircularLinkedList;

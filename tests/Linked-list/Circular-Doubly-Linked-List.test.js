const CircularDoublyLinkedList = require("../../src/2.Linked-List/2_4.Circular-Doubly-Linked-List/app");

describe("Circular Doubly Linked List", () => {
  const cdll = new CircularDoublyLinkedList();

  it("Should Add Node", () => {
    cdll.add(1);
    cdll.add(2);

    expect(cdll.getHead().value).toBe(1);
    expect(cdll.getHead().next.value).toBe(2);
    expect(cdll.getHead().next.next.value).toBe(1);
    expect(cdll.getHead().prev.value).toBe(2);
  });
});

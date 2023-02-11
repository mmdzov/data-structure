const DoublyLinkedList = require("../../src/2.Linked-List/2_3.Doubly-Linked-List/app");

describe("Doubly Linked List", () => {
  const dll = new DoublyLinkedList();

  it("Should add node", () => {
    dll.add(12);
    dll.add(3);
    dll.add(99);
    dll.add(18);

    expect(dll.getHead().value).toBe(12);
    expect(dll.getHead().next.prev.value).toBe(12);
    expect(dll.getTail().value).toBe(18);
    expect(dll.getTail().prev.value).toBe(99);
  });
});

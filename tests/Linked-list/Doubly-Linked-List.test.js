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

    expect(dll.length).toBe(4);
  });

  it("Should traverse between nodes", () => {
    dll.traversal((value, next, prev, index) => {
      if (index === 0) expect(value).toBe(12);
    });
  });

  it("Should reverse traverse between nodes", () => {
    dll.reverse((value, next, prev, index) => {
      if (index === 0) expect(value).toBe(18);
    });
  });

  it("Should pop node", () => {
    dll.add(122);

    expect(dll.getHead().next.next.next.next.value).toBe(122);

    dll.pop();

    expect(dll.getHead().next.next.next.next).toBe(null);
  });

  it("Should remove node", () => {
    dll.remove(99);

    expect(dll.getTail().prev.value).toBe(3);
    expect(dll.length).toBe(3);
  });

  it("Should get index of node", () => {
    const index = dll.indexOf(3);

    expect(index).toBe(1);
  });
});

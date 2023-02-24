const SinglyLinkedList = require("../../src/2.Linked-List/2_1.Singly-Linked-List/app");

describe("Singly Linked List", () => {
  const sll = new SinglyLinkedList();

  it("should add nodes", () => {
    sll.add(10);
    sll.add(12);
    sll.add(13);
    sll.add(8);
    sll.add(103);

    // expect(sll.tail.value).toBe(103);
    expect(sll.peek()).toBe(10);
  });

  it("should delete node", () => {
    const removed = sll.remove(12);

    expect(removed).toBe(12);
  });

  it("should search by value", () => {
    const result = sll.search(8);

    expect(result.value).toBe(8);
  });

  it("should search by index", () => {
    const result = sll.searchByIndex(3);

    expect(result.value).toBe(103);
  });

  it("get index of value", () => {
    const index = sll.indexOf(13);

    expect(index).toBe(1);
  });

  it("insert to specific position", () => {
    const node = sll.insertAt(66, 2);

    expect(node.value).toBe(66);
  });

  it("should traversal between node", () => {
    sll.traversal((value, next, index) => {
      if (index === 0) expect(value).toBe(10);
    });
  });
});

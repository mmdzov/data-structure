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

  it("Should remove node", () => {
    cdll.add(3);
    cdll.add(4);

    const result1 = cdll.remove(3);
    const result2 = cdll.remove(4);

    expect(result1).toBe(true);
    expect(result2).toBe(true);

    expect(cdll.getHead().next.next.value).toBe(1);
  });

  it("Should pop node", () => {
    cdll.add(3);

    const result = cdll.pop();

    expect(result).toBe(true);

    expect(cdll.getHead().next.next.value).toBe(1);
  });

  it("Should get index of node", () => {
    const index = cdll.indexOf(2);

    expect(index).toBe(1);
  });

  it("Should traverse between nodes", () => {
    cdll.traversal((value, next, prev, index) => {
      if (index === 0) expect(value).toBe(1);
    });
  });

  it("Should reverse traverse between nodes", () => {
    cdll.reverse((value, next, prev, index) => {
      if (index === 0) expect(value).toBe(2);
    });
  });
});

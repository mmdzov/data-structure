const CircularLinkedList = require("../../src/2.Linked-List/2_2.Circular-Linked-List/app");

describe("Circular linked list", () => {
  const cll = new CircularLinkedList();

  it("should add node", () => {
    cll.add(5);
    cll.add(99);
    cll.add(19);
    cll.add(41);
    cll.add(71);

    expect(cll.getHead().next.next.next.next.next.value).toBe(5);
  });

  it("sould add in specific position", () => {
    cll.insertAt(185, 0);
    cll.insertAt(1000, 2);

    expect(cll.getHead().value).toBe(185);
    expect(cll.getHead().next.next.value).toBe(1000);
  });

  it("should get index", () => {
    const index = cll.indexOf(1000);

    expect(index).toBe(2);
  });
});

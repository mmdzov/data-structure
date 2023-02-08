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
});

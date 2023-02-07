const SinglyLinkedList = require("../../src/2.Linked-List/2_1.Singly-Linked-List/app");

describe("Singly Linked List", () => {
  it("should add nodes", () => {
    const ll = new SinglyLinkedList();

    ll.add(10);
    ll.add(12);
    ll.add(13);

    expect(ll.getHead().next.next.value).toBe(13)
  });
});

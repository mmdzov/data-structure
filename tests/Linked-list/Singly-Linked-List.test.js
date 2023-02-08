const SinglyLinkedList = require("../../src/2.Linked-List/2_1.Singly-Linked-List/app");

describe("Singly Linked List", () => {
  const ll = new SinglyLinkedList();

  it("should add nodes", () => {
    ll.add(10);
    ll.add(12);
    ll.add(13);

    expect(ll.getHead().value).toBe(10);
    expect(ll.getHead().next.value).toBe(12);
    expect(ll.getHead().next.next.value).toBe(13);
  });

  it("should delete node", () => {
    const removed = ll.remove(12);

    expect(removed).toBe(12);
    expect(ll.getHead().next.value).toBe(13);
  });
});

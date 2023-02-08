const SinglyLinkedList = require("../../src/2.Linked-List/2_1.Singly-Linked-List/app");

describe("Singly Linked List", () => {
  const ll = new SinglyLinkedList();

  it("should add nodes", () => {
    ll.add(10);
    ll.add(12);
    ll.add(13);
    ll.add(8);
    ll.add(103);

    expect(ll.getHead().value).toBe(10);
    expect(ll.getHead().next.value).toBe(12);
    expect(ll.getHead().next.next.value).toBe(13);
  });

  it("should delete node", () => {
    const removed = ll.remove(12);

    expect(removed).toBe(12);
    expect(ll.getHead().next.value).toBe(13);
  });

  it("should search by value", () => {
    const result = ll.search(8);

    expect(result.value).toBe(8);
  });

  it("should search by index", () => {
    const result = ll.searchByIndex(3);

    expect(result.value).toBe(103);
  });

  it("get index of value", () => {
    const index = ll.indexOf(13);

    expect(index).toBe(1);
  });

  it("insert to specific position", () => {
    const node = ll.insertTo(66, 2);

    expect(node.value).toBe(66);
  });
});

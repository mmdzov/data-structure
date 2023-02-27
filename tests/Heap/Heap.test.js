const { MinHeap, MaxHeap } = require("../../src/6.Heap/app");

describe("Heap", () => {
  const min = new MinHeap();
  const max = new MaxHeap();

  it("Should add min-heap", () => {
    min.insert(6);
    min.insert(5);
    min.insert(4);
    min.insert(3);
    min.insert(2);
    min.insert(1);

    expect(min.dataset).toStrictEqual([1, 3, 2, 6, 4, 5]);
    expect(min.search(6)).toStrictEqual([3]);
    expect(min.search(3)).toStrictEqual([1]);
  });

  it("Should add max-heap", () => {
    max.insert(1);
    max.insert(2);
    max.insert(3);
    max.insert(4);
    max.insert(5);
    max.insert(6);

    expect(max.dataset).toStrictEqual([6, 4, 5, 1, 3, 2]);
    expect(max.search(6)).toStrictEqual([0]);
    expect(max.search(3)).toStrictEqual([4]);
  });

  it("Should remove min-heap item", () => {
    expect(min.dataset[1]).toBe(3);

    min.remove(3);

    expect(min.search(3)).toStrictEqual([]);
    expect(min.dataset[1]).not.toBe(3);
  });

  it("Should remove max-heap item", () => {
    expect(max.dataset[1]).toBe(4);

    max.remove(4);

    expect(max.search(4)).toStrictEqual([]);
    expect(max.dataset[1]).not.toBe(4);
  });
});

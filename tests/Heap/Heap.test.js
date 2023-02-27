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
  });

  it("Should add max-heap", () => {
    max.insert(1);
    max.insert(2);
    max.insert(3);
    max.insert(4);
    max.insert(5);
    max.insert(6);

    expect(max.dataset).toStrictEqual([6, 4, 5, 1, 3, 2]);
  });
});

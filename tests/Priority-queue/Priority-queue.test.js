const PriorityQueue = require("../../src/7.Priority-Queue/app");

describe("Priority queues", () => {
  const pq = new PriorityQueue();

  it("Should enqueue", () => {
    pq.enqueue("Test3", 3);
    pq.enqueue("Test-2", -2);
    pq.enqueue("Test5", 5);
    pq.enqueue("Test0", 0);
    pq.enqueue("Test1", -1);
    pq.enqueue("Test-5", -5);
    pq.enqueue("Test4", 4);

    expect(pq.printPriorities()).toStrictEqual([-5, -1, -2, 3, 0, 5, 4]);
  });

  it("Should dequeue", () => {
    pq.dequeue(); // 5
    pq.dequeue(); // 4
    pq.dequeue(); // 3

    expect(pq.printPriorities()).toStrictEqual([-5, 0, -1, -2]);
  });
});

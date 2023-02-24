const Queue = require("../../src/4.Queue/app");

describe("Queue", () => {
  const queue = new Queue();

  it("Should enqueue", () => {
    queue.enqueue(12);
    queue.enqueue(13);
    queue.enqueue(14);
    queue.enqueue(15);

    expect(queue.peek()).toBe(15);
    expect(queue.size()).toBe(4);
  });
});

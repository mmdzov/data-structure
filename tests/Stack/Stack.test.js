const Stack = require("../../src/3.Stack/app");

describe("Stack", () => {
  let stack = new Stack();

  it("Should create new Stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);
    expect(stack.size()).toBe(3);
  });

  it("Should pop Stack", () => {
    stack.pop();

    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe(2);
  });

  it("get head of stack", () => {
    expect(stack.peek()).toBe(2);
  });
});

const HashTable = require("../../src/5.Hash-Table/app");

describe("Hash Table", () => {
  const ht = new HashTable(50);
  let data = {
    foo: "bar",
  };

  it("Should set data", () => {
    ht.set("foo", "bar");
    ht.set(["foo"], ["bar"]);
    ht.set(1, 2);
    ht.set(data, data);

    expect(ht.size).toBe(50);

    expect(ht.get("foo")).toBe("bar");
    expect(ht.get(data)).toBe(data);
    expect(ht.get(["foo"])).toStrictEqual(["bar"]);
  });

  it("Should delete data", () => {
    ht.delete("foo");
    ht.delete(data);

    expect(ht.get("foo")).toBe(null);
    expect(ht.get(data)).toBe(null);
  });
});

class HashTable {
  constructor(defaultSize = 40) {
    this.buckets = Array(defaultSize);

    this.keys = {};
    this.size = defaultSize;
  }

  hash(key) {
    return key.toString().length % this.size;
  }

  getKeyName(key) {
    return typeof key === "object" ? JSON.stringify(key) : key;
  }

  getValueOfKey(key) {
    return this.keys[this.getKeyName(key)];
  }

  set(key, value) {
    const index = this.hash(key);

    if (!this.buckets[index]) this.buckets[index] = [];

    const length = this.buckets[index].push([key, value]);

    this.keys[this.getKeyName(key)] = length - 1;
  }

  get(key) {
    const index = this.hash(key);
    const buckets = this.buckets[index];

    if (!buckets) return null;

    const bucket = buckets[this.getValueOfKey(key)];

    if (!bucket) return null;

    return bucket[1];
  }

  delete(key) {
    const index = this.hash(key);
    const buckets = this.buckets[index];

    if (!buckets) return -1;

    delete this.keys[this.getKeyName(key)];

    this.buckets[index].splice(this.getValueOfKey(key), 0);

    return 1;
  }
}

module.exports = HashTable;

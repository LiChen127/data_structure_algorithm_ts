class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  enqueue(el) {
    this.items[this.count] = el;
    this.count++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const res = this.items[this.lowestCount];
    this.lowestCount++;
    return res;
  }
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++){
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
  size() {
    return this.count;
  }
}
const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('John');
console.log(queue.toString());
queue.enqueue('Camila');
console.log(queue.toString());
console.log(queue.size());
queue.dequeue();
console.log(queue.toString());
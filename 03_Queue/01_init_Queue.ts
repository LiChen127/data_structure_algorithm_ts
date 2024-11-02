export default class Queue<T> {
  private count: number;
  private lowestCount: number;
  private items: { [key: number]: T };

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element: T): void {
    this.items[this.count] = element;
    this.count++;
  }
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const res = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return res;
  }
  isEmpty(): boolean {
    return this.count - this.lowestCount === 0;
  }
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  clear(): void {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString(): string {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
  size(): number {
    return this.count - this.lowestCount;
  }
}
// const queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue('John');
// console.log(queue.toString());
// queue.enqueue('Camila');
// console.log(queue.toString());
// console.log(queue.size());
// queue.dequeue();
// console.log(queue.toString());
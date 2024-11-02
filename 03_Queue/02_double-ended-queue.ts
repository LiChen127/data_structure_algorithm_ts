export default class Deque<T> {
  private count: number;
  private lowestCount: number;
  private items: { [key: number]: T };

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  public addFront(el: T): void {
    if (this.isEmpty()) {
      this.addBack(el);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = el;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = el;
    }
  }

  public addBack(el: T): void {
    this.items[this.count++] = el;
  }

  public removeFront(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const res = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return res;
  }

  public removeBack(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[--this.count];
    delete this.items[this.count];
    return result;
  }

  public isEmpty(): boolean {
    return this.count - this.lowestCount === 0;
  }

  public peekFront(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  public peekBack(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  public clear(): void {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  public toString(): string {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
  public size(): number {
    return this.count - this.lowestCount;
  }
}

// 示例使用
const deque = new Deque<string>();
console.log(deque.isEmpty());
deque.addBack('john');
deque.addBack('Jack');
console.log(deque.toString());
deque.addFront('Narci');
console.log(deque.toString());
deque.removeBack();
console.log(deque.toString());
deque.addFront('jordan');
console.log(deque.toString());
deque.removeFront();
console.log(deque.toString());
console.log(deque.peekBack());
console.log(deque.peekFront());

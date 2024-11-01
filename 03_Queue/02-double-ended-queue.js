class Deque {
  constructor() {
    this.count = 0;
    this.lowersCount = 0;
    this.items = {};
  }
  addFront(el) {
    if (this.isEmpty()) {
      // 如果deque是空的,添加到后端 
      this.addBack(el);
    }
    else if (this.lowersCount > 0) {
      this.lowersCount--;
      this.items[this.lowersCount] = el;
    }
    else {
      for (let i = this.count; i > 0; i--){
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowersCount = 0;
      this.items[0] = el;
    }
  }
  addBack(el) {
    this.items[this.count++] = el;
  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    // this.count--;
    const res = this.items[this.lowersCount];
    this.lowersCount++;
    return res;
    // return this.items[this.lowersCount];
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
  }
}
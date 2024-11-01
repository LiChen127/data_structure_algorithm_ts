const items = new WeakMap();
class Stack {
  constructor() {
    items.set(this, []);
  }
  push(el) {
    const s = items.get(this);
    s.push(el);
  }
  pop() {
    const s = items.get(this);
    const r = s.pop();
    return r;
  }
}
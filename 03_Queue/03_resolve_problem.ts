// 击鼓传花 -- 循环队列
/**
 * 在这个游戏中，孩子们围成一个圆圈，把花尽快地传递给旁边的人。
 * 某个时刻传花停止，这时候花在谁手上，谁就退出圆圈，结束游戏。
 * 重复这个过程，直到只剩下一个孩子(winner);
 */

// import Deque from "./02_double-ended-queue.ts";
import Queue from "./01_init_Queue";

type HotPotatoReturns<T> = {
  eliminated: T[];
  winner: T | undefined;
}

function hotPotato<T>(elementList: T[], num: number): HotPotatoReturns<T> {
  const queue = new Queue<T>();
  const eliminatedList: T[] = [];
  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i]);
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue() as T);
    }
    eliminatedList.push(queue.dequeue() as T);
  }
  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  }
}

const names = ['Alice', 'Bob', 'Charlie', 'David'];
const result = hotPotato(names, 7);
result.eliminated.forEach(name => {
  console.log(`${name}在击鼓传花游戏中被淘汰!`);
})
console.log(`胜利者: ${result.winner}`);

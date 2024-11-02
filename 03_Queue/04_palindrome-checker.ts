// 双端队列进行回文检查
import Deque from './02_double-ended-queue';

function palindromeChecker(target: string): boolean {
  // if(target )
  if (target.length === 0) {
    return false;
  }
  const deque = new Deque();
  const lowerString = target.toLocaleLowerCase().split('').join('');
  let isEqual = true;
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }
  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }
  return isEqual;
}
console.log(palindromeChecker('a'));
console.log(palindromeChecker('aa'));
console.log(palindromeChecker('123321'));
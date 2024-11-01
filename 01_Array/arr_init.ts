// 1.创建初始化数组
let daysOfWeek = new Array();
daysOfWeek = new Array(7);

// 2.访问元素和迭代数组
for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

// 求fibnacci的前20个数
const fibonacci: number[] = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}

// 3.添加元素
// js中，数组是可以修改的对象，如果add element 它会动态增长
let numbers: number[] = [];
numbers[numbers.length] = 10;

// push
numbers.push(1);

// 3.1在数组开头插入元素

numbers.unshift(-2);

// 3.2删除元素
numbers.pop();

// 从数组开头删除元素
numbers.shift();

// 3.3 在任意位置添加或删除元素
numbers.slice(1, 1); // 指定位置/索引 + 指定删除数量

// splice(0)
numbers.splice(5, 0, 2, 3, 4);
// p1: 想要删除或者插入的元素的索引值
// p2: 删除元素的个数
// p3...: 要添加的值

// 3.4 二维数组
let averageTemp: number[][] = [];
averageTemp[0] = [1, 2, 3, 4, 5];
averageTemp[1] = [3, 5, 2, 1, 10];


// 3.5多维数组
const matrix3x3x3: number[][][] = [];
for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}
for (let i = 0; i < matrix3x3x3.length; i++) {
  for (let j = 0; j < matrix3x3x3[i].length; j++) {
    for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
      console.log(matrix3x3x3[i][j][z]);
    }
  }
}

// 3.6 数组合并
// 我们需要将多个数组合并为一个数组
const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let concatNumbers = negativeNumbers.concat(zero, positiveNumbers);
console.log(concatNumbers);

// 3.7迭代器函数

// 3.7.1 every方法
const isEven = (x: number): boolean => {
  return x % 2 === 0 ? true : false;
}
numbers.every(isEven);

// some
numbers.some(isEven);

// forEach
numbers.forEach(i => console.log(i % 2 === 0));

// map filter
const myMap = numbers.map(isEven);

// reduce
// reduce方法接收一个有如下四个参数的函数：previousValue、currentValue、index和array。因为index和array是可选的参数，所以如果用不到它们的话，可以不传。这个函数会返回一个将被叠加到累加器的值，reduce方法停止执行后会返回这个累加器。
numbers.reduce((pre, cur) => pre + cur);

// ES6

// 1.for...of循环迭代
for (const n of numbers) {
  console.log(n % 2 === 0 ? 'even' : 'odd');
}

// 2.@@iterator对象
let iterator = numbers[Symbol.iterator]();
for (const n of iterator) {
  console.log(n);
}

// 3.entries, keys ,values
let aEntries = numbers.entries();
// entries返回键值对的@@iterator

// keys方法返回数组索引的@@iterator

// values方法返回@@iterator数组的值

// from
// Array.from根据已有数组创建一个新数组，还可以接受一个format回调

// Array.of
// Array.of根据传入的参数创建一个新数组

// Array.fill
// fill使用静态值填充数组

// copyWith 复制数组中的一系列元素到同一数组指定的起始位置

// 3.8 排序
// sort 可以sort(callback) 接入回调实现想要的排序效果

// 3.9 搜索
// indexOf lastIndexOf
// 1.返回与参数匹配的第一个元素的索引
// 2.第二个返回最后一个元素的索引

// find, findIndex

// includes

// 输出数组为字符串
// toString

// join

/**
 * [].map(callback) -> return new array
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */

// const simpleMap = (arr, callback) => {
//   const newArr = [];

//   for (let i=0; i<arr.length; i++) {
//     newArr.push(callback(arr[i]));
//   }

//   return newArr;
// }

// const arr = [2,3,4];

// [4,6,8]
// const sm1 = simpleMap(arr, (item) => {
//   return item * 2;
// });

// 9
// const simpleReduce = (arr, instruction, result) => {
//   for (let i=0; i<arr.length; i++) {
//     result = instruction(result, arr[i]);
//   }

//   return result; // 9
// }

// const sr1 = simpleReduce(arr, (a, b) => a+b, 0);
// console.log(sr1);

// 參考 MDN reduce 寫法

Array.prototype.reduce2 = function (fn) {
  const arr = [...this];
  let accumulator = 0;

  for (let i=0; i<arr.length; i++) {
    let currentValue = arr[i];
    let currentIndex = arr.indexOf(currentValue);
    let sourceArray = arr;

    accumulator = fn(accumulator, currentValue, currentIndex, sourceArray);
  }

  return accumulator;
}

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4 = 10
console.log(array1.reduce2(reducer));
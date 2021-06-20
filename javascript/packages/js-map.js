// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
/**
 * 1. loop 陣列中所有 item
 * 2. callback function
 * 3. return new array, 保留原來值
 */

Array.prototype.map2 = function (fn, context) {
  // this 是指向當前調用者 Array
  // return new array

  // const arr = Array.prototype.slice.call(this);
  const arr = [...this];
  const result = [];

  for (let i=0; i < arr.length; i++) {
    // 當你使用 map2 時，fn函數中 this 是 global
    // fn函數中 this 指向 context
    // context 是 map2 第二個參數
    // fn函數的參數 1. item index，2. index，3. array
    result.push(fn.call(context, arr[i], i, this));
  }

  return result;
}
const arr = [1,2,3,4,5];
const newArr = arr.map2((item) => {
  return item + 2;
});

console.log('arr', arr);
console.log('newArr', newArr); // [3,4,5,6,7]

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */

Array.prototype.filter2 = function (fn) {
  const arr = [...this];
  const result = [];

  for (let i=0; i<arr.length; i++) {
    if (fn.call(this, arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

const arr = [10,20,33,11,55];
const filteredArr = arr.filter2(item => {
  return item > 28;
});

console.log(filteredArr); // [33,55]

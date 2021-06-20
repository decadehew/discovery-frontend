/**
 * Flatten 用意是把陣列扁平化，
 * 一個陣列裡元素又有其他陣列，像由深度。
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 * 有兩種使用方式：
 * 1. flat 一般函數使用
 * 2. Array Object 方式使用 flat2
 */

function flat (arr) {
  const isDeep = arr.some(item => item instanceof Array);
  if (!isDeep) return arr; // 已經把有深度的陣列扁平化了。

  /**
   * 使用 array api concat
   * 不停 recursive，當條件滿足就會立刻停止。
   */
  const result = Array.prototype.concat.apply([], arr);
  return flat(result);
}

Array.prototype.flat2 = function flat (depth = 1) {
  const arr = [...this];

  const isDeep = arr.some(item => item instanceof Array);
  if (!isDeep || depth < 1) return arr; // 已經把有深度的陣列扁平化了。

  /**
   * 使用 array api concat
   * 不停 recursive，當條件滿足就會立刻停止。
   */
  const result = Array.prototype.concat.apply([], arr);
  return result.flat2(depth - 1);
}
const arr = [1, 2, [3, [4, 5, [7, 8 ,9, [10, 11]]]]];
// console.log(flat(arr));
console.log(arr.flat2(2));
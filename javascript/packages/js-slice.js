/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 */

Array.prototype.slice2 = function (start, end) {
  const result = [];
  start = start || 0;
  end = end || this.length;
  for (let i = start; i < end; i++) {
    result.push(this[i])
  }
  return result;
}
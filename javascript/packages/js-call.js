/**
 * 思路
 * function.call(this的值, 參數*)
 */
Function.prototype.call2 = function (context = window, ...args) {
  // ... spread/rest
  context.fn = this;
  context.fn(...args);
  delete context.fn;
}

function person (x, y) {
  console.log(this.name, x, y)
}

const p = {
  name: 'DecadeHew'
}

person.call2(p, 8, 9);
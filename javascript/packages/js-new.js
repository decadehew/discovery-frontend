/***
 * 在 js 裡， new是用來創建一個對象
 * new 構造函數(參數) -> 實例對象
 * 封裝 new 之前，需要了解思路
 * 1. 創建新的實例對象
 * 2. 實例對象__proto__ 指向於 構造函數.prototype
 * 3. 構造函數裡 this 指向實例對象
 * 4. 返回實例對象
 */


function New (func) {
  const res = {}
  if (func.prototype !== null) {
    res.__proto__ = func.prototype
  }
  const ret = func.apply(res, Array.prototype.slice.call(arguments, 1))
  console.log(Array.prototype.slice.call(arguments, 1))

  if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
    console.log('ret', ret)
    return ret
  }
  console.log('res', res)
  return res
}

function Person (name, age) {
  this.name = name
  this.age = age
}

Person.prototype.getName = function () {
  return `I'm ${this.name}`
}

let p1 = New(Person, 'DecadeHew', 27)
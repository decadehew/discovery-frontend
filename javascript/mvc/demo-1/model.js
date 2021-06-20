function Model (value) {
  this._value = typeof value === undefined ? '' : value;
  this._listener = [] // 監聽
}

Model.prototype.set = function (value) {
  this._value = value
  // listener 是 function
  setTimeout(() => {
    this._listener.forEach((listener) => {
      listener.call(this, value)
    })
  })
}

Model.prototype.watch = function (listener) {
  this._listener.push(listener) // 把 function 加入到陣列裡
}

Model.prototype.bind = function (node) {
  this.watch(function (value) {
    node.innerHTML = value
  })
}


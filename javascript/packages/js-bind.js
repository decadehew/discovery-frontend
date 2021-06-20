Function.prototype.bind2 = function () {
  const self = this;
  const args1 = Array.prototype.slice(arguments);
  const context = args1.shift();
  return function () {
    const args2 = Array.prototype.slice(arguments);
    return self.apply(context, args1.concat(args2));
  }
}
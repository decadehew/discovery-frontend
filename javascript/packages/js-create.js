// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
function create (proto, propertiesObject) {
  const obj = {};
  obj.__proto__ = proto;

  /**
   * 定義屬性的特徵
   * 一個對象同時要定義多個屬性特性
   */
  Object.defineProperties(obj, propertiesObject);
  return obj
}
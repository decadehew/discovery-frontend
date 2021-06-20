!(function (root) {
  /**
   * hewQuery('#selector').addClass('active');
   * 記得：
   * 1. 函數也是對象
   */
  function hewQuery (selector) {
    /**
     * 簡單理解為 fn 是構造函數
     * 通過 new 來創建實例對象，return 是一個對象
     */
    return new hewQuery.fn.init(selector);
  }

  
  hewQuery.fn = hewQuery.prototype = {
    constructor: hewQuery,
    version: 1.0,
    init: function (selector) {
      var elem = selector;
      elem = document.querySelector(selector);
      this[0] = elem;

      return this;
    },
    test: 'testing'
  }

  hewQuery.fn.init.prototype = hewQuery.fn;

  root.hewQuery = root.$ = hewQuery;
})(window)
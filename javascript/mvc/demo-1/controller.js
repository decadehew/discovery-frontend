function Controller (callback) {
  const models = {}
  let views = document.querySelectorAll('[bind]') // 獲取 view 裡元素

  // ES6 Array.from(偽陣列) 可以將偽陣列轉為真陣列，可以享用陣列的屬性
  views = Array.from(views)
  views.forEach((view) => {
    const modelName = view.getAttribute('bind') // model1
    // 循環1: 是 false，所以會執行 new Model() -> model1 : {}
    // 循環2: 是 true，models 對象裡有 model1 屬性 -> model1: {_value: 你好，我是 MVC, _listener: [fn, fn]}

    models[modelName] = models[modelName] || new Model()
    console.log(models[modelName])
    
    // 把 model 和 view 進行綁定 (Model.prototype.bind)
    // 當 M 有變化，會響應給 V
    models[modelName].bind(view)
  })

  callback(models) // 調用 function
}

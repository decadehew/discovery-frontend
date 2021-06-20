!(function () {
  // 這裡只有 M 和 V 結合，但每次需要手動更新
  // const model = new Model()
  
  // model.watch(function (value) {
  //   id1.innerHTML = value
  // })

  // model.bind(id1)
  // model.bind(id2)

  // model.set('您好，我是 MV')

  // 這裡只有 M V C 結合
  const controller = new Controller(function (models) {
    const model1 = models.model1
    model1.set('您好，我是 MVC')
  })

  /**
   * 總結：
   * 1. 把 model 和 view 進行綁定。
   * 2. 當 view 發出請求給 controller，
   * 3. controller 根據匹配條件來進行對 model 數據處理操作，
   * 4. 當 model 數據有變化時，會響應給 view,
   * 5. view 接收數據會作出對應展現。
   */
})()
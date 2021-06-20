# JS 實現 MVC

## MVC 是什麼
`MVC` 是一種架構設計模式。我接觸 `mvc` 是在學 `ruby on rails` 的時候，這是讓我首次感受到 `MVC` 是什麼。
最近我看了一篇關於 js mvc 實現文章，向他學習，[參考來源](https://www.cnblogs.com/front-end-ralph/p/5190442.html)。

**簡單來說 mvc 會分成三層**
- Model - 數據模型層。數據變化是由 controller 來進行控制。
- View - 單純將數據輸出在畫面和使用者交互層。 View 向 model 註冊，view 會觀察 model 是否有數據更新 (觀察者模式)
- Controller - 可以簡單理解成中介人，當使用者和 view 進行交互時，會觸發事件處理 (業務邏輯層)，處理操作以及作出對 model 進行改變。

## 爭議性
感覺前端和後端 MVC 有所不同。
我當初接觸 MVC 是 雙向的，M 和 V 是不能通訊。
V 發出請求時，在 C 裡找到匹配條件，然後對 M 改變狀態，M 就會返回給 C。最後 C 負責渲染數據給 V。
但不知是不是有前後端差異性，但本質上是沒有太大變化。因為 MVC 分別有各自職責，只不過通訊方式或許有所不同。

**前端**
- 單向 -  V -> C -> M -> V

**后端**
- 雙向 - V -> C -> M -> C -> V


## 參考
- [mvc wiki](https://zh.wikipedia.org/wiki/MVC)
- [mvc jikexueyuan](http://wiki.jikexueyuan.com/project/javascript-design-patterns/mvc.html)
- [todomvc](http://todomvc.com/)
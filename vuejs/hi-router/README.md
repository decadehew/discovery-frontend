# HiRouter
分析和解析 `vue-router`，為主要 **學習目的**，並且實現簡易 `vue-router` 名為 `hi-router`。

實習預期結果：
- 根據不同 mode
- routes 規則匹配找到對應 component

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## VueRouter 基本配置與使用
先了解基本使用

```js
// router.js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history,
  routes
})
```
```js
// src/main.js
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

```

## 實現簡易 router 思路
概念：`VueRouter` 是 `Vue` 自家的前端 router。基本原理是 url 路徑切換時，會根據路徑匹配 routes 規則，並且對應 component 展示。

說白點就是一個頁面，頁面內容 (component) 會根據不同路徑進行切換內容 (component)。

更新 view，但不刷新，通過 `history` 和 `hash` 來實現

思路：

- 需要 install，最終需要註冊此 plugin，`Vue.use(plugin)`
  - 判斷此 plugin 是否被安裝
  - 在 `src/main.js` Vue 被執行時，是否已經把 router object 掛載到 Vue instance 中。
- 創建 `router-link`，`router-view` component
  - 使用 render 函數來創建 virtualDom -> 頁面
  - 綁定 History API 事件
-  點擊 browser history back 和 forward 事件
- 監聽路徑變化事件，根據地址路徑變化找到對應 component (依據 routes 規則) 重新 render

## 參考資料
- vue 官方
- 其他技術文章及教學

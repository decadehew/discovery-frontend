/* eslint-disable no-useless-return */
// https://github.com/vuejs/vue-router/blob/73459565c4/src/index.js

let _Vue = null

export default class HiRouter {
  constructor (options) {
    // 取出哪種模式
    this.mode = options.mode === 'history' ? '' : '/#'
    this.options = options
    // 存放路徑和 component
    this.routeRecord = {
      // example
      // '/about': {name: 'About', component}
    }
    // https://vuejs.org/v2/api/#Vue-observable
    // data中，實現響應式
    this.data = _Vue.observable({
      currentRoute: this.mode === '' ? window.location.pathname : (window.location.hash.substr(1) || '/')
    })
  }

  // https://github.com/vuejs/vue-router/blob/73459565c4/src/install.js#L6
  static install (Vue) {
    // 如當前 plugin 是否被安裝
    if (HiRouter.install.installed && _Vue === Vue) return

    HiRouter.install.installed = true
    // Vue 構造函數先存放在 global 變數中
    _Vue = Vue
    // router inject to Vue instance
    Vue.mixin({
      beforeCreate () {
        // this 指向 vue instance
        // 判斷 router object 是否已經 mount vue instance
        // 參考 src/main.js
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router
          this.$options.router.init()
        }
      }
    })
  }

  /**
   * 1. 根據定義 routes rules
   * 2. 解析成 key-value 形式存放在 routeRecord
   * https://github.com/vuejs/vue-router/blob/73459565c4c64bfe9b41341875a84c87bc8b931c/src/create-route-map.js#L57
   */
  createRouteMap () {
    this.options.routes.forEach((route) => {
      const { path, name, component } = route
      this.routeRecord[path] = { name, component: component }
    })
  }

  /**
   * 實現 router-link 和 router-view
   * 按照 router-link 語法思路 <router-link to="/about">About</router-link>
   * router-link 本質上 vue component
   */
  initComponents (Vue) {
    const self = this

    // https://github.com/vuejs/vue-router/blob/73459565c4/src/components/link.js
    Vue.component('router-link', {
      props: {
        to: String
      },
      // template: '<a :href="to"><slot></slot></a>'
      // argument: h --> virtual dom
      // https://vuejs.org/v2/api/#render
      render (h) {
        return h('a', {
          attrs: {
            href: this.to
          },
          on: {
            click: this.guardEvent
          }
        }, [this.$slots.default])
      },
      methods: {
        guardEvent (e) {
          // 先找到匹配路由
          const name = self.routeRecord[this.to] ? self.routeRecord[this.to].name : '404'
          // pushstate: browser not support, instead using document.title
          document.title = name
          // 加 browser history 和 改變 url 路徑
          history.pushState({}, '', `${this.$router.mode}${this.to}`)
          this.$router.data.currentRoute = this.to
          e.preventDefault()
        }
      }
    })

    // https://github.com/vuejs/vue-router/blob/73459565c4/src/components/view.js
    Vue.component('router-view', {
      render (h) {
        // 如果找不到 component 就默認以 * 展示
        // 找到匹配的 component
        const route = self.routeRecord[self.data.currentRoute]
        const component = route ? route.component : self.routeRecord['*'].component

        return h(component)
      }
    })
  }

  // 當路徑變化，觸發事件，找到對應 component
  initEvents () {
    // 當 browser history 發生變化時，觸發
    if (this.mode === 'history') {
      // history
      window.addEventListener('popstate', () => {
        this.data.currentRoute = window.location.pathname
      })
    } else {
      // hash
      window.addEventListener('hashchange', () => {
        this.data.currentRoute = window.location.hash.substr(1) || '/'
      }, false)
    }
  }

  init () {
    this.createRouteMap()
    this.initComponents(_Vue)
    this.initEvents()
  }
}

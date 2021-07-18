import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const vm = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 查看 router
console.log('vm', vm)

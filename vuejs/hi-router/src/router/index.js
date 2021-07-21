import Vue from 'vue'
// import VueRouter from 'vue-router'
import HiRouter from '../plugins/hi-router'
import Home from '../views/Home.vue'

Vue.use(HiRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
    // https://router.vuejs.org/guide/essentials/passing-props.html#boolean-mode
    // 開啟 true，route.params 傳遞給子組件，
    // 子組件可以使用 props 去接收屬性，父子組件傳值概念
    props: true
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/404.vue')
  }
]

const router = new HiRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

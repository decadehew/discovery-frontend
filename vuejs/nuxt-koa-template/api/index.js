import Koa from 'koa'
import Router from 'koa-router'
const app = new Koa()

const router = new Router()
router.get('/intro', (ctx) => {
  ctx.body = {
    code: 200,
    data: ['Vue.js', 'Nuxt.js', 'WebApp'],
    msg: 'success'
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods())

export default {
  path: '/api',
  handler: app.callback()
}

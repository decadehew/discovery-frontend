const Router = require('koa-router')
const hello = require('../api/hello')

const router = new Router()

router.get('/hello', hello)

module.exports = router

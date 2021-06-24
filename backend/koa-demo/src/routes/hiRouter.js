const Router = require('koa-router')
const hi = require('../api/hi')

const router = new Router()

router.get('/hi', hi)

module.exports = router

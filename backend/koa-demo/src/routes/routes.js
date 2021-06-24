const combineRouters = require('koa-combine-routers')

const hiRouter = require('./hiRouter')
const helloRouter = require('./helloRouter')

module.exports = combineRouters(
  hiRouter,
  helloRouter
)
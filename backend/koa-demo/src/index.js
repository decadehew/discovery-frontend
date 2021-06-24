const koa = require('koa');
const app = new koa()
const path = require('path')
const helmet = require('koa-helmet')
const static = require('koa-static')

const router = require('./routes/routes')

app.use(helmet())
app.use(static(path.join(__dirname, '../public')))
app.use(router())

app.listen(3000)

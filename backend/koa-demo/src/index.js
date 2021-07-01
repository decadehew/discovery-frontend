import koa from 'koa';
import path from 'path';
import helmet from 'koa-helmet';
import statics from 'koa-static';
import cors from '@koa/cors';
import koaBody from 'koa-body';
import jsonUtil from 'koa-json';
import compose from 'koa-compose';
import compress from 'koa-compress';
import router from './routes/routes';

const app = new koa();
const isDevMode = (process.env.NODE_ENV === 'production') ? false : true;

// 使用 koa-compose 對需註冊 middleware，進行整合
const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, '../public')),
  cors(),
  jsonUtil({ pretty: false, param: 'pretty' }),
  helmet()
]);

if (!isDevMode) {
  // compress middleware
  app.use(compress());
}

app.use(middleware);
app.use(router());

app.listen(3000);

import combineRouters from 'koa-combine-routers';
import loginRouter from './loginRouter';

export default combineRouters(
  loginRouter
);

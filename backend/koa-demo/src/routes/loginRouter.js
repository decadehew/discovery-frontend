import Router from 'koa-router';
import loginController from '../api/LoginController';

const router = new Router();

router.get('/login', loginController.login);

export default router;

class LoginController {
  constructor () {}

  async login (ctx) {
    ctx.body = {
      code: 200,
      msg: '【測試】登入成功'
    };
  }
}

export default new LoginController();

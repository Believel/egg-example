'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `hello world ${ctx.params.id}-${ctx.query.name}`;
  }
}

module.exports = HomeController;

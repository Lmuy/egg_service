'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const { ctx } = this;
    ctx.body = '<h1>列表页面</h1>'
  }
}

module.exports = HomeController;

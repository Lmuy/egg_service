'use strict'

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    this.ctx.body = 'hi api'
  }
  // 登录
  async checkLogin() {
    let userName = this.ctx.request.body.userName;
    let password = this.ctx.request.body.password
    const sql = `SELECT userName FROM admin_user WHERE userName = '${userName}' AND password = '${password}'`
    const res = await this.app.mysql.query(sql)
    if (res.length > 0) {
      let openId = new Date().getTime()
      this.ctx.session.openId = {
        'openId': openId
      }
      this.ctx.body = {'data': '登录成功', 'openId': openId}
    } else {
      this.ctx.body = {'data': '登录失败'}
    }
  }
  // 获取类型接口
  async getTypeInfo() {
    const resType = await this.app.mysql.select('type')
    this.ctx.body = {data: resType}
  }
  // 添加文章接口
  async addArticle() {
    let tmpArticle = this.ctx.request.body
    const result = await this.app.mysql.insert('article', tmpArticle)
    const insertSuccess = result.affectedRows === 1
    const insertId = result.insertId

    this.ctx.body = {
      isSuccess: insertSuccess,
      insertId: insertId
    }
  }
  // 编辑文章
  async updateArticle() {
    let tempArticle = this.ctx.request.body

    const result = await this.app.mysql.update('article', tempArticle)
    const updateSuccess = result.affectedRows === 1
    
    this.ctx.body = {
      isSuccess: updateSuccess
    }
  }
}

module.exports = MainController

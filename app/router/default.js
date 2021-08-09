'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.home.index);
  // 文章列表
  router.get('/default/getArticleList', controller.default.home.getArticleList)
  // 文章详情
  router.get('/default/getArticleById/:id', controller.default.home.getArticleById)
};

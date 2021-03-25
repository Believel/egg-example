'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  router.get('/:id', middleware.uppercase(), controller.home.index);
  router.get('/news', controller.news.list)
};

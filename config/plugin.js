'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  handlebars: {
    enable: true,
    package: 'egg-view-handlebars',
  },
  // 借助 Validate 插件提供便捷的参数校验机制，帮助我们完成各种复杂的参数校验
  // validate: {
  //   enable: true,
  //   package: 'egg-validate',
  // }
};


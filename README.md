# example

This is a demo

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


# 目录解析
1. `app/router.js` 用于配置 URL 路由规则
2. `app/controller/**` 用于解析用户的输入，处理后返回相应的结果
3. `app/service/**` 用于编写业务逻辑层，可选，建议使用
4. `app/middleware/**` 用于编写中间件，可选
5. `app/public/**` 用于放置静态资源，可选
6. `app/extend/**` 用于框架的扩展，可选
7. `config/config.{env}.js` 用于编写配置文件
8. `config/plugin.js` 用于配置需要加载的插件
9. `text/**` 用于单元测试
10. `app.js` 和 `agent.js` 用于自定义启动时的初始化工作，可选
由内置插件约定的目录：
11. `app/public/**` 用于放置静态资源，可选
12. `app/schedule/**` 用于定时任务，可选
若需自定义自己的目录规范，
13. `app/view/**` 用于放置模板文件，可选，由模板插件约定
14. `app/model/**` 用于放置领域模型，可选，由领域类相关插件约定

# 内置对象
## 1. `Application` 全局应用对象
```js
// 访问全局对象
this.ctx.app.xxxx
// 在继承于 Controller, Service 基类的实例中，可以通过 this.app 访问到 Application 对象。
this.app.xxx
```
## 2. `Context` 请求级别的对象，继承自`Koa.Context`
```js
// Koa
app.context 是从其创建ctx的原型。可以编辑app.context为ctx添加其他属性。

// 添加数据库的引用
app.context.db = db();

app.use(async ctx => {
  console.log(ctx.db);
});

// 创建一个匿名 Context 实例
const ctx = app.createAnonymousContext();
```

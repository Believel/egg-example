// app/controller/news.js

const Controller = require('egg').Controller;
class NewsController extends Controller {
    async list() {
        // !读取写死的数据
        // const dataList = {
        //     list: [
        //         { id: 1, title: 'this is news 1', url: '/news/1'},
        //         { id: 2, title: 'this is news 2', url: '/news/2'}
        //     ]
        // };
        // await this.ctx.render('news/list.hbs', dataList);

        // !从服务器中获取数据
        const ctx = this.ctx;
        // ctx.request.query 等价 ctx.query
        // ctx.response.body 等价 ctx.body 
        const page = ctx.query.page || 1;
        const newsList = await ctx.service.news.list(page);
        await ctx.render('news/list.hbs', { list: newsList});
    }
}
module.exports = NewsController
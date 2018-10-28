const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Sweet baby Jesus';
});

app.listen(3000);

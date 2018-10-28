const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const responseTime = require('koa-response-time');
const logger = require('koa-logger');

const app = new Koa();
app.use(bodyParser());
app.use(compress());
app.use(responseTime());
app.use(logger());

app.use(async (ctx) => {
  ctx.body = 'Sweet baby Jesus';
});

app.listen(3000);

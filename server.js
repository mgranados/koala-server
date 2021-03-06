const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const responseTime = require('koa-response-time');
const logger = require('koa-logger');
const mongoose = require('mongoose');
require('dotenv').config();

const app = new Koa();
app.use(bodyParser());
app.use(compress());
app.use(responseTime());
app.use(logger());

const mongoUrl = `mongodb://${process.env.MONGO_HOST}:${
  process.env.MONGO_PORT
}/${process.env.MONGO_DB}`;

mongoose.Promise = global.Promise;
mongoose.connect(
  mongoUrl,
  { useNewUrlParser: true },
);

app.use(async (ctx) => {
  ctx.body = 'Sweet baby Jesus';
});

app.listen(3000);

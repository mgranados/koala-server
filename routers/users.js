const Router = require('koa-router');
const { User } = require('models');

const router = new Router({
  prefix: '/users',
});

router.get('/', (ctx) => {
  ctx.body = '/users';
});

import Koa from 'koa';
import Router from '@koa/router';
import bodyparser from 'koa-bodyparser';
import { Blockchain } from "../blockchiain";

const app = new Koa();
const router = new Router(); // 创建一个路由器实例
app.use(bodyparser());

const blockchain: Blockchain = new Blockchain()


router.post('/addTransaction', async (ctx: Koa.Context) => {
  const requestBody:any = ctx.request.body;
  try {
    const transaction = requestBody.transaction;
  } catch (error) {
    ctx.body = {
      message: 'error!'
    };
  }
});

// 将路由器注册到应用中
app.use(router.routes()).use(router.allowedMethods());

app.listen(1888);
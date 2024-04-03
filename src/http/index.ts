import Koa from 'koa';
import Router from '@koa/router';
import bodyparser from 'koa-bodyparser';

import blockchainRouter  from './routers/blockchain'; 

const app = new Koa();
const router = new Router();
app.use(bodyparser());


// 将路由器注册到应用中
app.use(blockchainRouter.routes())
app.use(router.allowedMethods());

app.listen(1888, () => {
  console.log('Server listening on port 1888');
});
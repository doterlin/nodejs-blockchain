import Koa from 'koa';
import Router from '@koa/router';

import BlockchainController from '../controllers/blockchain'

const router = new Router();

router.post('/addTransaction', async (ctx: Koa.Context) => {
  const requestBody:any = ctx.request.body;
  try {
    BlockchainController.addTransaction(requestBody);
    return ctx.body = {
      message: 'success!'
    };
  } catch (error) {
    ctx.body = {
      message: 'error!'
    };
  }
});

router.post('/mine', async (ctx: Koa.Context) => {
  try {
    return ctx.body = {
      message: 'success!',
      proof: BlockchainController.mine()
    };
  } catch (error) {
    ctx.body = {
      message: 'error!'
    };
  }
});

router.get('/getFullChain', async (ctx: Koa.Context) => {
  try {
    return ctx.body = BlockchainController.getFullChain();
  } catch (error) {
    ctx.body = {
      message: 'error!'
    };
  }
})

export default router;
import { Router } from 'https://deno.land/x/oak/mod.ts'

import { getAccounts } from './controller.ts'; 

const router = new Router();

router
  .options("/accounts")
  .get("/accounts", getAccounts)

export default router;
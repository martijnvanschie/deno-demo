import { Application } from 'https://deno.land/x/oak/mod.ts'
import { oakCors, CorsOptions } from "https://deno.land/x/cors/mod.ts";

import router from './routes.ts'

const HOST = '127.0.0.1'
const PORT = 7700

const app = new Application()

const corsConfig: CorsOptions = {
    origin: "*",
    methods: ['GET', 'PUT', 'POST'],
    allowedHeaders: "*",
    preflightContinue: true,
    optionsSuccessStatus: 204
}

app.use(oakCors(corsConfig))
app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port ${PORT} ...`)
await app.listen(`${HOST}:${PORT}`)

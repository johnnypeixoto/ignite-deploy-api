import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { trasactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)
app.register(trasactionsRoutes, {
  prefix: 'transactions',
})

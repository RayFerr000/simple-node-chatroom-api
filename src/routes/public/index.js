import Router from 'koa-router'
import { messages } from '../../orm/controllers'
import publishMessage from '../../amqp'

const router = new Router()
router.get('/api/messages', async ctx => {
  try {
    const allMessages = await messages.list()
    ctx.response.status = 201
    ctx.response.body = allMessages
  } catch (err) {
    ctx.response.status = 500
  }
})

router.post('/api/messages', async ctx => {
  try {
    const newMessage = await messages.create(ctx)
    const publishedMessage = publishMessage({ payload: newMessage })
    ctx.response.status = 201
    ctx.response.body = { newMessage, publishedMessage }
  } catch (err) {
    ctx.response.status = 500
  }
})

export default router

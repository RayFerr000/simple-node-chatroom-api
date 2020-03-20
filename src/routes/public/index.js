import Router from 'koa-router'
import messages from '../../orm/controllers'
import publishMessage from '../../amqp'

const router = new Router()

router.get('/api/messages', async(req, res) => messages.list(req, res))

router.post('/api/messages', async(req, res) => {
  try {
    const newMessage = await messages.create(req, res)
    const publishedMessage = publishMessage({ payload: newMessage })
    res.status(201).send({ newMessage, publishedMessage })
  } catch (err) {
    console.error(err)
  }
})

export default router

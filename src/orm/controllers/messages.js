import { Message } from '../models'

module.exports = {
  create(ctx) {
    return Message
      .create({
        email: ctx.request.body.email,
        message: ctx.request.body.message
      })
      .then(message => { return message })
      .catch(error => { return error })
  },
  list() {
    return Message
      .findAll()
      .then(messages => { return messages })
      .catch(error => { return error })
  }
}

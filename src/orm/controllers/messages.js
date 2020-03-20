import Message from '../models'

module.exports = {
  create(req, res) {
    return Message
      .create({
        email: req.body.email,
        message: req.body.message
      })
      .then(message => { return message })
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return Message
      .findAll()
      .then(messages => res.status(200).send(messages))
      .catch(error => res.status(400).send(error))
  }
}

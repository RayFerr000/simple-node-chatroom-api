const Message = require('../models'). Message;

module.exports = {
  create(req, res) {
    return Message
      .create({
        email: req.body.email,
        message: req.body.message,
      })
      .then(message => res.status(201).send(message))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Message
      .all()
      .then(messages => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));

  }
};

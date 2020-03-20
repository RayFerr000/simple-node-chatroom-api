import request from 'request'

const publishMessage = ({ queue = 'MESSAGE', payload }) => {
  return new Promise((resolve, reject) => {
    request.post({
      url: 'http://localhost:8080/send',
      json: true,
      body: { queue, payload }
    }, (err, res, body) => {
      if (err) reject(err)
      if (res.statusCode !== 200) {
        reject(err)
      }
      resolve(body)
    })
  })
}

export { publishMessage }

const amqp = require('amqplib');

const messageQueueConnectionString = process.env.CLOUDAMQP_URL;

let amqpConnection = (function () {
  let amqpConnectionInstance
})
// utility function to publish messages to a channel
function publishToChannel(channel, { routingKey, exchangeName, data }) {
  return new Promise((resolve, reject) => {
    channel.publish(exchangeName, routingKey, Buffer.from(JSON.stringify(data), 'utf-8'), { persistent: true }, function (err, ok) {
      if (err) {
        return reject(err);
      }

      resolve();
    })
  });
}

import { createClient } from 'redis';

const publisher = createClient({ legacyMode: true });

publisher.on('connect', () => {
  console.log('Redis client connected to the server');
});

publisher.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});

publisher.connect();

function publishMessage(message, time) {
  setTimeout(() => {
    console.log(`About to send: ${message}`);
    publisher.publish('holberton school channel', message);
  }, time);
}

// giving weird error messages when killed
publishMessage('Holberton Student #1 starts course', 100);
publishMessage('Holberton Student #2 starts course', 200);
publishMessage('KILL_SERVER', 300); // should kill
publishMessage('Holberton Student #3 starts course', 400);

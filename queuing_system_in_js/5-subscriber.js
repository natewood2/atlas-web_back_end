import { createClient } from 'redis';

const subscriber = createClient({ legacyMode: true });

subscriber.on('connect', () => {
  console.log('Redis client connected to the server');
});

subscriber.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});

subscriber.connect();

subscriber.subscribe('holberton school channel', (message) => {
  console.log(`Received message: ${message}`);
  
  if (message === 'KILL_SERVER') {
    subscriber.unsubscribe('holberton school channel', () => {
      console.log('Unsubscribed and quitting...');
      subscriber.quit();
    });
  }
});

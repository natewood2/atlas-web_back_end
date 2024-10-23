import { createClient, print } from 'redis';

const client = createClient({ legacyMode: true });

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});

client.connect();

// no clue why this is not outputting the proper value and throwing error while the other stuff works??
function setHash() {
    client.HSET('HolbertonSchools', 'Portland', '50', print);
    client.HSET('HolbertonSchools', 'Seattle', '80', print);
    client.HSET('HolbertonSchools', 'New York', '20', print);
    client.HSET('HolbertonSchools', 'Bogota', '20', print);
    client.HSET('HolbertonSchools', 'Cali', '40', print);
    client.HSET('HolbertonSchools', 'Paris', '2', print);
}


function showHash() {
  client.hgetall('HolbertonSchools', (err, result) => {
    if (err) {
      console.error(`Error retrieving hash: ${err.message}`);
    } else {
      console.log(result);
    }
  });
}

client.on('ready', () => {
  setHash();
  showHash();
});

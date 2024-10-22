import { createClient } from 'redis';

const client = createClient({ legacyMode: true });

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});

// need in v4+
client.connect();

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, (err, reply) => {
    if (err) {
      console.error(`Error setting value for ${schoolName}: ${err.message}`);
    } else {
      console.log(`Reply: ${reply}`);
    }
  });
}

function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, reply) => {
    if (err) {
      console.error(`Error getting value for ${schoolName}: ${err.message}`);
    } else {
      console.log(reply);
    }
  });
}

client.on('ready', () => {
  displaySchoolValue('Holberton');
  setNewSchool('HolbertonSanFrancisco', '100');
  displaySchoolValue('HolbertonSanFrancisco');
});

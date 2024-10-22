import { createClient, print } from 'redis';

const client = createClient();

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});


// had to use async for the Redis library has been updated recently
async function setNewSchool(schoolName, value) {
    await client.set(schoolName, value, print);
  }
  
  async function displaySchoolValue(schoolName) {
    const result = await client.get(schoolName);
    console.log(result);
  }
  
  async function main() {
    await client.connect();
    
    try {
      await displaySchoolValue('Holberton');
      await setNewSchool('HolbertonSanFrancisco', '100');
      await displaySchoolValue('HolbertonSanFrancisco');
    } catch (error) {
      console.error(error);
    } finally {
      await client.quit();
    }
  }

  main();
function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then(() => {
        console.log('Got a response from the API');
        resolve({ status: 200, body: 'success' });
      })
      .catch((error) => {
        console.error('Error:', error.message);
        reject(new Error());
      });
  });
}

export default handleResponseFromAPI;

const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('should return status code 200 and correct message', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

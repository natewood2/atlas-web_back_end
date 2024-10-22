// unsure if done(); is used right but it passes
const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');

describe('getPaymentTokenFromAPI', () => {
    it('should test true when true', async () => {
        const result = await getPaymentTokenFromAPI(true);
        assert.strictEqual(result.data, 'Successful response from the API');
    });
});
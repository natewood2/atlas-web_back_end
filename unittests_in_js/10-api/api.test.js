const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
    it('should return status code 200 with correct message', (done) => {
        request('http://localhost:7865/', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});

describe('Cart page', () => {
    it('should return status code 200 for successful cart', (done) => {
        request('http://localhost:7865/cart/12', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it('should return status code 404', (done) => {
        request('http://localhost:7865/cart/hello', (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});

describe('Available payments', () => {
    it('should return available payment methods', (done) => {
        request('http://localhost:7865/available_payments', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(JSON.parse(body)).to.deep.equal({
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            });
            done();
        });
    });
});

describe('Login', () => {
    it('should welcome user by name', (done) => {
        request.post({
            url: 'http://localhost:7865/login',
            json: { userName: 'Betty' }
        }, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome Betty');
            done();
        });
    });
});
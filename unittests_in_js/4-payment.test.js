const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let spy;
    let calculateStub;
    beforeEach(() => {
        calculateStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        spy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        calculateStub.restore();
        spy.restore();
    });

    it('should call Utils.calculateNumber with SUM, 100, and 20', () => {
        sendPaymentRequestToApi(100, 20);
        expect(calculateStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;

    });
});

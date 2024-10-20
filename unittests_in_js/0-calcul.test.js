const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('4', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('5', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('5', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('6', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});

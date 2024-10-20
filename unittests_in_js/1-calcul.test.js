const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 6', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 5', () => {
            assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -5', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 5.6), -5);
        });

        it('should return 1', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 2.5), 1);
        });
    });

    describe('DIVIDE', () => {
        it('should return 2', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 8.3, 3.9), 2);
        });

        it('should return "Error" when doing the unthinkable and dividing by 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
        });
    });

    describe('Invalid type', () => {
        it('should throw an error for invalid operation type', () => {
            assert.throws(() => calculateNumber('INVALID', 1, 2), {
                message: 'Error',
            });
        });
    });
});

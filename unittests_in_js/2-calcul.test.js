const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 6', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('should return 5', () => {
            expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -5', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 5.6)).to.equal(-5);
        });

        it('should return 1', () => {
            expect(calculateNumber('SUBTRACT', 3.5, 2.5)).to.equal(1);
        });
    });

    describe('DIVIDE', () => {
        it('should return 2', () => {
            expect(calculateNumber('DIVIDE', 8.3, 3.9)).to.equal(2);
        });

        it('should return "Error" when doing the unthinkable and dividing by 0', () => {
            expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
        });
    });

    describe('Invalid type', () => {
        it('should throw an error for invalid operation type', () => {
            expect(() => calculateNumber('INVALID', 1, 2)).to.throw('Invalid operation type');
        });
    });
});

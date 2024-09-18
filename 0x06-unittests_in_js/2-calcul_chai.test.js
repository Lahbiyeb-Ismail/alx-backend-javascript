/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('basic calculator functionality', () => {
  describe('sum the two numbers', () => {
    it('should return the 6', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('subtract the two numbers', () => {
    it('should return the -4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('divide the two numbers', () => {
    it('should return the 0.2', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });

  describe('divide a valid number by 0', () => {
    it("should return the 'Error'", () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});

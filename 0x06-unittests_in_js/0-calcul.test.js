const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers when type is SUM', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
    assert.strictEqual(calculateNumber('SUM', 1.5, 2.4), 4);
    assert.strictEqual(calculateNumber('SUM', 1.2, 2.8), 4);
    assert.strictEqual(calculateNumber('SUM', 1.7, 2.1), 4);
  });

  it('should return the difference of two rounded numbers when type is SUBTRACT', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.6), -1);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2.4), -1);
    assert.strictEqual(calculateNumber('SUBTRACT', 2.8, 1.2), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.7, 2.1), 0);
  });

  it('should return the division of two rounded numbers when type is DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4.4, 2.6), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2.4), 3);
    assert.strictEqual(calculateNumber('DIVIDE', 5.2, 1.8), 3);
    assert.strictEqual(calculateNumber('DIVIDE', 7.6, 2.1), 4);
  });

  it('should return "Error" when attempting to divide by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4.4, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 5.5, 0), 'Error');
  });

  it('should return "Error" for invalid operation type', () => {
    assert.strictEqual(calculateNumber('MULTIPLY', 1.4, 2.6), 'Error');
    assert.strictEqual(calculateNumber('INVALID', 1.5, 2.4), 'Error');
  });
});

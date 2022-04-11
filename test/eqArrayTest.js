const assert = require('chai').assert;

const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns false for ['1', '2', '3'], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], ['1', '2', '3']), false);
  });
});
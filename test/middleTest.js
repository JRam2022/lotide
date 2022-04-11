const assert = require('chai').assert;

const middle = require('../middle');

describe('#middle', () => {
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  })

  it("returns [40,50] for 1, 2, 3, 40, 50, 6, 7, 8]", () => {
    assert.deepEqual(middle([1, 2, 3, 40, 50, 6, 7, 8]), [40,50]);
  })

  it("returns [50] for [1, 2, 3, 4, 50, 6, 7, 8 ,9]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 50, 6, 7, 8 ,9]), [50]);
  })

});

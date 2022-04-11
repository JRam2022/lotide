const assert = require('chai').assert;

const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  it("returns true for ab, ba", () => {
    assert.deepEqual(eqObjects({ a: "1", b: "2"}, { b: "2", a: "1"}), true);
  });

  it("returns true for ab, ba", () => {
    assert.deepEqual(eqObjects({ a: "1", b: "2"}, { a: "1", b: "2", c: "3"}), false);
  });

});
const assert = require('chai').assert;

const countLetters = require('../countLetters');

describe("#head", () => {
  it("returns 5 for 'jason'", () => {
    assert.deepEqual(countLetters('jason'), { j: 1, a: 1, s: 1, o: 1, n: 1 });
  });

  it("returns 3 for 'ram'", () => {
    assert.deepEqual(countLetters('ram'), { r: 1, a: 1, m: 1 });
  });

  it("returns 7 for 'MacBook'", () => {
    assert.deepEqual(countLetters('MacBook'), { M: 1, a: 1, c: 1, B: 1, o: 2, k: 1 });
  });
});
const assert = require('chai').assert;

const without = require('../without');

describe("#Without", () => {
  it("returns [1, 2, 4] for 1, 2, 3, 4, 5,]", () => {
    assert.deepEqual(without([1, 2, 3, 4, 5,], [3, 5, 7]), [1, 2, 4]);
  });

  it("returns ['jess', 'phuong'] for ['jason', 'jess', 'phuong', 'jay']", () => {
    assert.deepEqual(without(['jason', 'jess', 'phuong', 'jay'], ['jason', 'jay', 'random']), ['jess', 'phuong']);
  });

});
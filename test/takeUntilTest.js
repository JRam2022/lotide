const assert = require('chai').assert;

const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  const data1 = [1, 2, 3, 4, 5, 6, -7, 8, 9,];
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  
  it("returns [1, 2, 3, 4, 5, 6, -7] for [1, 2, 3, 4, 5, 6, -7, 8, 9,]", () => {
    assert.deepEqual(takeUntil([1, 2, 3, 4, 5, 6, -7, 8, 9,],  x => x === 8), [1, 2, 3, 4, 5, 6, -7]);
  });

  it("returns new sentence for array", () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"],  x => x === ","), ["I've", "been", "to", "Hollywood"]);
  });

});
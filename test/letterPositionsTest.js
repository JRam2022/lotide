const assert = require('chai').assert;

const lettersPositions = require('../lettersPositions');

describe("#letterPositions", () => {

  it("returns index of all letter positions for string", () => {
    assert.deepEqual(lettersPositions('my name is jason'), {
      m: [ 0, 5 ],
      y: [ 1 ],
      n: [ 3, 15 ],
      a: [ 4, 12 ],
      e: [ 6 ],
      i: [ 8 ],
      s: [ 9, 13 ],
      j: [ 11 ],
      o: [ 14 ]
    });
  });

});

const assert = require('chai').assert;

const map = require('../map');

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tome"];
  
  it("returns letter in index of string", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });

  it("returns letter in index of string", () => {
    assert.deepEqual(map(words, word => word[1]), ['r', 'o', 'o', 'a', 'o']);
  });

  it("returns letter in index of string", () => {
    assert.deepEqual(map(words, word => word[2]), ['o', 'n', undefined, 'j', 'm']);
  });

});
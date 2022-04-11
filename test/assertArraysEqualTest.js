const eqArrays = require('../eqArrays')
const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual(eqArrays([1, 2, "5"], [1, 2, 3]));
assertArraysEqual(eqArrays([1, 1, "5"], [1, 1, 3]));

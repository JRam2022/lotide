const assertArraysEqual = require('../assertArraysEqual');

const middle = require('../middle');

assertArraysEqual((middle([1, 2]), [])); // => []
assertArraysEqual((middle([1, 2, 3, 40, 50, 6, 7, 8]), [40,50])); // => [40, 50]
assertArraysEqual((middle([1, 2, 3, 4, 50, 6, 7, 8 ,9]), [50])); // => [50]
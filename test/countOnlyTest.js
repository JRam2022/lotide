const assert = require('chai').assert;

const countOnly = require('../countOnly');

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  
  ];

  it("returns 2 for Fang in firstNames", () => {
    assert.strictEqual(countOnly(firstNames, "Fang"), 2) ;
  });

});
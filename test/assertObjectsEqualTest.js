const eqObjects = require('../eqObjects');

const assertObjectsEqual = require('../assertObjectsEqual');

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};


assertObjectsEqual((eqObjects(ab, ba), true), true);

const abc = { a: "1", b: "2", c: "3"};
assertObjectsEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false);
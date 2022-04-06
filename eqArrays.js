const eqArrays = function(array1, array2) {
  //check length
  if (array1.length !== array2.length) {
    return false
  }
  //loop through
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  //return true if no conflicts
  return true;
  
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌 👌 👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️  ☠️  ☠️   Assertion Failed: ${actual} !== ${expected}`);
  }

};


assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

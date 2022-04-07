const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌 👌 👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️  ☠️  ☠️   Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(array1, array2) {
  //check length
  if (array1.length !== array2.length) {
    return false;
  }
  //loop through
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  //return true if no conflicts
  return true;
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  // store both objects as array
  const object1Key = Object.keys(object1);
  const object2Key = Object.keys(object2);
  
  // if length of arrays not equal - false
  if (object1Key.length !== object2Key.length) {
    return false;
  }

  //loop through arrays
  for (const key of object1Key) {
    // if key is array continue
    if (Array.isArray(object1[key])) {
    
      // store both keys to pass to eqArray
      const arr1 = object1[key];
      const arr2 = object2[key];
    
      // if arrays dont match - return false
      if (!eqArrays(arr1, arr2)) {
        return false;
      }
      
    // if keys dont match return false
    } else if ((object1[key] !== object2[key])) {
      return false;
    }

  }
  // otherwise return true
  return true;
};

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
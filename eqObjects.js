const eqArrays = require('./eqArrays')

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

module.exports = eqObjects;
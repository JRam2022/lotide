const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

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

const assertArraysEqual = function(equalArrays) {
  if (equalArrays) {
    console.log(`👌 👌 👌 Arrays are equal!`);
  } else {
    console.log(`☠️  ☠️  ☠️   Arrays are not equal.`);
  }


};


const words = ["ground", "control", "to", "major", "tome"];

const results1 = map(words, word => word[0]);
assertArraysEqual(eqArrays(results1, ['g', 'c', 't', 'm', 't']));

const results2 = map(words, word => word[1]);
assertArraysEqual(eqArrays(results2, ['r', 'o', 'o', 'a', 'o']));

const results3 = map(words, word => word[2]);
//console.log(results3)
assertArraysEqual(eqArrays(results3, ['o', 'n', undefined, 'j', 'm']));


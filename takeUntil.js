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



const takeUntil= function(array, callback) {
  //store in array
  let newArray = [];
  //loop through array
  for (const item of array) {
    // if callback value is found stop
    if (callback(item)) {
      return newArray;
    } else {
      // push into new array
      newArray.push(item);
    }
  }
};



// tests 

/*const data1 = [1, 2, 3, 4, 5, 6, -7, 8, 9,];
const results1 = takeUntil(data1, x => x === 8);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === 'Redwood');
console.log(results2);


console.log(assertArraysEqual(eqArrays(results1, [1, 2, 3, 4, 5, 6, -7])));
console.log(assertArraysEqual(eqArrays(results2, ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to"])));*/
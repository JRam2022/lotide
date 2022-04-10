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



const without = function(source, itemsToRemove) {
  let newArray = [];
  //keeps track of matches
  let doItemsMatch = false;

  //loop throught first array
  for (let i = 0; i < source.length; i++) { // outer loop of array
    doItemsMatch = false;
    for (let j = 0; j < itemsToRemove.length; j++) { // inner loop of removables
      if (source[i] === itemsToRemove[j]) { // if they match
        //sets doItemsMatch to true
        doItemsMatch = true;
      }  
    }
    if (doItemsMatch === false) { // if they dont match
      newArray.push(source[i]); // push to new array
    };
  }
  return newArray;
};

console.log(without([1, 2, 3, 4, 5,], [3, 5, 7]));
console.log(without(["1", "2", "3"], [1, "2", "3"])); 
console.log(without(['jason', 'jess', 'phuong', 'jay'], ['jason', 'jay', 'random']));
console.log(without(["1", "2", "3", "4"], [1, "2", "3"])); 

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]))
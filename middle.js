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


const middle = function(array) {
  // if array length > 2 check if even or odd
  if (array.length > 2) {
    // return middle of odd array
    if (array.length % 3 === 0) {
      const OddMid = Math.floor(array.length / 2);
      let OddArr = [];
      OddArr.push(array[OddMid]);
      return OddArr;
    } else {
      //return middle of even array
      const EvenMid = array.length / 2;
      let EvenArr = [];
      EvenArr.push(array[EvenMid - 1], array[EvenMid]);
      return EvenArr;
    }

  }
  //return empty array if < 2
  else {
    array = [];
    return array;
  }
};

//console.log(middle([1, 2])); // => []
//console.log(middle([1, 2, 3, 40, 50, 6, 7, 8])); // => [40, 50]
//console.log(middle([1, 2, 3, 4, 50, 6, 7, 8 ,9])); // => [50]
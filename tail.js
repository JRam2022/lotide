const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌 👌 👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️  ☠️  ☠️   Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

console.log(tail([1,2,3,4,5]));

console.log(tail([5]));

console.log(tail([]));






const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌 👌 👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️  ☠️  ☠️   Assertion Failed: ${actual} !== ${expected}`);
  }

};


const countLetters = function(str) {
  // letter as key and number as value
  let results = {};
  //loop through the string
  for (let i = 0; i < str.length; i++) {
    //console.log(letter);
    //if there are duplicate letters
    if (results[str[i]]) {
      //increment
      //results += 1
      results[str[i]] += 1;
    } else {
      results[str[i]] = 1;
    }
  }
  return results;
};

console.log(countLetters('jasonjasonrrrr'));
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌 👌 👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️  ☠️  ☠️   Assertion Failed: ${actual} !== ${expected}`);
  }

};


const findKeyByValue = function(object, value) {
  
  const valueOfShow = Object.values(object);
  const keyOfShow = Object.keys(object);
  
  for (let i = 0; i < valueOfShow.length; i++) {
    //console.log(valueOfShow[i]);
    //if match return matching key of value
    //console.log(keyOfShow[i]);
    if (valueOfShow[i] === value) {
      return keyOfShow[i];
    }
  } //if no match return undefined
  return undefined;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);




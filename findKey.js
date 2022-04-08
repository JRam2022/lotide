const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌 👌 👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️  ☠️  ☠️   Assertion Failed: ${actual} !== ${expected}`);
  }

};


const findKey = function(object, callback) {
  //tore key and value in variables
  const objectValues = Object.values(object);
  const objectKeys = Object.keys(object);

  //loop through object
  for (let i = 0; i < objectValues.length; i++) {
  // if callback value is in object
    if (callback(objectValues[i])) {
      //return the key
      return (objectKeys[i]);
    }
  }
  //if it doesnt exist return undefined
  return undefined;

};

/* TESTS

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "Akaleri"); // => "Akaleri"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1), "Blue Hill"); // => "Blue Hill"*/
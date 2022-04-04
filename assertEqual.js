const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("☠️  ☠️  ☠️" + "  Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("👌 👌 👌" + " Assertion Failed: " + actual + " !== " + expected);
  }

};

assertEqual("Bootcamp", "Bootcamp");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(3, 9);
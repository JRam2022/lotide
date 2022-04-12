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

module.exports = without;
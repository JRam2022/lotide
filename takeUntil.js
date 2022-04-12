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

module.exports = takeUntil;
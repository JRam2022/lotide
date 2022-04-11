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

module.exports = middle;
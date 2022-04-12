const letterPositions = function(sentence) {
  // letter as key and number as value
  let results = {};
  //loop through the string
  for (let i = 0; i < sentence.length; i++) {
    //console.log(letter);
    //if theres a space skip it
    if (sentence[i] === ' ') {
      continue;
    }
    
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    }  else {
      let tempArray = [];
      tempArray.push(i);
      results[sentence[i]] = tempArray;
    }
  }
  return results;
};

module.exports = letterPositions;
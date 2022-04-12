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

module.exports = findKeyByValue;


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

module.exports = findKey;

//needs callback
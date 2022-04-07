const map = function(array, callback) {

  //console.log('array: ', array);
  //console.log('callback: ', callback);


  const results = [];
  
  for (let item of array) {
    console.log('item Before: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }

  return results;

};




const words = ["ground", "control", "to", "major", "tome"];

const results1 = map(words, word => word[0]);
console.log(results1);


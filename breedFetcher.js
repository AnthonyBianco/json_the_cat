const request = require('request');
//let URLprefix = "https://api.thecatapi.com/v1/images/search?breed_id=";
//let URLrequest = URLprefix.concat(inputRequest);



const fetchBreedDescription = function (breedName, callback) {
request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, response, body)=> {
  const data = JSON.parse(body);
  if (error || data.length === 0) {
    console.log(error);
  } else {
    callback(null, data[0].description);
  }

});
};

module.exports = { fetchBreedDescription };

// var obj = {
//   key1: {
//     key3: {
//       key5: 7
//     }
//   }
// };

// obj.key1.key3.key5 === 7

// obj.key1.key3.keyB === 7 

// obj.keyB.key3.key5 === 7
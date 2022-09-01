const request = require('request');




const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null); // Print the error if one occurred
      return;
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      callback('Breed not found', null);
      return;

    }

    callback(null, data[0].description);

  });
};

module.exports = { fetchBreedDescription };

// request(url, (error, response, body) => {
//   if (error) {
//     console.log('error:', error); // Print the error if one occurred
//     return;
//   }
//   const data = JSON.parse(body);
//   console.log(data[0].description);
//   //console.log(typeof data);
// });
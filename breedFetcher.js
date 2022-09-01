const request = require('request');
const fs = require('fs');

const breed = process.argv[2];
url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;



request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
  //console.log(typeof data);
});







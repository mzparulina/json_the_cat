const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const api = "https://api.thecatapi.com/v1/breeds/search?name=" + breedName;
  request(api, (error, response, body) => {
    const data = JSON.parse(body);

    if (error) { //check for error
      callback(error);
      return;
    }

    if (data.length === 0) { // make sure cat exists
      callback('That cat does not exist.', null);
      return;
    }
    
    if (data[0] !== undefined) { // make sure it has an object
      callback(error, data[0].description);
    }
    
  });
};

module.exports = { fetchBreedDescription };
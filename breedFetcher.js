const request = require('request');
const breed = process.argv[2];
const domain = "https://api.thecatapi.com/v1/breeds/search?name=" + breed;

request(domain, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.length > 0) {
    console.log(data[0].description);
  } else {
    console.log('Breed not found');
  }
});
const request = require('request');
const fs = require('fs');
let inputRequest = process.argv.slice(2);
// console log process argv
let URLprefix = "https://api.thecatapi.com/v1/images/search?breed_id=";
let URLrequest = URLprefix.concat(inputRequest);

request(URLrequest, (error, response, body)=> {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    console.log(data[0].breeds[0].description);
  }
  
  
});


// "https://api.thecatapi.com/v1/images/search?breed_id=beng"
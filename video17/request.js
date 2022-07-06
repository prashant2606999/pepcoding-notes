const request = require('request');
// feature -> request
console.log("Before");
request('https://www.worldometers.info/coronavirus', cb);

console.log("After")
function cb(error, response, html) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:',response&&response.statusCode); // Print the response status code if a response was received
    // console.log('html:', html); // Print the HTML for the Google homepage.
}

// --------------gfg--------------
const request = require('request')

// Request URL
var url = 'https://jsonplaceholder.typicode.com/todos/1';

request(url, (error, response, body)=>{
	
	// Printing the error if occurred
	if(error) console.log(error)
	
	// Printing status code
	console.log(response.statusCode);
	
	// Printing body
	console.log(body);
});

// Node.js program to demonstrate
// the fs.readFile() method

// Include fs module
var fs = require('fs');

// Use fs.readFile() method to read the file
fs.readFile('f1.txt', 'utf8', function(err, data){
	
	// Display the file content
	console.log(data);
});

console.log('readFile called');



// Node.js program to demonstrate
// the fs.readFile() method

// Include fs module
var fs = require('fs');

// Use fs.readFile() method to read the file
fs.readFile('demo.txt', (err, data) => {
	console.log(data);
})

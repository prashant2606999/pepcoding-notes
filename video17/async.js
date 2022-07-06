const fs = require("fs");
// let data = fs.readFileSync("f1.txt");
// console.log("" + data);
// async function
console.log("Before");
// ⬇ ye h async function nodejs 
// fs.readFile("f1.txt", cb);
// function cb(err, data) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("data " + data);
//     }
// }

// ----------------------------------------- GFG -------------------------
fs.readFile("f1.txt", function cb(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log("data " + data);
    }
});

console.log("After");
console.log("Mean while");



// Node.js program to demonstrate
// the fs.readFile() method

// Include fs module
var fs = require('fs');

// Use fs.readFile() method to read the file
fs.readFile('demo.txt', (err, data) => {
	console.log(data);
})

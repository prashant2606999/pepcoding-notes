// let cp = require("child_process");
// console.log("trying to open calculator");
// cp.execSync("calc");
// cp.execSync("code");
// cp.execSync("start chrome https:\\www.pepcoding.com");
// console.log("opened our");

// let output =  cp.execSync("node abc.js");
// console.log("output "+ output);

// console.log("open calculator");

console.log("---------------------------------------------------------------------------------------");

let fs = require("fs");
// let content = fs.readFileSync("abc.js ","utf-8");
// console.log(content);


// fs.writeFileSync("abc.txt"," ");
// fs.appendFileSync("abc.txt"," ");


// directory

// create folder
// fs.mkdirSync("newfolder");
// fs.writeFileSync("newfolder/newfile","new content");

for(let i = 0  ; i<=10; i++){
    let dirPathToMake = `Lecture - ${i}`;
    // console.log(dirPathToMake)   
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "\\" + "readme.md" , `# readme for ${dirPathToMake}`);

}






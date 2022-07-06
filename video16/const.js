// const a = 10;
// const arr = [1, 2, 3, 4, 5];
// // How is it possible ??
// arr.shift();
// console.log(arr);



/// objects
// key : value
//  string,number: valid type
// let object = {
//     name: "Jasbir",
//     lastName: "Singh",
//     sayHi: function () {
//         console.log("Jasbir Say's Hi");
//     }
// }
// console.log("line number 16",Object.keys(object[0]));
// console.log(object);
// console.log(object("name"))
// // loop 
// for (let key in object) {
//     console.log(key, " : ", object[key]);
// }
// object.sayHi();



/// arrays
let arr = [1, 2, 3, 4, 5];
arr.myprop = "Hello";
console.table(arr["myprop"]);

// arr.Print = function () {
//     console.log("Hello from array");
// }
// for (let key in arr) {
//     console.log(key, " : ", arr[key]);
// }
// console.log(arr);
// arr[95]=100;
// console.log(arr);
// console.log(arr[23]);
// console.log(arr.length);



/// function -> object -> key : value 
// extra feature -> code property 
// that can be executed when you invoke that 


// function fn() {
//     console.log("Hello from fn");
// }
// fn.prop = "property of function";
// fn.myFn = function fn() {
//     console.log(" I am  a method of a function");
// }

// const obj = {                           /// vipul goyal srr ne samjhaya tha 
//     a: function print(){
//         console.log("Hello");
//     }
// }
// console.log(obj.a());
// fn();
// fn.myFn();
// console.log(fn.myFn)

// JS ->primitive or object
// everything object -> Dates,errors, modules 
// 6 primitive types-> number, string,boolean ,undefined ,null,symbol


// let object = { name:"jasbir",
// name2: "aman",
// name3 : "suman" }

// console.log(object[0]);
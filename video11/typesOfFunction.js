// Types of function -> 
/// 1.....  function Statement
// define or                           function definition yha function define kra hmne
// function sayHello(param) {
//     console.log("hello", param);
//      return "sttrfbj";
// }
// sayHello();
// fn invocation  or calling a function 
// sayHello(10);
// console.log("``````````````````");
// sayHello("Hello");
// console.log("``````````````````");
// sayHello([1, 2, 3, 4, 5]);
// console.log("``````````````````");
// sayHello({ name: "Jasbir" });                            // object 
// console.log("``````````````````");
// let rVal = sayHello();
// console.log("rVal",rVal);






///  2..... function are first class citizens
// function are treated as a variable
// assignment possible h = aap ek varible ki value dusre me assign kr skte ho ;
/// use trh aap function ka address  bhi function ka defintion bhi dusre varible me assign/put  kr skte ho
// let a = [1, 2, 3, 4, 5];
// let b = a;
// console.log(b);




///3......   function expression = means functn ka address variable ke ander put kr skta hun
/// use in higher order function

// let fnContainer = function () {              // jb function ka nam nhi hota,
//     console.log("I am Expression");         //to use anonymous function bolte h
//     console.log("I am an anonymous function")
// }
// fnContainer();           // is variable ko call keya function definition chla





///3.... IIFE-> Immediately Invoked Function expression 
// jb let or const nhi the tbb bss yhi tarika tha cheejon ko bchane ka .
//jb user ko kam phle se krke dena hota h then use iife like chess khelte time chess board
///An Immediately-invoked Function Expression (IIFE for friends) is a way to execute functions immediately, as soon as they are created. IIFEs are very useful because they don't pollute the global object, and they are a simple way to isolate variables declarations

///An immediately invoked function expression (or IIFE, pronounced "iffy", IPA /ˈɪf. i/) is a programming language idiom which produces a lexical scope using function scoping.

// /require, pollution, 


// (function fn() {
//     console.log("I am IIFE");
//     console.log("I will run on my own");
// })();              // bnte hi call ho gya function 








///4...... Arrow Function  -> syntax , react ,this

/// syntex chota krne ke leye nhi blki , react ki aatma h ye

// let fn = num => {
//     return num * num;
// }
// console.log(fn(5));

// let fn = num => num * num;          // ek paremeter hua to ese likho do 
// console.log(fn(5));




///  5.....First Class Citizens
// function are treated as a variable
/// 1. assignment -> fn expression         bna hmara assingment se


/// 2.variable can be passed as a parameter likewise  

//. function can be passed as a parameter coz function are first clss citizens-> fp, hof ,callbacks

function sayHello(param) {
    console.log("hello", param);
    param();
    return "sttrfbj";
}


function smaller() {
    console.log("Hello i am smaller");
}

 sayHello([1, 2, 3, 4]);
 sayHello(smaller);

let rVal = sayHello(smaller);
console.log(rVal);



///3....variable can be returned from a function
// function can be returned from a function -> closure

// closure
// function outer() {
//     console.log("I am outer returning inner");
//     return function inner () {
//         console.log("I am inner");
//     }
// }
// let rVal = outer();
// console.log("Rval",rVal);
// rVal();


/// anonymous function
function outer() {
    console.log("I am outer returning inner");
    return function() {                   //~anonymous function
        console.log("I am inner");          
    }                                   
}                               
let rVal = outer();           
console.log("Rval",rVal);      //. Rval [function (anonymous)]
rVal();        // ~ doubt~   
console.log(outer);             //. [Function : outer ]
     

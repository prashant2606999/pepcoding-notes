// if (true) {
//     console.log("Hello");
//     console.log("hello again")
// }


//~ {} -> block  double curly braces ko hi block bo-lte h 

// ~my new concept run this code and you will get line 20 me bhi orange mil-a;
// let fruits = "apple";
// console.log(fruits);
// {
//    console.log(fruits) ;
    // let fruits; 
//     console.log(fruits);
//     fruits = "orange";
//     console.log(fruits);
// }
// console.log(fruits);

// ~--------------------------------------------------------------------------------------

// let fruits = "apple";
// console.log(fruits);
// {
//~   console.log(fruits) TDZ
//     let fruits; 
//     console.log(fruits);
//     fruits = "orange";
//     console.log(fruits);
// }
// console.log(fruits);

//~    -----------------------------------------------------------------------------------
/*
let fruits = "apple";
console.log(fruits);
{
    // console.log(fruits) TDZ
    let fruits;
    console.log(fruits);
    fruits = "orange";
    {
        console.log(fruits)  //~ bhai ye bhi orange leg-a  
    }
    console.log(fruits);    //~orange
}
console.log(fruits);    //~apple   

*/

//~  ---------------------------------------------- --------------------------------------------

/// variable shadowing -> legal 

const fruits = "apple";
console.log(fruits);
{
	const fruits = "apple";
	console.log(fruits);
}
console.log(fruits);


// var fruits = "apple";
// console.log(fruits);
// {
//     // console.log(fruits) TDZ
//     let  fruits = "orange";;
//     console.log(fruits);    
// }  

// console.log(fruits);
// illelgal 
// let fruits = "apple";
// console.log(fruits);
// {
//     // console.log(fruits) TDZ
//     var  fruits = "orange";;
//     console.log(fruits);   
// }
// console.log(fruits);


// function func() {
// 	var a = 'Geeks';
// 	let b = 'Geeks;
	
// 	if (true) {
// 		let a = 'GeeksforGeeks'; // Legal Shadowing
// 		var b = 'Geeks'; // Illegal Shadowing
// 		console.log(a); // It will print 'GeeksforGeeks'
// 		console.log(b); // It will print error          //~ b has already be declare
// 	}
// }
// func();

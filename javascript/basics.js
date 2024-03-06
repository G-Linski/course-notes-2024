/*--------------------------------
Basics





--------------------------------*/
/*------------------------------*/
/*------------------------------*/
/*------------------------------*/
/*------------------------------*/




/*------------------------------*/
//Naming Conventions
// https://www.w3schools.com/js/js_conventions.asp

// Variables use camelCase, start with lowercase
// Everyother word starts in uppercase
let variableNamingConvention = 10;

//Constants use UPPPERCASE
//We can use hyphens or underscores for multiple words
const CONSTANT_NAME = 14;

// Can seperate numbers with underscore for more readability.
const MILLION = 1000000;
const BILLION = 1_000_000_000;

// Array Naming
// use const with camelCase
const array1 = [1,2,3,4];

// Function Naming
// Just use camelCase
function myFunction(){
  console.log('A Function');
}

/*------------------------------*/
//let vs var
// var is accessible outside the code block it's created in.
// let is not.

var i = 1
while(i < 10){
  let a = 100;
  var b = 50;
  i++;
}
// a is not accessible outside of the code block, b is

/*------------------------------*/
// == vs ===, use ===
// == is equal in value
// === is equal in value and type

console.log(10 == '10'); // true
console.log(10 === '10'); // false

/*------------------------------*/
//Booleans
// and, or, not
// &&, ||, !


/*------------------------------*/
//Important Functions

// What is the datatype?
let t = 150;
console.log(typeof(t))



/*------------------------------*/
// Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

/*------------------------------*/

// String interpolation
let a1 = 'in'
let b2 = 15125;
let c3 = null;

//Using template strings, aka interpolation
console.log(`To put a variable ${a1} use backticks and ${b2} 
string interpolation ${c3}`);



/*------------------------------*/
// For loops
let i = 10;
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//While Loops
let i = 10;
while (i < 10){
  i++;
  console.log(i);
}



/*------------------------------*/

// if, else, else if
let a = true;
let b = false;
let c = true;

if (a){
  console.log(a);
}
else if (b){
  console.log(b);
}
else{
  console.log(c);
}

/*------------------------------*/
// Truthy and Falsy
// things that evaluate to true or false, but aren't bools
// Eveything with a value is true
// numbers, strings with content, etc...
// Things without a value are false
// 0, empty strings, undefined, null, NaN





/*------------------------------*/







/*------------------------------*/



/*------------------------------*/



/*------------------------------*/



/*------------------------------*/


/*------------------------------*/

/*------------------------------*/


/*------------------------------*/
/*------------------------------*/




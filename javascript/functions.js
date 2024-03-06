/*--------------------------------
Functions

Blocks of reusable code
Functions can return values and invoke other functions

Name using camelCase

Understanding Arguments
Functions take a copy of arguments
This will not change value unless assigned to/returned
Function arguments are always passed by value
ES copies the values of the variables into the function arguments
Changes to arguments inside function do not reflect the passing variables
outside of function.




--------------------------------*/

/*----------------------------------------------------------------------*/ 
//Function Basics
console.log('Basics of Functions')

//Basic Function
function addition(a,b){
  return (a+b);
}


// Functions works even with too many arguments.
function greetings(name){
  console.log(`Hello ${name}.`);
}
greetings('Robert');
greetings('Robert',123);
greetings('Robert',123, true);


/*
Non-arrow functions have a local object called arguments
Can send in multiple arguments
Acts like an array, but is an object
Don't use this though
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
*/




/*----------------------------------------------------------------------*/ 
//Storing Functions in an Object
console.log('Storing Functions in an Object');

//Use a constant
//It's an object therefore no capitals for constant
//Content can change
//Can be useful if a function has another function as its argument
const square = function(number){
  return number*number;
};

console.log(square(5));




/*----------------------------------------------------------------------*/ 
//Arrow Functions
console.log('Arrow Functions')

//Just a shorter way of writing functions
//Used for small functions


//Examples
const func = a => console.log(a);
const myFunction = (a, b) => a * b;
hello = () => {
  return "Hello World!";
}
console.log(hello());

/*
So let's break it down
const myFunction //Name of function
= (a, b) //parameters
=> a * b; //what happens to those parameters and what this returns


*/

const powTwo = num =>num**num;
//Don't need parentheses if using single parameter, no return either
//Do need if 0 parameters or 2 or more.


//More Examples
function regFunction(a,b){
  return a+b;
}

const arrowFunction = (a, b) => {
  return a+b;
};

const powOne = num =>{
  return num**num;
}


/*----------------------------------------------------------------------*/ 
//Recursive Functions
console.log('Recursive Functions')

// Recursive Function Example
function recursion(n){
  if(n>0){
    console.log(n)
    recursion(n-1);
  }
}
recursion(5);



/*----------------------------------------------------------------------*/ 
//Indefinite Arguments
console.log('Indefinite Arguments into a Function')


//If we have an unknown amount of arguments
//We can use ...arguments
//Though it's probably best to just get an array
function unlimitedArguments(...args){
  for (let element of args){
    console.log(element);
  }
}

unlimitedArguments(1,2,3,4,5,6,7,8,9);

//Known arguments and indefinite
// a and b are separate from args.
function ABunlimitedArguments(a,b,...args){
  console.log(a);
  console.log(b);
  for (let element of args){
    console.log(element);
  }
}



/*----------------------------------------------------------------------*/ 
//Default Parameters
console.log('Default Parameters')

// Setting Default Parameters
function getProfileStatus(name, admin = false) {
  if(admin){
    console.log('You are an admin');
  }
  else{
    console.log('You are a user');
  }
}

// Don't need second argument if just a user.
// Though we can override the parameter by sending in a second argument
getProfileStatus('Billy');
getProfileStatus('Billy', true);






/*----------------------------------------------------------------------*/ 
//Understanding Functions and Arguments
console.log('Understanding Arguments')

/*
Understanding Arguments

Functions take a copy of arguments
They will not change value unless assigned to/returned
Function arguments are always passed by value
ES copies the values of the variables into the function arguments
Changes to arguments inside function do not reflect the passing variables
outside of function

*/

//Num won't change outside the block of code
//Unless we return it
let num = 5;
function changeNum(num){
  num = 12;
  console.log(num);
}

changeNum(num);
console.log(num);

//Arrays are a bit different
//If we access the elements within we can change them
function updateArray(arr){
  for(let i = 0; i < arr.length;i++){
    arr[i] = arr[i]*2;
  }
}
const nums = [1,2,3,4,5];
updateArray(nums);
console.log((nums.join(', ')));



// Cannot change objects, but we can change properties
// Cannot assign new object to reference
function changeObject(obj){
  obj.age = 23;
  obj = {
    firstName:'Steve',
    lastName: 'Smith',
    age: 345
  }
}

const employee ={
  firstName: 'Terry',
  lastName: 'Wallace',
  age: 42
}

changeObject(employee);
console.log(employee.age);
console.table(employee);









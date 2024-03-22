
'use strict';

//Object destructuring

//If we want to assign a value from numbers into variables
//Long way is to do it manually
const numbers = [1,2,3,4,5];
let a = numbers[0];
let b = numbers[1];
//etc...

//Easier/Faster way to do it
let [c,d,e,f,g] = numbers;
console.log(g);

//Skipping values
//Use a whitespace and commas.
let [h, , i, j, ] = numbers;

//If we want a certain amount in an array use ...arrayName
//The rest operator ...
//Can't have anything after
const names = ['george','paul','john','ringo'];
let [first, ...others] = names;


//Destructuring with basic objects
const student = {
  firstName: 'kevin',
  lastName: 'smith',
  email: 'ksmith@fakemail.com'
}
console.table(student);

//Have to use same names as the objects properties
// But we can reassign the name to a variable using :
let {firstName : fn, lastName, email} = student;
console.log(fn, lastName, email);

















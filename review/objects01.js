/*

ECMA-262
Defines an object as an unorder collectin of properties.
Each property or method is identified by a name that is mapped to a value.


let num = 10;
num is/contains 10
const user = {name: 'John'};
user is not 'John' 
user points to the object that contains name: 'John'
user is a reference/knows the location of the object.


JavaScript is not a traditional OOP language like Java or C#.
JS doesn't have real classes.
But objects that borrow properties from other objects.


Things to look up
Class constructor?



*/

'use strict';


//Objects
//Creating and Intializing an Object
//Object literal syntax
const student = {
  name: 'Saad',
  age: 20,
  course: 'OOJS',
  languages: ['English', 'Arabic', 'Latin']
}


//Empty Object
//Dot operator syntax
const person = {};
person.name = 'Mary';
person.age = 34;

//Empty objects are truthy.
if (person){
  //something
}


//The Object Constructor
const employee = new Object();
employee.id = 123;
employee.name = 'Billy';

//Key-values syntax
//Using strings as property names
//Create an object dynamically
//The property name is stored in a string
const company = {};
company['name'] = 'Microsoft';
company['address'] = '123 Fake Street';











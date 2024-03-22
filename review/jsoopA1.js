
'use strict';


const animal = {
  name: 'lynx',
  age: 6,
  classification: {
    genus: 'lynx',
    family: 'felidae',
    order: 'carnivora',
    class: 'mammalia'
  },
  food: ['hares','birds','mice'],
  continents: ['North America','Europe', 'Asia'],
  habitat: 'forest'
}


function objectInfo(obj){
  let count = Object.keys(obj).length;
  let type = ''
  let hasProp = false;
  let allEnum = true;
  let allMut = true;

  for (let i in obj){
    let x =  typeof obj[i];
    type+=x+' ';
    if(!obj.propertyIsEnumerable(i)){
      allEnum = false;
    }


  }
  if (obj.hasOwnProperty('dateOfBirth')){
    hasProp = false;
  }


  console.log(`The object has ${count} properties`);
  console.log(`The object has the following property types ${type}`);
  console.log(`The object has the dateOfBirth property: ${hasProp}`);
  console.log(`Are all properties enumerable: ${allEnum}`);
  console.log(`Are all properties mutable: ${allEnum}`);
  




}


objectInfo(animal);


/*

Terms to define
a. Class
A template for objects.

b. Object
An object is a thing in programming. Generally a smaller peice of code.
An object can be thought of as coding with unqiue properties and behaviour.

c. Constructor
A type of function that is called to create an object.

d. Accessor methods (setters, getters)
Methods to manipulate and retrieve values from an object.

e. Abstraction
Make things simple basically. Hide all the unimportant stuff.
Take in input, do stuff that the user doesn't care about, return output.

f. Encapsulation
Hide info from those that don't need to see it. Maybe even you.
And prevent the wrong, function, object or whatnot from interacting/changing
other coding that it's not supposed to.

g. Inheritance
When a class inherits properties from another class. Can be used to make new
classes. 

h. Polymorphism
Where objects of different classes can perform actions with the same name.
Using different code.
getInfo() will get various things depending on the object. But perform the 
same basic task regardless of object.


i. Design patterns
Reuseable solutions to common problems.
Basically descriptions of how to solve these problems.
Creational Design Pattern, Structural Design Pattern, and Behavioral Design Pattern
Creational: Designed for class instantiation.
Structural: Designed with regard to a class' strucutre and composition.
Main goal is to increase functionality of the class or classes involved.
Behavioural: Designed depending on how one class communicates with another.



References
https://career.softserveinc.com/en-us/stories/what-is-object-oriented-programming-oop-explaining-four-major-principles
https://www.freecodecamp.org/news/the-basic-design-patterns-all-developers-need-to-know/
https://www.youtube.com/watch?v=L1-zCdrx8Lk













*/
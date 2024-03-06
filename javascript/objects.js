
/*--------------------------------

Objects
Variables with many properties/values

Written in pairs of:
Name:value

Naming
Use const and camelCase
Not UPPERCASE!



In ES everything that is not a primitive value can be considered an object
Functions are in fact specialized objects

Reference 1
           -------> Object
Reference 2
//point to 

We use const to make sure our references will not point to a different object
Objects references by a const are still mutable.



--------------------------------*/

/*----------------------------------------------------------------------*/ 
//Object Basics
console.log('Object Basics')

//Way to Make Objects with predefined properties
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//Object with Properties
const player = {
  firstName: 'Frank',
  lastName: 'Johnson',
  team: 'Wildcats',
  seasons: [2021,2022,2023,2024],
  age: 21
};


//Empty Object
const person1 = {};
//Adding Properties
person1.firstName = 'Billy';
person1.lastName = 'Jones';


//Another way to make objects
//Useful for dynamically making objects
const user = {};
user['name'] = 'Mary';
user['age'] = 34;
user['email'] = 'mary@email.com';



//An object with objects
const customer = {
  firstName: 'Elliot',
  lastName: 'Jones',
  address: {
    street: '123 Notre Dame',
    unit: 9,
    postalCode: 'R2M5K9'
  }
}


//Object Methods
//Check if object has a certan property.
//Property checked as a string
console.log(player.hasOwnProperty('team'));
console.log(player.hasOwnProperty('mascot'));

//Another way to check
console.log('team' in player);


//Objects have access to inbuilt methods inherited from parent
console.log('toString' in player); //true
console.log(player.hasOwnProperty('toString')); //false
//hasOwnProperty only checks the object only
// in checks object and parent it inherits from

// Check if element is an instance of an object.
console.log(player instanceof Object); //true





/*----------------------------------------------------------------------*/ 
//Retrieving Data from Objects
console.log('Retrieving Data from Objects')

//Object with Properties
const player3 = {
  firstName: 'Frank',
  lastName: 'Johnson',
  team: 'Wildcats',
  seasons: [2021,2022,2023,2024],
  age: 21
};

console.table(player3);



//Static methods to retrieve data from an object
//Selecting all keys, returns array
const objectKeys = Object.keys(player3);
//All values
const objectValues = Object.values(player3);
// Everything/Entries
const objEntries = Object.entries(player3);

console.log(objectKeys);
console.log(objectValues);
console.log(objEntries);




/*----------------------------------------------------------------------*/ 
//Time and Date Object
console.log('Time and Date');


//Create Date and Time Object
//24 clock
const newDate = new Date();
console.log(newDate);

//Is newDate a Date?
console.log(newDate instanceof Date); //true
console.log(newDate instanceof Object); //true




/*----------------------------------------------------------------------*/ 
//Understanding Objects
console.log('Understanding Objects')

const one = {
  id: 123,
  name: 'John Smith'
}
const two = {
  id: 123,
  name: 'John Smith'
}

const three = one;
console.log(one === two); //Same content but are different objects
console.log(one === three); //Point to same object
// === Checks references not the content of the objects






/*----------------------------------------------------------------------*/ 
//Copying Objects
console.log('Copying Objects')

const animal = {
  name: 'Red Fox',
  class: 'mammalia',
  order: 'carnivora'
}

//Shallow Copy
const shallowCopy = {...animal};
animal.name = 'Black Fox';
console.table(animal);
console.table(shallowCopy);


//Deep Copy
//JSON.parse turns a string into an object
//Stringify turn object into a string
const deepCopy = JSON.parse(JSON.stringify(customer));

//Another better way to copy, built in
const deepCopy2 = structuredClone(customer);
//Access object in an object
customer.address.unit = 12;
console.log(deepCopy);




/*----------------------------------------------------------------------*/ 
//Deleting Object Properties
console.log('Deleting Object Properties')

//Deleting properities
delete pet.order;
console.table(pet);

//Though it is better to get validation beforehand
if (pet.hasOwnProperty('order')){
  delete pet.order;
}

//Function for deleting properties
function deleteProp(obj,prop){
  if (obj.hasOwnProperty(prop)){
    //Need to use square brackets.
    delete pet[prop];
  }
}
deleteProp(pet,'order');
console.table(pet);





/*----------------------------------------------------------------------*/ 
//Immutable Objects, Freezing
console.log('Freezing')

//Make your object immutable
//So it can't be changed
const student = {
  id: 123,
  name: 'Billy',
  age: 16
}
//Use static method called freeze
Object.freeze(student);
//student.age = 19; //will cause error

//Check if object is frozen
console.log(Object.isFrozen(student));

//Alway validate
if(!Object.isFrozen(student)){
  student.age = 19;
}else{
  console.log('Object is frozen.');
}




/*----------------------------------------------------------------------*/ 
//Function Basics
console.log('Basics of Functions')

/*----------------------------------------------------------------------*/ 
//Function Basics
console.log('Basics of Functions')

/*----------------------------------------------------------------------*/ 
//Function Basics
console.log('Basics of Functions')












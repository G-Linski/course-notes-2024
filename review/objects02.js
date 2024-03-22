'use strict';

/*

All objects one way or another inherit properties from Object
Any object we make is a child/grandchild of a class called Object


hasOwnProperty vs in
Example
toString is coming from Object
hasOwnProperty only checks the object we created, not Object

enumerable?


Static methods
Define it
Look up other types of methods

defineProperty 
Read up on

defineProperty sets read-only and nonenumerable properties by default


writeable:true





*/







const customer = {
  id: 'CS1231',
  name: 'Billy',
  email: 'billy@fakemail.com',
  hasSubscription: true
}

//Check if customer has a specific property using hasOwnProperty() method
//Check if specific property is enumerable using propertyIsEnumerable()
//Loop through the object's properties using the for in loop
//For of/for in??
//toString property using the in operator.

let prop = 'email';

if (customer.hasOwnProperty(prop)){
  console.log('True');
}
if (customer.propertyIsEnumerable('prop')){
  console.log('True');
}
for (let key in customer){
  console.log(key, customer[key]);
}

if ('toString' in customer){
  console.log(true);
}


//What if we want a single immutable property
//Example we don't want to change a persons ID
//ID is often the primary key in a database.

const employee = {};
Object.defineProperty(employee,
  'type', {
    value: 'immutable',
    enumerable: true
  }
);

Object.defineProperty(employee,
  'id', {
    value: 'EMP3253',
    writable: true
  }
);

console.log(employee.propertyIsEnumerable('type')); //true
console.log(employee.propertyIsEnumerable('id')); //false

employee.id = 'EMP7853';
console.table(employee);


for (const proper in employee){
  console.log(`${proper}: ${employee[proper]}`)
}



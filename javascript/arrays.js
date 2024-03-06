/*--------------------------------
Arrays

Use const for arrays
But use camelCase not uppercase
They are objects, but their content can change.

What are Arrays?
Ordered lists of data
In ES arrays are dynamically sized
Can hold any type of data


--------------------------------*/

/*----------------------------------------------------------------------*/ 
//Creating Arrays

// Create an array with items already inside
const array1 = ["Saab", "Volvo", "BMW"];

// If we want a class
// Array constructor
const array2 = new Array();
console.log(array2);

//Creating an array with 5 empty slots
const array3 = new Array(5);
console.log(array3);

//Fill an Array with the Same Element
const count = new Array(10).fill(0);


/*----------------------------------------------------------------------*/ 
//Basic Array Functions and Concepts

//Array length
console.log(array1.length);

//Print Array with a given spacing element
const test = [1,2,3];
console.log(test.join(', '));
console.log(test.join(' | '));


//We can go out of bounds and add elements.
//But we will fill undefined in all indexes with nothing in them
test[10] = 8;
for(let i = 0; i < test.length; i++){
  console.log(test[i]);
}

// We however can use a method to only print elements that are defined.
// Doesn't print undefined element
// New methods ignore empty/undefined values
test.forEach((element,index)=>{
  console.log(`Index ${index} Element ${element}`)
});


//indexOf(element)
//Find index of an element
//Returns index of the first element of that type if found.
let target1 = test.indexOf(2);


//Valid if variable is an array
//Array.isArray(variable)
const names = ['john','billy','fred','ringo'];
console.log(Array.isArray(names));

//Create an array from String
const chars = Array.from('MITT');
console.log(chars);

//Get the element at a certain index
//Make sure index actually exists beforehand
console.log(chars.at(2));



/*----------------------------------------------------------------------*/ 
//Looping Through Arrays

const arrayOne = [1,2,3,4,5];
//Simple way using a for loop
for (let i = 0; i <arrayOne.length;i++){
  console.log(arrayOne[i]);
}

//Loop through an array without using an index
for (let number of arrayOne){
  console.log(number);
}

// Using for .. in
for (let property in arrayOne){
  console.log(`${property}: ${arrayOne[property]}`);
}

// Using the forEach() method
// Good place to put functions in, arrow functinos
// This multiplys by 2
arrayOne.forEach(element => console.log(element*2));


// foEach with index
arrayOne.forEach((num,index)=>{
  console.log(`${index} ${num}`)
});

// With reference to array
// This function can update the array via its reference
arrayOne.forEach((num,index,referenceToArray)=>{
  console.log(`${index} ${num} ${referenceToArray}`)
});


/*----------------------------------------------------------------------*/ 
//Matricies, 2D arrays
console.log("MATRICIES")
const matrix = [[11,12,13,14,15],
  [21,22,23,24,25],
  [31,32,33,34,35],
  [41,42,43,44,45]];
//Only prints length of 1st level of matrix
console.log(matrix.length);


//Looping through a matrix
//Simple for loop
for(let i = 0; i < matrix.length; i++){
  for(let j = 0; j < matrix[i].length;j++){
    console.log(matrix[i][j]);
  }
}


//Using forEach and arrow functions
matrix.forEach(array => {
  array.forEach(element =>{
    console.log(element);
  })
});


//Convert 2D array to 1D
//Keeps all inner array data
const flat = matrix.flat();




/*----------------------------------------------------------------------*/ 
//Adding and Removing Elements from an Array
console.log("Adding and Removing Elements from an Array");
/*

Removal
Front
array1.shift()
Back
array1.pop()
Index of
array1.splice(index, howManyToRemove)


Adding
Front
array1.unshift()
Back
array1.push()
Index of, use 0 to add
array1.splice(index, 0, itemToAdd)

*/

const justiceLeague = ['thor','batman','wonder woman','hulk','aquaman','spider-man'];

//REMOVING ELEMENTS

//Shift removes an element from the front of an array
justiceLeague.shift();

//Pop removes an element from the end of an array
justiceLeague.pop();

//Splice removes an element at a specific index
//So it's a good idea to search for a specific element and get its index beforehand
//The second number indicates how much to remove, 1 is usually a good idea
let target = justiceLeague.indexOf('hulk');
justiceLeague.splice(target,1);

//ADDING ELEMENTS

// We can use splice() to add elements at an index
// Use 0, requires 3 arguments
// index, 0 to add, elementToAdd
justiceLeague.splice(target,0,'superman');

//Unshift adds element to beginning
justiceLeague.unshift('the flash');

//Push adds element to the end
justiceLeague.push('cyborg');

//More complex use of splice
justiceLeague.splice(justiceLeague.indexOf('batman')+1,0,'green latern');

console.log(justiceLeague);





/*----------------------------------------------------------------------*/ 
//Searching Arrays
console.log('SEARCHING ARRAYS');
const pets = ['dog','otter','dog','cat','bird'];


//indexOf()
//Returns the index of the first instances of an element
targetOtter = pets.indexOf('otter');

//array.includes(element)
//Returns a boolean
console.log(pets.includes('cat'));

// From index of starting at ...
// array.includes(element,startIndex)
console.log(pets.includes('dog', 3));

//Search for second instance of an element
console.log(pets.includes('dog', pets.indexOf('dog')+1));





/*----------------------------------------------------------------------*/ 
//Sorting Arrays
console.log('SORTING ARRAYS')

const numbers = [6,3,7,8,3,2,5];
const bills = [99,23,62,9,74,325,54,78,102];
//Easy Sorting, but does it by alphabetical order
//Not good for numbers, check bills log
numbers.sort();
console.log(numbers);
bills.sort();
console.log(bills);

//Better sort
//Use an arrow function with .sort()
bills.sort((a,b) =>(a-b));
console.log(bills);

// Reverse sort
bills.sort((a,b) =>(b-a));
console.log(bills);

// Reverse Array
bills.reverse();
console.log(bills);





/*----------------------------------------------------------------------*/ 
//Copying Arrays
console.log('COPYING ARRAYS');

const one = [1,2,3,4,5,6];

//Bad Way to Copy as it is just a reference copy
const two = one;


//Copy the actual object
const three = [...one];

//Another way to Copy the Object
const zoo = ['lion','tiger','bear','panda'];
const anotherZoo = zoo.slice();


// Matrices Copying Shallow, inner arrays are still references
const matrix1 = [[11,12,13,14,15],
  [21,22,23,24,25],
  [31,32,33,34,35],
  [41,42,43,44,45]];

//Ways to Copy a Matrix
//The inner arrays are references!
const newMatrix1 = [...matrix1];
const newMatrix2 = matrix1.slice();






/*----------------------------------------------------------------------*/ 
//Adding Arrays Together
console.log('ADDING ARRAYS TOGETHER');


//Adding Arrays
const a = [1,2,3,4,5];
const b = [6,7,8,9,10];
const c = [6,7,8,9,10];

const ab1 = a.concat(b);
const ab2 = a.concat(b,c);
const ab3 = [...a,...b];


/*----------------------------------------------------------------------*/ 
//Converting Arrays
console.log('CONVERTING ARRAYS');

//Sets are similar to arrays, but have no real order
//They do not store duplicate elements
//So they are good for removing duplicates

const duplicateArray = [1,1,2,3,3,3,4,4,4,5,5,6,6,7,1];

//Convert Array to Set
const set1 = new Set (duplicateArray);
const unique = Array.from(set1);
console.log(unique);






/*----------------------------------------------------------------------*/ 
//Advanced Array Functions/High Order Functions
console.log('ADVANCED ARRAY FUNCTIONS');
// High order functions/ Array Functional Methods
// These are array methods that require a function


const subscriptions = [8,12,9,5,13,7];

// Check if every element in an array passes a test
// every()
// We need to supply the test via a function. Can be arrow or regular
// Returns a bool
// Example: Check if anything is less than 10?
let lessThanTen = subscriptions.every(cost => cost < 10);
console.log(lessThanTen);

//Check if any element in an array passes a test
//some()
let someLess = subscriptions.some(cost => cost < 10);
console.log(someLess);


// Filter an array based on condition
const zoo2 = ['elephant','zebra','emu','tiger','panda','eel'];
//Save condition in a variable
const condition = animal => animal.startsWith('e');
const animalsE = zoo2.filter(condition);


// Apply a function to everything in an array
// Map()
// Creates a new array populated with the results of a function
const names2 = ['john','jane','billy','frank','jack','gabe'];
//This is the function
const capitalize = name => name[0].toUpperCase() +name.slice(1);
//This is using map with the function to create a new array
const capNames = names2.map(capitalize);


//Turn an array into a single value
// reduce()
// Probably best for sums or averages
// look up
const numbers3 = [1,2,3,4,5,6,7,8,9];
const reducer = (accumulator,element) =>(accumulator+element);
let total = numbers3.reduce(reducer,0);
console.log(total);




/*----------------------------------------------------------------------*/ 
//Specific Functions and Extra
//Just additional stuff, usually done for exercises
//Can be good examples.
console.log('SPECIFIC FUNCTIONS AND EXTRA');

// Filter numbers based on if they are less than the average
const numbersA = [1,5,3,723,235,643,14,125,634,124,645,88,234];
const reducerA = (accumulator,element) => (accumulator+element);
let average = (numbersA.reduce(reducer,0))/numbersA.length;
const conditionA = element => element > average;
const aboveAverage = numbers.filter(conditionA);
console.log(aboveAverage.sort());

//Filter array of integers
//Mainly used to get floatpoints
const matrixA = [
  [1,5,7,5.6,2.3],
  [234,7.7,6.6,2.35,2],
  [234,634,0.7,235.5]
  ];
const floatP = matrixA.flat().filter(num => !Number.isInteger(num));











/*----------------------------------------------------------------------*/ 
//Copying Arrays
console.log('COPYING ARRAYS');



/*----------------------------------------------------------------------*/ 
//Copying Arrays
console.log('COPYING ARRAYS');



/*----------------------------------------------------------------------*/ 
//Copying Arrays
console.log('COPYING ARRAYS');





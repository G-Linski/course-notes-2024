/*
The date object
JavaScript includes a date object that provides support for manipulating
date information.
When you create a new date ojbect it is automatically updated
with the current date and time.
Down to the nearest milisecond.

Given in Coordinated Universal Time (UTC)
Close enough to GMT for me
Year, month, day, time, time zone, milisecond

Reference for Date Object
https://www.w3schools.com/jsref/jsref_obj_date.asp
Just look at this instead or play around.


Unix made in 1970?
1970 is a reference to this time.
Dates are set relative to this year.




*/



/*----------------------------------------------------------------------*/ 
//Basics


//Creating a Date object
//Without any input will get the current time from our computer
const now = new Date();
console.log(now);

//Get Full Year
console.log(`Year: ${now.getFullYear()}`);

// getMonth() 
//The month's number, January is 0
console.log(`Month: ${now.getMonth()}`);

//getDay()
//Day of the week starts at 0, day of the week. 0 is Sunday
console.log(`Day: ${now.getDay()}`);

//getDate()
//Day starts at 1, calendar day
console.log(`Day: ${now.getDate()}`);

//getHours()
//Hour of the day from 0 to 23
console.log(`Day: ${now.getHours()}`);


//Setting a Date
//Constructor
const birthday = new Date(2024,2,19);
console.log(birthday);



/*----------------------------------------------------------------------*/ 
//Changing Information in a Date Object
const day = now.getDate();
console.log(day);
now.setDate(day + 100);
console.log(now);


/*----------------------------------------------------------------------*/ 
//Removing info from Date or moreso changing to zeroes
const dateOfBirth = new Date(2000,2,3,10,30,25);
dateOfBirth.setHours(0,0,0);
console.log(dateOfBirth);




/*----------------------------------------------------------------------*/ 
//Comparisons
// Comparing
// Reminder we cannot compare two objects directly!
// As in they will always be false
// Compare their properties or manipulate the object beforehand


const today = new Date();
const christmas = new Date(2024,11,25);

//Miliseconds until Christmas!
console.log(christmas - today);

//Miliseconds in a day
const DAY = 1000* 60 * 60 *24;

let daysUntilChristmas = (christmas - today)/DAY;
console.log(Math.trunc(daysUntilChristmas));



//More Comparison Examples
const tomorrow = new Date();

tomorrow.setDate(today.getDate()+1);
console.log(today);
console.log(tomorrow);

const one = new Date(2024,2,18);
const two = new Date(2024,2,18);

//Comparisons
console.log(one === two); //False
console.log(one.toString() === two.toString()); //True
console.log(one.getDate() === two.getDate()); //True



/*----------------------------------------------------------------------*/ 
//Formatting
console.log('Formatting');
console.log(today);
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toUTCString());
console.log(today.toLocaleString());
console.log(Date());




/*----------------------------------------------------------------------*/ 
//Basics


/*----------------------------------------------------------------------*/ 
//Basics



/*----------------------------------------------------------------------*/ 
//Basics


/*----------------------------------------------------------------------*/ 
//Basics


















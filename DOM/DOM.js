/*--------------------------------
NOTE READ THIS BEFORE DOING STUFF!!!!
Run the HTML page via run, not the js page.
Stuff like console.log() won't work otherwise
The HTML page calls the js page, but the js page won't call the HTML page.
So the document and such won't exist it I do so.

ALSO
This needs to be paired with an HTML file
And preferably a CSS file
But that's tomorrow's problem



DOM
Document object model
A programming interface for web documents
Represents the page that programs can change the document structure, style and content
DOM represents the HTML documents as nodes and objects

JS knows everything regarding HTML and CSS

DOM -> Object Represented by Document
BOM -> Object Represented by Window

BOM
Browser object model
A browser specific convention referring to all the objects exposed by
the web browser
BOM allows JS to interact with the browser.
The window object is created automatically when you open a webpage
that uses JS




Prototype
Used for objects to share properties
Prototype is the master object,



Getting access to HTML elements

Methods Available in the document object
-getElementById()
-querySelector()
-querySelectorAll()


--------------------------------*/

/*----------------------------------------------------------------------*/ 
//DOM Basics and Printing

//Can get properties since below are objects.

console.log(document);
console.log(document.characterSet);
console.log(window);
console.log(window.navigator);
console.log(window.screen);
/*
It's a good idea to print things to the console.
Easier way to debug and see what is working.
Remember to use inspect on the webpage and select console.

*/



/*----------------------------------------------------------------------*/ 
//Selectors
getElementById();
querySelector();
querySelectorAll();

//Examples
const header = getElementById('header-1');
const body = querySelector('body');
const banner = querySelector('.banner');
const text = querySelectorAll('p');
const sectionByClass = document.querySelector('.section');
const sectionById = document.querySelector('#section');
const sectionByElementName = document.querySelector('section');
const inputButton = querySelectorAll('input-btn');
/*
Note that getElemeentById requires an HTML element with an ID
querySelector can word on regular elements or classes
Selecting a class requires a .
And query selector only selects the first instance of a class
And querySelectorAll selects all instances of that element or class

*/



/*----------------------------------------------------------------------*/ 
//Event Listeners

/*
Used to launch a function if certain conditions are met
Such as the page is loaded, something is clicked, etc...

*/









/*----------------------------------------------------------------------*/ 
//Changing the Style of an Element
// element.style.property = 'value';
/*
Note that the name of the property such as backgroundColor
May be different than CSS
No dash, just camelCase
*/
paragraphOne.style.color = '#b84eff';
paragraphOne.style.backgroundColor = '#b84eff';





/*----------------------------------------------------------------------*/ 
//Using Event Listeners
/*
There are several ways to use event listeners.
But I'll only list the 2 best ways
I definitely prefer to use the onEvent method

*/

/*
This method add the event listener directly to the element
And then follows with a function
*/
paragraphThree.addEventListener('click',function(){
  this.style.color = '#f90';
});


// This is the method I prefer
/*
Create the event listener then it launches a function
*/
onEvent('click',changeColor());






/*----------------------------------------------------------------------*/ 
//Class List
//To Do/Understand

/*
We can use classList to add and remove classes from an element
Good for night mode switching

*/

const message = document.getElementById('message');
const button = document.querySelector('button');

button.addEventListener('click',function(){
  //This toggles adding the visible class to message.
  message.classList.toggle('visible');
  
  //This determines what happens if the element has the class
  if (message.classList.contains('visible')){
    button.innerText = 'Hide message';
  }
  else{
    button.innerText = 'Show message';
  }

});






/*----------------------------------------------------------------------*/ 
//This

/*
When inside an element
Example:
paragraphThree.addEventListener('click',function(){
  this.style.color = '#f90';
});

We can use the word this
Which can be used instead of the name of the element, ie) paragraphThree
*/

paragraphThree.addEventListener('click',function(){
  this.style.color = '#f90';
});


/*----------------------------------------------------------------------*/ 
//Adding Event Listeners to Multiple Elements
/*
Use querySelectorAll to store an array of the elements/class
Then we can use foreEach and a function to addEventListeners to 
everything in the array.
*/

const list = document.querySelectorAll('li');
//const list = [...document.querySelector('li')];

list.forEach(item => {
  item.addEventListener('click',function(){
    alert(`My name is ${this.innerText}`);
  })
})



/*----------------------------------------------------------------------*/ 
//Adding HTML elements 

/*
We can create HTML elements in various ways.
But the easiest two are use createElement
Or just write out the element in a string and store it

*/

const divOne = document.querySelector('.one');


//Adding Paragraph
let paraOne = '<p>Check out my latest review</p>';
divOne.innerHTML = paraOne;

const paraTwo = document.createElement('p');
divOne.innerHTML = paraTwo;
//Now we have a p in paraTwo and can change the innerText
paraTwo.innerText = 'Check out my latest review';





/*----------------------------------------------------------------------*/ 
//Forms and DOM

//Obtaining values from a text input
//Assuming .guess is a class for a text input
const guess = document.querySelector('.guess');
let userGuess = parseInt(guess.value);


/*----------------------------------------------------------------------*/ 
//Function Basics


/*----------------------------------------------------------------------*/ 
//Function Basics








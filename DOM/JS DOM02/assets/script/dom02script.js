'using strict';

/*

Do not run this page
Run the HTML file to see console.log(element);


Getting access to HTML elements

Methods Available in the document object
-getElementById()
-querySelector()
-querySelectorAll()



HTML ELement --Bridge--> JS has an object that represents that element





*/



// const section = document.getElementById('section');
// //Allows us to target elements by their names, id's and classes
// //More flexible than byID
// const sectionByClass = document.querySelector('.section');
// const sectionById = document.querySelector('#section');
// const sectionByElementName = document.querySelector('section');

//Events
const paragraphOne = document.getElementById('one');
const paragraphTwo = document.getElementById('two');
const paragraphThree = document.getElementById('three');

console.log(paragraphOne);


//Function to change color of paragraph one
//Bad Approach
function toPurple(){
  paragraphOne.style.color = '#b84eff';
  //paragraphOne.style.backgroundColor = '#b84eff';
}


//Function to change color of paragraph two
//Better approach

paragraphTwo.onclick = function() {
  this.style.color = '#0f9';
};


//Best
//Using an event listener
paragraphThree.addEventListener('click',function(){
  this.style.color = '#f90';
});

//Yet another way
onEvent('click',paragraphThree,changeColor);


paragraphTwo.addEventListener('keyup',function(){
  this.style.color = '#fff';
});
 










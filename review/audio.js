/*

Audio Object
Annoying
Don't really use for websites


The audio constructor creates and returns a new HTML audio element
Which can be either attached to a document or the user to interact with or listen to.
Can be used offscreen to manage and play audio.



Create buttons in index.

*/
'use strict';

const start = new Audio('wild.mp3');
start.type = 'audio/mp3';

const jump = new Audio('./assets/audio/jump.wav');
const wildbtn = document.querySelector('wild');

const btn1 = document.querySelector('button-start');
const btn2 = document.querySelector('button-jump');
const mario = document.querySelector('.mario');
btn1.addEventListener('click', () => {
  start.play();
  mario.style.visibility = 'visible';
});


btn2.addEventListener('click', () => {
  jump.play();
  
  mario.classList.add('anim');
  setTimeout(()=> {
    mario.classList.remove('anim'),800
  })
});

wildbtn.addEventListener('click', () => {
  wild.play();

});






/*

The Audio Object



The audio constructor creates and returns a new HTML audio element
Which can be either attached to a document or the user to interact with or listen to.
Can be used offscreen to manage and play audio.




References
https://www.w3schools.com/jsref/dom_obj_audio.asp
https://www.w3schools.com/tags/ref_av_dom.asp
https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio

*/


//Simple Button to play a sound.
'use strict';
//Use a path from the index.html to the asset. Not from the js
const sound = new Audio('sound.mp3');
sound.type = 'audio/mp3';
const btn = document.querySelector('.btn');

function systemContent(){
  sound.play();
}

btn.addEventListener('click', systemContent);







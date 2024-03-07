'using strict';

/*







*/



const message = document.getElementById('message');
const button = document.querySelector('button');

button.addEventListener('click',function(){
  message.classList.toggle('visible');
  

  if (message.classList.contains('visible')){
    button.innerText = 'Hide message';
  }
  else{
    button.innerText = 'Show message';
  }

});

console.log(button);




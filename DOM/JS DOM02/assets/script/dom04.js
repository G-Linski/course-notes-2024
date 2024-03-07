
'using strict';

/*
Node list

querySelectorAll() returns a node list
An array like structure
With more than one object (node)



*/
const list = document.querySelectorAll('li');
//const list = [...document.querySelector('li')];

list.forEach(item => {
  item.addEventListener('click',function(){
    alert(`My name is ${this.innerText}`);
  })
})







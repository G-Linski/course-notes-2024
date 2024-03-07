
'using strict';

/*


*/

const list = document.querySelector('form');
const numOne = document.querySelector('.num-one');
const numTwo = document.querySelector('.num-two');
const calculate = document.querySelector('.calculate');
//Grabs the p in output, like in CSS
const output = document.querySelector('.output p');

// Not a popular method to get form object info
// Uses names not classes
// console.log(document.forms['calculator']);
// console.log(form.elements[2]);
//just console.log(form);
/*
Name = identifier, useful in PHP
Name as far as I can tell is like ID
Good for cross compatibility

*/

function isNumber(str){
  let input = str.trim();
  if (input.length > 0 && !isNaN(input)){
    return true;
  }
  else{
    return false;
  }
}

calculate.addEventListener('click',function(){
  let a = numOne.value.trim();
  let b = numTwo.value.trim();

  if(isNumber(a) && isNumber(b)){
    let result = parseFloat(a)+parseFloat(b);
    output.innerText = (`${a} + ${b} = ${result}`)
    numOne.value = '';
    numTwo.value = '';
  }else{
    output.innerText='Please Enter Valid Numbers';
  }
})




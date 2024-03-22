
'use strict';

const animal = {
  name: 'domestic cat',
  species: 'felis catus',
  class: 'mammalia'
};

console.table(animal);

//Basic validation
if (animal.hasOwnProperty('class')){
  delete animal.class;
}

console.table(animal);

const personOne = {
  name: 'Mary',
  age: 34,
  pert: 'cat'
}

const personTwo = {
  name: 'Steve',
  age: 29,
  pert: 'dog'
}

const personThree = {
  name: 'Joy',
  age: 21,
  pert: 'otter'
}

for (const data of [personOne, personTwo, personThree]){
  console.log(`${data}`);
  console.log(`${data.name}`);
}











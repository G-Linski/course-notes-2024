//Object destructuring
const employee = {
  name: 'anthony',
  email: 'tony@fakemail.com',
  position: {
    title: 'ceo',
    startDate: '2021-7-18'
  }
}



let {name, email, position:{title}, position:{startDate}} = employee;
console.log(name, email, title,startDate);



//Date object
let now = new Date(2021,4,3);
console.log(now);
//Geolocation API


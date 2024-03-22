/*

What a gigantic pain for something so easy.
I've had a ton of trouble until I read this:
https://codedamn.com/news/nodejs/cannot-use-import-statement-outside-a-module

Use that syntax and none other.

So to export
module.exports = {movies, add};
Where movies is an object and add is a function

To import
const { movies, add } = require('./export.js');



Remember to use the require keyword

Check out export and import js



Maybe read this for reference as well:
https://www.w3schools.com/nodejs/nodejs_modules.asp

*/

function add(num1, num2) {
  return num1 + num2;
 }

 const movies = [
  {
    id: 1001,
    title: 'Jurassic Park',
    year: 1993,
    runningTime: '2h 7m',
    description: 'A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park\'s cloned dinosaurs to run loose.',
    genre: ['Adventure', 'Action', 'Sci-Fi'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/jurassic-park.jpg'
  },
  {
    id: 1002,
    title: 'The Matrix',
    year: 1999,
    runningTime: '2h 16m',
    description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth - the life he knows is the elaborate deception of an evil cyber-intelligence.',
    genre: ['Action', 'Sci-Fi'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-matrix.jpg',
  },
  
];


module.exports = { movies, add};

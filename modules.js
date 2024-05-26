// This method is assign to variable all what I export from file, and to use it is like "xyz.people"
// const xyz = require('./people'); // import file to modules
// console.log(xyz.people, xyz.ages);

// This method is destructuring object and I can use variable from export file without "xyz" like below
const { people, ages} = require('./people');
console.log(people, ages);

const os = require('os'); // Information about operating system
console.log(os.platform(), os.homedir());
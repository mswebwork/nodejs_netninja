// Global object
// console.log(global);

let x = 0;

setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int); // stop Interval
}, 3000)

const int = setInterval(() => {
    x++;
    console.log(`in the interval ${x}`);
}, 1000)

console.log(__dirname);     // Full absolute path to folder
console.log(__filename);    // Full absolute patch to file


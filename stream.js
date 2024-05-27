const fs = require('fs');

// If I choose encoding here, I dont need to use "toString" below on chunk like chunk.toString()
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});

// that ".on" it's similar to eventListener, but here the listener is on "data" not "on click"
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// I method to write stream to file
// readStream.on('data', (chunk) => {
//   console.log("------- NEW CHUNK -------");
//   console.log(chunk);
//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });

// II method to write stream to file with use PIPE
// piping
readStream.pipe(writeStream);
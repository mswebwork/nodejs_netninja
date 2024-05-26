const fs = require('fs'); // File system

// TODO: reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) console.log(err);
//
//   console.log(data.toString());
// });
//
// console.log('last line');

// TODO: writing file
// fs.writeFile('./docs/blog3.txt', 'hello, world again', () => {
//   console.log('file was written');
// });

// TODO: directories
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) console.log(err);
    console.log('Folder created');
  });

} else {
  fs.rmdir('./assets', (err) => {
    if (err) console.log(err);
    console.log('Folder deleted!');
  });
}

// todo: deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) console.log(err);
    console.log('File deleted!');
  });
}
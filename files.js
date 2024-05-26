const fs = require('fs'); // File system

// TODO: reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) console.log(err);

  console.log(data);
});

// TODO: writing file

// TODO: directories

// todo: deleting files
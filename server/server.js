const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('Req OBJ:' , req.url, req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    default:
      path += '404.html';
      break;
  }

  // res.write('<head><link rel="stylesheet" href="#"></head>')
  // res.write('<h1>hello, inqo</h1>');
  // res.write('<p>hello, again inqo</p>');
  // res.end();

  // send HTML file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write();
      res.end(data);
    }

  });

});

server.listen(3000, 'localhost', () => {
  console.log('listening for request on port 3000');
});


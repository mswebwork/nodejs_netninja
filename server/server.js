const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Req OBJ:' , req.url, req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  res.write('<head><link rel="stylesheet" href="#"></head>')
  res.write('<h1>hello, inqo</h1>');
  res.write('<p>hello, again inqo</p>');
  res.end();
});

server.listen(3000, 'localhost', () => {
  console.log('listening for request on port 3000');
});


const http = require('http');
const fakedata = require('./mocks/fake.ts');

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
  'Access-Control-Max-Age': 2592000,
  'Content-Type': 'application/json',
};

const server = http.createServer((req, res) => {
  if (req.url === '/data') {
    res.writeHead(200, headers);
    res.end(JSON.stringify(fakedata));
  } else {
    res.writeHead(404, headers);
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


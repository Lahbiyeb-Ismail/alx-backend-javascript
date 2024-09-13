const http = require('node:http');

const app = http.createServer((_req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(1245, () => console.log('Server listening at port 1245'));

module.exports = app;

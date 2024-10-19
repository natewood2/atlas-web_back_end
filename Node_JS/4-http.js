const http = require('http');

const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
});

app.listen(1245, () => {
    console.log('1245 is going on!')
});
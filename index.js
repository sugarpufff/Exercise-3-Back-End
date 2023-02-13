const http = require('http')

const server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.write('This is the Home Page');
    res.end()
})

const hostname = '127.0.0.3';
const port = 3002;
server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
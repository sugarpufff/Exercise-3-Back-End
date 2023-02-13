const http = require('http');
const moment = require('moment/moment');
const member = require('./member')
const server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json', 'text/plain')
    res.write(JSON.stringify({
        'status' : 'success',
        'response' : 'response success',
        'description': 'Exercise #03',
        }));
    res.write('\n');
    res.write(moment().format());
    res.write('\n');
    res.write(member.id());
    res.write('\n');
    res.write(member.nim());
    res.write('\n');
    res.write(member.nama());
    res.write('\n');
    res.write(member.nomorTelp());
    res.end()
})

const hostname = '127.0.0.2';
const port = 3001;
server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
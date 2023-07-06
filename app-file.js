const http=require('http');
const route=require('./route.js');
const server=http.createServer(route.handler);
server.listen(4000);
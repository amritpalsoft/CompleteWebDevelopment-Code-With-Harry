const http=require('http')

const hostname='127.0.0.1';

const port=80;

const fs=require('fs')

const file=fs.readFileSync('amrit36.html')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(file)
})

server.listen(port,hostname,()=>{
    console.log('listening');
})
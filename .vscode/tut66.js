// this is  a way to create server on node js 
// port 80 can be accesssed by writing 'localhost' only 
// no need to write 80 bcz browser default local port is port 80

const http=require('http');

const fs=require('fs');

const port=80

const hostname='127.0.0.1'

const fileContent=fs.readFileSync('amrit17.html');

const server=http.createServer((req,res)=>{
   
    res.writeHead(200,{'Content-Type':'text/html'});
   
    res.end(fileContent);

})


server.listen(port,'127.0.0.1',()=>{

    console.log(`listening on port http://${hostname}:${port}/`)

})
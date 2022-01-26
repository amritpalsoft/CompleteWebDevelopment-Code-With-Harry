const http=require('http')
const fs=require('fs')
const hostname='127.0.0.1'
const port=80;

const home=fs.readFileSync('./index.html')
const about=fs.readFileSync('./about.html')
const contact=fs.readFileSync('./contact.html')

const server=http.createServer((req,res)=>{
    url=req.url;
    if(url='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(home)
    }
    else if(url='/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(about)
    }
    else if(url='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(contact)
    }
    else {
        res.writeHead(404,{'Content-Type':'text/html'})
        res.end('404 page not found')
    }

})

server.listen(port,hostname,()=>{
    console.log('listen');
})
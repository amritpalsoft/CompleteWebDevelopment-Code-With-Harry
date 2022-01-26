import { createServer } from 'http'
import { readFileSync } from 'fs'

let file=readFileSync('amrit.html')

const server=createServer((req,res)=>{
    res.writeHead(200,{'Conten-Type':'text/html'})
    res.end(file)
})

server.listen(200,'127.0.0.1',()=>{
  console.log('liste');  
})
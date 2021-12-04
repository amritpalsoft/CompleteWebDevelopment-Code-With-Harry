// here the folder is in .vscode folder
//so first write cd .vscode
// then write cd tut67
//then write node index.js or nodemon index.js
// with help of nodemon continous changes can be seen on browser

//first create the server

const http=require('http');

const fs=require('fs');

const hostname = '127.0.0.1';

const port = 80;



const home=fs.readFileSync('./index.html')   //it will read index.html  which is home

const about=fs.readFileSync('./about.html')  //it read about.html

const contact=fs.readFileSync('./contact.html')


const server=http.createServer((req,res)=>{
  
     url=req.url;
  

    res.writeHead(200,{'Content-Type':'text/html'});  // here 200 is the response code
    
    if(url=='/'){
      res.end(home)
    }
    else if(url=='/about'){
      res.end(about)
    }
    else if(url=='/contact'){
      res.end(contact)
    }
    else{
      
      res.end('<h1>404 page not found</h1>')
    }
})

server.listen(port,hostname,()=>{
  
  console.log(`listening on port ${port}`)

})
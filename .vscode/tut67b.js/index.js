const  express=require('express');
const fs =require('fs');
const port=80;
const path=require('path')

const app=express();
// const file=fs.readFileSync('../amrit28b.html','utf-8')

//EXPRESS RELATED CONTENT//
app.use('/static',express.static('static'))  //for serving static files

// this is used so that input can be encoded
app.use(express.urlencoded())



app.set('view engine','pug')  //set the template engine as pug
app.set('views',path.join(__dirname,'views'))
app.get('/',(req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/html'})
    res.render('index.pug')
})

app.listen(port,()=>{
    console.log('listening');
})
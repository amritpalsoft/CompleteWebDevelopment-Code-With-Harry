/*fs means file system
  fs is a 'build in module' in node js
  here we created a text file amr.txt 
  and then include it in line no 11
  The function of 'fs' is to read the file 
  By WriteFileSync we can create a new file of the same text as read by
  readFileSync*/

const fs = require('fs');

let text = fs.readFileSync('amr.txt', 'utf-8'); // file reading and the content is stored in 'text' variable
console.log(text)
text = text.replace('Pal', 'singh') // we can replace our content in text variable by this method
console.log(text)

// console.log('creating a new file');
fs.writeFileSync('singh.txt', text); // creating new file. We first choose file name and then content from 'text'
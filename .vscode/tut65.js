// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire


//in Asynchronous also line by line execution occurs but 
//if a line is taking more time then it will happen in the mean time
//and next line execution starts

// if we write 'readFile' then it is asynchronous.
// else we write 'readFileSync' then synchronous.

const fs = require("fs");
//in asychronous calls we have to give a third parameter as a function
fs.readFile("amr.txt", "utf-8", (err, data) => {
if (err) {
  console.log(err);
}else{
  console.log(data);
}

});
console.log("This is a message");

//in this code first line no 24 gets printed, then with the help of callback 
//function line 20 gets printed
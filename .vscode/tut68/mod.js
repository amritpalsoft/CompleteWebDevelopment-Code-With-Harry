// this is a our own module we created 
// in this module there is a function which 
// when we give it an array it sum up all the element in the array 
// and then finds average

function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum +=element;
    });
    return sum/arr.length;
}


// module.exports= mod;      we can directly also export the average function

// but  we created an object an exported different properties

module.exports={
    avg:average,
    name: 'amrit',
    branch: 'mech'
}
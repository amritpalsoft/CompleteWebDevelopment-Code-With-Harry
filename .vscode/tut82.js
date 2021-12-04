//searching for data in mongo db


use amritCart


//this query will return all objects with price 25000
//in mongodb statement {price:25000} is called filter object
db.items.find({price:25000})


//this query will return all objects with price greater than or equal to 25000
// gte means greater than or equal to
db.items.find({price:{$gte:25000}})

//if we want to give two filter then use and operator which is denoted as ','
// here price should be >=25000 and rating >4
db.items.find({price:{$gte:25000},rating:{$gt:4}})

// lte means less than or equal to
db.items.find({price:{$lte:15000},rating:{$gt:4}})


//this is or statement means either one of statement is true
db.items.find({$or:[{price:{$gt:25000}},{rating:{$lt:3.5}}]})


//this statement filters in such a way that we get rating only
// in our result
db.items.find({rating:{$gt:3.5}},{rating:1})

//this statemnt gives both rating and quantity in result
db.items.find({rating:{$gt:3.5}},{rating:1,quantity:1})




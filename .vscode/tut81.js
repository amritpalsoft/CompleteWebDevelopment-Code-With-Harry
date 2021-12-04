//inserting data in mongoDb
// firstly you have to write mongo
// to check all the databases write 'show dbs'
// to select a database write use name of database
// then it will be switched to that database
// to see all the documents in the 'collection' write db.collectionName.fin()
// for ex if database name is items, then db.items.find()
// to see all the collection in that database write show collections


use amritCart

db.items.insertOne({name:"amrit",price:25000,rating:4,quantity:100,sold:48})
db.items.insertMany([{name:"samsung",price:25000,rating:4,quantity:100,sold:48},{name:"lg",price:28000,rating:4.3,quantity:600,sold:480},{name:"redmi",price:15000,rating:4.5,quantity:1000,sold:489},{name:"nokia",price:14000,rating:3.3,quantity:150,sold:80}])

// here items is a collection
// and the object is a document

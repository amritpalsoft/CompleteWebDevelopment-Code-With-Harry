// updating data
// show collections will show all the collection


//adding one more collection named 'anotherCollection'
db.anotherCollection.insertOne({a:90})

//updates the price of item named:redmi to rs 20
// but if there are than one redmi items
// then it will only updates the first item
db.items.updateOne({name:"redmi"},{$set:{price:20}})


//updates the price of item named:redmi to rs 20
// but it will updates the price of all redmi items
db.items.updateMany({name:"redmi"},{$set:{price:20}})


//updates the price of item named:redmi to rs 20 and rating to 2
// but it will updates the price and rating of all redmi items
db.items.updateMany({name:"redmi"},{$set:{price:20,rating:2}})

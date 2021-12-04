//deleting items



//delete first item with price 25000
db.items.deleteOne({price:25000})


//delete all items with price 25000
db.items.deleteMany({price:25000})




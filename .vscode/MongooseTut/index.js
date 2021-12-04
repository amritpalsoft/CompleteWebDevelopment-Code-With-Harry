const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/amritCart',{useNewUrlParser:true,useUnifiedTopology:true});

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
// db.once('open',function(){
//     console.log('we are connected')
// })
const kittySchema = new mongoose.Schema({
    name: String
  });
  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };
  
  const Kitten = mongoose.model('amritKitty', kittySchema);
  const amritKitty = new Kitten({ name: 'amritKitty2' });

//   console.log(amritKitty.name)
//   amritKitty.speak()

 amritKitty.save();
amritKitty.speak();
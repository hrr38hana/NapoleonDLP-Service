//in here set up mongoose database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// const mongo = require('mongodb');
// mongo.connect('mongodb://localhost/helmets', (err, client) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });
// //getting error here
// const db = client.db('helmets');



// var bodyParse = require('body-parser');
mongoose.connect('mongodb://localhost/helmets', { useNewUrlParser: true });

var db = mongoose.connection;

var dropDB = function() {
  db.collections['helmets'].drop(function(err) {
    console.log('HELMETS DROPPED');
  });
};

var helmetsSchema = new Schema({
  id: Number,
  productName: String,
  colors: [],
  price: Number
});

var Helmet = mongoose.model('Helmet', helmetsSchema);

var save = function(list) {
  // var list = fakeItems.fakeItems;
  for (var i = 0; i < list.length; i++) {
    var newHelmet = new Helmet({
      id: list[i].id,
      productName: list[i].productName,
      colors: list[i].colors,
      price: list[i].price
    });
    //is this the method that adds to my DB
    newHelmet.save();
  }
};

//this is actually giving me a bunch of unparsed data.
// var dropDB = async function() {
  
//   var list = await db.collection('helmets').find();
//   console.log(bodyParser(list));
//   // return list;
// }

// attempting to query the DB
// var query = function() {
//   console.log(helmets.find())
// };

// console.log(query);



// module.exports.db = db;
//this is how you export more than one element. When you import it in you use {save}
//and just call the function
module.exports = {
  save: save,
  dropDB: dropDB
};

// var newHelmet = new Helmet()
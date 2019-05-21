//in here set up mongoose database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var bodyParse = require('body-parser');
mongoose.connect('mongodb://localhost/helmets', { useNewUrlParser: true });

//this is the piece I was missing to be able to use the mongoose connect methods.
var db = mongoose.connection;

var dropDB = function() {
  //access the DB as an array
  db.collections['helmets'].drop(function(err) {
    console.log('HELMETS DROPPED');
  });
};

var helmetsSchema = new Schema({
  id: Number,
  productName: String,
  colors: [String],
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

module.exports = {
  save: save,
  dropDB: dropDB
};

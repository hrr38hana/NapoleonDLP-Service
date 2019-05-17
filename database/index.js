//in here set up mongoose database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var fakeItems = require('./mockData');
// var bodyParse = require('body-parser');
mongoose.connect('mongodb://localhost/helmets', { useNewUrlParser: true });

// var db = mongoose.connection;

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

module.exports.save = save;

// var newHelmet = new Helmet()
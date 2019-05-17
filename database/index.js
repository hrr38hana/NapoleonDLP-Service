//in here set up mongoose database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/3017');

var db = mongoose.connection;

var helmetsSchema = new Schema({
  id: Number,
  productName: String,
  colors: [],
  price: Number
});

var Helmet = mongoose.model('helmet', helmetsSchema);

// var newHelmet = new Helmet()
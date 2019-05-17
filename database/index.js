//in here set up mongoose database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/3017');

var helmetsSchema = new Schema({
  id: Number,
  productName: String,
  colors: [string],
  price: Number
});

var helmet = mongoose.model('helmet', helmetsSchema);

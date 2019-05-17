//in here set up mongoose database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var helmetsSchema = new Schema({
  id: Number,
  productName: String,
  colors: [string],
  price: Number
});

var helmet = mongoose.model('helmet', helmetsSchema);

console.log(helmet);
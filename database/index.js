var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/helmets', { useNewUrlParser: true });

var db = mongoose.connection;

var dropDB = function() {
  db.collections['helmets'].drop(function(err) {
    console.log('HELMETS DROPPED');
  });
};

var helmetSchema = new Schema({
  id: Number,
  productName: String,
  colors: [],
  price: Number
});

var Helmet = mongoose.model('Helmet', helmetSchema);

var save = function(list) {
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

var showList = async () => {
  //returning as a promise/ use async await
  var helmets = await db.collections['helmets'].find();
  console.log('Helmets showing from DB: ', helmets)
  return helmets;
};

module.exports = {
  save: save,
  dropDB: dropDB,
  showList: showList
};
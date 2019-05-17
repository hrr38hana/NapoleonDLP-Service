// var seeder = require('mongoose');
const save = require('../database/index');

var fakeItems = [];

var randomColor = function() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

var colorOptions = function() {
  var list = [];
  var randomAmount = Math.floor(Math.random() * 6 + 1);
  for (var i = 0; i < randomAmount; i++) {
    list.push(randomColor());
  }
  return list;
};


var randomPrice = function() {
  var dollars = Math.floor(Math.random() * 100 + 50);
  return dollars + 0.99;
};

for (var i = 0; i < 101; i++) {
  var helmet = {};
  helmet.id = i;
  helmet.productName = `Name ${i}`;
  helmet.colors = colorOptions();
  helmet.price = randomPrice();
  fakeItems.push(helmet);
}

save.save(fakeItems);

module.exports.fakeItems = fakeItems;
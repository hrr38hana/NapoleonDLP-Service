const {dropDB, save} = require('../database/index');

var mockData = [];

var randomColor = function() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

var colors = function() {
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

for (var i = 0; i < 100; i++) {
  var helmet = {};
  helmet.id = i;
  helmet.productName = `Name ${i}`;
  helmet.colors = colors();
  helmet.price = randomPrice();
  mockData.push(helmet);
}

dropDB();
save(mockData);

module.exports = mockData;
const express = require('express');
const app = express();
const port = 3017;
// const {} = require('../database/index');
// var fakeItems = require('../database/mockData');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
// app.use(bodyParser.urlencoded());

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({
  extended: true
}));

// console.log(bodyParser(dropDB()));

app.get('/showData', (req, res) => {
  //not sure how to access mongDB data from server
  // db.find().pretty()
  res.send();
});

// console.log(dropDB());

// console.log('query: ', test(), dropDB());

app.get('/more', (req, res) => res.send('this endpoint scrolls helmets over'));

app.get('/helmet/colors', (req, res) => res.send('this endpoint changes the color'));

app.get('/helmet/colors', (req, res) => res.send('this endpoint '));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//not sure how to access a DB query from the server
// console.log(save.db.db.find());


MongoClient.connect('mongodb://localhost:3017/helmets', function (err, client) {
  if (err) {
    console.log('There is an error connecting to MongoClient');
  };

  var db = helmets.db('helmets');
  console.log(db)

  db.collection('helmets').find().toArray(function (err, result) {
    if (err) {
      console.log('There is an error finding db collection helmets');
    }

    console.log(result);
  })
})
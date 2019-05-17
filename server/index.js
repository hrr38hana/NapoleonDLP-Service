const express = require('express');
const app = express();
const port = 3017;
var fakeItems = require('../database/mockData');
const save = require('../database/index');

app.get('/load', (req, res) => {
  save.save(fakeItems.fakeItems);
  console.log('fake items loaded to db');
});

app.get('/more', (req, res) => res.send('this endpoint scrolls helmets over'));

app.get('/helmet/colors', (req, res) => res.send('this endpoint changes the color'));

app.get('/helmet/colors', (req, res) => res.send('this endpoint '));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
const express = require('express');
const app = express();
const port = 3017;
const bodyParser = require('body-parser');
const {showList} = require('../database/index');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/showData', async (req, res) => {
  //not sure how to access mongDB data from server
  // db.find().pretty()
  // var helmet = showHelmet(24)
  console.log(req.body)
  // var list = await showList();
  // console.log(bodyParser(list.body));
  // console.log('This is from from the server**', list);

  // res.send(bodyParser(list.body));
  res.send(list);
});

app.get('/more', (req, res) => res.send('this endpoint scrolls helmets over'));

app.get('/helmet/colors', (req, res) => res.send('this endpoint changes the color'));

app.get('/helmet/colors', (req, res) => res.send('this endpoint '));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

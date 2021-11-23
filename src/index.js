const path = require('path');
const express = require('express');
const morgan = require('morgan');
var handlebars = require('express-handlebars');
const route = require('./routes');
const app = express();
const port = 3000;


//Template engine
var hbs = handlebars.create({
  extname: 'hbs'
});

//app.use(express.static('./src/resources/public'));

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources/views'));


app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());



//HTTP logger
//app.use(morgan('combined'))

route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
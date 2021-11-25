const path = require('path');
const express = require('express');
const morgan = require('morgan');
var handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const route = require('./routes');
const app = express();
const port = 3000;

const db = require('./config/db');

//Connect to DB
db.connect();

//Template engine
var hbs = handlebars.create({
  extname: 'hbs', 
  helpers: {
    sum: (a,b) => a + b
  }
});

//app.use(express.static('./src/resources/public'));

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources','views'));


app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'));

//HTTP logger
  //app.use(morgan('combined'))

//Route
route(app);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
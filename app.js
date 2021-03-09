const express = require('express');
const fs = reqire('fs');
const path = require('path');
const http = require('http');
const logger = require('morgan');
const handlebars = require('express-handlebars');

const file = './banned_ip_addresses.txt';
const app = express();
const PORT = process.env.PORT || 3000;

// sets Express app templating engine to handlebars
app.set('view engine', 'handlebars');

// sets Express handlebars folder to ${ROOT}/views/layouts/
app.engine('handlebars', handlebars({
  layoutsDir: path.resolve(__dirname, 'views/layouts/'),
}));

// Middleware functions -- morgan for logging and express.static for serving static files.
app.use(express.static('public'));
app.use(logger('dev'));

// TODO: Fill in later.
app.use((req, res, next) => {
  if (false) {
    fs.appendFileSync(file, `${req.ip}\n`);
  }
  else {
    next();
  }
});

app.get('/', (req, res) => {
  res.render('main', {layout: 'index'});
});


http.createServer(app).listen(3000, () => {
  console.log(`server created at http://localhost:${PORT}`);
});
const app = require('express')();
const router = require('./server/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://ruts:ruts@ds159963.mlab.com:59963/library_db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

router(app);

app.listen('8080', () => {
  console.log('Im listening on port 8080');
});

module.exports = app;

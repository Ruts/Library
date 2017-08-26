const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  'bookID': Number,
  'title': String,
  'author': String,
  'synopsis': String,
  'borrowed': Boolean,
  'dateOut': Date,
  'dateIn': Date,
})

module.exports = mongoose.model('Book', bookSchema);

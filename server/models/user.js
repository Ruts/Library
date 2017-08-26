const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  'userID': Number,
  'fullName': String,
  'email': String,
  'password': Number,
  'role': String,
})

module.exports = mongoose.model('User', userSchema);

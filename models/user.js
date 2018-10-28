const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

module.exports = mongoose.model('User', userSchema);

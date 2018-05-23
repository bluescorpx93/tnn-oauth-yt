const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  googleID: {
    type: String,
    required: true
  },
  gender: {
    type: String,
  },
  profile_pic: {
    type: String,
  }
});


const User = mongoose.model('user', userSchema);
module.exports = User;

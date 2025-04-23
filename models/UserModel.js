const mongoose = require("mongoose");
const {
  Schema
} = mongoose;

const userSchema = new Schema({
  username: {
    type: String
  },
  googleId: {
    type: String
  },
  email: {
    type: String
  },
  profilePic: {
    type: String
  },
})

const User = mongoose.model("UserModl", userSchema);
module.exports = User;
//passport is Express-compatible authentication middleware for Node.js.
//Passport-Local Mongoose is a Mongoose plugin that simplifies building username and password login with Passport.
//user schema
//username , hashing , salting done automatically by passport


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    //hence only email (username and pwd automatically by passport)
    type: String,
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);

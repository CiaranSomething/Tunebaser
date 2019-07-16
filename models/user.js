var mongoose = require("mongoose");

//Schema setup
var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
});
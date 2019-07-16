var mongoose = require("mongoose");

//Schema setup
var SongSchema = new mongoose.Schema({
    title: String,
    year: Number
});

module.exports = mongoose("Song", SongSchema);
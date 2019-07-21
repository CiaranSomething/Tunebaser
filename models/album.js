var mongoose = require("mongoose");

//Schema setup
var AlbumSchema = new mongoose.Schema({
    title: String,
    yearReleased: Number
});

module.exports = mongoose.model("Album", AlbumSchema);
var mongoose = require("mongoose");

//Schema setup
var ArtistSchema = new mongoose.Schema({
    name: String,
    imageUrl : String
});

module.exports = mongoose.model("Artist", ArtistSchema);
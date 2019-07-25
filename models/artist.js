var mongoose = require("mongoose");

//Schema setup
var ArtistSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    albums: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Album"
    }
});

module.exports = mongoose.model("Artist", ArtistSchema);
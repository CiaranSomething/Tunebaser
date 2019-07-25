var mongoose = require("mongoose");

//Schema setup
var AlbumSchema = new mongoose.Schema({
    title: String,
    yearReleased: Number,
    artworkUrl: String,
    artist: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Artist"
        },
    }
});

module.exports = mongoose.model("Album", AlbumSchema);
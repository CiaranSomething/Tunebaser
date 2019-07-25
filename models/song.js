var mongoose = require("mongoose");

//Schema setup
var SongSchema = new mongoose.Schema({
    title: String,
    trackNumber: Number,
    album: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Artist"
        },
    }
});

module.exports = mongoose("Song", SongSchema);
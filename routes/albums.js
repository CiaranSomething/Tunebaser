var express = require("express");
var router = express.Router({mergeParams: true});
var Artist = require("../models/artist");
var Album = require("../models/album");

//NEW - New album route
router.get("/new", (req, res) => {
    //find artist by id
    Artist.findById(req.params.id, (err, foundArtist) => {
        if(err){
        //can replace with flash message, or an error page
        console.log(err);
        console.log("artist not found when finding albums.");
    } else {
        res.render("albums/new", {artist: foundArtist});
    }
    });
});
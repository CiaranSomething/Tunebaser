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

//CREATE - Create album route
router.post("/", (req, res) => {
    Artist.findById(req.params.id, (err, foundArtist) => {
        if(err){
            console.log(err);
            res.redirect("/artists");
        } else {
            Album.create(req.body.album, (err, album) => {
                if(err){
                    console.log(err);
                } else {
                    album.artist.id = foundArtist._id;
                    album.save();

                    foundArtist.albums.push(album);
                    foundArtist.save();

                    res.redirect("/artists/" + foundArtist._id);
                }
            })
        }
    })
})

//SHOW - Show album route
router.get("/:id", (req, res) => {
    //find album by id
    Album.findById(req.params.id, (err, foundAlbum) => {
        if(err || !foundAlbum){
            console.log(err)
            console.log("Album not found, something fucked up!")
            res.redirect("back")
        } else {
            res.render("albums/show")
        }
    });
});

module.exports = router;
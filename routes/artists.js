var express = require("express");
var router = express.Router({mergeParams: true});
var Artist = require("../models/artist");

//INDEX - Show all artists
router.get("/", (req, res) => {
    //get all artists from the DB
    Artist.find({}, (err, allArtists) => {
        if(err){
            console.log(err);
        } else {
            //if any variables are to be added to be used in the ejs for the artists index, pass them in this method
            res.render("artists/index", {artists : allArtists});
        }
    });
});

//NEW - the New artist form
router.get("/new", (req, res) => {
    res.render("artists/new");
});

//CREATE - Create the new artist and add to the DB
router.post("/", (req, res) => {

    //get the data from the form
    var artistName = req.body.name;
    var artistImage = req.body.imageUrl;

    //create the new artist object
    var newArtist = {name: artistName, imageUrl: artistImage};

    //add to the db
    Artist.create(newArtist, (err, newlyCreated) => {
        if(err){
            console.log(err);
        } else {
            console.log("new artist successfully added");
            res.redirect("/artists");
        }
    });
});

// SHOW - show more info about an artist
router.get("/:id", (req, res) => {
    //find the artist with provided ID
    Artist.findById(req.params.id, (err, foundArtist) => {
        if(err || !foundArtist){
            //this can be replaced with a flash message eventually
            console.log("artist not found");
            res.redirect("/artists");
        } else {
            //render show template
            res.render("artists/show", {artist: foundArtist});
        }
    });
});

// EDIT route - open the page to edit an existing artist
router.get("/:id/edit", (req, res) => {
    Artist.findById(req.params.id, (err, foundArtist) => {
        if(err){
            console.log(err)
        } else {
            res.render("artists/edit", {artist: foundArtist});
        }
    });
});

// UPDATE - Update an existing artist
router.put("/:id", (req, res) => {
    Artist.findByIdAndUpdate(req.params.id, req.body.artist, function(err, artist){
        if(err){
            //can replace with a flash message later
            console.log(err);
            res.redirect("back");
        } else {
            res.redirect("/artists/" + artist._id);
        }
    });
});

//DELETE - Delete an existing artist
router.delete("/:id", (req, res) => {
    Artist.findByIdAndRemove(req.params.id, (err, artistRemoved) => {
        if(err){
            console.log(err);
        } else {
            res.redirect("/artists/");
        };
    });
});

module.exports = router;
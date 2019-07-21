var express = require("express");
var router = express.Router({mergeParams: true});
var Artist = require("../models/artist");

//INDEX - Show all artists
router.get("/", function(req, res){
    //get all artists from the DB
    
    res.render("artists/index");
});

//NEW - the New artist form
router.get("/new", function(req, res){
    res.render("artists/new");
});

//CREATE - Create the new artist and add to the DB
router.post("/", function(req, res){

    //get the data from the form
    var artistName = req.body.artistName;
    var artistImage = req.body.artistImage;

    //create the new artist object
    var newArtist = {name: artistName, imageUrl: artistImage};

    //add to the db
    Artist.create(newArtist, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            console.log(req.body);
            console.log("new artist successfully added");
            res.redirect("/artists");
        }
    });
});

module.exports = router;
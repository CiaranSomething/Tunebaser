var express = require("express");
var router = express.Router({mergeParams: true});

//INDEX - Show all artists
router.get("/", function(req, res){
    //get all artists from the DB
    
    res.render("artists/index");
});

//NEW - Create a new artist
router.get("/new", function(req, res){
    res.render("artists/new");
});

module.exports = router;
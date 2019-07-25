var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    //method-override - browsers don't support PUT and DELETE requests, so need this
    methodOverride  = require("method-override");

//require route files
var artistRoutes = require("./routes/artists");
var albumRoutes = require("./routes/albums");
var indexRoutes = require("./routes/index");

//connect to database
mongoose.connect("mongodb://localhost/music_database", {useNewUrlParser: true, useFindAndModify: false});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//middleware for passing through things to all templates
// app.use(function(req, res, next){
//     'locals' go here

    // res.locals.currentUser = req.user;
    // res.locals.error = req.flash("error");
    // res.locals.success = req.flash("success");

//     next();
// });

//Use routes
app.use(indexRoutes);
app.use("/artists", artistRoutes);
app.use("/artists/:id/albums", albumRoutes);

//need this so you actually see the site
app.listen(3000, function(){
    console.log("The music database has started!");
});
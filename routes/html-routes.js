// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      // console.log("hello 2222");
      res.redirect("/main");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      // console.log("req.user",req.user);  
      res.redirect("/main");
    }else{
    // console.log("Inside **/login** path");
    // res.redirect("/login");
    res.sendFile(path.join(__dirname, "../public/login.html"));
    }
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/main", isAuthenticated, function(req, res) {
    // console.log("req.user", req.user);
    res.sendFile(path.join(__dirname, "../public/landingPage.html"),req.user);
   // res.send(path.join(__dirname, "../public/landingPage.html"),req);
  });

};

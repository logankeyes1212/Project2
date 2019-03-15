
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  // Redirection for / route, if Authenticated go to Main page else got to Login Page  
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/main");
    }
    else {
      res.sendFile(path.join(__dirname, "../public/login.html"));
    }
  });

  // // Redirection of the /Login to HTML Route for the Login page
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/main");
    }else{

    res.sendFile(path.join(__dirname, "../public/login.html"));
    }
  });

  // Redirection of the /main to HTML Route for the Main page
  app.get("/main", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/landingPage.html"),req.user);
  });


};


// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      // console.log("hello 2222");
      res.redirect("/main");
    }
    else {
      res.sendFile(path.join(__dirname, "../public/login.html"));
    }
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


  // app.get("/workOutTypes", function(req, res) {
  //   db.workOutTypes.findAll({})
  //   .then(function(dbworkOutTypes) {
  //     res.json(dbworkOutTypes);
  //     // console.log(dbworkOutTypes)
      
  
    // Handlebars requires an object to be sent to the index handlebars file.
    

    // 2. Loop through the name, and send those that are pets to the index handlebars file.
  //   var data = {
  //     name: []
  //   };
  
  //   for (var i = 0; i < dbworkOutTypes.length; i += 1) {
  // //     // Get the current animal.
  //     var workOutTypeName = dbworkOutTypes[i].name;
  // console.log(workOutTypeName)
  //     // Check if this animal is a pet.
      
      
        // <option value="1">Running</option>
      
    // }

  // console.log(data)
    // res.render("index", data);
  // });
// });

};

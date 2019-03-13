// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
<<<<<<< HEAD
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    // console.log("/api/login");
    //res.redirect("/login");
    res.json({})
=======
    // res.redirect("/login");
    // res.json(passport.authenticate("local"))
    // console.log("req.user",req.user);

    res.json({success:(req.user?"Yes":"No"),user:req.user});

>>>>>>> 95202416ecfeb083d08f296b84446e0c0da07096
  });

  // app.post("/", function(req, res) {
  //   // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  //   // So we're sending the user back the route to the members page because the redirect will happen on the front end
  //   // They won't get this or even be able to access this page if they aren't authed
  //   console.log("hello 111111");
  //   //res.sendFile(path.join(__dirname, "../public/login.html"));
  //    res.redirect("/login");
  // });


  app.post("/api/signup", function(req, res) {
    // console.log(req.body);
    
    db.User.create({
      name:req.body.name,
      email: req.body.email,
      password: req.body.password,
      city: req.body.city,
      state: req.body.state
    }).then(function(result) {
      // console.log("result",result);
      res.redirect("/login");
    });
  });
  app.post("/api/challenge", function(req, res) {
    // console.log(req.body);
    
    db.workOutChallenge.create({
      name: req.body.name,
      goal: req.body.goal,
      challengeDuration: req.body.challengeDuration
     
    }).then(function(challengeResult) {
      console.log("result ", challengeResult);
      res.redirect("/main");
      // res.json(result);
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });


  app.post("/api/workOutTypes", function(req, res) {
    // console.log(req.body);
    
    db.workOutChallenge.create({
      name:req.body.name,

    }).then(function(result) {
      // console.log("result",result);
      //res.redirect("/main");
      res.json(result);
    }).catch(function(err) {
      // console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });
<<<<<<< HEAD

  app.get("/workOutTypes", function(req, res) {
    db.workOutTypes.findAll({})
    .then(function(dbworkOutTypes) {
      res.json(dbworkOutTypes);
      // console.log(dbworkOutTypes)
    });
  });
=======
  
>>>>>>> 95202416ecfeb083d08f296b84446e0c0da07096
  //Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    console.log("routes Logout");
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.post("/api/user_data", function(req, res) {
     console.log("req.params.email", req.body.email);
    db.User.findOne({
      where: {
        email: req.body.email
      }
    }).done(function(userInfo) {
      console.log("userInfo", userInfo.dataValues);
      res.json(userInfo.dataValues);
    });
  });

};

// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var moment = require('moment');



module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // res.redirect("/login");
    // res.json(passport.authenticate("local"))
    // console.log("req.user",req.user);

    res.json({success:(req.user?"Yes":"No"),user:req.user});

  });

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
    
    db.workOutTypes.create({
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

  app.get("/api/workOutTypes", function(req, res) {
    db.workOutTypes.findAll({})
    .then(function(dbworkOutTypes) {
      res.json(dbworkOutTypes);
      // console.log(dbworkOutTypes)
    });
  });
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

  // post api for workout log
  app.post("/api/workOutLog", function(req, res) {
    // console.log(req.body);
    console.log('Logan');
    console.log(req);
    
    db.workOutLog.create({
      
      workOutTypeId:req.body.workOutTypeId,
      workOutDuration:req.body.workOutDuration,
      WorkOutDate:req.body.workOutDate,
      workOutChallengeId:req.body.workOutChallengeId,
      UserId:req.user.id,
      caloriesPerHour: req.body.caloriesPerHour,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
      

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

  // api to pull challenges
  app.get("/api/workOutChallenges", function(req, res) {
    console.log("inside the get challenges");
    db.workOutChallenges.findAll({})
    .then(function(dbworkOutChallenges) {
      //res.json(dbworkOutTypes);
      console.log(dbworkOutChallenges)
    });
  });

};

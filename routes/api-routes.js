// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var UserInfo;


module.exports = function (app) {

  // Using the Passport Authentication process, check if the user is in our database
  app.post("/api/login", passport.authenticate("local"), function (req, res) {

    UserInfo = { user: req.user }
    res.json({ success: (req.user ? "Yes" : "No"), user: req.user });

  });

  // Once the user signup, create the info in the User Table
  app.post("/api/signup", function (req, res) {

    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      city: req.body.city,
      state: req.body.state
    }).then(function (result) {
      res.redirect("/login");
    });
  });

  // Once the user create a new Challenge, add that info in the Challenges Table
  app.post("/api/challenge", function (req, res) {
    db.workOutChallenge.create({
      name: req.body.name,
      goal: req.body.goal,
      challengeDuration: req.body.challengeDuration
    }).then(function (challengeResult) {
      res.redirect("/main");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  });

  // Get all the members of Level up app for displaying in the UI
  app.get("/api/allUsers", function (req, res) {
    db.User.findAll({})
      .then(function (users) {
        // console.log(challenges);
        res.json(users);
      });
  });

  // Get all the members based on the user City
  app.get("/api/userByCity/:userCity", function (req, res) {
    db.User.findAll({
      where: {
        city: req.params.userCity,
      },
      order: [
        ['city', 'ASC'],
      ],
    })
      .then(function (users) {
        res.json(users);
      });
  });

  // Get all the members based on the user State
  app.get("/api/userByState/:userState", function (req, res) {
    db.User.findAll({
      where: {
        state: req.params.userState,
      },
      order: [
        ['state', 'ASC'],
      ],
    })
      .then(function (users) {
        res.json(users);
      });
  });


  // Create new work out types to add it to Database
  app.post("/api/workOutTypes", function (req, res) {
     db.workOutTypes.create({
      name: req.body.name,

    }).then(function (result) {

      res.json(result);
    }).catch(function (err) {
      res.json(err);
    });
  });

  // Get all the user Challenges to display in the front end
  app.get("/api/challenges", function (req, res) {
    db.workOutChallenge.findAll({})
      .then(function (challenges) {
        // console.log(challenges);
        res.json(challenges);
      });
  });

  // Get all work out types to display it to the user
  app.get("/api/workOutTypes", function (req, res) {
    db.workOutTypes.findAll({})
      .then(function (dbworkOutTypes) {
        res.json(dbworkOutTypes);
        // console.log(dbworkOutTypes)
      });
  });

  //Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    console.log("routes Logout");
    res.redirect("/");
  });

  // Get all users work out Logs to display it to the user
  app.get("/api/workOutLogs", function (req, res) {
    console.log("get api workoutlogs")

    console.log(UserInfo)
    db.workOutLog.findAll({
      where: {
        UserId: UserInfo.user.id
      }
    }).then(function (dbworkoutlogs) {
      res.json(dbworkoutlogs);
      console.log(dbworkoutlogs)
    });
  });

  // Route for getting user data 
  app.post("/api/user_data", function (req, res) {
    console.log("req.params.email", req.body.email);
    db.User.findOne({
      where: {
        email: req.body.email
      }
    }).done(function (userInfo) {
      console.log("userInfo", userInfo.dataValues);
      res.json(userInfo.dataValues);
    });
  });

  // post api for workout log
  app.post("/api/workOutLog", function (req, res) {
    // console.log(req.body);
    console.log('Logan');
    console.log(req);

    db.workOutLog.create({

      workOutTypeId: req.body.workOutTypeId,
      workOutDuration: req.body.workOutDuration,
      WorkOutDate: req.body.workOutDate,
      caloriesPerHour: req.body.caloriesPerHour,
      workOutChallengeId: req.body.workOutChallengeId,
      UserId: req.user.id,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,


    }).then(function (result) {
      res.json(result);
    }).catch(function (err) {
      res.json(err);
    });
  });

  // api to pull challenges
  app.get("/api/workOutChallenges", function (req, res) {
    console.log("inside the get challenges");
    db.workOutChallenges.findAll({})
      .then(function (dbworkOutChallenges) {
        //res.json(dbworkOutTypes);
        console.log(dbworkOutChallenges)
      });
  });

};

// import moment = require("moment");

$(document).ready(function () {

    var loaded =false;
    $("#createChallenge").click(function () {
        event.preventDefault();
        var challenge = {
            name: $("#challengeName").val().trim(),
            goal: $("#goal").val().trim(),
            challengeDuration: $("#duration").val().trim(),
          
        }
        if (!challenge.name || !challenge.goal || !challenge.challengeDuration) {
            alert("Please fill in all the details for challenge");
            return;
        }  
        else if(!challenge.name) {
            showErrorMsg("#challengeNameError","Please fill in a Name for your Challenge");
            return false;
          }
        else if ((challenge.goal < 1) || (challenge.goal > 999999)) {
            showErrorMsg("#challengeGoalError","Please enter a number between 1-999999");
            return false;
          }
        else if ((challenge.challengeDuration < 1) || (challenge.challengeDuration > 1825)) {
            showErrorMsg("#challengeDurError","Please enter a number between 1-1825");
            return false;
          }
        
        else {
            createChallenge(challenge.name, challenge.goal, challenge.challengeDuration);
        }

        let page = "#challenges"
        location.assign(page);
    });

    if (!loaded) {
        // console.log("loaded", loaded);
        $.get("/api/challenges").then(function (results) {
            // console.log("loaded", results);
            // var todayDate = moment().format("DD-MM-YYYY, h:mm");
            
            for (var index in results) {
                
                var createdDate = moment(results[index].createdAt);
                
                // console.log("results[index].challengeDuration",results[index].challengeDuration);
                var progressDate = createdDate.add(results[index].challengeDuration, 'days');
                console.log("progressDate",progressDate);
                var timeLeft = ((moment(progressDate, "HH:mm").diff(moment(), "hours"))/24).toFixed(0) ; 

                var tableRow = $("<tr>");
                tableRow.append("<td> " + results[index].name+ "</td>"); 
                tableRow.append("<td> " + results[index].challengeDuration + "</td>");
               tableRow.append("<td> " + timeLeft + " Days</td>");
                $("#challengeContents").append(tableRow);
            }
            loaded = true;

        });
    }
    function createChallenge(name, goal, challengeDuration) {
        // console.log("name ", name);
        $.post("/api/challenge", {
            name: name,
            goal: goal,
            challengeDuration: challengeDuration
            })
        .done(function (data) {
            // console.log("data ", data);
            window.location.reload(data);
        })
    }

    // $.ajax({
    //     method: "GET",
    //     url: "/api/workOutChallenges"

    // }).then(function (data) {
    //     console.log(data)
    //     //options(data)
    // });

    function showErrorMsg(htmlId,errorMsg)
    {
      console.log("htmlId",htmlId);
      console.log("errorMsg",errorMsg);
      $(htmlId).html(errorMsg);
      $(htmlId).show();
      setTimeout(function(){ $(htmlId).hide(); }, 3000);
    }

    

});




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
        } else {
            createChallenge(challenge.name, challenge.goal, challenge.challengeDuration);
        }

      
    });

    if (!loaded) {
        console.log("loaded", loaded);
        $.get("/api/challenges").then(function (results) {
            // $("#challengeContents")
            for (var index in results) {
                var tableRow = $("<tr>");
                tableRow.append("<td> " + results[index].name + "</td>");
                tableRow.append("<td> " + results[index].goal + "</td>");
                tableRow.append("<td> " + results[index].challengeDuration + "</td>");
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



});




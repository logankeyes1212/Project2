$(document).ready(function () {

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
    })


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
            // If there's an error, log the error
        })
        // .catch(function (err) {
        //     console.log(err);
        // });
    }

    // $.ajax({
    //     method: "GET",
    //     url: "/api/workOutChallenges"

    // }).then(function (data) {
    //     console.log(data)
    //     //options(data)
    // });



});




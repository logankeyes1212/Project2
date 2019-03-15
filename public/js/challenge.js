$(document).ready(function () {

    var loaded = false;
    $("#createChallenge").click(function () {
        event.preventDefault();

        // Get the Challenge infoemation from ths user and do some validations
        var challenge = {
            name: $("#challengeName").val().trim(),
            goal: $("#goal").val().trim(),
            challengeDuration: $("#duration").val().trim(),
        }
        if (!challenge.name || !challenge.goal || !challenge.challengeDuration) {
            alert("Please fill in all the details for challenge");
            return;
        }
        else if (!challenge.name) {
            showErrorMsg("#challengeNameError", "Please fill in a Name for your Challenge");
            return false;
        }
        else if ((challenge.goal < 1) || (challenge.goal > 999999)) {
            showErrorMsg("#challengeGoalError", "Please enter a number between 1-999999");
            return false;
        }
        else if ((challenge.challengeDuration < 1) || (challenge.challengeDuration > 1825)) {
            showErrorMsg("#challengeDurError", "Please enter a number between 1-1825");
            return false;
        }

        else {
            // If all the validations are passed, then do Ajax call to create the challenge under user
            createChallenge(challenge.name, challenge.goal, challenge.challengeDuration);
        }

        let page = "#challenges"
        location.assign(page);
    });

    if (!loaded) {
        // If all the validations are passed, then do Ajax call to create the challenge under user
        $.get("/api/challenges").then(function (results) {

            for (var index in results) {
                
                // Get the created At data from Table and also the duration

                var createdAt = moment().format(results[index].createdAt, 'MMMM Do YYYY, hh:mm a');
                
                // Use both to get the Goal Deadline 
                var goalDeadline = moment(createdAt).add(results[index].challengeDuration, 'days').format('MMMM Do YYYY, hh:mm a');
                console.log("goalDeadline=", goalDeadline);

                // Then calculate the time Left to finish the goal
                var timeDiff = moment(goalDeadline, 'MMMM Do YYYY, hh:mm a').endOf().fromNow();
                console.log("timeDiff=", timeDiff);

                // Display the info in the table
                var tableRow = $("<tr>");
                tableRow.append("<td> " + results[index].name + "</td>");
                tableRow.append("<td> " + results[index].goal + "</td>");
                // tableRow.append("<td> " + results[index].challengeDuration + "</td>");
                tableRow.append("<td> " + timeDiff + "</td>");
                $("#challengeContents").append(tableRow);
            }
            loaded = true;

        });
    }

    // Ajax call to add new challenges for that user
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

    // Function to show Error Message for the validations
    function showErrorMsg(htmlId, errorMsg) {
        console.log("htmlId", htmlId);
        console.log("errorMsg", errorMsg);
        $(htmlId).html(errorMsg);
        $(htmlId).show();
        setTimeout(function () { $(htmlId).hide(); }, 3000);
    }


});




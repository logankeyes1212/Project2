$(document).ready(function () {
    console.log('hello');


    $.ajax({
        method: "GET",
        url: "/api/workOutLogs"

    }).then(function (data) {
        console.log(data)
        console.log("mike")
        createWorkOutLogs(data)
    });

    function createWorkOutLogs(dbworkoutlogs) {
        console.log("in the createWorkoutOutLogs function ", dbworkoutlogs)

        $("#createLogs").empty();
        var totalCalories = 0
        for (i = 0; i < dbworkoutlogs.length; i++) {

            totalCalories += parseInt(dbworkoutlogs[i].caloriesPerHour);
            $("#createLogs").append(

                '<tr> <td>' + dbworkoutlogs[i].WorkOutDate + '</td>' +
                '<td>' + dbworkoutlogs[i].workOutDuration + ' Minutes</td>' +
                '<td>' + dbworkoutlogs[i].caloriesPerHour + ' Calories</td></tr>'
            );

        };
        $("#totalCalories").append(

            '<h3>' + 'Total Calories Burned: ' + totalCalories + '</h3>'

        );

        if (totalCalories < 20000) {
            $("#levelImage1").html('<img src="./img/lvl1.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage2").html('<img src="./img/lvl1.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage3").html('<img src="./img/lvl1.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage4").html('<img src="./img/lvl1.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#currentLevel").html("<p>Your Current Progress: Level 1"+"</p>");
        } else if (totalCalories < 40000) {
            $("#levelImage1").html('<img src="./img/lvl2.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage2").html('<img src="./img/lvl2.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage3").html('<img src="./img/lvl2.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage4").html('<img src="./img/lvl2.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#currentLevel").html("<p>Your Current Progress: Level 2"+"</p>");
        } else if (totalCalories < 60000) {
            $("#levelImage1").html('<img src="./img/lvl3.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage2").html('<img src="./img/lvl3.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage3").html('<img src="./img/lvl3.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage4").html('<img src="./img/lvl3.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#currentLevel").html("<p>Your Current Progress: Level 3"+"</p>");
        } else if (totalCalories < 80000) {
            $("#levelImage1").html('<img src="./img/lvl4.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage2").html('<img src="./img/lvl4.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage3").html('<img src="./img/lvl4.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage4").html('<img src="./img/lvl4.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#currentLevel").html("<p>Your Current Progress: Level 4"+"</p>");
        } else if (totalCalories < 100000) {
            $("#levelImage1").html('<img src="./img/lvl5.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage2").html('<img src="./img/lvl5.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage3").html('<img src="./img/lvl5.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage4").html('<img src="./img/lvl5.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#currentLevel").html("<p>Your Current Progress: Level 5"+"</p>");
        } else if (totalCalories < 120000) {
            $("#levelImage1").html('<img src="./img/lvl6.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage2").html('<img src="./img/lvl6.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage3").html('<img src="./img/lvl6.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage4").html('<img src="./img/lvl6.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#currentLevel").html("<p>Your Current Progress: Level 6"+"</p>");
        } else if (totalCalories < 140000) {
            $("#levelImage1").html('<img src="./img/lvl7.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage2").html('<img src="./img/lvl7.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage3").html('<img src="./img/lvl7.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage4").html('<img src="./img/lvl7.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#currentLevel").html("<p>Your Current Progress: Level 7"+"</p>");
        } else if (totalCalories < 160000) {
            $("#levelImage1").html('<img src="./img/lvl8.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage2").html('<img src="./img/lvl8.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage3").html('<img src="./img/lvl8.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage4").html('<img src="./img/lvl8.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#currentLevel").html("<p>Your Current Progress: Level 8"+"</p>");
        } else if (totalCalories < 180000) {
            $("#levelImage1").html('<img src="./img/lvl9.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage2").html('<img src="./img/lvl9.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage3").html('<img src="./img/lvl9.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage4").html('<img src="./img/lvl9.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#currentLevel").html("<p>Your Current Progress: Level 9"+"</p>");
        } else if (totalCalories < 1000000) {
            $("#levelImage1").html('<img src="./img/lvl10.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage2").html('<img src="./img/lvl10.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage3").html('<img src="./img/lvl10.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#levelImage4").html('<img src="./img/lvl10.png" alt="currentRank" class="rankImage">' + '</img>');
            $("#currentLevel").html("<p>Your Current Progress: Level 10"+"</p>");
        }


    }


});



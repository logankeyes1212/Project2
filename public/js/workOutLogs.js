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

    }


});



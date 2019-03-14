//var moment = require('moment');
$(document).ready(function () {
    
    var workOutId = []

    $('#workOutTypesDropDown').formSelect();
    $('#workOutTypesDropDown').on('contentChanged', function () {
        $(this).formSelect();
    });

    $.ajax({
        method: "GET",
        url: "/api/workOutTypes"

    }).then(function (data) {
        // console.log("mike")
        options(data)
    });


    //function for workouts list
    function options(dbworkOutTypes) {
        console.log("in the options function ", dbworkOutTypes)
        $("#workOutTypesDropDown").empty();
        $("#workOutTypesDropDown").append("<option value='' disabled selected>Choose your workout</option>")

        for (i = 0; i < dbworkOutTypes.length; i++) {
            $("#workOutTypesDropDown").append(
                '<option value="' + dbworkOutTypes[i].id + '">' + dbworkOutTypes[i].name + '</option>'
            )
        }
        $("#workOutTypesDropDown").trigger('contentChanged');
        $(document).on("change", "#workOutTypesDropDown", function () {
            id = $(this).val();
            workOutId.push(id)
        });
    }

    // on click of submitting the workout you performed into workoutlog
    $("#workOutType").on("click", function () {
        event.preventDefault();

        workOutId = parseInt(workOutId);
        if (!workOutId) {
            alert("Please select a work out type");
            return;
        } else {
            newLog();
        }

        // function to create the log object.
        function newLog() {
            var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
            const workoutdate = $("#workoutDay").val().trim();
            //workoutdate = moment(workoutdate).format("MM-DD-YYYY");
            var workOutLog = {
                workOutTypeId: workOutId,
                workOutDuration: $("#exerciseTime").val().trim(),
                workOutDate: workoutdate,
                caloriesPerHour: 600,
                workOutChallengeId: workOutId,
                UserId: 2
            }
            // call the log function to post the log
            logStart(workOutLog);
        }
        let page = "#workout"
        location.assign(page);
    })
    // function to post workout log
    function logStart(workOutLog) {
        console.log(workOutLog);
        $.post("/api/workOutLog", workOutLog).done(function (data) {
            console.log('Workout log successfully saved');
            //console.log(data);
        });
    }
});
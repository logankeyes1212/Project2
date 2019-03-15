
$(document).ready(function () {

    var selectedWorkOut;
    
    $('#workOutTypesDropDown').formSelect();
    $('#workOutTypesDropDown').on('contentChanged', function () {
        $(this).formSelect();
    });

    // Get all workout types from API call
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
            var id = $(this).val();
            id = parseInt(id);
            let caloriesPerHour = 0;
            for (i = 0; i < dbworkOutTypes.length; i++) {
                if (parseInt(dbworkOutTypes[i].id) === id) {
                    caloriesPerHour = dbworkOutTypes[i].caloriesPerHour;
                }
            }
            selectedWorkOut = { id: id, caloriesPerHour: caloriesPerHour };
        });
    }

    // on click of submitting the workout you performed into workoutlog
    $("#workOutType").on("click", function () {
        event.preventDefault();

        var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
        var userid = userInfo.user.id;

        const workOutId = parseInt(selectedWorkOut.id);
        if (!workOutId) {
            alert("Please select a work out type");
            return;
        } else {
            newLog();
        }

        // function to create the log object.
        function newLog() {
            const entereddate = $("#workoutDay").val().trim();
            console.log(entereddate);
            const workoutdate = moment(entereddate, "MMM-DD-YYYY");
            var workOutDurationTime = parseInt($("#exerciseTime").val().trim());
            console.log("duration " + workoutdate);
            var workOutLog = {
                workOutTypeId: workOutId,
                workOutDuration: workOutDurationTime,
                workOutDate: workoutdate.toISOString(),
                caloriesPerHour: selectedWorkOut.caloriesPerHour / 60 * workOutDurationTime,
                workOutChallengeId: 1,
                UserId: userid
            }; console.log("derre" + selectedWorkOut.caloriesPerHour);
            // call the log function to post the log
            logStart(workOutLog);
            window.location.reload();
        }
        let page = "#workout"
        location.assign(page);
    });

    // function to post workout log
    function logStart(workOutLog) {
        console.log(workOutLog);
        $.post("/api/workOutLog", workOutLog).done(function (data) {
            console.log('Workout log successfully saved');
            //console.log(data);
        });
    }
});
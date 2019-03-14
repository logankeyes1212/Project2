
$(document).ready(function () {
    
    var workOutArray= []

    $('#workOutTypesDropDown').formSelect();
    $('#workOutTypesDropDown').on('contentChanged', function () {
        $(this).formSelect();
    });

    $.ajax({
        method: "GET",
        url: "/api/workOutTypes"

    }).then(function (data) {
        console.log(data)
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
            let caloriesPerHour =0;
            for(i=0; i<dbworkOutTypes.length; i++){
                if(parseInt(dbworkOutTypes[i].id) === id){
                    caloriesPerHour = dbworkOutTypes[i].caloriesPerHour;
                    
                }
            }
            workOutArray.push({id:id,caloriesPerHour:caloriesPerHour})
        });
    }

    // on click of submitting the workout you performed into workoutlog
    $("#workOutType").on("click", function () {
        event.preventDefault();
        const workOutId = parseInt(workOutArray[0].id);
        if (!workOutId) {
            alert("Please select a work out type");
            return;
        } else {
            newLog();
        }

        // function to create the log object.
        function newLog() {
            const entereddate = $("#workoutDay").val().trim();
            const workoutdate = moment(entereddate,"MM-DD-YYYY");
            var workOutLog = {
                workOutTypeId: workOutId,
                workOutDuration: $("#exerciseTime").val().trim(),
                workOutDate: workoutdate.toISOString(),
                caloriesPerHour: workOutArray[0].caloriesPerHour,
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
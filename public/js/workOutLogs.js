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
    
    for (i=0; i<dbworkoutlogs.length; i++){
        $("#createLogs").append(

            '<tr> <td>'+dbworkoutlogs[i].workOutTypeId+ '</td>'+
            '<td>'+dbworkoutlogs[i].workOutDuration+' Minutes</td>'+
            '<td>'+dbworkoutlogs[i].caloriesPerHour+' Calories</td></tr>'
            
        )};
    


}


});



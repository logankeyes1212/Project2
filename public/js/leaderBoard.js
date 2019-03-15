
$(document).ready(function () {
    var loaded = false;
    var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    var userCity = userInfo.user.city;
    var userState = userInfo.user.state;
    var userId = userInfo.user.id;

    if (!loaded) {
        // console.log("loaded", loaded);
        $.get("/api/allUsers").then(function (results) {
            displayResults("#allUsersInfo", results);
        });


        $.get("/api/userByState/"+userState).then(function (results) {
            displayResults("#userByState", results);
        });

        $.get("/api/userByCity/"+userCity).then(function (results) {
            displayResults("#userByCity", results);
        });

        loaded = true;
    }


    function displayResults(htmlId, results) {
        // console.log("results",results);
        for (var index in results) {

            if (results[index].id != userId) {
                var tableRow = $("<tr>");
                tableRow.append("<td> " + results[index].name + "</td>");
                tableRow.append("<td> " + results[index].city + "</td>");
                tableRow.append("<td> " + results[index].state + "</td>");
                $(htmlId).append(tableRow);
            }
        }
    }
});
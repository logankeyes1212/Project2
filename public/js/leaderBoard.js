
$(document).ready(function () {

    var loaded = false;
    // Get the user info from Session storage
    var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    var userCity = userInfo.user.city;
    var userState = userInfo.user.state;
    var userId = userInfo.user.id;

    // If the page is not loaded yet, then do Ajax calls
    if (!loaded) {
        // Call the Ajax function to get all the Members information to dispay in the page
        $.get("/api/allUsers").then(function (results) {
            displayResults("#allUsersInfo", results);
        });

        // Call the Ajax function to get all the Members who is from user State to dispay in the page
        $.get("/api/userByState/" + userState).then(function (results) {
            displayResults("#userByState", results);
        });

        // Call the Ajax function to get all the Members who is from user City to dispay in the page
        $.get("/api/userByCity/" + userCity).then(function (results) {
            displayResults("#userByCity", results);
        });

        loaded = true;
    }

    // Once we get the information, display them in the table rows under the respective tabs
    function displayResults(htmlId, results) {
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
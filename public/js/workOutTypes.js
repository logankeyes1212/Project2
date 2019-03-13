$(document).ready(function () {

    $("#workOutType").click(function () {
        event.preventDefault();
        var workOutType = {
            name: $("#workOutName").val().trim(),       
        } 
        if (!workOutType.name) {
            alert("Please select a work out type");
            return;
        } else {
            createChallenge(workOutType.name);
        }
    })


    function createChallenge(name) {
        // console.log("name ", name);
        $.post("/api/workOutTypes", {
            name: name,
           
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
});






$(document).ready(function () {
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
    // $("#workOutType").click(function () {
    //     event.preventDefault();
    //     var workOutType = {
    //         name: $("#workOutName").val().trim(),       
    //     } 
    //     if (!workOutType.name) {
    //         alert("Please select a work out type");
    //         return;
    //     } else {
    //         workOutTypes(workOutType.name);
    //     }

    // })
    // workOutTypesDropDown

    // var inputNewOption = $(
    //     [
    //       '<option value="' + dbworkOutTypes[i].id +'">'+dbworkOutTypes[i].name+'</option>'
    //     ].join("")
    //   );
    //   console.log(inputNewOption)


    // function workOutTypes(name) {
    //     // console.log("name ", name);
    //     $.post("/api/workOutTypes", {
    //         name: name,

    //         })
    //     .done(function (data) {
    //         // console.log("data ", data);
    //         window.location.reload(data);
    //         // If there's an error, log the error
    //     })
    //     // .catch(function (err) {
    //     //     console.log(err);
    //     // });
    // }
});





function options(dbworkOutTypes) {
    console.log("in the options function", dbworkOutTypes)
    $("#workOutTypesDropDown").empty();
    $("#workOutTypesDropDown").append("<option value='' disabled selected>Choose your workout</option>")
    for (i = 0; i < dbworkOutTypes.length; i++) {
        $("#workOutTypesDropDown").append(
            '<option value="' + dbworkOutTypes[i].id + '">' + dbworkOutTypes[i].name + '</option>'
        )
    }
    $("#workOutTypesDropDown").trigger('contentChanged');
}
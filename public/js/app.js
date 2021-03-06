$(document).ready(function () {
  M.AutoInit(); //this should auto intiate everything needed but rest of code is in place just in case
  // SIDE NAV FUNCTIONS
  $('.tabs').tabs();
  $('.sidenav').sidenav();
  $('.datepicker').datepicker();

  //modal
  $('.modal').modal();

  var elem = document.querySelector('.sidenav');
  var instance = M.Sidenav.init(elem, {
    onOpenStart: function () {
    },
    onCloseEnd: function () {
      $('.tabs').tabs();
    }
  });

  M.updateTextFields();

  $('select').formSelect();

  // If clicked on the Logout, do Ajax call for Logout and also clear Session storage
  $('.logoutBtn').click(function () {
    event.preventDefault();
    console.log("HTML logout");
    $.get("/logout").then(function (results) {
      // console.log("userInfo",results);
      sessionStorage.removeItem('userInfo');
      sessionStorage.clear();
      window.location.reload(results);
    });
  });


  var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  // console.log ("userInfo",userInfo);  
  // Display USer name from Session to the page
  if (userInfo) {
    $("#userName").text(userInfo.user.name);
    $("#userName2").text("Welcome " + userInfo.user.name);
  }

});



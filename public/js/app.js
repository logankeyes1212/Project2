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
    
    $('#logoutBtn').click(function () {
      event.preventDefault();
      console.log("HTML logout");
      $.get("/logout").then(function (results) {
        // console.log("userInfo",results);
        sessionStorage.removeItem('userInfo');
        sessionStorage.clear();
        window.location.reload(results);
        // if (user.success == "Yes") {
        //   // console.log()
        //   
        // 
        // }
      });
    });
  


// instance.updateTabIndicator();
// instance.select('.tabs');
var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
// console.log ("userInfo",userInfo);  
if(userInfo)
{
  $("#userName").text(userInfo.user.name);
  $("#userName2").text(userInfo.user.name);
}

});



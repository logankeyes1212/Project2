$(document).ready(function () {

  // SIDE NAV FUNCTIONS
  $('.tabs').tabs();
  $('.sidenav').sidenav();
  // $(".button-collapse").sideNav({
  //   closeOnClick: false
  // });


  var elem = document.querySelector('.sidenav');
  var instance = M.Sidenav.init(elem, {
    onOpenStart: function () {
    },
    onCloseEnd: function () {
      $('.tabs').tabs();
    }
  });
  // instance.updateTabIndicator();
  // instance.select('.tabs');

  $(document).ready(function(){
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
  });




  //create challange function
  $("#createChallenge").click(function () {
    event.preventDefault();
    var challenge = {
      name: $("#challengeName").val().trim(),
      goal: $("#goal").val().trim(),
      challengeDuration: $("#duration").val().trim(),
    }
  });
// instance.updateTabIndicator();
// instance.select('.tabs');
var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
// console.log ("userInfo",userInfo);  
if(userInfo)
{
  $("#userName").text(userInfo.user.name);
}

});



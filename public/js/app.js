$(document).ready(function () {

  // SIDE NAV FUNCTIONS
  $('.tabs').tabs();
  $('.sidenav').sidenav();
  $('.datepicker').datepicker();
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
console.log ("userInfo",userInfo);  
$("#userName").text(userInfo.user.name);

});



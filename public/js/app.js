$(document).ready(function(){
  $('.tabs').tabs();
  $('.sidenav').sidenav();
  $(".dropdown-trigger").dropdown();
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
  
  });


 
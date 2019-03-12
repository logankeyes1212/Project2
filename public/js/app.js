$(document).ready(function(){
  $('.tabs').tabs();
  $('.sidenav').sidenav();
  $(".dropdown-trigger").dropdown();



  var instance = M.Tabs.getInstance(elem);

  instance.select('tab_id');

  instance.updateTabIndicator();
});
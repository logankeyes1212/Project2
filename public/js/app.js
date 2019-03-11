$(document).ready(function(){
    $('.tabs').tabs();
  });

  var instance = M.Tabs.getInstance(elem);

  
  instance.select('tab_id');

  instance.updateTabIndicator();
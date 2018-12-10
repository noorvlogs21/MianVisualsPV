//matINIT - FAB
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left',
      hoverEnabled: false
    });
  });
 
 // INDEX BUTTON CONTROL
 $('#mvLogo').click(function() {
  changeScreen('homepage');
}); 

 $('.login').click(function() {
  changeScreen('login');
}); 

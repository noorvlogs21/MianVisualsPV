//matINIT - FAB
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left',
      hoverEnabled: false
    });
  });
 
// hide log out button on load
  $('#logoutBut').hide();

 // INDEX BUTTON CONTROL
 $('#mvLogo').click(function() {
  changeScreen('homepage');
  console.log('homepage Loaded Successfully');
}); 
 $('.login').click(function() {
  changeScreen('login');
  console.log('login Loaded Successfully');
}); 

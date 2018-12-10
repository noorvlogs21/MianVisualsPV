//Hide certain elements on load
$('#regSection').hide(); // hide the register form
$('#loginForm').hide(); // hide the login button when on login form

$( "#regForm" ).click(function() {
    $('#loginSection').hide();
    $('#regForm').hide();
    $('#regSection').fadeIn();
    $('#loginForm').fadeIn();
  });

$( "#loginForm" ).click(function() {
    $('#regSection').hide();
    $('#loginForm').hide();
    $('#loginSection').fadeIn();
    $('#regForm').fadeIn();
  });

  //matINIT - tooltips
  $(document).ready(function(){
    $('.tooltipped').tooltip();
  });
        
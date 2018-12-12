//Changing the css when hovering over the services
$("#serviceMedia").hover(function () {
    // adding underline css to serviceLink
    $("#serviceMedia").children(".serviceLink").css({
        "text-decoration": "underline"
    });
    // adding animateCSS to the title when hovered on the full section
    $('#serviceMedia').children(".serviceTitle").addClass('animated pulse infinite');
});
$("#serviceWD").hover(function () {
    // adding underline css to serviceLink
    $("#serviceWD").children(".serviceLink").css({
        "text-decoration": "underline"
    });
    // adding animateCSS to the title when hovered on the full section
    $('#serviceWD').children(".serviceTitle").addClass('animated pulse infinite');
});

//original styles when not hovered over
$("#serviceMedia").mouseleave(function () {
    // removing the underline from serviceLink
    $("#serviceMedia").children(".serviceLink").css({
        "text-decoration": "none"
    });
    // removing the animate class
    $('#serviceMedia').children(".serviceTitle").removeClass('animated pulse infinite');
});
$("#serviceWD").mouseleave(function () {
    // removing the underline from serviceLink
    $("#serviceWD").children(".serviceLink").css({
        "text-decoration": "none"
    });
    // removing the animate class
    $('#serviceWD').children(".serviceTitle").removeClass('animated pulse infinite');
});
//Changing the css when hovering over the services
$("#serviceMedia").hover(function () {
    $("#serviceMedia").css({
        "text-decoration": "underline"
    });
    $("#serviceWD").css({
        "text-decoration": "line-through"
    });
});
$("#serviceWD").hover(function () {
    $("#serviceWD").css({
        "text-decoration": "underline"
    });
    $("#serviceMedia").css({
        "text-decoration": "line-through"
    });
});
//original styles when not hovered over
$("#serviceMedia").mouseleave(function () {
    $("#serviceMedia").css({
        "text-decoration": "none"
    });
    $("#serviceWD").css({
        "text-decoration": "none"
    });
});
$("#serviceWD").mouseleave(function () {
    $("#serviceWD").css({
        "text-decoration": "none"
    });
    $("#serviceMedia").css({
        "text-decoration": "none"
    });
});
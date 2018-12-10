/*CORE FUNCTIONS*/

// ---- Change html viws ---- //
function changeScreen(mainScreen) {

    //the screen to goto
    var mainScreen;

    console.log("Screen Requested: " + mainScreen);
    switch (mainScreen) {

        case 'homepage': //html page to load
            $(".container").empty(); // empty current screen
            getPartialView(mainScreen); // load new screen
            break;
            case 'login': // login PV
            $(".container").empty();
            getPartialView(mainScreen);
            break;


    } //close switch
} //close changeScreen function

function getPartialView(screen) {

    var contentLoaded;

    console.log("Retrieving " + screen + " From Server");

    //Get HTML via a promise
    var myHeaders = new Headers();
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };
    var myRequest = new Request('partialViews/' + screen + '.html', myInit);
    fetch(myRequest).then(function (response) {
        return response.text();
    }).then(function (data) {
        $(".container").append(data);
        contentLoaded = true;

    });
} //close getPartialView function

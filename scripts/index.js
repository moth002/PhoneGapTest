// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        //document.addEventListener('pause', onPause.bind(this), false);
        //document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        window.plugins.pinDialog.prompt("Please enter your 4 digit pin", callback, "Login", ["OK", "Cancel"]);

    };

    function fnError() {
        // TODO: This application has been suspended. Save application state here.
    };

    function fnSuccess() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    function callback(results) {
        if (results.buttonIndex == 1) {
            // OK clicked, show input value
            window.location = "./Areas/Nurse/731632.html";
            window.plugins.toast.showShortCenter("          Welcome\nMohammed Othman", fnSuccess, fnError);
        }
        if (results.buttonIndex == 2) {
            // Cancel clicked
            window.plugins.pinDialog.prompt("Please enter your 4 digit pin", callback, "Login", ["OK", "Cancel"]);
        }
    };
})();
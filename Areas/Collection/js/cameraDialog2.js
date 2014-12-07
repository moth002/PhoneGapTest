(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function success(resultArray) {

        //alert("Scanned ");

        window.location = "index3.html";

    }

    function failure(error) {
        alert("Failed: " + error);
    }


    function onDeviceReady() {
        cordova.exec(success, failure, "ScanditSDK", "scan",
                     ["wgCwJi12EeSFOCujwS5JdgPvTvSmg4hC4oTeUBBEP2Q",
                      {
                          "beep": true,
                          "1DScanning": true,
                          "2DScanning": true,
                          "inverseRecognition": true,
                          "upce": false
                      }]);
    };

})();
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function success(resultArray) {

        //alert("Scanned " + resultArray[0] + " code: " + resultArray[1]);

        window.location = "index2.html?oId=" + resultArray[0];

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
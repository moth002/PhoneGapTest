(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function success(resultArray) {

        //alert("Scanned " + resultArray[0] + " code: " + resultArray[1]);

        //window.location = "index2.html";

        //localStorage.removeItem("item1");
        //localStorage.removeItem("item2");
        //localStorage.removeItem("item3");

        if (resultArray[0].indexOf("DB0010H001") != -1) {
            localStorage.setItem("item1", "checked");
        }
        if (resultArray[0].indexOf("DB0010E002") != -1) {
            localStorage.setItem("item2", "checked");
        }
        if (resultArray[0].indexOf("DB0010E003") != -1) {
            localStorage.setItem("item3", "checked");
        }

        window.location = "./indexnew.html";
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